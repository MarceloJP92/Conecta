Especificação de Requisitos de Software
Projeto

Conecta

Versão: 1.0

Objetivo

Desenvolver um mensageiro web moderno inspirado nos comunicadores clássicos, utilizando tecnologias atuais e arquitetura Serverless.

Público-alvo

Pequenos grupos de usuários.

Estimativa inicial:

Até 50 usuários cadastrados.
Entre 5 e 10 usuários simultâneos.
Tecnologias
HTML5
CSS3
JavaScript ES6+
Firebase Authentication
Cloud Firestore
Cloud Storage
Firebase Hosting
Progressive Web App (PWA)
Funcionalidades
Autenticação
Cadastro
Login
Logout
Recuperação de senha
Usuários
Perfil
Pesquisa
Foto
Status
Amigos
Solicitação
Aceitar
Recusar
Remover
Conversas
Chat privado
Mensagens em tempo real
Histórico
Segurança
HTTPS
Criptografia
Regras do Firestore
Objetivos Técnicos
Arquitetura Serverless
Código modular
Interface responsiva
Baixo consumo do Firebase
Fácil manutenção
Plataformas
Windows
Linux
Android
iPhone
Objetivo Final

Construir um mensageiro moderno, leve e seguro que sirva como projeto de portfólio e aplicação funcional para comunicação em tempo real.

docs/Arquitetura.md
Arquitetura do Sistema
Projeto

Conecta

Arquitetura
Usuário

↓

Navegador / PWA

↓

HTML + CSS + JavaScript

↓

Firebase Authentication

↓

Cloud Firestore

↓

Cloud Storage

↓

Firebase Hosting

Arquitetura totalmente Serverless.

Organização
docs/
firebase/
public/
Estrutura da Aplicação
Login

↓

Home

↓

Pesquisar Usuários

↓

Solicitações

↓

Lista de Amigos

↓

Chat

↓

Perfil

↓

Configurações
Fluxo de Login
Login

↓

Authentication

↓

UID

↓

Carrega Perfil

↓

Home
Fluxo das Conversas
Selecionar amigo

↓

Abrir conversa

↓

Escutar mensagens

↓

Enviar mensagem

↓

Atualização em tempo real
Fluxo das Solicitações
Pesquisar

↓

Enviar

↓

Receber

↓

Aceitar

↓

Lista de Amigos
Segurança

Todos os usuários deverão estar autenticados.

As regras do Firestore controlarão o acesso aos dados.

As mensagens serão acessíveis apenas pelos participantes da conversa.

Toda comunicação utilizará HTTPS.

Estrutura Inicial do Firestore
users

friend_requests

friends

conversations

messages

blocked_users

A modelagem completa será documentada em BancoDados.md.

Organização dos Arquivos
public/

assets/

css/

js/

pages/

firebase/

docs/
Padrões
JavaScript ES6+
Arquivos organizados por responsabilidade
Interface responsiva
Progressive Web App
Código modular
Arquitetura Serverless