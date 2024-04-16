FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
EXPOSE 80
WORKDIR /src

COPY *.csproj ./
RUN for file in $(ls *.csproj); do dotnet restore $file; done

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /src

COPY --from=build-env /src/out .

ENTRYPOINT ["dotnet", "Api.dll"]
