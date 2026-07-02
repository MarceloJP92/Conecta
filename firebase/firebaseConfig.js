/*
=========================================================
 Projeto: Conecta
 Desenvolvedor: Marcelo José de Paula
 Arquivo: firebaseConfig.js

 Responsável por inicializar o Firebase e disponibilizar
 os serviços utilizados pela aplicação.

 Observações:
 - As configurações são carregadas por variáveis
   de ambiente (.env.local).
 - Este arquivo não contém credenciais fixas.
 - Todas as permissões de acesso são controladas
   pelo Firebase Authentication e pelas regras
   de segurança do Firestore.
=========================================================
*/

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// ======================================================
// Configuração do Firebase
// Carregada através das variáveis de ambiente
// ======================================================

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// ======================================================
// Inicialização do Firebase
// ======================================================

const app = initializeApp(firebaseConfig);

// ======================================================
// Serviços utilizados pelo projeto
// ======================================================

const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// ======================================================
// Exportação dos serviços
// ======================================================

export {
    app,
    auth,
    db,
    analytics
};