1. res.send()
Used to send a response of any type (string, buffer, object, or array).
Automatically sets the Content-Type header based on the data type.
Does not format JSON explicitly; it sends plain text if the data is an object or array.
2. res.json()
Specifically designed to send a JSON response.
Converts the provided object or array into a JSON string using JSON.stringify().
Sets the Content-Type header to application/json.