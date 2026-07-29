/**
 * Path transformation utilities for IDE installer standardization
 *
 * Provides utilities to convert hierarchical paths to flat naming conventions.
 *
 * DASH-BASED NAMING (new standard):
 * - Agents: acl-agent-module-name.md (with acl-agent- prefix)
 * - Workflows/Tasks/Tools: acl-module-name.md
 *
 * Example outputs:
 * - cis/agents/storymaster.md → acl-agent-cis-storymaster.md
 * - acl/workflows/plan-project.md → acl-acl-plan-project.md
 * - acl/tasks/create-story.md → acl-acl-create-story.md
 * - core/agents/brainstorming.md → acl-agent-brainstorming.md (core agents skip module name)
 * - standalone/agents/fred.md → acl-agent-standalone-fred.md
 */

const AGENT_SEGMENT = 'agents';

// ACL installation folder name - centralized constant for all installers
const ACL_FOLDER_NAME = '_acl';

/**
 * Convert hierarchical path to flat dash-separated name (NEW STANDARD)
 * Converts: 'acl', 'agents', 'pm' → 'acl-agent-acl-pm.md'
 * Converts: 'acl', 'workflows', 'correct-course' → 'acl-acl-correct-course.md'
 * Converts: 'core', 'agents', 'brainstorming' → 'acl-agent-brainstorming.md' (core agents skip module name)
 * Converts: 'standalone', 'agents', 'fred' → 'acl-agent-standalone-fred.md'
 *
 * @param {string} module - Module name (e.g., 'acl', 'core', 'standalone')
 * @param {string} type - Artifact type ('agents', 'workflows', 'tasks', 'tools')
 * @param {string} name - Artifact name (e.g., 'pm', 'brainstorming')
 * @returns {string} Flat filename like 'acl-agent-acl-pm.md' or 'acl-acl-correct-course.md'
 */
function toDashName(module, type, name) {
  const isAgent = type === AGENT_SEGMENT;

  // For core module, skip the module name: use 'acl-agent-name.md' instead of 'acl-agent-core-name.md'
  if (module === 'core') {
    return isAgent ? `acl-agent-${name}.md` : `acl-${name}.md`;
  }
  // For standalone module, include 'standalone' in the name
  if (module === 'standalone') {
    return isAgent ? `acl-agent-standalone-${name}.md` : `acl-standalone-${name}.md`;
  }

  // Module artifacts: acl-module-name.md or acl-agent-module-name.md
  // eslint-disable-next-line unicorn/prefer-string-replace-all -- regex replace is intentional here
  const dashName = name.replace(/\//g, '-'); // Flatten nested paths
  return isAgent ? `acl-agent-${module}-${dashName}.md` : `acl-${module}-${dashName}.md`;
}

/**
 * Convert relative path to flat dash-separated name
 * Converts: 'acl/agents/pm.md' → 'acl-agent-acl-pm.md'
 * Converts: 'acl/agents/tech-writer/tech-writer.md' → 'acl-agent-acl-tech-writer.md' (uses folder name)
 * Converts: 'acl/workflows/correct-course.md' → 'acl-acl-correct-course.md'
 * Converts: 'core/agents/brainstorming.md' → 'acl-agent-brainstorming.md' (core agents skip module name)
 *
 * @param {string} relativePath - Path like 'acl/agents/pm.md'
 * @returns {string} Flat filename like 'acl-agent-acl-pm.md' or 'acl-brainstorming.md'
 */
function toDashPath(relativePath) {
  if (!relativePath || typeof relativePath !== 'string') {
    // Return a safe default for invalid input
    return 'acl-unknown.md';
  }

  // Strip common file extensions to avoid double extensions in generated filenames
  // e.g., 'create-story.xml' → 'create-story', 'workflow.md' → 'workflow'
  const withoutExt = relativePath.replace(/\.(md|yaml|yml|json|xml|toml)$/i, '');
  const parts = withoutExt.split(/[/\\]/);

  const module = parts[0];
  const type = parts[1];
  let name;

  // For agents, if nested in a folder (more than 3 parts), use the folder name only
  // e.g., 'acl/agents/tech-writer/tech-writer' → 'tech-writer' (not 'tech-writer-tech-writer')
  if (type === 'agents' && parts.length > 3) {
    // Use the folder name (parts[2]) as the name, ignore the file name
    name = parts[2];
  } else {
    // For non-nested or non-agents, join all parts after type
    name = parts.slice(2).join('-');
  }

  return toDashName(module, type, name);
}

/**
 * Create custom agent dash name
 * Creates: 'acl-custom-agent-fred-commit-poet.md'
 *
 * @param {string} agentName - Custom agent name
 * @returns {string} Flat filename like 'acl-custom-agent-fred-commit-poet.md'
 */
function customAgentDashName(agentName) {
  return `acl-custom-agent-${agentName}.md`;
}

/**
 * Check if a filename uses dash format
 * @param {string} filename - Filename to check
 * @returns {boolean} True if filename uses dash format
 */
function isDashFormat(filename) {
  return filename.startsWith('acl-') && filename.includes('-');
}

/**
 * Extract parts from a dash-formatted filename
 * Parses: 'acl-agent-acl-pm.md' → { prefix: 'acl', module: 'acl', type: 'agents', name: 'pm' }
 * Parses: 'acl-acl-correct-course.md' → { prefix: 'acl', module: 'acl', type: 'workflows', name: 'correct-course' }
 * Parses: 'acl-agent-brainstorming.md' → { prefix: 'acl', module: 'core', type: 'agents', name: 'brainstorming' } (core agents)
 * Parses: 'acl-brainstorming.md' → { prefix: 'acl', module: 'core', type: 'workflows', name: 'brainstorming' } (core workflows)
 * Parses: 'acl-agent-standalone-fred.md' → { prefix: 'acl', module: 'standalone', type: 'agents', name: 'fred' }
 * Parses: 'acl-standalone-foo.md' → { prefix: 'acl', module: 'standalone', type: 'workflows', name: 'foo' }
 *
 * @param {string} filename - Dash-formatted filename
 * @returns {Object|null} Parsed parts or null if invalid format
 */
function parseDashName(filename) {
  const withoutExt = filename.replace('.md', '');
  const parts = withoutExt.split('-');

  if (parts.length < 2 || parts[0] !== 'acl') {
    return null;
  }

  // Check if this is an agent file (has 'agent' as second part)
  const isAgent = parts[1] === 'agent';

  if (isAgent) {
    // This is an agent file
    // Format: acl-agent-name (core) or acl-agent-standalone-name or acl-agent-module-name
    if (parts.length >= 4 && parts[2] === 'standalone') {
      // Standalone agent: acl-agent-standalone-name
      return {
        prefix: parts[0],
        module: 'standalone',
        type: 'agents',
        name: parts.slice(3).join('-'),
      };
    }
    if (parts.length === 3) {
      // Core agent: acl-agent-name
      return {
        prefix: parts[0],
        module: 'core',
        type: 'agents',
        name: parts[2],
      };
    } else {
      // Module agent: acl-agent-module-name
      return {
        prefix: parts[0],
        module: parts[2],
        type: 'agents',
        name: parts.slice(3).join('-'),
      };
    }
  }

  // Not an agent file - must be a workflow/tool/task
  // If only 2 parts (acl-name), it's a core workflow/tool/task
  if (parts.length === 2) {
    return {
      prefix: parts[0],
      module: 'core',
      type: 'workflows', // Default to workflows for non-agent core items
      name: parts[1],
    };
  }

  // Check for standalone non-agent: acl-standalone-name
  if (parts[1] === 'standalone') {
    return {
      prefix: parts[0],
      module: 'standalone',
      type: 'workflows', // Default to workflows for non-agent standalone items
      name: parts.slice(2).join('-'),
    };
  }

  // Otherwise, it's a module workflow/tool/task (acl-module-name)
  return {
    prefix: parts[0],
    module: parts[1],
    type: 'workflows', // Default to workflows for non-agent module items
    name: parts.slice(2).join('-'),
  };
}

/**
 * Resolve the skill name for an artifact.
 * Prefers canonicalId from a acl-skill-manifest.yaml sidecar when available,
 * falling back to the path-derived name from toDashPath().
 *
 * @param {Object} artifact - Artifact object (must have relativePath; may have canonicalId)
 * @returns {string} Filename like 'acl-create-prd.md' or 'acl-agent-acl-pm.md'
 */
function resolveSkillName(artifact) {
  if (artifact.canonicalId) {
    return `${artifact.canonicalId}.md`;
  }
  return toDashPath(artifact.relativePath);
}

module.exports = {
  toDashName,
  toDashPath,
  resolveSkillName,
  customAgentDashName,
  isDashFormat,
  parseDashName,
  AGENT_SEGMENT,
  ACL_FOLDER_NAME,
};
