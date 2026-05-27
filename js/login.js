//지금은 일단 그냥 로그인버튼 누르면 바로 main으로 넘어가도록 했는데
// 나중에 로그인 검사하는거 추가해야할듯


const loginBtn = document.querySelector('.login-button');

loginBtn.addEventListener('click', function() {
    
    window.location.href = 'pages/main.html';
});