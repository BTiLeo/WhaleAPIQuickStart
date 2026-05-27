## File Version

URL: \[GET] <https://bti-odds.bsports.asia/api/Files/Version/logos\\>
This is a GET method and only supports one query parameter: PKey.

Sample request: <https://bti-odds.bsports.asia/api/Files/Version/logos?PKey=fake>

The response will be a string (SHA256 file checksum). When the string changes, it means there’s a new image zip file — please check with us in the integration chat.

> **💡 Implementation Reference:**
> This is a standard GET request. For examples of how to securely execute server-side GET requests within our architecture, you can browse the backend directories (e.g., `BackendPHP/` or `BackendNodeJS/`).