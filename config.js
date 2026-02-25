// [AREI-SMART-CONFIG] 全域核心設定檔 ⚙️
window.AREI_CONFIG = {
    // 1. Firebase 雲端配置 (已根據你的截圖更新)
    firebase: {
        apiKey:"AIzaSyCNWcbhuQ1qaTK-H_L6cmnYeT_zrU3OTgY",
        authDomain:"areiye.firebaseapp.com",
        projectId:"areiye",
        storageBucket:"areiye.firebasestorage.app",
        messagingSenderId:"810066009573",
        appId:"1:810066009573:web:2a6304853dbdb58d7fa30c"
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
// --- 一鍵初始化資料庫工具 ---
async function initializeAREIData() {
  const db = firebase.firestore();
  
  // 1. 初始化 UI 設定
  const uiRef = db.collection('settings').doc('ui');
  await uiRef.set({
    theme: "pink",
    title: "AREI 御前權威",
    subtitle: "權威物業．永義房屋同盟自由店",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  }, { merge: true });

  // 2. 初始化 四大標籤
  const features = [
    { name: "熱情", order: 1 },
    { name: "專業", order: 2 },
    { name: "永續", order: 3 },
    { name: "共榮", order: 4 }
  ];
  
  for (const f of features) {
    await db.collection('features').add(f);
  }

  console.log("✅ AREI 資料初始化完成！請重新整理網頁。");
}

// 偵測 Firebase 載入後執行
const checkInterval = setInterval(() => {
  if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
    initializeAREIData();
    clearInterval(checkInterval);
  }
}, 1000);
