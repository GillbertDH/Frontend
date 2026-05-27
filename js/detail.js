// 1. 가짜 백엔드 데이터베이스 (나중에는 진짜 백엔드에서 fetch로 가져올 데이터)
const mockDB = {
  1: {
    title: "ADsP 3주 단기합격 로드맵",
    duration: "3주",
    level: "중상",
    base: "비전공자",
    weeks: [
      {
        weekNum: "1주차",
        tasks: ["1과목 adapter 강의", "개념문제풀이", "오답노트 정리"],
      },
      {
        weekNum: "2주차",
        tasks: ["2과목 adapter 강의", "개념문제풀이", "기출 1회독"],
      },
      {
        weekNum: "3주차",
        tasks: ["3과목 adapter 강의", "개념문제풀이", "모의고사 풀이"],
      },
    ],
  },
  2: {
    title: "노베이스 ADsP 합격",
    duration: "4주",
    level: "하",
    base: "완전 노베이스",
    weeks: [
      {
        weekNum: "1주차",
        tasks: ["기초 통계학 용어 정리", "1과목 가볍게 읽기"],
      },
      { weekNum: "2주차", tasks: ["1과목 핵심 암기", "2과목 시작"] },
    ],
  },
};

// 2. 주소창에서 ID 꼬리표 읽어오기
const urlParams = new URLSearchParams(window.location.search);
// 만약 주소에 ID가 없으면 기본값으로 1을 줌 (바로 실행해보기 위해)
const currentId = urlParams.get("id") || 1;

// 3. 해당 ID의 데이터 가져오기
const data = mockDB[currentId];

// 4. 화면 빈칸 채워 넣기
if (data) {
  // 상단 기본 정보 채우기
  document.getElementById("roadmapTitle").innerText = data.title;
  document.getElementById("roadmapDuration").innerText = data.duration;
  document.getElementById("roadmapLevel").innerText = data.level;
  document.getElementById("roadmapBase").innerText = data.base;

  // 주차별 체크박스 목록 그리기
  const weeksContainer = document.getElementById("weeksContainer");

  data.weeks.forEach((week) => {
    // 체크박스 HTML들을 먼저 조립 (배열의 map과 join 활용)
    const tasksHTML = week.tasks
      .map(
        (task) => `
                    <label class="task-item">
                        <input type="checkbox"> ${task}
                    </label>
                `,
      )
      .join("");

    // 1주차 통째로 조립
    const weekRowHTML = `
                    <div class="week-row">
                        <div class="week-label">${week.weekNum}</div>
                        <div class="task-list">
                            ${tasksHTML}
                        </div>
                    </div>
                `;

    // 완성된 1주차를 화면에 추가
    weeksContainer.innerHTML += weekRowHTML;
  });
} else {
  // 만약 없는 ID를 입력했을 경우
  document.getElementById("roadmapTitle").innerText =
    "존재하지 않는 로드맵입니다.";
}
