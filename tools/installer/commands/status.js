const path = require('node:path');
const prompts = require('../prompts');
const { Installer } = require('../core/installer');
const { Manifest } = require('../core/manifest');
const { UI } = require('../ui');

const installer = new Installer();
const manifest = new Manifest();
const ui = new UI();

module.exports = {
  command: 'status',
  description: 'Display ACL installation status and module versions',
  options: [],
  action: async (options) => {
    try {
      // Find the acl directory
      const projectDir = process.cwd();
      const { aclDir } = await installer.findAclDir(projectDir);

      // Check if acl directory exists
      const fs = require('../fs-native');
      if (!(await fs.pathExists(aclDir))) {
        await prompts.log.warn('No ACL installation found in the current directory.');
        await prompts.log.message(`Expected location: ${aclDir}`);
        await prompts.log.message('Run "acl install" to set up a new installation.');
        process.exit(0);
        return;
      }

      // Read manifest
      const manifestData = await manifest._readRaw(aclDir);

      if (!manifestData) {
        await prompts.log.warn('No ACL installation manifest found.');
        await prompts.log.message('Run "acl install" to set up a new installation.');
        process.exit(0);
        return;
      }

      // Get installation info
      const installation = manifestData.installation || {};
      const modules = manifestData.modules || [];

      // Check for available updates (only for external modules)
      const availableUpdates = await manifest.checkForUpdates(aclDir);

      // Display status
      await ui.displayStatus({
        installation,
        modules,
        availableUpdates,
        aclDir,
      });

      process.exit(0);
    } catch (error) {
      await prompts.log.error(`Status check failed: ${error.message}`);
      if (process.env.ACL_DEBUG) {
        await prompts.log.message(error.stack);
      }
      process.exit(1);
    }
  },
};
