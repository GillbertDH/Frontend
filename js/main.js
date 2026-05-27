// 클래스 이름이 'add-card'인 요소를 찾아서 클릭 이벤트를 달아줍니다.
        const addBtn = document.querySelector('.add-card');
        addBtn.addEventListener('click', function() {
            // 클릭하면 검색 화면으로 이동
            window.location.href = 'roadmap-search.html';
        });