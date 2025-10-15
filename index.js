/**
 * A simple GET Zoho Function that greets the user by name.
 * You can test it via the browser or an API call with ?name=YourName
 * 
 * Example: https://your-function-url?name=Taher
 */

exports.handler = async (context, data) => {
  // Zoho Functions automatically parses query parameters into `data`
  const name = data.name || "Guest";

  const message = `Hello, ${name}! 👋 Welcome to Zoho Functions.`;

  // Return response
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: {
      success: true,
      greeting: message,
      timestamp: new Date().toISOString()
    }
  };
};
