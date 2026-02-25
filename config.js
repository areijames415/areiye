// [AREI-SMART-CONFIG] 全域核心設定檔
window.AREI_CONFIG = {
    // 1. Firebase 雲端配置 (請至 Firebase 控制台複製貼上)
    firebase: {
        apiKey: "你的_API_KEY",
        authDomain: "你的_PROJECT_ID.firebaseapp.com",
        projectId: "你的_PROJECT_ID",
        storageBucket: "你的_PROJECT_ID.appspot.com",
        messagingSenderId: "你的_SENDER_ID",
        appId: "你的_APP_ID"
    },

    // 2. 應用程式 ID (用於資料庫路徑)
    appId: "arei-master-v53",

    // 3. 系統密碼 (混淆前的原始碼)
    pinCode: "227708",

    // 4. 本地頁面路徑清單 (這就是 19 個分頁的導航中心)
    pages: {
        index: "./index.html",
        edu: "./edu.html", // 教育訓練
        tax: "./pages/tax.html", // 租管節稅
        // 剩下的分頁可以以此類推...
    }
};
