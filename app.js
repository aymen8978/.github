// التنقل بين النماذج
function showRegister() {
  document.getElementById("loginForm").classList.remove("active");
  document.getElementById("registerForm").classList.add("active");
}

function showLogin() {
  document.getElementById("registerForm").classList.remove("active");
  document.getElementById("loginForm").classList.add("active");
}

// تسجيل الدخول (مؤقت فقط)
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if(email && password){
    alert("تم تسجيل الدخول بنجاح ✅ (لاحقاً نربط Neon)");
  } else {
    alert("من فضلك أدخل البريد وكلمة المرور");
  }
}

// إنشاء حساب (مؤقت فقط)
function register() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if(name && email && password){
    alert("تم إنشاء الحساب ✅ (لاحقاً نربط Neon)");
    showLogin();
  } else {
    alert("أكمل كل الحقول من فضلك");
  }
}