window.TSM = {
  meta: {
    scope: '강의자료 Part 1~4와 주차관리(교체법 포함), 슬라이드 1~110 전체. 수업 중 필기와 교수님이 짚은 출제 포인트를 함께 넣었어요.',
    footer: 'TSM&amp;O 2026 강의자료를 바탕으로 만든 개인 학습용 요약입니다. 원본 슬라이드와 PDF는 포함하지 않았어요. 필기 판독이 불확실한 곳은 (?)로 표시했어요.'
  },
  parts: [
    { id: 'P1', cls: 'p1', label: 'Part 1', title: 'TSM 개요 · Action Class · 비용효과', pages: '슬라이드 1–18', chapters: ['c1', 'c2', 'c3'] },
    { id: 'P2', cls: 'p2', label: 'Part 2', title: '차량흐름 개선 · HOV 우대 · 고속도로 관리', pages: '슬라이드 19–54', chapters: ['c4', 'c5', 'c6', 'c7'] },
    { id: 'P3', cls: 'p3', label: 'Part 3', title: '수요감축 · 주차 · 친환경교통 · 대중교통', pages: '슬라이드 55–95 (+주차관리 별도본 67–78)', chapters: ['c8', 'c9', 'c10', 'c11'] },
    { id: 'P4', cls: 'p4', label: 'Part 4', title: '이면도로 · 재원 · 대민홍보', pages: '슬라이드 96–110', chapters: ['c12', 'c13', 'c14'] }
  ],
  compare: [
    { ch: 'c2', title: 'Class A · B · C · D', html: 'A 수요↓ / B 공급↑ / C 수요↓+공급↓(take-a-lane) / D 공급↑+수요↓(HOV 차로 추가). 같은 HOV 차로라도 <b>기존 차로 전환은 C, 추가 건설은 D</b>.' },
    { ch: 'c6', title: '반복혼잡 vs 비반복혼잡', html: '반복: 특정 장소·시간에 반복(첨두시 상습정체), 원인은 운영상·기하구조 병목. 비반복: 사고·공사·악천후 같은 돌발상황(incident). 위치·시각을 예측할 수 없어 반복혼잡 대책이 안 먹힘.' },
    { ch: 'c4', title: '정류장 위치: Near · Far · Mid-block', html: 'Mid-block이 교통 방해가 가장 적음(보행거리↑). Far-side가 차선책(우회전 상충 제거, RTOR, 시거↑). Near-side는 가장 흔하지만 방해가 가장 큼(적색 시 승하차, 환승 편리).' },
    { ch: 'c4', title: '고정식 vs 감응식 신호', html: '고정식(pretimed): 교통량이 일정할 때(대도시 첨두), 간선 연동·CBD 순환에 유리. 감응식(actuated): 수요에 따라 현시 순서·시간 변화, 독립 교차로에서 가장 효과적.' },
    { ch: 'c8', title: '시차출퇴근 vs 탄력근무', html: '시차제(staggered): 근무시간 총량은 그대로, 출퇴근 시각만 분산. 카풀을 깰 수 있음. 탄력제(flex time): 근로자가 선택, core time엔 모두 근무. 시차제의 두 문제를 보완.' },
    { ch: 'c6', title: 'Single · Secret · Variable 표지', html: 'Single message: 해당될 때만 점멸, 메시지 1개("Ramp Metered When Flashing"). Secret: 특정 시간에만 보임("Ramp Closed"). VMS: 여러 정보를 바꿔 가며 표출.' },
    { ch: 'c11', title: 'Flat · Zonal · Distance 요금', html: '균일요금: 위치 무관 1회당 같은 요금. 구역요금: 노선을 구역으로 나눠 차등(필기 예: 신분당선). 거리기반: 통행거리 비례(필기 예: 일본).' },
    { ch: 'c11', title: '준공영제 3유형', html: '수입금공동관리형(서울·5개 광역시): 수입금 공동관리, 적자 보전. 노선입찰형(경기도): 공공이 노선 소유, 입찰로 운영자 선정. 위탁운영형: 적자노선 등 일부를 위탁.' },
    { ch: 'c12', title: '이면도로 관리 사례 국가별', html: '네덜란드 Woonerf(1976 법제화) · 덴마크 Stillevej 30km/h·휴식놀이도로 15km/h · 스웨덴 SCAFT/RIGU-73 · 미국 Radburn(1928, cul-de-sac) · 유럽 Zone 30 · 일본 스쿨존(1972)·커뮤니티도로(1981).' },
    { ch: 'c13', title: '광역교통시설부담금 vs 교통유발부담금', html: '광역교통시설부담금: 대도시권 광역교통관리 특별법, 개발사업에 부과(Development Permit Fee와 유사). 교통유발부담금: 도시교통정비촉진법, 기존 건물에 매년 부과, TDM과 관련.' }
  ],
  chapters: [],
  quiz: [],
  cards: [],
  numbers: []
};
