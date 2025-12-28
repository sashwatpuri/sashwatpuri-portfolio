# How to Update Your Resume Link

To link your actual resume (Google Drive PDF), follow these steps:

1.  **Upload your Resume**: Upload your resume PDF to Google Drive.
2.  **Get the Link**: Right-click the file -> Share -> Copy Link. **Make sure "General Access" is set to "Anyone with the link"**.
3.  **Update the Code**:
    *   Open `app/page.tsx`.
    *   Search for `RESUME CARD`.
    *   Locate the `<a>` tag that looks like this:
        ```tsx
        <a href="/resume.pdf" target="_blank" ...>
        ```
    *   Replace `"/resume.pdf"` with your copied Google Drive link.

Example:
```tsx
<a href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing" target="_blank" ...>
```
