using App.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddHttpClient();

builder.Services.AddCors(x => x.AddPolicy("myCorsPolicy", opt => opt.AllowAnyOrigin()));

builder.Services.AddAppLayer();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("myCorsPolicy");
app.MapControllers();
app.UseHttpsRedirection();

app.Run();