---
title: 'Cách cài đặt ACL'
description: Hướng dẫn từng bước để cài đặt ACL vào dự án của bạn
sidebar:
  order: 1
---

Sử dụng lệnh `npx acl-adlc install` để thiết lập ACL trong dự án của bạn với các module và công cụ AI theo lựa chọn.

Nếu bạn muốn dùng trình cài đặt không tương tác và cung cấp toàn bộ tùy chọn ngay trên dòng lệnh, xem [hướng dẫn này](./non-interactive-installation.md).

## Khi nào nên dùng

- Bắt đầu một dự án mới với ACL
- Thêm ACL vào một codebase hiện có
- Cập nhật bản cài đặt ACL hiện tại

:::note[Điều kiện tiên quyết]

- **Node.js** 20.12+ (bắt buộc cho trình cài đặt)
- **Git** (khuyến nghị)
- **Công cụ AI** (Claude Code, Cursor, hoặc tương tự)
  :::

## Các bước thực hiện

### 1. Chạy trình cài đặt

```bash
npx acl-adlc install
```

:::tip[Muốn dùng bản prerelease mới nhất?]
Sử dụng dist-tag `next`:

```bash
npx acl-adlc@next install
```

Cách này giúp bạn nhận các thay đổi mới sớm hơn, đổi lại khả năng biến động cao hơn bản cài đặt mặc định.
:::

:::tip[Bản rất mới]
Để cài đặt trực tiếp từ nhánh `main` mới nhất (có thể không ổn định):

```bash
npx github:acl-code-org/ACL-ADLC install
```

:::

### 2. Chọn vị trí cài đặt

Trình cài đặt sẽ hỏi bạn muốn đặt các tệp ACL ở đâu:

- Thư mục hiện tại (khuyến nghị cho dự án mới nếu bạn tự tạo thư mục và chạy lệnh từ bên trong nó)
- Đường dẫn tùy chọn

### 3. Chọn công cụ AI

Chọn các công cụ AI bạn đang dùng:

- Claude Code
- Cursor
- Các công cụ khác

Mỗi công cụ có cách tích hợp skill riêng. Trình cài đặt sẽ tạo các tệp prompt nhỏ để kích hoạt workflow và agent, và đặt chúng vào đúng vị trí mà công cụ của bạn mong đợi.

:::note[Kích hoạt skill]
Một số nền tảng yêu cầu bật skill trong cài đặt trước khi chúng xuất hiện. Nếu bạn đã cài ACL mà chưa thấy skill, hãy kiểm tra cài đặt của nền tảng hoặc hỏi trợ lý AI cách bật skill.
:::

### 4. Chọn module

Trình cài đặt sẽ hiện các module có sẵn. Chọn những module bạn cần - phần lớn người dùng chỉ cần **ACL Method** (module phát triển phần mềm).

### 5. Làm theo các prompt

Trình cài đặt sẽ hướng dẫn các bước còn lại - cài đặt, tích hợp công cụ, và các tùy chọn khác.

## Bạn nhận được gì

```text
du-an-cua-ban/
├── _acl/
│   ├── acl/            # Các module bạn đã chọn
│   │   └── config.yaml # Cài đặt module (nếu bạn cần thay đổi sau này)
│   ├── core/           # Module core bắt buộc
│   └── ...
├── _acl-output/       # Các artifact được tạo ra
├── .claude/            # Claude Code skills (nếu dùng Claude Code)
│   └── skills/
│       ├── acl-help/
│       ├── acl-persona/
│       └── ...
└── .cursor/            # Cursor skills (nếu dùng Cursor)
    └── skills/
        └── ...
```

## Xác minh cài đặt

Chạy `acl-help` để xác minh mọi thứ hoạt động và xem bạn nên làm gì tiếp theo.

**ACL-Help là công cụ hướng dẫn thông minh** sẽ:

- Xác nhận bản cài đặt hoạt động đúng
- Hiển thị những gì có sẵn dựa trên module đã cài
- Đề xuất bước đầu tiên của bạn

Bạn cũng có thể hỏi nó:

```text
acl-help Tôi vừa cài xong, giờ nên làm gì đầu tiên?
acl-help Tôi có những lựa chọn nào cho một dự án SaaS?
```

## Khắc phục sự cố

**Trình cài đặt báo lỗi** - Sao chép toàn bộ output vào trợ lý AI của bạn và để nó phân tích.

**Cài đặt xong nhưng sau đó có thứ không hoạt động** - AI của bạn cần bối cảnh ACL để hỗ trợ. Xem [Cách tìm câu trả lời về ACL](./get-answers-about-acl.md) để biết cách cho AI truy cập đúng nguồn thông tin.
