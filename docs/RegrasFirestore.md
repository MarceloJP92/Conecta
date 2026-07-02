# Regras do Firestore

**Projeto:** Conecta

---

# Objetivo

Definir as regras de acesso ao banco de dados antes da implementação.

---

# Princípios

- Todo usuário deve estar autenticado.
- Nenhum usuário acessará dados privados de terceiros.
- Toda regra será validada pelo Firestore.

---

# Coleção users

Permissões

Criar

✔ Próprio usuário

Ler

✔ Usuários autenticados

Editar

✔ Apenas proprietário

Excluir

✔ Apenas proprietário

---

# Coleção friends

Permissões

Criar

✔ Usuário autenticado

Ler

✔ Participantes

Editar

✔ Participantes

Excluir

✔ Participantes

---

# Coleção conversations

Permissões

Criar

✔ Participantes

Ler

✔ Participantes

Editar

✔ Participantes

Excluir

✔ Participantes

---

# Coleção messages

Permissões

Criar

✔ Participantes da conversa

Ler

✔ Participantes

Editar

✔ Apenas remetente

Excluir

✔ Apenas remetente

---

# Restrições

Não permitir acesso sem login.

Não permitir alteração de documentos de outros usuários.

Não permitir leitura de conversas de terceiros.

---

# Segurança

Toda validação será realizada nas regras do Firestore.

O Front-end nunca será responsável pela segurança.

---

# Objetivo

Garantir integridade, privacidade e proteção dos dados do sistema.