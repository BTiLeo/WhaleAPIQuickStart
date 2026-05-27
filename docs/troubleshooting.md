#### Error Response Field explanation

| Field                       | Description                                                    |
| --------------------------- | -------------------------------------------------------------- |
| errorMessage                | General error message.                                         |
| errorCode                   | Internal error code — please share this when reporting issues. |
| errorMessages.message       | Detailed error message (if provided).                          |
| errorMessages.parameterName | Parameter name that caused the error.                          |
| errorMessages.providedValue | Received value for the erroneous field.                        |
| sessionId                   | Internal error id — please share this when reporting issues.   |

{% hint style="info" %}
Keep all request/response URLs and query parameters unchanged when integrating. If you encounter errors, include errorCode and sessionId when contacting support.
{% endhint %}

> **💡 Implementation Reference:**
> In practice, if the `errorCode` indicates an authentication issue (e.g., 401 Unauthorized), please ensure that the `pKey` is correctly injected into your request. Keep in mind that the frontend should **never** communicate directly with the Whale API. For the correct implementation of the "Backend Wrapper" logic, please refer to the respective backend directories (such as `BackendPython/` or `BackendGo/`).