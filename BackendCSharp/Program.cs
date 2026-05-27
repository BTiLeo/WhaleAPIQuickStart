using System.Net.Http.Json;

var builder = WebApplication.CreateBuilder(args);

// 1. Configure CORS to allow the frontend to call this API
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// 2. Register HttpClient for making external API calls
builder.Services.AddHttpClient();

var app = builder.Build();
app.UseCors();

// 3. Define the minimal API endpoint
app.MapPost("/api/getevents", async (IHttpClientFactory httpClientFactory) =>
{
    var client = httpClientFactory.CreateClient();

    // The actual Whale API endpoint
    var whaleApiUrl = "https://bti-odds.bsports.asia/api/SportsDataAPI/getevents";

    // Inject the specific PKey required for the mock response
    var payload = new { PKey = "ShowMeSample" };

    try
    {
        // Forward the request to Whale API
        var response = await client.PostAsJsonAsync(whaleApiUrl, payload);
        response.EnsureSuccessStatusCode();

        // Return the exact JSON back to our frontend
        var jsonResponse = await response.Content.ReadAsStringAsync();
        return Results.Content(jsonResponse, "application/json");
    }
    catch (Exception ex)
    {
        return Results.Problem(detail: ex.Message, title: "Error calling Whale API");
    }
});

app.Run();