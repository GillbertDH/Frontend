// 1. 전체 로드맵 가짜 데이터 (백엔드가 없으니 일단 여기에 만들어 둡니다)
const allRoadmaps = [
  { id: 1, title: "ADsP 3주 단기합격" },
  { id: 2, title: "노베이스 ADsP 합격" },
  { id: 3, title: "정보처리기사 필기" },
  { id: 4, title: "정보처리기사 실기" },
  { id: 5, title: "토익 900점 한달 완성" },
  { id: 6, title: "컴퓨터활용능력 1급" },
];

const resultGrid = document.getElementById("resultGrid");

// 2. 화면에 카드를 그려주는 함수
function displayCards(dataList) {
  resultGrid.innerHTML = ""; // 일단 기존 카드를 다 지웁니다.

  dataList.forEach((item) => {
    // 백틱(`)을 사용하면 HTML 코드 안에 변수(${item.title})를 쏙쏙 넣을 수 있습니다.
    const cardHTML = `
                    <div class="card" onclick="goToDetail(${item.id})">
                        <div class="card-img-placeholder"></div>
                        <div class="card-title">${item.title}</div>
                    </div>
                `;
    resultGrid.innerHTML += cardHTML;
  });
}

// 3. 검색어에 맞게 필터링하는 함수
function filterRoadmaps() {
  // 검색창에 입력된 글자를 가져옵니다.
  const keyword = document.getElementById("searchInput").value;

  // 전체 데이터 중 제목에 검색어가 포함된 것만 추려냅니다.
  const filteredData = allRoadmaps.filter((item) =>
    item.title.includes(keyword),
  );

  // 추려낸 데이터로 화면을 다시 그립니다.
  displayCards(filteredData);
}

// 4. 카드를 클릭했을 때 다음 화면으로 넘어가는 함수
function goToDetail(roadmapId) {
  // 상세 페이지 이름(loadmap-detail.html) 뒤에 ?id=번호 형식으로 꼬리표를 달아 이동합니다.
  window.location.href = `loadmap-detail.html?id=${roadmapId}`;
}

// 5. 처음 화면이 켜졌을 때는 전체 목록을 보여줍니다.
displayCards(allRoadmaps);
