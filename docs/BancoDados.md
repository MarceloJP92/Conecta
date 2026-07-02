# Banco de Dados

## Projeto

**Conecta**

Versão: **1.0**

---

# Objetivo

Este documento define a estrutura oficial do banco de dados do projeto **Conecta**.

O sistema utilizará o **Cloud Firestore**, banco de dados NoSQL do Firebase, operando em tempo real.

Toda implementação do sistema deverá seguir esta modelagem.

---

# Tecnologias

**Banco de Dados**

- Cloud Firestore

**Modelo**

- NoSQL

**Arquitetura**

- Serverless

**Sincronização**

- Tempo Real

---

# Princípios da Modelagem

A arquitetura do banco foi definida seguindo os seguintes princípios:

- Utilizar sempre o UID do Firebase Authentication como identificador do usuário.
- Evitar duplicação de informações sempre que possível.
- Reduzir a quantidade de leituras e gravações no Firestore.
- Organizar informações relacionadas utilizando subcoleções.
- Priorizar simplicidade, desempenho e baixo custo operacional.
- Toda segurança será controlada pelas Firestore Security Rules.
- Todos os campos serão escritos em inglês utilizando camelCase.

---

# Estrutura Geral

O banco possuirá apenas duas coleções principais.

```
users
conversations
```

Estrutura completa:

```
users
│
└── {uid}
    │
    ├── friends
    │      └── {friendUid}
    │
    ├── blocked
    │      └── {blockedUid}
    │
    ├── friend_requests_received
    │      └── {requestId}
    │
    ├── friend_requests_sent
    │      └── {requestId}
    │
    └── settings
           └── preferences

conversations
│
└── {conversationId}
      │
      └── messages
             └── {messageId}
```

---

# Coleção users

## Objetivo

Armazenar as informações do usuário.

Cada usuário possuirá apenas um documento.

ID do documento:

```
UID do Firebase Authentication
```

---

## Campos

| Campo | Tipo | Obrigatório | Descrição |
|--------|------|-------------|-----------|
| uid | string | Sim | Identificador único |
| name | string | Sim | Nome de exibição |
| email | string | Sim | Endereço de e-mail |
| photoURL | string | Não | URL da foto do perfil |
| bio | string | Não | Descrição do usuário |
| status | string | Sim | Status atual |
| lastLogin | timestamp | Sim | Último login |
| lastSeen | timestamp | Sim | Última atividade |
| createdAt | timestamp | Sim | Data da criação da conta |
| updatedAt | timestamp | Sim | Última atualização |
| active | boolean | Sim | Conta ativa |

---

## Valores permitidos para status

```
online
away
busy
invisible
offline
```

---

## Exemplo

```json
{
  "uid": "abc123",
  "name": "Marcelo José de Paula",
  "email": "usuario@email.com",
  "photoURL": "",
  "bio": "Desenvolvedor Web",
  "status": "online",
  "lastLogin": "...",
  "lastSeen": "...",
  "createdAt": "...",
  "updatedAt": "...",
  "active": true
}
```

---

# Subcoleção friends

Localização

```
users/{uid}/friends/{friendUid}
```

Objetivo

Armazenar a lista de amigos do usuário.

Campos

| Campo | Tipo |
|--------|------|
| friendUid | string |
| nickname | string |
| favorite | boolean |
| addedAt | timestamp |

---

# Subcoleção blocked

Localização

```
users/{uid}/blocked/{blockedUid}
```

Objetivo

Armazenar usuários bloqueados.

Campos

| Campo | Tipo |
|--------|------|
| blockedUid | string |
| blockedAt | timestamp |

---

# Subcoleção friend_requests_received

Localização

```
users/{uid}/friend_requests_received/{requestId}
```

Objetivo

Solicitações recebidas.

Campos

| Campo | Tipo |
|--------|------|
| fromUid | string |
| createdAt | timestamp |
| status | string |

Status possíveis

```
pending
accepted
declined
cancelled
```

---

# Subcoleção friend_requests_sent

Localização

```
users/{uid}/friend_requests_sent/{requestId}
```

Objetivo

Solicitações enviadas.

Campos

| Campo | Tipo |
|--------|------|
| toUid | string |
| createdAt | timestamp |
| status | string |

---

# Subcoleção settings

Localização

```
users/{uid}/settings/preferences
```

Objetivo

Configurações do usuário.

Campos

| Campo | Tipo |
|--------|------|
| theme | string |
| notifications | boolean |
| showLastSeen | boolean |
| showStatus | boolean |

---

# Coleção conversations

Objetivo

Armazenar as conversas privadas entre usuários.

Cada conversa possuirá apenas um documento.

---

## Conversation ID

Será gerado utilizando os UIDs dos participantes em ordem alfabética.

Exemplo

```
abc123_xyz789
```

Essa estratégia evita conversas duplicadas.

---

## Campos

| Campo | Tipo | Descrição |
|--------|------|-----------|
| participants | array | Participantes da conversa |
| createdAt | timestamp | Data da criação |
| updatedAt | timestamp | Última atualização |
| lastMessage | string | Última mensagem enviada |
| lastSender | string | UID do último remetente |
| lastMessageAt | timestamp | Horário da última mensagem |
| messageCount | number | Quantidade de mensagens |

---

# Subcoleção messages

Localização

```
conversations/{conversationId}/messages/{messageId}
```

Objetivo

Armazenar todas as mensagens da conversa.

O ID da mensagem será gerado automaticamente pelo Firestore.

---

## Campos

| Campo | Tipo | Obrigatório |
|--------|------|-------------|
| senderUid | string | Sim |
| text | string | Sim |
| sentAt | timestamp | Sim |
| edited | boolean | Sim |
| deleted | boolean | Sim |
| encrypted | boolean | Sim |
| readAt | timestamp ou null | Não |

---

## Exemplo

```json
{
  "senderUid": "abc123",
  "text": "Olá!",
  "sentAt": "...",
  "edited": false,
  "deleted": false,
  "encrypted": true,
  "readAt": null
}
```

---

# Fluxo das Conversas

```
Usuário

↓

Seleciona amigo

↓

Gera conversationId

↓

Abre conversa

↓

Escuta coleção messages

↓

Mensagens atualizadas em tempo real
```

---

# Fluxo de Envio

```
Usuário

↓

Digita mensagem

↓

Criptografa

↓

Salva em messages

↓

Atualiza documento conversation

↓

Outro participante recebe automaticamente
```

---

# Segurança

- Apenas usuários autenticados poderão acessar o sistema.
- Apenas participantes poderão acessar uma conversa.
- Apenas o remetente poderá editar sua mensagem.
- Apenas o remetente poderá excluir sua mensagem.
- O Conversation ID não é considerado informação sigilosa.
- Toda comunicação ocorrerá através de HTTPS.
- Toda autorização será controlada pelas Firestore Security Rules.

---

# Convenções

- Todos os nomes serão escritos em inglês.
- Todos os campos utilizarão camelCase.
- Todos os horários utilizarão Timestamp do Firestore.
- O UID será a única identificação oficial do usuário.
- Não haverá duplicação de dados sem justificativa técnica.

---

# Recursos da Versão 1.0

## Incluídos

- Cadastro de usuários
- Login por e-mail
- Recuperação de senha
- Pesquisa de usuários
- Solicitação de amizade
- Aceitar amizade
- Recusar amizade
- Lista de amigos
- Chat privado
- Mensagens em tempo real
- Status de presença
- Última visualização
- Bloqueio de usuários
- Criptografia ponta a ponta
- Progressive Web App (PWA)

---

## Fora do Escopo da Versão 1.0

- Conversas em grupo
- Chamadas de voz
- Chamadas de vídeo
- Envio de imagens
- Envio de vídeos
- Envio de arquivos
- Envio de áudios
- Stickers
- Reações às mensagens
- Responder mensagens
- Mensagens temporárias

---

# Controle de Versão

| Versão | Data | Descrição |
|--------|------|-----------|
| 1.0 | 30/06/2026 | Primeira versão oficial da modelagem do banco de dados do projeto Conecta. |