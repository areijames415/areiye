// [AREI-SMART-CONFIG] 全域核心設定檔 ⚙️
window.AREI_CONFIG = {
    // 1. Firebase 雲端配置 (請將你 Firebase Console 的資訊貼在這裡)
    firebase: {
        apiKey: "你的_API_KEY",
        authDomain: "你的_PROJECT_ID.firebaseapp.com",
        projectId: "你的_PROJECT_ID",
        storageBucket: "你的_PROJECT_ID.appspot.com",
        messagingSenderId: "你的_SENDER_ID",
        appId: "你的_APP_ID"
    },

    // 2. 系統安全密碼 🔑
    pinCode: "227708",

    // 3. 頁面連結導航清單 🔗
    pages: {
        index: "./index.html",
        edu: "./edu.html" // 這是你的第二個分頁
    }
};

// 為了相容於舊程式碼的解析邏輯，自動轉換配置
window.__firebase_config = JSON.stringify(window.AREI_CONFIG.firebase);
window.__app_id = "arei-master-v53";
