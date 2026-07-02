# Padrão de Desenvolvimento

**Projeto:** Conecta  
**Desenvolvedor:** Marcelo José de Paula

---

# Objetivo

Este documento define os padrões de desenvolvimento adotados no projeto Conecta.

Seu objetivo é garantir organização, padronização, segurança e facilitar a manutenção do sistema durante todo o desenvolvimento.

---

# 1. Princípios do Projeto

O desenvolvimento do Conecta seguirá os seguintes princípios:

- Código limpo.
- Simplicidade.
- Organização.
- Segurança.
- Escalabilidade.
- Documentação contínua.

Toda decisão técnica deverá priorizar boas práticas de desenvolvimento.

---

# 2. Organização de Pastas

```
Conecta/

docs/
firebase/
public/

public/
│
├── assets/
├── css/
├── js/
└── pages/
```

Nenhum arquivo deverá ser criado fora da estrutura definida sem necessidade.

---

# 3. Estrutura dos Arquivos

Cada arquivo deve possuir uma única responsabilidade.

Exemplo:

```
auth.js
```

Responsável apenas pela autenticação.

```
chat.js
```

Responsável apenas pelo chat.

```
friends.js
```

Responsável apenas pelos amigos.

Evitar arquivos muito grandes.

---

# 4. Padrão de Código

Utilizar nomes claros.

Exemplo:

Correto

```javascript
const currentUser;
```

Evitar

```javascript
const u;
```

---

# 5. Idioma

Todo o código será escrito em inglês.

Exemplo

```javascript
currentUser
message
friendList
login
logout
```

A documentação permanecerá em português.

---

# 6. Comentários

Comentários devem explicar o motivo da implementação.

Evitar comentários óbvios.

Correto

```javascript
// Impede acesso de usuários não autenticados
```

Evitar

```javascript
// Soma 1 ao contador
counter++;
```

---

# 7. Segurança

Nunca armazenar:

- Senhas
- Tokens
- Credenciais privadas
- Chaves administrativas

Toda autenticação será realizada pelo Firebase Authentication.

O acesso ao banco será protegido pelas regras do Firestore.

---

# 8. Variáveis de Ambiente

As configurações do Firebase utilizarão variáveis de ambiente.

Nunca publicar arquivos contendo informações específicas do ambiente de desenvolvimento.

Arquivos previstos:

```
.env.example
.env.local
```

O arquivo `.env.local` não deverá ser enviado ao repositório.

---

# 9. Firestore

Todas as consultas deverão respeitar:

- menor quantidade possível de leituras;
- consultas indexadas;
- estrutura definida em BancoDados.md.

Nenhuma coleção será criada sem atualização da documentação.

---

# 10. Interface

Objetivos da interface:

- limpa;
- intuitiva;
- responsiva;
- acessível;
- rápida.

Priorizar usabilidade antes de efeitos visuais.

---

# 11. Performance

Evitar:

- consultas desnecessárias;
- duplicação de dados;
- funções repetidas;
- carregamentos excessivos.

Sempre reutilizar código quando possível.

---

# 12. Controle de Versão

Quando o Git for adotado, seguir:

Commits pequenos.

Mensagens descritivas.

Exemplos:

```
feat: criar autenticação

feat: implementar tela de login

fix: corrigir validação

docs: atualizar banco de dados

style: melhorar layout
```

---

# 13. Documentação

Sempre que houver alteração em:

- arquitetura;
- banco de dados;
- segurança;
- fluxo do sistema;

a documentação correspondente deverá ser atualizada.

Código e documentação devem permanecer sincronizados.

---

# 14. Deploy

Antes de cada deploy verificar:

☐ Código funcionando

☐ Sem erros no console

☐ Firestore Rules atualizadas

☐ Documentação atualizada

☐ Testes realizados

☐ Interface revisada

---

# 15. Objetivo Profissional

O projeto Conecta será desenvolvido seguindo padrões utilizados em projetos profissionais.

O objetivo não é apenas criar um mensageiro web funcional, mas também construir um projeto de portfólio que demonstre conhecimentos em:

- Arquitetura de Software
- HTML
- CSS
- JavaScript
- Firebase
- Segurança
- Organização de Código
- Documentação Técnica
- Boas Práticas de Desenvolvimento

Todas as decisões técnicas deverão considerar qualidade, organização e facilidade de manutenção.