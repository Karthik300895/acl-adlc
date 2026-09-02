**Build More Architect Dreams** - một mô-đun khung phát triển hướng AI trong hệ sinh thái ACL, có khả năng thích ứng theo quy mô từ sửa lỗi nhỏ đến các hệ thống doanh nghiệp.

**100% miễn phí và mã nguồn mở.** Không có tường phí. Không có nội dung bị khóa. Không có Discord giới hạn quyền truy cập. Chúng tôi tin vào việc trao quyền cho mọi người, không chỉ cho những ai có thể trả tiền để vào một cộng đồng hay khóa học khép kín.

## Vì sao chọn ACL Method?

Các công cụ AI truyền thống thường làm thay phần suy nghĩ của bạn và tạo ra kết quả ở mức trung bình. Các agent chuyên biệt và quy trình làm việc có hướng dẫn của ACL hoạt động như những cộng tác viên chuyên gia, dẫn dắt bạn qua một quy trình có cấu trúc để khai mở tư duy tốt nhất của bạn cùng với AI.

- **Trợ giúp AI thông minh** - Gọi skill `acl-help` bất kỳ lúc nào để biết bước tiếp theo
- **Thích ứng theo quy mô và miền bài toán** - Tự động điều chỉnh độ sâu lập kế hoạch theo độ phức tạp của dự án
- **Quy trình có cấu trúc** - Dựa trên các thực hành tốt nhất của agile xuyên suốt phân tích, lập kế hoạch, kiến trúc và triển khai
- **Agent chuyên biệt** - Hơn 12 chuyên gia theo vai trò như PM, Architect, Developer, UX, Scrum Master và nhiều vai trò khác
- **Party Mode** - Đưa nhiều persona agent vào cùng một phiên để cộng tác và thảo luận
- **Vòng đời hoàn chỉnh** - Từ động não ý tưởng cho đến triển khai

---

## Bắt đầu nhanh

**Điều kiện tiên quyết**: [Node.js](https://nodejs.org) v20+ · [Python](https://www.python.org) 3.10+ · [uv](https://docs.astral.sh/uv/)

```bash
npx acl-adlc install
```

> Muốn dùng bản prerelease mới nhất? Hãy dùng `npx acl-adlc@next install`. Hãy kỳ vọng mức độ biến động cao hơn bản cài đặt mặc định.

Làm theo các lời nhắc của trình cài đặt, sau đó mở AI IDE của bạn như Claude Code hoặc Cursor trong thư mục dự án.

**Cài đặt không tương tác** (cho CI/CD):

```bash
npx acl-adlc install --directory /path/to/project --modules acl --tools claude-code --yes
```

> **Chưa chắc nên làm gì?** Hãy hỏi `acl-help` - nó sẽ cho bạn biết chính xác bước nào tiếp theo và bước nào là tùy chọn. Bạn cũng có thể hỏi kiểu như `acl-help Tôi vừa hoàn thành phần kiến trúc, tiếp theo tôi cần làm gì?`

## Mô-đun

ACL Method có thể được mở rộng bằng các mô-đun chính thức cho những miền chuyên biệt. Chúng có sẵn trong lúc cài đặt hoặc bất kỳ lúc nào sau đó.

| Module                            | Mục đích                                           |
| --------------------------------- | -------------------------------------------------- |
| ACL Method (ACL)                  | Khung lõi với hơn 34 quy trình                     |
| ACL Builder (BMB)                 | Tạo agent và quy trình ACL tùy chỉnh               |
| Test Architect (TEA)              | Chiến lược kiểm thử và tự động hóa dựa trên rủi ro |
| Game Dev Studio (BMGD)            | Quy trình phát triển game (Unity, Unreal, Godot)   |
| Creative Intelligence Suite (CIS) | Đổi mới, động não ý tưởng, tư duy thiết kế         |

## Web Bundles

Phiên bản V4 đã giới thiệu web bundles. Phiên bản V6 mang chúng trở lại, mới mẻ và cải tiến hơn.

Web bundles đóng gói các kỹ năng ACL được chọn lọc để cài đặt dưới dạng **Google Gemini Gems** và **ChatGPT Custom GPTs**. Hãy sử dụng chúng để thực hiện công việc lập kế hoạch ban đầu (động não ý tưởng, bản tóm tắt sản phẩm, PRD, PRFAQ, thông số UX, nghiên cứu thị trường và ngành) trong gói đăng ký LLM web của bạn, sau đó mang các sản phẩm đã hoàn thiện vào IDE của bạn để thực thi. Việc lập kế hoạch chạy trên gói đăng ký cố định thay vì tính phí theo token trong IDE, giúp tiết kiệm chi phí đáng kể cho các dự án kéo dài. Hãy chọn mô hình tốt nhất có sẵn cho bạn trong Gemini hoặc ChatGPT.

Các gói hiện có: động não ý tưởng, bản tóm tắt sản phẩm, PRFAQ, PRD, UX, nghiên cứu thị trường & ngành.

## Tài liệu

Trang tài liệu ACL Method - bài hướng dẫn, hướng dẫn tác vụ, giải thích khái niệm và tài liệu tham chiếu

## Đóng góp

Chúng tôi luôn chào đón đóng góp. Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết hướng dẫn.

## Giấy phép

Giấy phép MIT - xem [LICENSE](LICENSE) để biết chi tiết.

---

**ACL** và **ACL-ADLC** là các nhãn hiệu của ACL Code, LLC. Xem [TRADEMARK.md](TRADEMARK.md) để biết chi tiết.

Xem [CONTRIBUTORS.md](CONTRIBUTORS.md) để biết thông tin về những người đóng góp.
