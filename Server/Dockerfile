# Etapa de construção
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /path

COPY *.csproj ./
RUN for file in $(ls *.csproj); do dotnet restore $file; done

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /path

COPY --from=build-env /path/out ./

EXPOSE 80

ENTRYPOINT ["dotnet", "Api.dll"]
