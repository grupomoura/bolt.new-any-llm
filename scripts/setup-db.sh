#!/bin/bash

# Verifica se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "Docker não está instalado. Por favor, instale o Docker primeiro."
    echo "Visite: https://www.docker.com/products/docker-desktop"
    exit 1
fi

# Verifica se o Docker está rodando
if ! docker info &> /dev/null; then
    echo "Docker não está rodando. Por favor, inicie o Docker Desktop."
    exit 1
fi

# Inicia o banco de dados
echo "Iniciando o banco de dados PostgreSQL..."
docker-compose -f docker-compose.db.yml up -d

# Espera o banco de dados estar pronto
echo "Aguardando o banco de dados iniciar..."
sleep 10

# Executa as migrações do Prisma
echo "Executando migrações do banco de dados..."
npx prisma migrate dev

echo "Configuração do banco de dados concluída!"
