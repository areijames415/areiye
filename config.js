// [AREI-SMART-CONFIG] 全域核心設定檔 ⚙️
window.AREI_CONFIG = {
    // 1. Firebase 雲端配置 (已根據你的截圖更新)
    firebase: {
        apiKey: "AIzaSyCNWcbhuQ1qaTK-H_L6cmnYeT_zrU3OTgY",
        authDomain: "areiye.firebaseapp.com",
        projectId: "areiye",
        storageBucket: "areiye.firebasestorage.app",
        messagingSenderId: "810066009573",
        appId: "1:810066009573:web:2a6304853dbdb58d7fa30c"
    },

    // 2. 系統安全密碼 🔑
    pinCode: "227708",

    // 3. 頁面連結導航清單 🔗
    pages: {
        index: "./index.html",
        edu: "./edu.html" 
    }
};

// 為了相容於舊程式碼的解析邏輯，自動轉換配置
window.__firebase_config = JSON.stringify(window.AREI_CONFIG.firebase);
window.__app_id = "arei-master-v53";
