// 1. 임시 데이터 (나중에 백엔드에서 받아올 내 구매 내역 데이터)
const myPurchasedRoadmaps = [
    { id: 1, title: "Toeic: 950점 달성" },
    { id: 2, title: "취업: 00기업 취업" },
    { id: 3, title: "정보처리기사" },
    { id: 4, title: "정보처리기사2" }
];

const addBtn = document.getElementById('addBtn');

// 데이터를 바탕으로 카드를 생성하고 화면에 그리는 함수
function renderRoadmaps() {
    
    const cardsHtml = myPurchasedRoadmaps.map(roadmap => `
        <div class="card">
            <div class="card-img-placeholder"></div>
            <div class="card-title">${roadmap.title}</div>
        </div>
    `).join('');

    // '+' 버튼 요소 바로 앞(beforebegin)에 생성된 카드 HTML을 삽입
    addBtn.insertAdjacentHTML('beforebegin', cardsHtml);
}


renderRoadmaps();

// 4. 기존 추가 버튼 클릭 이벤트 (검색 화면 이동)
addBtn.addEventListener('click', function() {
    window.location.href = 'roadmap-search.html';
});