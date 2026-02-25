// [AREI-SMART-CONFIG] 全域核心設定檔 ⚙️
window.AREI_CONFIG = {
    // 1. Firebase 雲端配置 (已根據你的截圖更新)
    firebase: {
        apiKey:"AIzaSyCLtwbGRh_FN9IOqJqOo1N12XnUZXqweKk",
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
// --- 核心修復引擎：自動建立所有缺失資料 ---
(function() {
    const runRepair = async () => {
        if (typeof firebase !== 'undefined' && firebase.apps.length > 0) {
            const db = firebase.firestore();
            try {
                // 1. 補齊所有功能方塊 (解決首頁少一半的問題)
                const items = [
                    { name: "熱情", order: 1 }, { name: "專業", order: 2 },
                    { name: "永續", order: 3 }, { name: "共榮", order: 4 },
                    { title: "租管節稅", icon: "S", category: "tool" },
                    { title: "Rich Data", icon: "RD", category: "data" },
                    { title: "售屋節稅", icon: "S", category: "tool" },
                    { title: "團隊好客", icon: "user", category: "crm" }
                ];
                for (const item of items) { await db.collection('features').add(item); }
                
                // 2. 補齊教育訓練資料 (解決 edu.html 空白問題)
                const courses = [
                    { title: "新人入職指南", category: "基礎訓練", date: "2024-03-20" },
                    { title: "房地產開發實務", category: "進階課程", date: "2024-03-25" }
                ];
                for (const c of courses) { await db.collection('courses').add(c); }

                console.log("✅ 所有元件資料已自動補齊！");
            } catch (e) { console.error("修復失敗：", e); }
        }
    };
    // 偵測 Firebase 狀態並執行
    const timer = setInterval(() => {
        if (typeof firebase !== 'undefined') { runRepair(); clearInterval(timer); }
    }, 1000);
})();
