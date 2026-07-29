---
title: "Bắt đầu"
description: Cài đặt ACL và xây dựng dự án đầu tiên của bạn
---

Xây dựng phần mềm nhanh hơn bằng các workflow vận hành bởi AI, với những agent chuyên biệt hướng dẫn bạn qua các bước lập kế hoạch, kiến trúc và triển khai.

## Bạn Sẽ Học Được Gì

- Cài đặt và khởi tạo ACL Method cho một dự án mới
- Dùng **ACL-Help** — trợ lý thông minh biết bước tiếp theo bạn nên làm gì
- Chọn độ sâu lập kế hoạch phù hợp với công việc
- Đi qua các phase từ yêu cầu đến code chạy được
- Sử dụng agent và workflow hiệu quả

:::note[Điều kiện tiên quyết]
- **Node.js 20.12+** — Bắt buộc cho trình cài đặt
- **Git** — Khuyến nghị để quản lý phiên bản
- **IDE có AI** — Claude Code, Cursor hoặc công cụ tương tự
- **Một ý tưởng dự án** — Chỉ cần đơn giản cũng đủ để học
:::

:::tip[Cách Dễ Nhất]
**Cài đặt** → `npx acl-adlc install`
**Hỏi** → `acl-help what should I do first?`
**Xây dựng** → Để ACL-Help dẫn bạn qua từng workflow
:::

## Làm Quen Với ACL-Help: Người Dẫn Đường Thông Minh Của Bạn

**ACL-Help là cách nhanh nhất để bắt đầu với ACL.** Bạn không cần phải nhớ workflow hay phase nào cả, chỉ cần hỏi, và ACL-Help sẽ:

- **Kiểm tra dự án của bạn** để xem những gì đã hoàn thành
- **Hiển thị các lựa chọn** dựa trên những module bạn đã cài
- **Đề xuất bước tiếp theo** — bao gồm cả tác vụ bắt buộc đầu tiên
- **Trả lời câu hỏi** như “Tôi có ý tưởng cho một sản phẩm SaaS, tôi nên bắt đầu từ đâu?”

### Cách Dùng ACL-Help

Chạy trong AI IDE của bạn bằng cách gọi skill:

```text
acl-help
```

Hoặc ghép cùng câu hỏi để nhận hướng dẫn có ngữ cảnh:

```text
acl-help I have an idea for a SaaS product, I already know all the features I want. where do I get started?
```

ACL-Help sẽ trả lời:
- Điều gì được khuyến nghị trong tình huống của bạn
- Tác vụ bắt buộc đầu tiên là gì
- Phần còn lại của quy trình sẽ trông như thế nào

### Nó Cũng Điều Khiển Workflow

ACL-Help không chỉ trả lời câu hỏi — **nó còn tự động chạy ở cuối mỗi workflow** để cho bạn biết chính xác bước tiếp theo cần làm là gì. Không phải đoán, không phải lục tài liệu, chỉ có chỉ dẫn rõ ràng về workflow bắt buộc tiếp theo.

:::tip[Bắt Đầu Từ Đây]
Sau khi cài ACL, hãy gọi skill `acl-help` ngay. Nó sẽ nhận biết các module bạn đã cài và hướng bạn đến điểm bắt đầu phù hợp cho dự án.
:::

## Hiểu Về ACL

ACL giúp bạn xây dựng phần mềm thông qua các workflow có hướng dẫn với những AI agent chuyên biệt. Quy trình gồm bốn phase:

| Phase | Tên | Điều xảy ra |
| ----- | -------------- | --------------------------------------------------- |
| 1 | Analysis | Brainstorming, nghiên cứu, product brief hoặc PRFAQ *(tùy chọn)* |
| 2 | Planning | Tạo tài liệu yêu cầu (PRD hoặc spec) |
| 3 | Solutioning | Thiết kế kiến trúc khi cần |
| 4 | Implementation | Triển khai mọi thay đổi hoặc story đã lập kế hoạch, có thể thông qua điều phối tự động |

**[Mở Workflow Map](../reference/workflow-map.md)** để khám phá các phase, workflow và cách quản lý context.

Độ sâu lập kế hoạch có thể thay đổi:

| Độ sâu | Phù hợp nhất với | Ngữ cảnh trước triển khai |
| --- | --- | --- |
| **Trực tiếp** | Bản sửa, tính năng, issue hoặc spec đã rõ | Ý định, issue hoặc spec |
| **Lập kế hoạch sản phẩm** | Sản phẩm, nền tảng và tính năng phức tạp | PRD và UX tùy chọn |
| **Định hình giải pháp đầy đủ** | Sáng kiến phối hợp, rủi ro cao hoặc liên hệ thống | PRD, UX, kiến trúc, epic, story và kế hoạch sprint |

:::note
Đây không phải các nhánh triển khai riêng. Mọi đầu vào đều hội tụ vào `acl-quick-dev`; lập kế hoạch chỉ thay đổi lượng ngữ cảnh sẵn có.
:::

## Cài Đặt

Mở terminal trong thư mục dự án và chạy:

```bash
npx acl-adlc install
```

Nếu bạn muốn dùng bản prerelease mới nhất thay vì kênh release mặc định, hãy dùng `npx acl-adlc@next install`.

Khi được hỏi chọn module, hãy chọn **ACL Method**.

Trình cài đặt sẽ tạo hai thư mục:
- `_acl/` — agents, workflows, tasks và cấu hình
- `_acl-output/` — hiện tại để trống, nhưng đây là nơi các artifact của bạn sẽ được lưu

:::tip[Bước Tiếp Theo Của Bạn]
Mở AI IDE trong thư mục dự án rồi chạy:

```text
acl-help
```

ACL-Help sẽ nhận biết bạn đã làm đến đâu và đề xuất chính xác bước tiếp theo. Bạn cũng có thể hỏi những câu như “Tôi có những lựa chọn nào?” hoặc “Tôi có ý tưởng SaaS, nên bắt đầu từ đâu?”
:::

:::note[Cách Nạp Agent Và Chạy Workflow]
Mỗi workflow có một **skill** được gọi bằng tên trong IDE của bạn, ví dụ `acl-prd`. Công cụ AI sẽ nhận diện tên `acl-*` và chạy nó, bạn không cần nạp agent riêng. Bạn cũng có thể gọi trực tiếp skill của agent để trò chuyện tổng quát, ví dụ `acl-agent-pm` cho PM agent.
:::

:::caution[Chat Mới]
Luôn bắt đầu một chat mới cho mỗi workflow. Điều này tránh các vấn đề do giới hạn context gây ra.
:::

## Bước 1: Chọn Độ Sâu Lập Kế Hoạch

Chỉ dùng những phần cần thiết trong phase 1-3. Với công việc rõ ràng, có phạm vi hữu hạn, bạn có thể đi thẳng đến [Bước 2](#bước-2-xây-dựng-dự-án). **Dùng chat mới cho từng workflow.**

:::tip[Project Context (Tùy chọn)]
Trước khi bắt đầu, hãy cân nhắc tạo `project-context.md` để ghi lại các ưu tiên kỹ thuật và quy tắc triển khai. Nhờ vậy mọi AI agent sẽ tuân theo cùng một quy ước trong suốt dự án.

Bạn có thể tạo thủ công tại `_acl-output/project-context.md` hoặc sinh ra sau phần kiến trúc bằng `acl-generate-project-context`. [Xem thêm](../explanation/project-context.md).
:::

### Phase 1: Analysis (Tùy chọn)

Tất cả workflow trong phase này đều là tùy chọn. [**Chưa chắc nên dùng cái nào?**](../explanation/analysis-phase.md)
- **brainstorming** (`acl-brainstorming`) — Gợi ý ý tưởng có hướng dẫn
- **research** (`acl-deep-recon`) — Soạn prompt nghiên cứu chuyên sâu cho công cụ AI của riêng bạn, xử lý báo cáo hoàn chỉnh thành bản tóm tắt sẵn sàng cho các bước sau, hoặc thực hiện nghiên cứu ngay tại đây — thị trường, miền nghiệp vụ, kỹ thuật, cạnh tranh, tiếng nói người dùng và học thuật — kèm kiểm chứng luận điểm và vòng đời làm mới
- **product-brief** (`acl-product-brief`) — Tài liệu nền tảng được khuyến nghị khi concept của bạn đã rõ
- **prfaq** (`acl-prfaq`) — Bài kiểm tra Working Backwards để stress-test và rèn sắc concept sản phẩm của bạn

### Phase 2: Planning (Khi cần)

Với công việc cần lập kế hoạch sản phẩm:
1. Gọi **PM agent** (`acl-agent-pm`) trong một chat mới
2. Chạy workflow `acl-prd` (`acl-prd`)
3. Kết quả: `PRD.md`

:::note[Thiết kế UX (Tùy chọn)]
Nếu dự án của bạn có giao diện người dùng, hãy gọi **UX-Designer agent** (`acl-agent-ux-designer`) và chạy workflow thiết kế UX (`acl-ux`) sau khi tạo PRD.
:::

### Phase 3: Solutioning (Khi cần)

**Tạo Architecture**
1. Gọi **Architect agent** (`acl-agent-architect`) trong một chat mới
2. Chạy `acl-architecture` (`acl-architecture`)
3. Kết quả: tài liệu kiến trúc chứa các quyết định kỹ thuật

**Tạo Epics và Stories**

:::tip[Cải tiến trong V6]
Epics và stories giờ được tạo *sau* kiến trúc. Điều này giúp story có chất lượng tốt hơn vì các quyết định kiến trúc như database, API pattern và tech stack ảnh hưởng trực tiếp đến cách chia nhỏ công việc.
:::

1. Gọi **PM agent** (`acl-agent-pm`) trong một chat mới
2. Chạy `acl-create-epics-and-stories` (`acl-create-epics-and-stories`)
3. Workflow sẽ dùng cả PRD lẫn Architecture để tạo story có đủ ngữ cảnh kỹ thuật

**Kiểm tra mức sẵn sàng để triển khai** *(Rất nên dùng)*
1. Gọi **Architect agent** (`acl-agent-architect`) trong một chat mới
2. Chạy `acl-check-implementation-readiness` (`acl-check-implementation-readiness`)
3. Xác nhận tính nhất quán giữa toàn bộ tài liệu lập kế hoạch

## Bước 2: Xây Dựng Dự Án

Chuyển sang implementation với ngữ cảnh đang có: yêu cầu trực tiếp, issue, spec hoặc story đã được lập kế hoạch đầy đủ. **Mỗi workflow nên chạy trong một chat mới.**

Với công việc đã lập kế hoạch, chạy `acl-quick-dev` và nêu rõ story hoặc hạng mục sprint đã chọn, ví dụ: `Triển khai story 2.3 từ _acl-output/planning-artifacts/epics.md`.

### Khởi Tạo Sprint Planning (Cho công việc đã lập kế hoạch)

Gọi **Developer agent** (`acl-agent-dev`) và chạy `acl-sprint-planning` (`acl-sprint-planning`). Workflow này sẽ tạo `sprint-status.yaml` để theo dõi toàn bộ epic và story.

Khi Quick Dev nhận diện được story đã chọn trong file này, workflow chuyển story sang `in-progress` trong lúc triển khai và sang `review` khi triển khai hoàn tất.

### Chu Trình Xây Dựng

Với mỗi thay đổi trực tiếp hoặc story đã lập kế hoạch, lặp lại chu trình này trong chat mới:

| Bước | Agent | Workflow | Lệnh | Mục đích |
| ---- | ----- | -------------- | -------------------------- | ---------------------------------- |
| 1 | DEV | `acl-quick-dev` | `acl-quick-dev` | Làm rõ, lập kế hoạch, triển khai, review và trình bày |
| 2 | DEV | `acl-code-review` | `acl-code-review` | Kiểm tra chất lượng bổ sung *(khuyến nghị)* |

Review của Quick Dev là một phần của mọi lần chạy. `acl-code-review` là lớp xác thực độc lập, tùy chọn trong một ngữ cảnh mới.

Sau khi hoàn tất tất cả story trong một epic, hãy gọi **Developer agent** (`acl-agent-dev`) và chạy `acl-retrospective` (`acl-retrospective`).

## Bạn Đã Hoàn Thành Những Gì

Bạn đã nắm được nền tảng để xây dựng với ACL:

- Đã cài ACL và cấu hình cho IDE của bạn
- Đã chọn độ sâu lập kế hoạch phù hợp với công việc
- Đã tạo các tài liệu lập kế hoạch (PRD, Architecture, Epics và Stories)
- Đã hiểu chu trình triển khai trong implementation

Dự án của bạn bây giờ sẽ có dạng:

```text
your-project/
├── _acl/                                   # Cấu hình ACL
├── _acl-output/
│   ├── planning-artifacts/
│   │   ├── PRD.md                           # Tài liệu yêu cầu của bạn
│   │   ├── architecture.md                  # Các quyết định kỹ thuật
│   │   └── epics/                           # Các file epic và story
│   ├── implementation-artifacts/
│   │   └── sprint-status.yaml               # Theo dõi sprint
│   └── project-context.md                   # Quy tắc triển khai (tùy chọn)
└── ...
```

## Tra Cứu Nhanh

| Workflow | Lệnh | Agent | Mục đích |
| ------------------------------------- | ------------------------------------------ | --------- | ----------------------------------------------- |
| **`acl-help`** ⭐ | `acl-help` | Bất kỳ | **Người dẫn đường thông minh của bạn — hỏi gì cũng được!** |
| `acl-prd` | `acl-prd` | PM | Tạo tài liệu yêu cầu sản phẩm |
| `acl-architecture` | `acl-architecture` | Architect | Tạo tài liệu kiến trúc |
| `acl-generate-project-context` | `acl-generate-project-context` | Analyst | Tạo file project context |
| `acl-create-epics-and-stories` | `acl-create-epics-and-stories` | PM | Phân rã PRD thành epics |
| `acl-check-implementation-readiness` | `acl-check-implementation-readiness` | Architect | Kiểm tra độ nhất quán của kế hoạch |
| `acl-sprint-planning` | `acl-sprint-planning` | DEV | Khởi tạo theo dõi sprint |
| `acl-quick-dev` | `acl-quick-dev` | DEV | Triển khai ý định, issue, tính năng, bản sửa hoặc story |
| `acl-code-review` | `acl-code-review` | DEV | Review phần code đã triển khai |

## Câu Hỏi Thường Gặp

**Lúc nào cũng cần kiến trúc à?**
Không. Dùng kiến trúc khi cần làm rõ quyết định kỹ thuật hoặc ràng buộc liên hệ thống. Công việc rõ ràng có thể đi thẳng vào `acl-quick-dev`; sáng kiến lớn đưa các artifact lập kế hoạch vào cùng workflow đó.

**Tôi có thể đổi kế hoạch về sau không?**
Có. Workflow `acl-correct-course` (`acl-correct-course`) xử lý thay đổi phạm vi giữa chừng.

**Nếu tôi muốn brainstorming trước thì sao?**
Gọi Analyst agent (`acl-agent-analyst`) và chạy `acl-brainstorming` (`acl-brainstorming`) trước khi bắt đầu PRD.

**Tôi có cần tuân theo đúng thứ tự tuyệt đối không?**
Không hẳn. Khi đã quen flow, bạn có thể chạy workflow trực tiếp bằng bảng Tra Cứu Nhanh ở trên.

## Nhận Hỗ Trợ

:::tip[Điểm Dừng Đầu Tiên: ACL-Help]
**Hãy gọi `acl-help` bất cứ lúc nào** — đây là cách nhanh nhất để gỡ vướng. Bạn có thể hỏi:
- "Tôi nên làm gì sau khi cài đặt?"
- "Tôi đang kẹt ở workflow X"
- "Tôi có những lựa chọn nào cho Y?"
- "Cho tôi xem đến giờ đã làm được gì"

ACL-Help sẽ kiểm tra dự án, phát hiện những gì bạn đã hoàn thành và chỉ cho bạn chính xác bước cần làm tiếp theo.
:::

- **Trong workflow** — Các agent sẽ hướng dẫn bạn bằng câu hỏi và giải thích
- **Cộng đồng** — [Discord](https://discord.gg/gk8jAdXWmj) (#acl-adlc-help, #report-bugs-and-issues)

## Những Điểm Cần Ghi Nhớ

:::tip[Hãy Nhớ Các Điểm Này]
- **Bắt đầu với `acl-help`** — Trợ lý thông minh hiểu dự án và các lựa chọn của bạn
- **Luôn dùng chat mới** — Mỗi workflow nên bắt đầu trong một chat riêng
- **Độ sâu lập kế hoạch thay đổi** — ý định trực tiếp và story đã lập kế hoạch đều đi vào `acl-quick-dev`
- **ACL-Help chạy tự động** — Mỗi workflow đều kết thúc bằng hướng dẫn về bước tiếp theo
:::

Sẵn sàng bắt đầu chưa? Hãy cài ACL, gọi `acl-help`, và để người dẫn đường thông minh của bạn đưa bạn đi tiếp.
