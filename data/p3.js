(() => {
const T = window.TSM;

/* ===================== 3-1 ===================== */
T.chapters.push({
  id: 'c8', no: '3-1', title: '첨두시 교통수요 감축', pages: '55–63',
  summary: '근무시간 조정(시차제·탄력제·주4일제), 혼잡통행료, 첨두시 트럭 제한으로 첨두 차량 수를 줄인다.',
  sections: [
    { title: '개요', pages: '55', html: `
      <p>도시가로의 첨두시 흐름은 <b>도로수요(차량 수)를 줄여</b> 개선할 수 있다. 오전·오후 첨두 차량 수를 줄이는 TSM action:</p>
      <ol><li><mark class="k">근무시간 조정</mark> (근무일 조정 포함)</li><li><mark class="k">혼잡통행료 부과</mark></li><li><mark class="k">첨두시 트럭 제한</mark></li></ol>
      <p class="small muted">국내 용어: 유연근무제, 탄력근무제</p>` },
    { title: '출퇴근 시차제 (Staggered Work Hours)', pages: '56', html: `
      <p><b>근무시간 조정 방법 2가지</b></p>
      <ul><li>출퇴근을 시차제로 하거나 재배열해 <b>도착·출발 시간을 길게 분포</b>시킨다</li><li><b>주4일 근무제</b>로 전환하고 일일 근로시간을 늘린다</li></ul>
      <p><b>시차제</b>: 업무 시작·종료 시간을 통상의 9:00~5:00보다 다양한 시간대에 분포되도록 계획. <mark class="k">근로일수나 근무시간을 바꾸지 않고</mark> 첨두시 출발·도착 간격만 분산시켜 첨두 교통량을 줄인다.</p>
      <div class="card" style="background:var(--surface-2);box-shadow:none;margin:10px 0">
        <b>사례: 1970년 맨해튼</b>
        <p style="margin:6px 0 0">사업장 <b>400여 개</b>, 근로자 <b>22만 명</b>이 자발적으로 평소보다 <b>30분</b> 일찍 또는 늦게 출퇴근 → 매우 성공적. 첨두시 대중교통 관련 시설 사용이 <mark class="k">18~26%</mark> 줄었고, WTC 오후 첨두 passenger count 전후 비교가 이를 뒷받침.</p>
      </div>` },
    { title: '효과와 탄력근무제 (Flexible Work Hour)', pages: '57', html: `
      <p><b>혼잡 감소 효과</b>: 도시가로 혼잡↓, 버스 차량 혼잡↓, 에스컬레이터(E/S)·엘리베이터(E/V) 혼잡↓, 건물 로비 혼잡↓.</p>
      <p>예상치 못한 지체가 줄어 근로자 <b>지각이 감소</b> → 고용주 만족도도 높아짐.</p>
      <h3>탄력근무제</h3>
      <ul>
        <li>근로자가 <b>자신의 선호에 따라</b> 근로시간을 조정. 단, 정해진 <mark class="k">core time(집중근무시간)</mark>에는 모두 근무해야 한다.</li>
        <li>core time 예: 오전 10시 ~ 오후 3시</li>
        <li>시차제와 마찬가지로 교통수요를 긴 시간에 분산시켜 첨두 수요를 줄인다.</li>
      </ul>
      <p class="small muted">cf. travel demand(통행수요), traffic demand(교통수요), vehicle demand(차량수요)를 구분.</p>
      <div class="memo"><b class="h">수업 필기</b>그림의 core time 블록 <b>10am~12pm</b>과 <b>2pm~4pm</b>에 동그라미, 화살표로 연결. "Core Time" 밑줄.</div>` },
    { title: '근무시간 조정의 비용·장단점', pages: '58', html: `
      <p><b>시행비용</b>: 자료 수집·계획·평가 비용 외엔 <mark class="k">거의 무시할 정도</mark>.</p>
      <div class="grid two">
        <div><h3>장점</h3><ul><li><b>즉시</b> 시행 가능</li><li>도로 외 E/V, 정류장·플랫폼, 로비 등 다른 시설 부하 감소</li><li>혼잡·지체 완화로 쾌적한 통근</li><li>자기 주도권 → 근로자 <b>사기 증진</b></li></ul></div>
        <div><h3>단점</h3><ul><li>카풀 준비 기회를 주기도 하지만 <mark class="k">기존 카풀을 와해</mark>할 수도</li><li>혼잡이 완화되면 <b>개인 자동차 이용자가 증가</b></li><li>대중교통 서비스와 <b>조화롭게 협력</b>해야 함</li></ul></div>
      </div>
      <ul>
        <li><b>대중교통·함께타기에 미치는 영향</b>: 대중교통 용량이 수요에 못 미칠 때 <b>시차제</b>가 유용하지만 ridesharing엔 부정적일 수 있다. <mark class="k">탄력제(flex time)는 이 두 문제를 보완</mark>할 수 있다.</li>
        <li><b>성공 요인</b>: 교대 수가 적고, 근로자 간 또는 근로자-소비자 간 <b>상호관계가 적은 사업장</b>에서 가장 성공적.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>"사기"에 동그라미 ↑. 단점: "와해할 수도" 박스, 개인차량 증가 ✗, 대중교통 "협력" 동그라미. "사업장"에 동그라미.</div>` },
    { title: '주4일 근무제 (Shortened Work Week)', pages: '59–60', html: `
      <p><b>전형적 형태</b>: 하루 10시간 × 4일 / 금요일 4시간 + 나머지 4일 9시간 / 하루 10시간 이하로 4일.</p>
      <ul>
        <li><b>35시간 근무제 개념</b>: 미국 근로자는 주 40시간이 기준, 많은 노조가 <mark class="k">35시간</mark> 근무를 주장해 왔고 다양한 근무일 체제가 정착.</li>
        <li>4일제 = 월~목 근무로만 이해하기 쉽지만, 실제로는 주 5일 또는 6일을 활용해 다양한 형태를 만든다.</li>
        <li><b>결과</b>: 참여가 많으면 혼잡 완화 효과가 크지만, <b>비첨두시에 비통근자의 다른 목적 통행이 늘어난다</b>는 점도 간과하면 안 됨.</li>
      </ul>
      <div class="tbl-wrap"><table class="tbl narrow nostack"><thead><tr><th>배치 예</th><th class="num">월</th><th class="num">화</th><th class="num">수</th><th class="num">목</th><th class="num">금</th><th class="num">토</th></tr></thead><tbody>
        <tr><td>1</td><td class="num">80</td><td class="num">80</td><td class="num">80</td><td class="num">80</td><td class="num">80</td><td></td></tr>
        <tr><td>2</td><td class="num">50</td><td class="num">100</td><td class="num">100</td><td class="num">100</td><td class="num">50</td><td></td></tr>
        <tr><td>3</td><td class="num">67</td><td class="num">67</td><td class="num">67</td><td class="num">67</td><td class="num">67</td><td class="num">67</td></tr>
        <tr><td>4</td><td class="num">33</td><td class="num">67</td><td class="num">100</td><td class="num">100</td><td class="num">67</td><td class="num">33</td></tr>
        <tr><td>5</td><td class="num">50</td><td class="num">50</td><td class="num">100</td><td class="num">100</td><td class="num">50</td><td class="num">50</td></tr>
      </tbody></table></div>
      <p class="small muted">요일별 출근하는 4일제 근로자 비율(%). 어느 배치든 합이 약 400%(=4일).</p>
      <p><b>1970년대 말 미국</b>: 3천 개 기업, 100만 명이 주4일·일 10시간 근무 → 시행 기업의 <mark class="k">85~95%</mark>가 이후에도 유지.</p>
      <div class="grid two">
        <div><h3>장점</h3><ul><li>근로자·경영진 사기 증진</li><li>결근 감소</li><li>초과근무 요구 감소</li><li>여가시간 증가</li></ul></div>
        <div><h3>단점</h3><ul><li>근무통행이 줄어 <mark class="k">직장에서 멀리 살려는 경향</mark> → VMT 증가</li><li>대중교통·함께타기가 크게 영향받음</li><li>주중 <b>여가통행</b> 증가로 근무통행 감소분 상쇄</li><li>업무 스케줄 조정이 어려움</li><li>일하는 부모의 유아 돌봄 찾기 어려움</li><li>근로자 피로</li><li>시간외수당 없는 장시간 근무에 대한 법적 근거 필요</li></ul></div>
      </div>
      <div class="memo"><b class="h">수업 필기</b>"35-HR WW" 박스. "직장에서 멀리 살려는 경향이 높아져" → VMT 증가 강조, "여가 통행" 박스.</div>` },
    { title: '혼잡통행료 (Congestion Pricing)', pages: '61', html: `
      <ul>
        <li><b>정의</b>: 교통시설을 비첨두시보다 <b>첨두시에 쓸 때 요금을 더 부과</b> → 첨두 교통량을 줄이거나 수단선택(modal choice)에 영향.</li>
        <li><b>목적</b>: 혼잡한 도로·대중교통을 비첨두시에 이용하도록 권장하거나, 첨두시 사용에 일종의 <b>특권 비용</b>을 지불하게 함.</li>
      </ul>
      <p><b>방법 예시</b></p>
      <ul>
        <li>높은 통행료로 첨두시 사용 감소</li>
        <li>함께타기·대중교통 권장을 위해 <b>1인 승용차</b>에 높은 요금</li>
        <li>비첨두시(승객 적은) 대중교통 운영비 보전을 위해 이용요금 인상</li>
        <li>대중교통 전환을 위해 <b>전일 주차</b>에 높은 요금</li>
      </ul>
      <p><b>지역 전체 적용</b>: 특정 지점보다 <mark class="k">지역·구역 전체에 적용</mark>하는 것이 본 개념에 충실. 진입 허가(면허)를 못 얻으면 통행할 수 없게 하는 보완 기법이 열쇠.</p>
      <div class="card" style="background:var(--surface-2);box-shadow:none;margin:10px 0">
        <b>사례: 싱가포르</b>
        <p style="margin:6px 0 0"><mark class="k">1975년 Area Licensing Scheme(ALS)</mark> 실시 (지금은 <b>ERP</b>). 시행 때 CBD 주차요금도 크게 올림 → 오전 첨두 교통량 약 <mark class="k">40% 감소</mark>.</p>
      </div>
      <div class="memo"><b class="h">수업 필기</b>"ALS"를 크게 적고 노란 AREA LICENCE 스티커 사진에 동그라미 — "이거 ALS라는데 유리에 붙여(?)" (차 앞유리에 붙이는 허가증).</div>` },
    { title: '첨두시 트럭 제한', pages: '62–63', html: `
      <p><b>트럭이 CBD 혼잡의 주범인 이유</b>: 주요 간선도로 통행, 좁은 도시가로 운행, 주차해 짐을 싣고 내림.</p>
      <ul>
        <li><b>환산</b>: 크기·가속력·회전능력 때문에 트럭 1대는 승용차 여러 대로 환산. 간선도로상 트럭의 제동·출발·주행은 <mark class="k">승용차 10대</mark>의 교통영향.</li>
        <li>첨두시 고속도로·간선도로에서 트럭을 빼면 승용차 공간이 생겨 용량 증가 → <b>시설공급을 늘리는</b> TSM 기법.</li>
        <li><b>부분 제한</b>: 고속도로 운행금지 시간대에 간선도로 운행을 허용 → 영업기회 보장, 반대 최소화.</li>
        <li><b>전면 제한</b>: 예) 9:00~16:00 배송 금지는 논리적이지만 전면 금지는 아주 강한 반대.</li>
        <li>정체 속 시간 낭비 등 경제적 이유로 많은 트럭이 <b>스스로 첨두를 피한다</b>.</li>
      </ul>
      <h3>야간 제한의 실패: 런던</h3>
      <p>pickup·delivery를 야간으로 제한했다가 민원으로 해제: 밤 시간 <b>소음</b> 민원, 상인·업주 반대(야간 추가 인력·수당), 화물업계 반대(야간수당 부담).</p>
      <p><b>효과적 수용</b>: 첨두시 운영을 최소화하고, 노외 하역시설이 없으면 curb space를 제공. 가장 중요한 것은 <mark class="k">시간대와 상관없이 차로를 막는 상황을 만들지 않는 것</mark>.</p>` }
  ]
});

/* ===================== 3-2 ===================== */
T.chapters.push({
  id: 'c9', no: '3-2', title: '주차관리 · P&R · 교체법', pages: '64–74 (별도본 67–78)',
  summary: '주차 운영 결정, 주차 규제(요금·미터기), 환승주차장(P&R)과 국가통합교통체계효율화법의 환승센터 정의.',
  sections: [
    { title: '주차관리 개요', pages: '64', html: `
      <ul>
        <li>차량은 1년 평균 <mark class="k">85%</mark>의 시간을 주차해 있다. 적절히 관리된 주차 공급정책만큼 큰 영향력을 가진 교통운영 기술·정책은 없을지도 모른다.</li>
      </ul>
      <p><b>주차관리의 주요 결정사항 4가지</b></p>
      <ol><li>주차가 허용될 장소</li><li>노상·노외 주차장에 배정할 주차 space의 양</li><li>배정된 space의 요금체계</li><li>주차가 허용되는 시간 (Time and Length of Time)</li></ol>
      <p>이 장의 내용: operational decisions, parking regulations, park &amp; ride facilities.</p>
      <p class="small muted">주차관리 별도 배포본은 슬라이드 번호가 67–78이고, 마지막 78쪽에 교체법(환승센터) 슬라이드가 추가되어 있어요.</p>` },
    { title: '운영 결정 ① 위치·거리·요금·주차면', pages: '65', html: `
      <ul>
        <li><b>노상주차</b>는 도로를 물리적으로 점유해 용량을 낮추고 직진차량과 주차 차량 간 마찰로 사고 가능성을 높인다 → 용량·안전 면에서 <mark class="k">노외(off-street) 주차장이 선호</mark>.</li>
        <li><b>보행거리</b>: 운전자는 목적지 가까이 주차하길 원한다.
          <ul><li><b>2시간 이하 단기 주차</b>: 목적지에서 <mark class="k">120~180m</mark> 이내 (그렇지 않으면 공급이 무의미)</li><li><b>장기 주차</b>: CBD 내 또는 수요가 높은 곳에서 <mark class="k">500m</mark>까지 걸어갈 의향</li></ul></li>
        <li><b>요금</b>: 수요-공급에 따라 결정. 너무 높으면 수요와 관계없이 이용을 단념시킨다.</li>
        <li><b>주차면 수</b>: 인접 개발의 유발 능력에 의존. <mark class="k">10~15%는 항상 비어 있는 것</mark>이 좋다 — 가용 공간을 찾을 기회를 주기 위해. 꽉 차면 이용의지를 억누르고, 차량이 구역 안팎을 배회해 직진교통과 상충.</li>
        <li><b>관련 법</b>: 도시계획법, <mark class="k">주차장법</mark>, <mark class="k">건축법</mark>, <mark class="k">도시교통정비촉진법</mark>, 소방법, 지방공기업법.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>Walking Distance에 ☆. "2시간", "단기 주차" 박스, 120–180m 밑줄, 500m 동그라미. "10~15%" 박스. 주차장법·건축법·도시교통정비촉진법에 동그라미.</div>` },
    { title: '운영 결정 ② 제거·규격·시간제한·미터기', pages: '66', html: `
      <ul>
        <li><b>주차 제거</b>: 많은 TSM action이 주차공간 <b>제거나 이전</b>과 관련. 노상주차를 없앨 땐 기존 이용자가 <b>다른 구역에 주차하거나 다른 수단</b>을 쓸 수 있는지 반드시 확인.</li>
        <li><b>주차면 크기</b>: 최소 <mark class="k">2.5m(폭) × 5.3m(길이)</mark>, 주차방법(직각·평행·사각)에 따라 여유공간을 달리함.</li>
        <li><b>소형차 주차면</b>: 소형차를 모아 주차면 수를 늘리려는 노력은 국내외 모두 성공적이지 못했다.</li>
        <li><b>시간제한</b>: 주차장·주차건물엔 시간제한이 없다. 노상주차는 장기주차를 허용하지 않는 것이 일반적이고, 표지로 통제(요일, 허용 시간대, 주차시간, 차량번호 등). 적절한 단기 제한은 <mark class="k">30분~2시간</mark>.</li>
        <li><b>주차미터기</b>: <mark class="k">1935년 미국인 Carl MaGee</mark>가 발명. 시간당 요금과 최대 허용시간(1시간 또는 2시간)에 따라 이용이 영향받음.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>"5.3m" 위에 "5.2m"라고 고쳐 적음. "제거나 이전" 박스, "소형차 … 성공적이 못해 왔다" 밑줄.</div>` },
    { title: '주차 규제와 요금', pages: '67', html: `
      <ul>
        <li><b>목적</b>: 혼잡지역으로 출입하는 차량의 <b>수와 종류</b>를 통제. HOV 우대가 보조수단으로 동원되기도.</li>
        <li><b>강력한 단속</b>: 주차규제를 시행만 하고 <mark class="k">강력한 단속</mark>이 없으면 무의미.</li>
        <li><b>주차요금</b>: 일종의 혼잡비로 써서 특정 지역 차량 수를 제한. 높은 요금 → 승용차 사용↓, 대중교통 이용↑.</li>
        <li><b>요금 인상의 한계</b>: 첨두 교통류에는 영향이 제한적 — 상당수 차량이 집과 직장에서 주차비를 내지 않기 때문(대도시는 다름).</li>
        <li><b>넓게 적용</b>: 요금 인상은 대상 지역에 <mark class="k">광범위</mark>해야 효과. 단기주차는 혜택을 보고 장기주차(출퇴근)를 단념시키는 방향으로. 장기주차 감소로 인한 수익 감소는 단기주차 증가로 상쇄.</li>
      </ul>
      <p><b>효과적 통제 수단</b></p>
      <ul><li>시간당 요금 인상 (위치·요일·경과시간별)</li><li>할증·세금 부과, 보조금 축소·폐지</li><li>SOV(나홀로 차량)·소유자 할증</li></ul>
      <div class="memo"><b class="h">수업 필기</b>제목 옆 "규제", "수·종류" 위에 SOV/HOV. "강력한 단속" 동그라미. Charges 옆 "/fee". 바퀴 잠금장치 사진에 "Denver Boots".</div>` },
    { title: '주차 미터기', pages: '68', html: `
      <p>미터기를 설치하면 요금 조정과 주차면 공급 통제가 쉬워진다. <b>설치가 필요한 경우</b>:</p>
      <ul><li><mark class="k">회전율(turnover)</mark>을 높이고자 할 때</li><li>Park-and-visit 통행의 <b>단기화</b>를 유도할 때</li><li><b>공운전</b>(빈자리 찾아 배회)을 줄이고자 할 때</li></ul>
      <p><b>설치 효과</b>: 1970년대 중반 워싱턴 D.C. 혼잡지역 미터기 설치 → 주차 차량 수 <mark class="k">250% 증가</mark>. 같은 시기 뉴욕 미터기 요금 인상 → 회전율 <mark class="k">53% 증가</mark>.</p>
      <h3>설치 조건</h3>
      <ul><li>주차시간 제한이 있고 단속이 필요할 때</li><li>주차면의 <mark class="k">70% 이상</mark>이 차고 수요가 높을 때</li><li>대형 교통유발시설과 도보거리 안에 있을 때</li><li>높은 회전율이 관측되어 단속이 필요하고 공주행이 자주 보일 때</li></ul>
      <h3>단점</h3>
      <ul><li>미터기 가격($200, two-headed) 및 설치비</li><li>유지관리비를 예산에 반영해야</li><li>요금 회수 비용</li><li>파손(vandalism)</li></ul>
      <div class="memo"><b class="h">수업 필기</b>설치 조건 목록에 "유의해서 읽어볼 것". 회전율 제고, 단기화, 공운전, 대형 교통유발시설 밑줄.</div>` },
    { title: '혼잡비·주차세·할증·주차면 감축', pages: '69', html: `
      <ul>
        <li><b>혼잡비 방식</b>: 단기주차 요금 인하 + 장기주차 요금 인상 → 통근이 아닌 다른 목적의 주차를 권장.</li>
        <li><b>주차세</b>: 흔치 않은 방법(San Francisco). 시행 경험이 적어 효과를 말하기 어렵다.</li>
        <li><b>할증료(surcharge)</b>: 특정 이용자에게 부과해 수단선택에 영향. 업주가 근로자 차량이 <b>SOV</b>면 할증하면 수단선택이 달라짐.</li>
        <li><b>수요 감소 vs 공급 감소</b>: 요금 인상은 <b>수요</b>를 줄이고, 주차면 제한은 <b>공급</b>을 줄인다. 두 방법의 결과는 <mark class="k">통상 비슷</mark>.</li>
        <li><b>주차면 감축</b>: 다른 TSM의 결과나 주변 개발로 없어지는 경우 외엔 실제로 주차면 수를 줄이는 선택은 드물다.</li>
      </ul>
      <div class="card" style="background:var(--surface-2);box-shadow:none;margin:10px 0">
        <b>사례: 1972년 피츠버그</b>
        <p style="margin:6px 0 0">주차장 업자 <b>3일간 파업</b>으로 주차공간 <mark class="k">80%</mark> 폐쇄 → 첨두 교통량 <mark class="k">25% 감소</mark>, CBD 통근자 <mark class="k">75%</mark>가 대중교통으로 전환.</p>
      </div>
      <div class="tip"><b class="h">핵심 메시지</b>도심 정체 해결을 위한 주차관리 정책엔 반드시 <b>대중교통 서비스 수준 향상</b>이 함께 가야 한다.</div>
      <div class="memo"><b class="h">수업 필기</b>SOV = "나홀로 차량", Surcharge = "추가". "80% 폐쇄" 밑줄, "25%" 동그라미.</div>` },
    { title: 'P&R ① 목적과 계획 지침', pages: '70', html: `
      <ul>
        <li><b>목적</b>: CBD로 출입하는 차량 수를 줄이는 또 하나의 방법. 대중교통·밴풀·카풀 이용자를 위해 건설. <b>승용차를 완전히 포기하게 하는 게 아니라서</b> 성공적이었다.</li>
        <li><b>대중교통과의 연계</b>: P&amp;R과 대중교통의 연계는 상당히 효과적인 <mark class="k">두 교통수단 간의 결합</mark>. 설계·운영이 대중교통 서비스와 조화를 이뤄야. 고속도로변에 설치해 HOV 차로로 직결하기도.</li>
      </ul>
      <h3>계획 지침</h3>
      <ul>
        <li>차량 순환과 보행자 안전을 위해 충분히 클 것</li>
        <li>CBD에서 <mark class="k">최소 1.5km 이상</mark> 떨어지되, <mark class="k">5~6km</mark> 정도가 이상적</li>
        <li>고밀도 지역으로 향하는 교통량 많은 축(고속도로 인접)에, 그 축의 혼잡 구역 이후(CBD에서 볼 때 바깥)에 설치</li>
        <li>되도록 기존 주차부지를 이용, 개발비가 최소인 곳</li>
        <li>다른 대중교통시설과의 경쟁을 피하는 위치</li>
        <li>지역 교통·환경에 부정적 영향이 없는 위치</li>
        <li>버스·승용차의 접근이 편리하게</li>
        <li>버스 배차간격은 첨두시 <mark class="k">5분</mark>이 적당, 최소 <b>시간당 1대</b>는 운영</li>
        <li>이용 촉진을 위해 주차비는 <b>무료나 아주 저렴</b>하게</li>
      </ul>
      <div class="memo"><b class="h">수업 필기 · 출제 힌트</b>"<b>꼭 알아둘 것</b>" (Park and Ride Lot 제목에 박스). P&amp;R = 환승주차장. "두 교통수단간의 결합" 박스. 계획지침 전체에 괄호.</div>` },
    { title: 'P&R ② 태동·효과·설계', pages: '71', html: `
      <p><b>태동</b>: 미국 <mark class="k">코네티컷주 교통부</mark>가 고속도로 IC 관련 연구 중, 카풀을 위해 도로부지에 위험·불법 주차한 차량 <b>1천여 대</b>를 확인하면서 시작.</p>
      <h3>P&amp;R Lot의 효과 ☆☆☆</h3>
      <ol>
        <li>Express bus 서비스의 <mark class="k">coverage 확대</mark> (Hub &amp; Spokes)</li>
        <li>대중교통 노선이나 도로의 이용을 높인다</li>
        <li>버스 노선(route) <b>패턴을 간략</b>하게 한다</li>
        <li><b>저밀도 지역</b>에서 버스 주행거리를 줄인다</li>
        <li>Express bus 서비스의 질 향상 (<mark class="k">Reliability = 정시성</mark>)</li>
      </ol>
      <h3>설계·운영 고려사항</h3>
      <ul><li>효과적인 유출입시설 위치와 차량 내부순환</li><li>주차공간 적정성, layout, landscaping</li><li>포장과 조명</li><li>편안한 shelters와 자전거 수용시설</li><li>교통제어시설 설치·운영</li><li>노약자·장애인 고려</li><li>밴풀·카풀 활동 고려</li></ul>
      <div class="memo"><b class="h">수업 필기 · 출제 힌트</b>Impact에 별 세 개 + "효과". "<b>중요한 거 한두 개 물어보면 답할 수 있어야 함.</b>" Reliability 박스 → "정시성".</div>` },
    { title: 'P&R ③ 위치와 신규·공유 부지', pages: '72', html: `
      <p><b>위치 고려</b>: 평탄하고 배수가 좋은 부지, 인접 개발·토지이용과 호환, 향후 확장에 문제없는 곳, 진입(inbound) 차량을 위해 <mark class="k">도로의 오른쪽</mark>.</p>
      <p><b>신규 부지 선호</b>: 기존 부지 활용은 경제적일 수 있지만 교통운영 문제가 많아 신규 부지가 선호된다.</p>
      <div class="grid two">
        <div><h3>공유 부지(Shared lots) 장점</h3><ul><li>즉시 활용, 신속한 시행</li><li>주차부지·접근로가 이미 존재</li><li>수요 시험용으로 잠정 사용 가능</li><li>쇼핑 등 다른 기회 → ridership 증가 기대</li></ul></div>
        <div><h3>공유 부지 단점</h3><ul><li>기존 layout 안에서만 운영</li><li>향후 확장이 불가능한 경우 많음</li><li>필요한 만큼 공간이 될지 불투명</li><li>amenities가 일시적일 수 있음</li><li>(오후) 첨두시 복합 사용으로 혼잡 심화 가능</li></ul></div>
      </div>` },
    { title: 'P&R ④ 규모·보행거리·배차간격·출입구', pages: '73–74', html: `
      <p><b>규모 결정 요인</b>: 도보거리, 대중교통 배차간격, 기타.</p>
      <ul>
        <li><b>도보거리</b>: 주차지역~대기 버스 이상적 거리 <mark class="k">100~120m</mark>, 실질적으로 <mark class="k">180~300m</mark>까지. Texas 경험: <mark class="k">200m</mark>를 넘으면 많은 운전자가 주차제한구역에 주차.</li>
        <li><b>배차간격</b>: 이상적으로 <mark class="k">5~10분</mark>. 첨두 3분 간격 성공 사례도 많은데, 이 경우 승강장 하나당 <mark class="k">1,800면</mark>을 넘으면 안 된다.</li>
        <li><b>기타</b>: 부적절한 접근지점은 이용 차량 수를 제한, 긴 배차간격은 당연히 작은 시설을 요구. 환승 목적이면 최소 <mark class="k">250면</mark>.</li>
      </ul>
      <h3>출입(Access/Egress) 설계</h3>
      <ul>
        <li>최소 <mark class="k">2개</mark>의 access/egress point</li>
        <li>간선도로나 고속도로 연결로 대신 <b>collector/local street</b>(하위도로)에 출입구</li>
        <li>교차로나 고속도로 운영을 방해하지 않는 위치</li>
        <li>진입 차량을 위해 되도록 도로 <b>오른쪽</b>에</li>
        <li>대중교통 차량용 <b>별도 출입시설</b></li>
      </ul>
      <h3>기능적 고려 (74)</h3>
      <ul><li>장기주차 지역과 버스 탑승지역 간 적절하고 편리한 거리</li><li>교통약자·자전거·오토바이 주차시설</li><li>택시·준대중교통·<mark class="k">Kiss &amp; Ride</mark>용 (초)단기 주차구역</li><li>보행동선</li></ul>
      <div class="memo"><b class="h">수업 필기</b>300m 박스, 200m 밑줄. Bus Headway 위 "지하철". collector/local st. → "하위도로". Kiss &amp; Ride → "<b>배웅주차</b>". 배치도에 시내(위)·교외(아래), "traffic 방해↓".</div>` },
    { title: '교체법: 환승시설·환승센터 (별도본 78)', pages: '78', html: `
      <p><b>국가통합교통체계효율화법</b> (약칭: 통합교통체계법, 수업 약칭 <mark class="k">'교체법'</mark>) 제2조 정의 중:</p>
      <dl class="kv">
        <dt>12. 환승시설</dt><dd>육상·해상·항공 교통수단의 여객 등 이용자가 다른 <b>노선</b>이나 다른 <b>교통수단</b>을 편리하게 이용하도록 하기 위하여 주차장, 공항여객터미널, 항만대기실, 철도역, 도시철도역, 버스정류소 또는 여객자동차터미널 등의 기능을 제공하는 시설</dd>
        <dt>13. 환승센터</dt><dd>교통수단 간의 연계교통 및 환승활동을 원활하게 할 목적으로 <mark class="k">일정 환승시설이 상호 연계성을 갖고 한 장소에 집합</mark>되어 있는 시설</dd>
      </dl>
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>환승센터 유형</th><th>주된 기능</th></tr></thead><tbody>
        <tr><td>가. <mark class="k">주차장형</mark></td><td>대중교통 이용자의 주차 및 환승활동 지원</td></tr>
        <tr><td>나. <mark class="k">대중교통 연계수송형</mark></td><td>대중교통수단 간의 연계수송 및 환승활동 지원</td></tr>
        <tr><td>다. <mark class="k">터미널형</mark></td><td>터미널 및 환승활동 지원</td></tr>
      </tbody></table></div>
      <dl class="kv">
        <dt>15. 복합환승센터</dt><dd>열차·항공기·선박·지하철·버스·택시·승용차 등 교통수단 간의 원활한 연계교통 및 환승활동과 상업·업무 등 사회경제적 활동을 <b>복합적으로 지원하기 위하여</b> 환승시설 및 환승지원시설이 상호 연계성을 가지고 한 장소에 모여 있는 시설</dd>
      </dl>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>복합환승센터 유형</th><th>내용</th></tr></thead><tbody>
        <tr><td>가. <mark class="k">국가기간</mark>복합환승센터</td><td>국가기간교통망 구축을 위한 <b>권역 간</b> 대용량 환승교통의 효율적 처리 + 상업·문화·주거·숙박 등 지원기능을 복합 수행 (제45조 지정)</td></tr>
        <tr><td>나. <mark class="k">광역</mark>복합환승센터</td><td>주로 <b>권역 내</b> 환승교통 처리 + 상업·문화·주거·숙박 등 지원기능 복합 수행 (제45조 지정)</td></tr>
        <tr><td>다. <mark class="k">일반</mark>복합환승센터</td><td>가·나목을 제외한 것으로 <b>지역 내</b> 환승교통 처리가 주된 기능 (제45조 지정)</td></tr>
      </tbody></table></div>
      <div class="memo"><b class="h">수업 필기 · 출제 힌트</b>"환승시설 여러 개 → 환승센터." "<b>교체법 이런 데에서도 문제 내겠다고 언급</b>", "<b>4지선다 이런 거 물어본 듯</b>". 노선·교통수단·연계·환승·집합, 가/나/다, 복합·지원하기 위하여·국가기간·광역에 표시.</div>
      <div class="tip"><b class="h">시험 포인트</b>환승시설(개별 시설) ⊂ 환승센터(여러 환승시설이 한 장소에 집합) ⊂ 복합환승센터(환승 + 상업·업무 등 사회경제 활동을 복합 지원). 환승센터 3유형(주차장형·연계수송형·터미널형)과 복합환승센터 3유형(국가기간·광역·일반)을 섞어 내는 4지선다에 주의.</div>` }
  ]
});

/* ===================== 3-3 ===================== */
T.chapters.push({
  id: 'c10', no: '3-3', title: '친환경 교통수단', pages: '75–84',
  summary: 'ARZ, 함께타기(ridesharing), 자전거·보행으로 이동성은 유지하면서 VMT를 줄인다.',
  sections: [
    { title: '개요와 차량진입제한구역(ARZ)', pages: '75', html: `
      <p><mark class="k">Ridesharing(함께타기), HPTM(인력교통수단), ARZ(차량진입금지구역)</mark> 등은 혼잡지역·첨두시의 이동성(mobility)을 바꾸지 않으면서 <b>VMT를 줄이는</b> TSM action. VMT 감소 → 에너지 절감, 대기오염 감소.</p>
      <ul>
        <li><b>ARZ 정의</b>: 보행전용구역(pedestrian mall)과 비슷. 큰 도시 CBD 곳곳에 작게 형성되며 차량 이동을 제한. CBD 바깥에 fringe parking과 그 구역을 오가는 transit service 제공. 교통통제 외에 <b>CBD 경제 활성화·보전</b>에도 유용.</li>
        <li><b>사례</b>: Miami Beach, Kalamazoo, Providence, Pomona. 함께 볼 것: 런던 <mark class="k">ULEZ</mark>, 유럽 <mark class="k">LEZ</mark>, 이탈리아 <mark class="k">ZTL</mark>.</li>
        <li><b>Traffic cells</b>: 유럽에서 승용차 통행 제한에 사용. 도시 구역을 <b>cell</b>로 나누고 사이에 물리적 장벽을 설치해 통행 차단. 구역을 둘러싼 <b>환상도로</b>가 있고 정해진 위치에서만 진출입.</li>
      </ul>
      <p><b>ARZ 계획·분석 시 확인할 것</b></p>
      <ul><li>모든 종류의 차량에 대한 영향 평가</li><li>통행 제한이 지역사회에 미치는 경제효과</li><li>ARZ가 구역 전체 교통흐름의 질을 떨어뜨리는지</li></ul>
      <div class="memo"><b class="h">수업 필기</b>Ridesharing·HPTM·ARZ 박스, "VMT 값을 감소시킨다" 밑줄. ULEZ·LEZ·ZTL 동그라미. 사진 옆 "대중교통전용지구".</div>` },
    { title: 'ARZ 구현: Bus Gate와 Rising Bollard', pages: '76', html: `
      <ul>
        <li><mark class="k">ANPR</mark> (Automatic Number Plate Recognition, 자동번호판인식) 방식 단속·통제 — Bus Gate</li>
        <li><mark class="k">(Flexible) Rising Bollard</mark>로 단속·통제 — 허가 차량이 올 때 기둥이 내려가는 방식</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>"<b>이런 거 이름 익숙해질 것.</b>" 두 방식 모두 동그라미.</div>` },
    { title: 'Ridesharing의 정의와 형태', pages: '77', html: `
      <p><b>정의</b>: 준대중교통의 일환으로, 비슷한 OD를 비슷한 시간에 통행하는 <b>두 명 이상이 사전 합의</b>로 '함께 타는' 행태. 대부분 통근통행이지만 다른 목적도 포함하며 carpool·vanpool에 한정되지 않는다.</p>
      <p>형태: Bus pooling(공공·민간), Taxi pooling, Shared-ride Taxi(합승), Public Transit.</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>카풀 (Carpool)</th><th>밴풀 (Vanpool)</th></tr></thead><tbody>
        <tr><td>차량</td><td>이용자 <b>자기 소유</b> 차량, <b>교대로 운전</b></td><td>운전자 한 명·고용주·준대중교통 회사 소유 밴</td></tr>
        <tr><td>요금</td><td><b>금전 거래 없음</b> (운전 서비스를 서로 제공)</td><td>이용자가 <b>요금 지불</b></td></tr>
        <tr><td>규모</td><td>보통 2~4명</td><td>보통 <mark class="k">10~12명</mark>, <mark class="k">10마일 이상</mark> 편도 통근</td></tr>
        <tr><td>기타</td><td>고용주가 우선·무료 주차 같은 인센티브 제공</td><td>12명 밴풀 1대의 VMT ≪ 4명씩 카풀 3대의 VMT</td></tr>
      </tbody></table></div>
      <p>카풀·밴풀 이용자의 비용 절감은 참여 인원과 통행거리에 따라 상당할 수 있다.</p>
      <div class="memo"><b class="h">수업 필기</b>Shared-ride Taxi 옆 "끼워넣기(?)". Public Transit ★ → "<b>9인승 이상에 최소 6명 이상 타야 버스전용차로 이용 가능</b>", 예) 밴, 카니발.</div>` },
    { title: 'Ridesharing의 편익', pages: '78', html: `
      <div class="grid three" style="margin:10px 0">
        <div class="card" style="box-shadow:none;background:var(--surface-2)"><b>개인</b><ul><li>개인차량 이용 감소</li><li><mark class="k">통행비용 절감</mark></li><li>안락한 좌석 보장</li><li>보험료 감소(보험사 정책에 따라)</li><li>사교 기회(socialization)</li><li>지역 환경·에너지 목표 기여</li></ul></div>
        <div class="card" style="box-shadow:none;background:var(--surface-2)"><b>고용주</b><ul><li>종사자 <b>주차시설 수요 감소</b></li><li>주변 교통혼잡 감소</li><li>고용주 밴을 광고·주간 업무통행에 활용</li><li>사업장 <mark class="k">재배치</mark> 때 근로자 고용 유지</li></ul></div>
        <div class="card" style="box-shadow:none;background:var(--surface-2)"><b>공공·지역사회</b><ul><li>대중교통이 없는 사람에게 서비스</li><li>교통량·혼잡 감소</li><li>연료 소비 감소</li><li>대기질 향상</li></ul></div>
      </div>
      <p><b>잠재 편익 예</b>: 평균 재차인원이 <mark class="k">1.40 → 1.56</mark>으로 높아지면 같은 도로·시스템의 교통량이 약 <mark class="k">10%</mark> 감소.</p>
      <div class="memo"><b class="h">수업 필기</b>"Benefit 종류 간단히 기억" — 개인/고용주/공공 세 범주에 동그라미.</div>` },
    { title: 'Ridesharing 시행 고려사항', pages: '79–80', html: `
      <ul>
        <li><b>함께 시행하면 좋은 action</b>: <mark class="k">HOV 차로</mark>, <mark class="k">통행료·주차요금 할인</mark>, <mark class="k">업무시간 조절</mark>, P&amp;R Lots.</li>
        <li><b>지역 단위 프로그램</b>: 지역 <b>(para)transit operators와 충분히 협력</b>. 대중교통 서비스가 충분한 지역에서 함께타기를 강조하면 비생산적.</li>
        <li><b>법적 측면</b>: 밴풀·일부 카풀의 요금 징수가 규제 대상인지 문제 → 비영리면 제외 (<b>Surface Transportation Assistance Act of 1978</b>).</li>
        <li><b>연방 자금</b>: <b>1976 Federal Aid Highway Amendments</b> — 밴 구입, 프로그램 모니터링, 지역 신규 프로그램에 중앙정부 자금 지원 가능.</li>
        <li><b>보험</b>: 초기엔 밴풀 보험을 꺼림 — 한 차량에 책임 집중, 교통수단으로서 법적 모호성, 실제 손실 경험 부족. 지금은 거의 문제없음.</li>
      </ul>
      <h3>마케팅과 3M 사례</h3>
      <p>고용주 장려책: 업무차량 제공, 주차구역·요금 우대, 탄력 근무, 대중교통 pass·함께타기 비용 임금공제.</p>
      <div class="card" style="background:var(--surface-2);box-shadow:none;margin:10px 0">
        <b>3M 밴풀 (Minnesota St. Paul, 1970년대 초)</b>
        <ul style="margin:6px 0 0"><li>참여 직원 <mark class="k">8명당 밴 1대</mark></li><li>요금은 <b>손익분기점</b>에서 저렴하게</li><li>운전자는 무료, 개인 용무에 저가 사용, 추가 승객 요금은 운전자 몫</li><li>월 $15 주차요금 없이 무료 주차, 통행시간 절감</li></ul>
        <p style="margin:6px 0 0">결과: 공장 입구 혼잡 크게 감소, 주차수요가 줄어 약 <mark class="k">$3,000,000</mark>의 주차장 시설비 절감.</p>
      </div>
      <div class="memo"><b class="h">수업 필기</b>"3가지(?)" — HOV 차로 박스, 통행료·주차요금 할인, 업무시간 조절 표시(P&amp;R은 표시 없음). "(para)transit operators와" 박스.</div>` },
    { title: '자전거 교통', pages: '81–83', html: `
      <p>Fitness craze로 인력교통수단이 부활. 장점: 운동과 건강, 차량혼잡 감소, 도시환경 개선.</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Class</th><th>형태</th></tr></thead><tbody>
        <tr><td><b>Class Ⅰ</b></td><td>자전거 전용으로 <mark class="k">완전히 분리</mark>. 공원·교외에서 볼 수 있음. 현실적 타당성이 적고 항상 바람직하진 않다 — 도로 공동이용이 더 경제적일 수 있음</td></tr>
        <tr><td><b>Class Ⅱ</b></td><td>제한된 구역에서 <mark class="k">(반)전용</mark>. 일반적인 자전거도로</td></tr>
        <tr><td><b>Class Ⅲ</b></td><td>교통표지나 노면 stencil로 지정된 차도에서 <mark class="k">통행권 공유</mark></td></tr>
      </tbody></table></div>
      <p><b>도시 자전거 시스템 요건</b>: 통행유발시설에 즉각 접근, 주거지~활동지역까지 확실하게 구획된 <b>연속 노선</b>, 편리하고 안전한 <b>보관시설</b>.</p>
      <p><b>자전거도로가 덜 쓰이는(underuse) 이유</b>: 직행·최단거리가 아님, 정지신호·표지가 너무 많음, 유지관리 부실, 교통량·주차차량이 많음, <b>잘 알지 못하는 도로</b>(→ 홍보), 노선 불연속.</p>
      <ul>
        <li><b>Bike and Ride</b>: 정류장 근처에 편리하고 안전한 보관시설 → 대중교통 이용 장려. 버스 이용 후 자기 자전거를 쓰려는 수요를 위한 <mark class="k">"Piggyback"</mark> 설비도 있음.</li>
        <li><b>운영상 우려</b>: 가장 큰 위험은 <b>교차로</b>(회전 이동, 자전거-승용차 간 불명확한 통행권). 예) 자전거 직진·승용차 우회전 때 통행권은? 정지선 통과 여부? 좌회전 시 차로변경·양보? → 운전자 교육과 이해, 자전거도로 최적 설계로 대응.</li>
        <li><b>교차로 설계</b>: 자전거 이동의 연속성 보장, 상충을 줄이는 도류화 기법.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>-underuse- 밑줄, "잘 알지 못하는 도로" 옆 "홍보". Piggy·back 동그라미, "통행권은" 밑줄. 교차로 그림은 "NACTO 그림".</div>` },
    { title: '보행 공간', pages: '84', html: `
      <ul>
        <li><b>보행자 시설</b>: 보행자와 다른 수단 간 상충을 줄이는 수단 — 육교, 지하도(터널), 보행자 전용구역, 고가통로.</li>
        <li><b>기존 시설 개선</b>: 보도 확대, 조명 확충, 쓰레기통·소화전·가판대 재배치, 고가통로·지하광장 설치.</li>
        <li><b>Conveyer belts</b>: 보행자 <mark class="k">moving walkway</mark>. 공항에 흔하지만 효과적인 이동 수단.</li>
        <li><b>Pedestrian malls</b>: LA, San Diego, Hartford, NYC, San Francisco 등.</li>
        <li><b>Superblocks</b>: <mark class="k">2016년 바르셀로나</mark>가 선도한 walkable city의 상징. <mark class="k">9개 블록</mark>을 하나로 묶어 차량은 둘러싼 도로로, 내부는 보행·자전거 등 다양한 도시활동으로. (슬라이드 질문: "문제는?")</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>moving walkway·보행자 전용구역·Malls 박스, Superblocks·9개 블록 동그라미. 제목: "이면도로 부문도 참고하실 것".</div>` }
  ]
});

/* ===================== 3-4 ===================== */
T.chapters.push({
  id: 'c11', no: '3-4', title: '대중교통 · 준대중교통 서비스', pages: '85–95',
  summary: '마케팅·보안·쉘터·준공영제·요금정책으로 대중교통 이용을 늘리고, 준대중교통으로 서비스를 확장한다.',
  sections: [
    { title: '대중교통 서비스와 마케팅 목표', pages: '85', html: `
      <ul>
        <li>대중교통 승객수(transit ridership) 증가 → 차량수요·VMT 감소 → <b>혼잡 감소와 흐름 개선</b>.</li>
        <li>HOV 차로 같은 운영기법이나 승용차 제한으로 동기를 주는 것 외에, <b>서비스 개선</b>으로도 이용을 늘릴 수 있다.</li>
        <li><b>대중교통 마케팅</b> = 판촉, 모니터링, 평가. 주목적:
          <ol><li>대중교통에 대한 <b>호의적 이미지</b>를 만든다</li><li>이용 가능한 다양한 서비스를 <b>인식</b>시킨다</li><li>대중교통 이용을 장려하고 <mark class="k">승객수를 늘린다</mark></li></ol></li>
        <li><b>이용촉진 프로그램</b>: 특정 시간대나 목표 집단에 이용을 장려. 보통 염가로 보이는 <b>요금 할인</b>이 수반되고, 잠재 고객과의 소통 개선이 필요.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>Marketing Objectives 동그라미 → "대중교통 승객수 증가" 박스로 화살표.</div>` },
    { title: '마케팅 사례와 소통', pages: '86', html: `
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>도시</th><th>프로그램</th></tr></thead><tbody>
        <tr><td>Nashville</td><td>학생 요금 할인</td></tr>
        <tr><td>Pittsburgh</td><td>특별요금(화요일), wild card 버스 무료, 주말 할인권</td></tr>
        <tr><td>Seattle</td><td>CBD 내 무료 서비스</td></tr>
        <tr><td>Portland</td><td>혼선과 요금을 줄이려 zonal fees → fixed fees 전환</td></tr>
        <tr><td>Akron</td><td>Nickel day, Dime day 같은 특별한 날 할인 / Ride Metro T셔츠 입으면 할인 / 지역 라디오 호출주파수를 버스 측면에 게재(무료 라디오 광고 대가)</td></tr>
        <tr><td>Duluth</td><td>전화 정보센터</td></tr>
      </tbody></table></div>
      <ul>
        <li><b>시장조사</b>: 시행 전에 현재 니즈와 잠재 고객을 조사 → 기대와 <b>요금 지불의사(willingness to pay)</b>에 맞춘 요금정책.</li>
        <li><b>소통의 중요성</b>: 대중이 모르면 성공할 수 없다. 노선도·일정·회보·보도자료를 쇼핑몰·공공건물·은행 등에서 제공.</li>
        <li><b>매체</b>: TV, 라디오, 신문 광고, SNS, 개인방송.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>Nickel day·Dime day 동그라미. Seattle·Duluth에 ✗. "NYCTA. 맨해튼 무료 버스 서비스 실패".</div>` },
    { title: '보안 대책', pages: '87', html: `
      <ul>
        <li><b>범죄 노출</b>: 대중교통 이용자에게 매우 중요한 측면이 정류장·차량 내 범죄에 대한 <b>지각된 노출</b>.</li>
        <li><b>운영적 해법</b>: 서비스가 <mark class="k">자주(frequent interval)·정시(reliable)</mark>로 운행되면 대기시간이 줄어 범죄 여지가 최소화.</li>
        <li><b>강도 억제</b>: <mark class="k">Exact fare</mark>(정액 지불)는 돈에 접근하기 어려워 절도 억제. 선불·후불 요금제(승차권·토큰·카드)도 도움.</li>
        <li><b>설계적 해법</b>: 정거장·쉘터가 <b>양호한 시야</b>를 제공(들어오는 차량 확인, 안전감), 양질의 <b>조명</b>(밝기·색상) → <mark class="k">CPTED</mark>.</li>
      </ul>
      <p><b>보안 대책 예</b>: 경찰·안전요원 순찰, 경찰견, 민간 조직 감시, CCTV, 경보와 신호, 차량 내 감시체계, 양방향 무전.</p>` },
    { title: '쉘터와 터미널', pages: '88', html: `
      <ul>
        <li><b>쉘터의 유용성</b>: 승객을 <b>악천후로부터 보호</b>해 이용 장려, 대기 승객 <b>좌석</b> 제공.</li>
        <li><b>쉘터 편의시설</b>: 전화기, 난방·공조, 조명, 쓰레기통, 자동판매기.</li>
        <li><b>터미널</b>: 대합실보다 훨씬 크고 대중교통 운영의 중심(<b>hub</b>). 기본 목적은 승객의 <b>집산·분산과 환승</b>. 보통 <b>CBD 중심</b>이나 <b>외곽 P&amp;R</b>에 위치.</li>
      </ul>
      <p><b>터미널의 장점</b></p>
      <ul><li>많은 대중교통 차량과 승객을 동시에 처리</li><li>노외(건물 내) 탑승 → 연석차로 흐름을 방해하지 않고 승차시간 감소, 노상 탑승 폐해 제거</li><li>외곽에 두면 CBD로 향하는 교통량 감소</li></ul>
      <p><b>Municipalisation</b>: 우리나라는 민영 버스회사에 public aid를 주고 있으며 (준)공영제 전환 문제가 부각.</p>` },
    { title: '우리나라 버스 준공영제', pages: '89–90', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>유형 (슬라이드 89)</th><th>노선 소유권</th><th>운영</th><th>운영형태</th><th>도입</th></tr></thead><tbody>
        <tr><td><b>노선 관리형</b></td><td>공공</td><td>민간</td><td>입찰경쟁으로 일정 기간만 운영 위탁, 업체 간 경쟁으로 비용 절감</td><td>경기도</td></tr>
        <tr><td><b>위탁 관리형</b></td><td>공공</td><td>민간</td><td>정부가 재정 지원과 함께 운영 위탁</td><td>–</td></tr>
        <tr><td><b>수입금 관리형</b></td><td>민간</td><td>민간</td><td>민관이 수입금을 공동 관리, 운영비용을 지자체가 보전. 노선 안정적 운영, 비용상승 우려</td><td>서울시, 5개 광역시</td></tr>
      </tbody></table></div>
      <p class="small muted">출처: 사회공공연구원, 「버스 준공영제 운영실태와 공공성 강화방안」. 필기: "이건 좀 옛날 말".</p>
      <h3>★ 방식별 장단점 (슬라이드 90)</h3>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>수입금공동관리형</th><th>노선입찰형</th><th>위탁운영형</th></tr></thead><tbody>
        <tr><td><b>개요</b></td><td>노선 수입금을 <b>공동 관리</b>하고 운행실적에 따라 배분</td><td>업체의 노선 소유권을 배제하고 <b>경쟁입찰</b>로 업체 선정</td><td><b>적자노선 등 일부 노선</b>을 민간업체 등에 위탁관리</td></tr>
        <tr><td><b>장점</b></td><td>· 업체 간 과다경쟁 최소화<br>· 업체의 일정 수준 수익 보장</td><td>· 노선운영의 <b>공공성 강화</b><br>· 경쟁구조로 비용절감·서비스 개선 용이<br>· 비수익노선 안정적 운영</td><td>· 공영제 대비 운영비 절감<br>· 적자노선 운행업체 부담 해소<br>· 노선입찰보다 행정 부담 경감</td></tr>
        <tr><td><b>단점</b></td><td>· 행정관리·운영시스템 구축 필요<br>· 업체의 자발적 <b>경영개선 노력 소홀</b> 우려<br>· 중장기 <b>재정부담 가중</b></td><td>· 입찰을 위한 노선권 확보 필요<br>· 사업 확대 시 전담 관리기구 필요<br>· 입찰·갱신에 고도의 전문성과 많은 행정력</td><td>· 위탁운영업체 관리 필요<br>· 운영업체 변경이 어려움</td></tr>
      </tbody></table></div>
      <p class="small muted">슬라이드 옆 자료: 경기도 공공버스 「노선입찰제 준공영제」 정책자료집.</p>
      <div class="memo"><b class="h">수업 필기</b>표 왼쪽 위 ★, 세 유형 이름에 동그라미, 표 전체에 괄호.</div>
      <div class="tip"><b class="h">시험 포인트</b>세 유형의 개요·장점·단점을 짝지어 기억. 서울·광역시는 수입금공동관리형, 경기도는 노선입찰형.</div>` },
    { title: '요금정책과 징수 방식', pages: '91–92', html: `
      <ul>
        <li><b>첨두 요금</b>: 비첨두 이용 장려와 비첨두 운영비 보충을 위해 수요가 몰릴 때 더 높게, 비첨두엔 더 낮게.</li>
      </ul>
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>요금 지불 방식</th><th>내용</th><th>필기 예</th></tr></thead><tbody>
        <tr><td><mark class="k">Flat fare</mark> 균일요금</td><td>승·하차 위치와 상관없이 이용할 때마다 같은 요금</td><td>뉴욕(?)</td></tr>
        <tr><td><mark class="k">Zonal fare</mark> 구역요금</td><td>전 노선을 몇 개 구역으로 나눠 구역 이동에 따라 차등</td><td>신분당선</td></tr>
        <tr><td><mark class="k">Distance base</mark> 거리기반</td><td>승객의 통행거리에 따라 부과</td><td>일본</td></tr>
      </tbody></table></div>
      <ul>
        <li><b>징수 방법</b>: cash, prepaid system(debit card), post paid system.</li>
        <li><b>정액 현금(exact fare)</b>이 일반적 — 잔돈 문제 때문. 잔돈을 거슬러 주는 operator도 있다.</li>
        <li><b>선불 방식</b>: 승차권, 토큰, 펀치카드, 통행권(pass)·허가증, debit 카드(잔고 자동 관리).</li>
      </ul>
      <h3>후불 요금제 (Postpaid)</h3>
      <p>신용카드로 징수하고 월간 청구서 발송.</p>
      <div class="grid two">
        <div><b>장점</b><ul><li>간편하고 편리</li><li><b>탑승시간</b> 절감</li><li>운영에 도움 되는 각종 <b>자료</b> 제공</li><li>현금 취급 비용 절감</li><li>절도·부정행위 위협 감소</li><li>새 요금정책 도입·모니터링 용이</li><li>고용주·사회기관의 <b>요금 분담</b> 가능</li></ul></div>
        <div><b>단점</b><ul><li>청구·징수 절차 확립 필요</li><li>분실 신용카드 재발급이 까다로움</li><li>신규·전환 이용객을 위한 다른 방법도 여전히 필요</li><li>지불 <b>체납</b> 발생</li><li>기존 체계보다 비용이 많이 듦</li></ul></div>
      </div>
      <div class="memo"><b class="h">수업 필기</b>"<b>Toll / fee / fare</b>" 구분 — toll은 도로·교량 통행료, fee는 시설·서비스 이용 요금(주차요금 등), fare는 대중교통 운임.</div>` },
    { title: '준대중교통(Paratransit)으로 서비스 확장', pages: '93', html: `
      <ul>
        <li><b>대중교통 서비스 효율</b>: 좁은 지역에 수요가 많을 때 가장 효과적 → 인구밀도가 낮아지면 효율도 떨어진다.</li>
        <li><b>Paratransit의 역할</b>: 덜 밀집한 지역이나 특별한 통행수요가 있을 때 대중교통을 <b>대체(substitute)</b>하거나 <b>연계(link)</b>.</li>
        <li><b>정의</b>: 접두사 para = <mark class="k">'closely related to'</mark>, transit = 전통 대중교통 서비스.</li>
        <li><b>전형적 적용</b>: 대중교통 체계가 없는 소규모 도시, 교통약자처럼 <b>개인화·door-to-door</b> 서비스가 필요한 소수.</li>
      </ul>
      <h3>준대중교통의 특징</h3>
      <ol><li><mark class="k">탄력적인 노선 변경</mark></li><li>승객의 안락(편안함)</li><li>편의</li><li>사생활 보장</li><li><mark class="k">적은 수요와 저밀도 지역에 최선</mark></li></ol>
      <p><b>형태 2가지</b>: prearranged ridesharing(사전합의 함께타기), demand-responsive paratransit(수요응답형).</p>
      <div class="memo"><b class="h">수업 필기 · 출제 힌트</b>Paratransit = "준 대중교통". 특징 5개 모두 동그라미 — "<b>3~4개 이런 거 준대중교통수단의 특징이 뭐냐 하면 얘기할 수 있어야 함.</b>" 탄력적 노선 변경 옆 "노선이 없네(?)", "<b>DRT 같은 거</b>".</div>` },
    { title: '준대중교통의 형태', pages: '94', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>형태</th><th>분류</th><th>설명</th></tr></thead><tbody>
        <tr><td>Carpool</td><td>사전합의형</td><td>—</td></tr>
        <tr><td>Vanpool</td><td>사전합의형</td><td>—</td></tr>
        <tr><td><mark class="k">Subscription buses</mark> (전세버스)</td><td>사전합의형</td><td>보통 <b>장거리 통근자</b>들이 모여 조직. 대중교통이 없거나 불편한 노선을 따라 운영 (대규모 밴풀?)</td></tr>
        <tr><td><mark class="k">Dial-a-ride / Dial-a-bus</mark></td><td>수요응답형</td><td>이용자 필요에 반응. 우리나라 <b>콜택시</b>가 예. 승용차·밴·미니버스, 여러 명 pick-up을 위해 복잡한 경로 운행</td></tr>
        <tr><td><mark class="k">Shared-ride taxi</mark></td><td>수요응답형</td><td>보통 승용차·station wagon으로 한 명 이상을 (시차를 두고) 태워 같거나 다른 곳에 내려줌. <b>우리나라에서 현재 불법</b></td></tr>
        <tr><td><mark class="k">Jitney</mark></td><td>수요응답형</td><td>소형버스·밴·특장택시. <b>schedule은 없지만 fixed route</b>를 따라 운행, 특별 요구 시 노선 변경 가능. 탑승지점이 있지만 어디서든 불러 세울(hailed) 수 있음. 저소득 지역에서 실행 가능</td></tr>
      </tbody></table></div>
      <p class="small muted">사전합의형 = Prearranged ridesharing, 수요응답형 = Demand responsive paratransit.</p>
      <p><b>Informal service</b>: 무허가 택시(gypsy cab)가 도시 빈민가에서 운행되기도.</p>
      <div class="memo"><b class="h">수업 필기</b>carpool, vanpool, Subscription Buses에 동그라미.</div>` },
    { title: '준대중교통의 장점', pages: '95', html: `
      <ol>
        <li>대중교통 운영에 <mark class="k">지선(feeder)</mark> 서비스 제공</li>
        <li><mark class="k">첨두시 서비스 용량</mark>을 추가 제공</li>
        <li><b>저밀도 지역</b>으로 대중교통 서비스 확대</li>
        <li>CBD 내 <b>단거리</b> 대중교통 제공</li>
        <li><b>수요가 적은 시간대</b>에 서비스 제공</li>
        <li><b>교외</b> 지역 승용차 통행의 대용</li>
        <li><mark class="k">이동성이 제한된 집단</mark>(limited mobility group)의 요구 충족</li>
      </ol>
      <div class="memo"><b class="h">수업 필기</b>Advantages 박스, 7개 전체 괄호, 앞 두 개 동그라미. 아래 상황별 역할 표(Situation / Potential paratransit role)에 화살표 — "<b>이거 표 시험 안 낼 것</b>(?)"</div>` }
  ]
});

/* ===================== quiz ===================== */
T.quiz.push(
  { ch: 'c8', sec: 0, type: 'short', q: '첨두시 차량 수를 줄이는 TSM action 3가지를 쓰시오.', answer: '근무시간 조정(근무일 조정), 혼잡통행료 부과, 첨두시 트럭 제한', ref: '55' },
  { ch: 'c8', sec: 1, type: 'mc', q: '출퇴근 시차제(staggered work hours)에 대한 설명으로 옳은 것은?', choices: ['근로일수·근무시간은 그대로 두고 출발·도착 시각만 분산시킨다', '주 근무일을 4일로 줄이고 하루 근무시간을 늘린다', '근로자가 원하는 시간에 일하되 core time엔 모두 근무한다', '첨두시 통행에 요금을 더 부과한다'], answer: 0, exp: '③은 탄력근무제(flex time), ②는 주4일제.', ref: '56' },
  { ch: 'c8', sec: 1, type: 'mc', q: '1970년 맨해튼 시차출퇴근 프로그램에서 첨두시 대중교통 관련 시설 사용 감소율은?', choices: ['18~26%', '40%', '65%', '5~8%'], answer: 0, exp: '400여 사업장, 22만 명, 30분 일찍·늦게.', ref: '56' },
  { ch: 'c8', sec: 2, type: 'mc', q: '탄력근무제에서 모든 근로자가 근무해야 하는 시간대를 무엇이라 하는가?', choices: ['Core time', 'Peak time', 'Flex band', 'Staggered time'], answer: 0, exp: '예: 오전 10시~오후 3시.', ref: '57' },
  { ch: 'c8', sec: 3, type: 'mc', q: '근무시간 조정 프로그램의 <b>단점</b>으로 옳은 것은?', choices: ['기존 카풀을 와해할 수 있다', '시행비용이 매우 크다', '근로자 사기가 떨어진다', '시행에 장기간이 걸린다'], answer: 0, exp: '비용은 거의 무시할 정도, 즉시 시행 가능, 사기 증진은 장점.', ref: '58' },
  { ch: 'c8', sec: 3, type: 'ox', q: '대중교통 용량이 부족할 때는 시차제가 유용하지만 ridesharing에 부정적일 수 있고, 탄력제는 이 두 문제를 보완할 수 있다.', answer: true, ref: '58' },
  { ch: 'c8', sec: 3, type: 'mc', q: '근무시간 조정 프로그램이 가장 성공적인 사업장은?', choices: ['교대 수가 적고 근로자 간·근로자-소비자 간 상호관계가 적은 사업장', '교대 근무가 많은 공장', '고객 응대가 많은 서비스업 사업장', '근로자 간 협업이 많은 사업장'], answer: 0, ref: '58' },
  { ch: 'c8', sec: 4, type: 'mc', q: '주4일 근무제의 단점 중 VMT 증가와 관련된 것은?', choices: ['근무통행이 줄어 직장에서 멀리 살려는 경향이 높아진다', '결근이 줄어든다', '여가시간이 늘어난다', '초과근무 요구가 줄어든다'], answer: 0, ref: '60' },
  { ch: 'c8', sec: 4, type: 'mc', q: '1970년대 말 미국에서 주4일-일10시간제를 시행한 기업 중 이후에도 유지한 비율은?', choices: ['85~95%', '30~40%', '50%', '10% 미만'], answer: 0, exp: '3천 개 기업, 100만 명 대상.', ref: '60' },
  { ch: 'c8', sec: 4, type: 'ox', q: '주4일제는 주중 여가통행을 늘려 근무통행 감소분을 상쇄하는 경향이 있다.', answer: true, ref: '60' },
  { ch: 'c8', sec: 5, type: 'mc', q: '싱가포르가 1975년 도입한 혼잡통행료 제도와 효과로 옳은 것은?', choices: ['Area Licensing Scheme — 오전 첨두 교통량 약 40% 감소', 'ERP — 오전 첨두 교통량 약 25% 감소', 'ULEZ — 대기오염 40% 감소', 'Congestion Charge — 통행량 75% 감소'], answer: 0, exp: 'ALS 시행 때 CBD 주차요금도 크게 올렸다. 지금은 ERP.', ref: '61' },
  { ch: 'c8', sec: 5, type: 'ox', q: '혼잡통행료는 특정 지점에 부과하는 것보다 지역·구역 전체에 적용하는 것이 본 개념에 충실하다.', answer: true, ref: '61' },
  { ch: 'c8', sec: 6, type: 'mc', q: '간선도로상 트럭 1대의 제동·출발·주행이 유발하는 교통영향은 승용차 몇 대 수준인가?', choices: ['10대', '2대', '3대', '50대'], answer: 0, ref: '62' },
  { ch: 'c8', sec: 6, type: 'short', q: '런던에서 트럭 pickup·delivery를 야간으로 제한했다가 해제한 이유 3가지를 쓰시오.', answer: '밤 시간 소음 민원, 상인·업주 반대(야간 추가 인력·수당), 화물업계 반대(야간수당 등 부담)', ref: '63' },
  { ch: 'c8', sec: 6, type: 'ox', q: '트럭 수용에서 가장 중요한 것은 시간대와 관계없이 차로를 막는 상황을 만들지 않는 것이다.', answer: true, ref: '63' },

  { ch: 'c9', sec: 0, type: 'mc', q: '차량은 1년 중 평균 몇 %의 시간을 주차해 있는가?', choices: ['85%', '50%', '70%', '95%'], answer: 0, ref: '64' },
  { ch: 'c9', sec: 0, type: 'short', q: '주차관리와 관련해 내려야 하는 주요 결정사항 4가지를 쓰시오.', answer: '주차가 허용될 장소, 노상·노외 주차장에 배정할 주차면의 양, 주차면의 요금체계, 주차가 허용되는 시간(시각과 시간 길이)', ref: '64' },
  { ch: 'c9', sec: 1, type: 'mc', q: '2시간 이하 단기 주차장은 목적지에서 어느 거리 이내에 있어야 하는가?', choices: ['120~180m', '500m', '1.5km', '50m'], answer: 0, exp: '장기 주차자는 CBD에서 500m까지 걸어갈 의향.', ref: '65' },
  { ch: 'c9', sec: 1, type: 'mc', q: '주차면은 항상 몇 % 정도 비어 있는 것이 좋은가?', choices: ['10~15%', '30~40%', '1~2%', '50%'], answer: 0, exp: '가용 공간을 찾을 기회를 주기 위해. 꽉 차면 배회 차량이 직진교통과 상충.', ref: '65' },
  { ch: 'c9', sec: 1, type: 'ox', q: '용량과 안전 측면에서 일반적으로 노상주차가 노외주차보다 선호된다.', answer: false, exp: '<b>노외(off-street)</b> 주차장이 선호된다.', ref: '65' },
  { ch: 'c9', sec: 2, type: 'mc', q: '노상 단기주차의 적절한 시간제한은?', choices: ['30분~2시간', '4~6시간', '10분 이하', '제한 없음'], answer: 0, ref: '66' },
  { ch: 'c9', sec: 2, type: 'mc', q: '주차미터기를 발명한 사람과 연도는?', choices: ['Carl MaGee, 1935년', 'Carl MaGee, 1975년', 'Ebenezer Howard, 1898년', 'Henry Ford, 1920년'], answer: 0, ref: '66' },
  { ch: 'c9', sec: 3, type: 'mc', q: '주차요금 인상에 대한 설명으로 옳지 <b>않은</b> 것은?', choices: ['장기주차는 우대하고 단기주차를 단념시키는 방향으로 해야 한다', '대상 지역에 광범위하게 적용해야 효과가 있다', '많은 차량이 집과 직장에서 주차비를 내지 않아 첨두 교통류에는 영향이 제한적이다', '장기주차 감소로 인한 수익 감소는 단기주차 증가로 상쇄된다'], answer: 0, exp: '단기주차가 혜택을 보고 <b>장기주차(출퇴근)를 단념</b>시키는 방향.', ref: '67' },
  { ch: 'c9', sec: 3, type: 'ox', q: '주차규제는 강력한 단속이 뒷받침되지 않으면 무의미하다.', answer: true, ref: '67' },
  { ch: 'c9', sec: 4, type: 'mc', q: '주차미터기 설치 조건으로 옳지 <b>않은</b> 것은?', choices: ['주차면의 30% 미만이 찰 때', '주차시간 제한이 있고 단속이 필요할 때', '대형 교통유발시설과 도보거리 내에 있을 때', '높은 회전율이 관측되고 공주행이 자주 보일 때'], answer: 0, exp: '주차면의 <b>70% 이상</b>이 차고 수요가 높을 때.', ref: '68' },
  { ch: 'c9', sec: 4, type: 'mc', q: '주차미터기 설치·요금 인상 효과 사례의 연결로 옳은 것은?', choices: ['D.C. 미터기 설치 — 주차차량 수 250% 증가 / NY 요금 인상 — 회전율 53% 증가', 'D.C. — 회전율 53% 증가 / NY — 주차차량 250% 증가', 'Pittsburgh — 회전율 75% 증가', 'SF — 주차세로 교통량 25% 감소'], answer: 0, ref: '68' },
  { ch: 'c9', sec: 4, type: 'short', q: '주차미터기를 설치하는 목적(필요성) 3가지를 쓰시오.', answer: '회전율(turnover) 제고, park-and-visit 통행의 단기화 유도, 공운전(배회) 감소', ref: '68' },
  { ch: 'c9', sec: 5, type: 'mc', q: '1972년 피츠버그 주차장 업자 3일 파업의 결과로 옳은 것은?', choices: ['주차공간 80% 폐쇄 → 첨두 교통량 25% 감소, CBD 통근자 75% 대중교통 전환', '주차공간 50% 폐쇄 → 첨두 교통량 40% 감소', '주차공간 80% 폐쇄 → 교통량 변화 없음', '주차공간 25% 폐쇄 → 통근자 80% 대중교통 전환'], answer: 0, ref: '69' },
  { ch: 'c9', sec: 5, type: 'ox', q: '주차요금 인상(수요 감소)과 주차면 제한(공급 감소)의 시행 결과는 통상 비슷하다고 알려져 있다.', answer: true, ref: '69' },
  { ch: 'c9', sec: 6, type: 'mc', q: 'P&R 계획 지침에서 CBD로부터의 거리로 옳은 것은?', choices: ['최소 1.5km 이상, 5~6km 정도가 이상적', '최소 500m 이상, 1km가 이상적', '최소 10km 이상, 20km가 이상적', 'CBD 안에 둘 것'], answer: 0, ref: '70' },
  { ch: 'c9', sec: 6, type: 'mc', q: 'P&R 버스 배차간격 지침으로 옳은 것은?', choices: ['첨두시 5분이 적당, 최소 시간당 1대 운영', '첨두시 20분, 최소 시간당 3대', '첨두시 1분, 최소 시간당 10대', '배차간격은 무관'], answer: 0, ref: '70' },
  { ch: 'c9', sec: 6, type: 'ox', q: 'P&R이 성공적이었던 이유는 승용차를 완전히 포기하게 하지 않기 때문이다.', answer: true, ref: '70' },
  { ch: 'c9', sec: 7, type: 'short', long: true, q: 'P&R Lot의 효과(impact)를 3가지 이상 쓰시오. (☆☆☆ "중요한 거 한두 개 물어보면 답할 수 있어야")', answer: 'Express bus 서비스 coverage 확대(Hub & Spokes), 대중교통 노선·도로 이용 제고, 버스 노선 패턴 간략화, 저밀도 지역 버스 주행거리 감소, Express bus 서비스 질 향상(정시성 reliability)', ref: '71' },
  { ch: 'c9', sec: 7, type: 'mc', q: 'P&R 프로그램이 태동한 계기는?', choices: ['코네티컷주 교통부가 IC 주변 도로부지에 카풀용 불법 주차 차량 1천여 대를 확인', '1972년 피츠버그 주차장 파업', '싱가포르 ALS 시행', '3M의 밴풀 프로그램'], answer: 0, ref: '71' },
  { ch: 'c9', sec: 8, type: 'mc', q: 'P&R에 공유 부지(shared lot)를 쓸 때의 <b>장점</b>은?', choices: ['수요를 시험하기 위해 잠정적으로 사용할 수 있다', '향후 확장이 쉽다', 'layout을 자유롭게 설계할 수 있다', '첨두시 혼잡이 생기지 않는다'], answer: 0, ref: '72' },
  { ch: 'c9', sec: 8, type: 'ox', q: 'P&R lot은 진입(inbound) 차량을 위해 되도록 도로의 오른쪽에 두는 것이 좋다.', answer: true, ref: '72–73' },
  { ch: 'c9', sec: 9, type: 'mc', q: 'P&R에서 주차지역과 대기 버스 간 이상적인 도보거리는?', choices: ['100~120m', '500m', '1.5km', '20~30m'], answer: 0, exp: '실질적으로는 180~300m, Texas는 200m를 넘으면 주차제한구역에 주차.', ref: '73' },
  { ch: 'c9', sec: 9, type: 'mc', q: '첨두시 3분 배차간격으로 운영할 때 승강장 하나당 주차면 상한은?', choices: ['1,800면', '250면', '500면', '5,000면'], answer: 0, ref: '73' },
  { ch: 'c9', sec: 9, type: 'mc', q: 'P&R lot이 transit 환승 목적이라면 최소 몇 면을 갖춰야 하는가?', choices: ['250면', '50면', '1,800면', '1,000면'], answer: 0, ref: '73' },
  { ch: 'c9', sec: 9, type: 'mc', q: 'P&R 출입구(access/egress) 설계 원칙으로 옳지 <b>않은</b> 것은?', choices: ['출입구는 간선도로나 고속도로 연결로에 직접 연결한다', '최소 2개의 access/egress point를 둔다', '대중교통 차량을 위한 별도 출입시설을 둔다', '교차로나 고속도로 운영을 방해하지 않게 한다'], answer: 0, exp: '간선도로·고속도로 연결로 대신 <b>collector/local street(하위도로)</b>에 둔다.', ref: '73' },
  { ch: 'c9', sec: 9, type: 'mc', q: 'Kiss & Ride의 우리말(수업 필기)은?', choices: ['배웅주차', '환승주차', '거주자 우선주차', '단기 노상주차'], answer: 0, ref: '74' },
  { ch: 'c9', sec: 10, type: 'mc', q: '국가통합교통체계효율화법상 "환승센터"의 정의로 옳은 것은?', choices: ['교통수단 간 연계교통·환승활동을 원활하게 할 목적으로 일정 환승시설이 상호 연계성을 갖고 한 장소에 집합되어 있는 시설', '여객이 다른 노선이나 교통수단을 편리하게 이용하도록 주차장·철도역·버스정류소 등의 기능을 제공하는 개별 시설', '환승활동과 상업·업무 등 사회경제적 활동을 복합적으로 지원하는 시설', '대중교통 이용자의 주차만을 지원하는 시설'], answer: 0, exp: '②는 환승시설(12호), ③은 복합환승센터(15호).', ref: '78' },
  { ch: 'c9', sec: 10, type: 'mc', q: '교체법상 <b>환승센터</b>의 유형이 <b>아닌</b> 것은?', choices: ['광역형 환승센터', '주차장형 환승센터', '대중교통 연계수송형 환승센터', '터미널형 환승센터'], answer: 0, exp: '광역은 <b>복합환승센터</b>의 유형(국가기간·광역·일반).', ref: '78' },
  { ch: 'c9', sec: 10, type: 'mc', q: '권역 간 대용량 환승교통의 효율적 처리와 상업·문화·주거·숙박 등 지원기능을 복합 수행하는 시설은?', choices: ['국가기간복합환승센터', '광역복합환승센터', '일반복합환승센터', '터미널형 환승센터'], answer: 0, exp: '광역은 주로 권역 <b>내</b>, 일반은 <b>지역 내</b>.', ref: '78' },
  { ch: 'c9', sec: 10, type: 'ox', q: '교체법은 「국가통합교통체계효율화법」의 수업 약칭이다.', answer: true, ref: '78' },

  { ch: 'c10', sec: 0, type: 'mc', q: 'Ridesharing, HPTM, ARZ 같은 친환경 교통 TSM action의 공통 목표는?', choices: ['이동성은 유지하면서 VMT를 줄인다', '도로용량을 늘린다', '자동차 통행속도를 높인다', '대중교통 요금을 낮춘다'], answer: 0, ref: '75' },
  { ch: 'c10', sec: 0, type: 'mc', q: '도시 구역을 cell로 나누고 물리적 장벽으로 통행을 차단하며, 환상도로를 통해 정해진 위치에서만 진출입하게 하는 유럽의 방법은?', choices: ['Traffic cells', 'Superblocks', 'Woonerf', 'Zone 30'], answer: 0, ref: '75' },
  { ch: 'c10', sec: 0, type: 'mc', q: '수업에서 ARZ와 함께 참조하라고 한 제도의 연결로 옳은 것은?', choices: ['런던 ULEZ, 유럽 LEZ, 이탈리아 ZTL', '런던 ZTL, 유럽 ULEZ, 이탈리아 LEZ', '싱가포르 ALS, 일본 ERP, 미국 ULEZ', '파리 LEZ, 런던 ZTL, 로마 ULEZ'], answer: 0, ref: '75' },
  { ch: 'c10', sec: 1, type: 'short', q: 'ARZ 구현 수단으로 소개된 두 가지 단속·통제 방식을 쓰시오.', answer: 'ANPR(자동번호판인식) 방식 단속(Bus Gate), (Flexible) Rising Bollard', ref: '76' },
  { ch: 'c10', sec: 2, type: 'mc', q: '밴풀(vanpool)에 대한 설명으로 옳은 것은?', choices: ['보통 10~12명이 10마일 이상 편도 통근에 이용하고 요금을 지불한다', '이용자 소유 차량을 교대로 운전하며 금전 거래가 없다', '스케줄 없이 고정노선을 따라 운행한다', '여러 명을 시차를 두고 태우는 합승택시다'], answer: 0, exp: '②는 카풀, ③은 jitney, ④는 shared-ride taxi.', ref: '77' },
  { ch: 'c10', sec: 2, type: 'ox', q: '12명을 태운 밴풀 1대의 VMT는 4명씩 태운 카풀 3대의 VMT보다 현저히 짧다.', answer: true, ref: '77' },
  { ch: 'c10', sec: 3, type: 'mc', q: '평균 재차인원이 1.40에서 1.56으로 높아지면 교통량은 약 얼마나 감소하는가?', choices: ['10%', '1.6%', '25%', '40%'], answer: 0, ref: '78' },
  { ch: 'c10', sec: 3, type: 'short', q: 'Ridesharing 편익의 세 범주와 각 범주의 예를 하나씩 쓰시오.', answer: '개인(통행비용 절감 등), 고용주(주차시설 수요 감소 등), 공공·지역사회(교통량·혼잡 감소, 대기질 향상 등)', ref: '78' },
  { ch: 'c10', sec: 4, type: 'mc', q: '3M 밴풀 프로그램의 내용으로 옳은 것은?', choices: ['참여 직원 8명당 밴 1대, 요금은 손익분기점에서 저렴하게', '참여 직원 12명당 밴 1대, 요금 무료', '운전자에게 월 $15 주차요금 부과', '결과적으로 주차장 $300,000 절감'], answer: 0, exp: '절감액은 약 $3,000,000.', ref: '80' },
  { ch: 'c10', sec: 4, type: 'ox', q: '대중교통 서비스가 충분한 지역일수록 ridesharing을 강조하는 것이 생산적이다.', answer: false, exp: '대중교통이 충만한 지역에서 함께타기 강조는 <b>비생산적</b>.', ref: '79' },
  { ch: 'c10', sec: 4, type: 'mc', q: '비영리 밴풀·카풀의 요금 징수를 규제 대상에서 제외한 법은?', choices: ['Surface Transportation Assistance Act of 1978', '1976 Federal Aid Highway Amendments', '도시교통정비촉진법', '유료도로법'], answer: 0, exp: '1976 Federal Aid Highway Amendments는 밴 구입 등 연방 자금 지원.', ref: '79' },
  { ch: 'c10', sec: 5, type: 'mc', q: '교통표지나 노면 stencil로 지정된 차도에서 통행권을 공유하는 자전거도로는?', choices: ['Class Ⅲ', 'Class Ⅰ', 'Class Ⅱ', 'Class Ⅳ'], answer: 0, ref: '81' },
  { ch: 'c10', sec: 5, type: 'ox', q: '완전히 분리된 Class Ⅰ 자전거도로는 항상 가장 바람직하고 현실적 타당성도 높다.', answer: false, exp: '현실적 타당성이 적고 항상 바람직하지는 않다. 도로 공동이용이 더 경제적일 수 있다.', ref: '81' },
  { ch: 'c10', sec: 5, type: 'short', q: '자전거도로가 덜 이용되는(underuse) 이유를 3가지 이상 쓰시오.', answer: '직행·최단거리 아님, 정지신호·표지가 너무 많음, 시설 유지관리 부실, 교통량·주차차량이 많음, 이용자가 잘 모르는 도로(→홍보), 노선 불연속', ref: '82' },
  { ch: 'c10', sec: 5, type: 'mc', q: '자전거 운행에서 가장 큰 위험이 발생하는 곳과 그 이유는?', choices: ['교차로 — 회전 이동과 불명확한 통행권', '직선 구간 — 과속', '주차장 — 보행자 상충', '터널 — 조명 부족'], answer: 0, ref: '82' },
  { ch: 'c10', sec: 6, type: 'mc', q: '9개 블록을 하나로 묶어 차량은 둘레 도로로, 내부는 보행·자전거 공간으로 만든 2016년 바르셀로나의 개념은?', choices: ['Superblocks', 'Traffic cells', 'Woonerf', 'Pedestrian malls'], answer: 0, ref: '84' },

  { ch: 'c11', sec: 0, type: 'short', q: '대중교통 마케팅의 주목적 3가지를 쓰시오.', answer: '대중교통 체계에 대한 호의적 이미지 형성, 이용 가능한 다양한 서비스 인식, 대중교통 이용 장려와 승객수(ridership) 증가', ref: '85' },
  { ch: 'c11', sec: 1, type: 'mc', q: '대중교통 마케팅 사례의 연결로 옳은 것은?', choices: ['Seattle — CBD 내 무료 서비스', 'Duluth — Nickel day, Dime day', 'Akron — 학생 요금 할인', 'Portland — 전화 정보센터'], answer: 0, exp: 'Nickel/Dime day는 Akron, 학생 할인은 Nashville, 전화 정보센터는 Duluth, Portland는 zonal → fixed.', ref: '86' },
  { ch: 'c11', sec: 2, type: 'mc', q: '대중교통 범죄 억제를 위한 대책 중 <b>설계적</b> 해법에 해당하는 것은?', choices: ['정거장·쉘터의 양호한 시야와 양질의 조명(CPTED)', 'frequent·reliable한 운행', 'exact fare 징수', '경찰견 순찰'], answer: 0, ref: '87' },
  { ch: 'c11', sec: 2, type: 'ox', q: 'Exact fare(정액 지불)는 돈에 접근하기 어렵게 만들어 절도를 억제하는 데 도움이 된다.', answer: true, ref: '87' },
  { ch: 'c11', sec: 3, type: 'short', q: '대중교통 터미널의 장점 3가지를 쓰시오.', answer: '많은 대중교통 차량과 승객을 동시에 처리, 노외 탑승으로 연석차로 흐름을 방해하지 않고 승차시간 감소, 외곽에 두면 CBD로 향하는 교통량 감소', ref: '88' },
  { ch: 'c11', sec: 4, type: 'mc', q: '서울시와 5개 광역시가 도입한 버스 준공영제 방식은?', choices: ['수입금공동관리형', '노선입찰형', '위탁운영형', '완전공영제'], answer: 0, exp: '경기도는 노선입찰형(노선 관리형).', ref: '89' },
  { ch: 'c11', sec: 4, type: 'mc', q: '"업체 간 과다경쟁 최소화, 업체의 일정 수준 수익 보장"이 장점인 준공영제 방식은?', choices: ['수입금공동관리형', '노선입찰형', '위탁운영형', '노선 관리형'], answer: 0, ref: '90' },
  { ch: 'c11', sec: 4, type: 'mc', q: '노선입찰형 준공영제의 <b>단점</b>은?', choices: ['입찰·갱신에 고도의 전문성과 많은 행정력이 필요하다', '업체의 자발적 경영개선 노력이 소홀해질 우려가 있다', '운영업체 변경이 어렵다', '업체 간 과다경쟁이 심해진다'], answer: 0, exp: '②는 수입금공동관리형, ③은 위탁운영형의 단점.', ref: '90' },
  { ch: 'c11', sec: 4, type: 'mc', q: '적자노선 등 일부 노선을 민간업체에 위탁관리하며, "공영제 대비 운영비 절감"이 장점인 방식은?', choices: ['위탁운영형', '수입금공동관리형', '노선입찰형', '완전공영제'], answer: 0, ref: '90' },
  { ch: 'c11', sec: 4, type: 'short', long: true, q: '버스 준공영제 3가지 방식의 개요와 장단점을 비교해 쓰시오. (★ 수업 강조)', answer: '수입금공동관리형: 수입금 공동관리·실적 배분 / 장점 과다경쟁 최소화, 일정 수익 보장 / 단점 행정관리 시스템 필요, 경영개선 노력 소홀, 중장기 재정부담. 노선입찰형: 노선 소유권 배제, 경쟁입찰 / 장점 공공성 강화, 경쟁으로 비용절감·서비스 개선, 비수익노선 안정 운영 / 단점 노선권 확보, 전담기구, 고도 전문성·행정력. 위탁운영형: 적자노선 등 일부 위탁 / 장점 공영제 대비 운영비 절감, 적자노선 업체 부담 해소, 행정부담 경감 / 단점 위탁업체 관리, 운영업체 변경 어려움.', ref: '90' },
  { ch: 'c11', sec: 5, type: 'mc', q: '노선을 몇 개 구역으로 나눠 구역 이동에 따라 요금을 차등하는 방식은? (필기 예: 신분당선)', choices: ['Zonal fare', 'Flat fare', 'Distance base fare', 'Peak period fare'], answer: 0, ref: '91' },
  { ch: 'c11', sec: 5, type: 'mc', q: '후불(postpaid) 요금제의 <b>장점</b>이 아닌 것은?', choices: ['체납이 발생하지 않는다', '탑승시간이 절감된다', '운영에 도움이 되는 자료를 제공한다', '고용주·사회기관의 요금 분담이 가능하다'], answer: 0, exp: '지불 <b>체납 발생</b>은 단점.', ref: '92' },
  { ch: 'c11', sec: 5, type: 'short', q: 'Toll, Fee, Fare의 차이를 쓰시오. (수업 필기)', answer: 'Toll: 도로·교량·터널 등 통행료 / Fee: 시설·서비스 이용요금(주차요금 등) / Fare: 대중교통 운임', ref: '91 필기' },
  { ch: 'c11', sec: 6, type: 'short', long: true, q: '준대중교통(paratransit)의 특징을 3~4개 쓰시오. (수업: "특징이 뭐냐 하면 얘기할 수 있어야 함")', answer: '탄력적인 노선 변경, 승객의 안락(편안함), 편의, 사생활 보장, 적은 수요와 저밀도 지역에 최선', ref: '93' },
  { ch: 'c11', sec: 6, type: 'mc', q: 'Paratransit의 접두사 para의 의미는?', choices: ['closely related to', 'parallel to', 'partial', 'personal'], answer: 0, ref: '93' },
  { ch: 'c11', sec: 7, type: 'mc', q: '스케줄은 없지만 고정노선을 따라 운행하고, 어느 지점에서든 불러 세울 수 있는 준대중교통은?', choices: ['Jitney', 'Dial-a-ride', 'Subscription bus', 'Vanpool'], answer: 0, ref: '94' },
  { ch: 'c11', sec: 7, type: 'mc', q: '준대중교통 형태 중 "사전합의형(prearranged ridesharing)"에 속하지 <b>않는</b> 것은?', choices: ['Dial-a-ride', 'Carpool', 'Vanpool', 'Subscription buses'], answer: 0, exp: 'Dial-a-ride는 수요응답형(demand responsive).', ref: '94' },
  { ch: 'c11', sec: 7, type: 'ox', q: 'Shared-ride taxi(합승택시)는 우리나라에서 현재 합법적으로 운영된다.', answer: false, exp: '슬라이드 기준 우리나라에서 <b>현재 불법</b>.', ref: '94' },
  { ch: 'c11', sec: 8, type: 'short', q: '준대중교통의 장점을 4가지 이상 쓰시오.', answer: '지선(feeder) 서비스 제공, 첨두시 서비스 용량 추가, 저밀도 지역으로 서비스 확대, CBD 내 단거리 서비스, 저수요 시간대 서비스, 교외 승용차 통행 대용, 이동성이 제한된 집단의 요구 충족', ref: '95' }
);

/* ===================== cards ===================== */
T.cards.push(
  { ch: 'c8', front: 'Staggered work hours', back: '출퇴근 시차제. 근무일수·시간은 그대로, 출발·도착 시각만 분산. 대중교통 용량 부족 시 유용, 카풀엔 부정적일 수 있음.' },
  { ch: 'c8', front: 'Flexible work hour', back: '탄력근무제. 근로자가 선호에 따라 조정, core time엔 모두 근무. 시차제의 문제(대중교통·카풀)를 보완.' },
  { ch: 'c8', front: 'Core time', back: '집중근무시간. 탄력근무제에서 모든 근로자가 근무해야 하는 시간대(예: 10시~15시).' },
  { ch: 'c8', front: 'Shortened work week', back: '주4일 근무제(10시간×4일 등). 사기↑·결근↓·여가↑ vs 장거리 거주→VMT↑, 여가통행 증가, 육아·피로 문제.' },
  { ch: 'c8', front: 'Congestion pricing', back: '첨두시 사용에 더 높은 요금. 지역 전체 적용이 본 개념에 충실. 싱가포르 1975 ALS(현 ERP) → 오전 첨두 약 40%↓.' },
  { ch: 'c8', front: 'ALS', sub: 'Area Licensing Scheme', back: '싱가포르 1975년 지역면허제. 차 앞유리에 허가증을 붙여야 CBD 진입. CBD 주차요금도 인상. 오전 첨두 교통량 약 40% 감소.' },
  { ch: 'c9', front: '주차면 10~15% 공실', back: '가용 공간을 찾을 기회를 주기 위해 항상 비워 둠. 꽉 차면 이용의지 억제, 배회 차량이 직진교통과 상충.' },
  { ch: 'c9', front: 'Turnover', back: '회전율. 한 주차면을 일정 시간 동안 이용한 차량 수. 미터기 설치·요금 인상으로 높임(NY 53%↑).' },
  { ch: 'c9', front: 'Denver Boot', back: '불법주차 차량 바퀴에 채우는 잠금장치(수업 필기).' },
  { ch: 'c9', front: 'Surcharge', back: '할증료. 예: 업주가 근로자 차량이 SOV(나홀로 차량)면 주차요금을 할증 → 수단선택 변화.' },
  { ch: 'c9', front: 'P&R (Park and Ride)', back: '환승주차장. P&R과 대중교통 연계 = 두 교통수단 간의 결합. CBD에서 1.5km 이상, 5~6km 이상적. 주차비 무료·저렴.' },
  { ch: 'c9', front: 'Hub & Spokes', back: 'P&R Lot 효과: express bus 서비스 coverage 확대 구조. 거점(hub)에서 방사형(spokes)으로 연결.' },
  { ch: 'c9', front: 'Kiss & Ride', back: '배웅주차. 가족이 차로 데려다주고 바로 떠나는 (초)단기 정차구역.' },
  { ch: 'c9', front: 'Shared lot', back: 'P&R 공유 부지. +즉시 활용, 기존 접근로, 수요 시험, 쇼핑 기회 / −layout 제약, 확장 불가, 공간 불투명, 첨두 혼잡.' },
  { ch: 'c9', front: '교체법', back: '국가통합교통체계효율화법(약칭 통합교통체계법). 환승시설·환승센터·복합환승센터 정의.' },
  { ch: 'c9', front: '환승센터 3유형', back: '주차장형(주차·환승 지원), 대중교통 연계수송형(수단 간 연계수송·환승), 터미널형(터미널·환승).' },
  { ch: 'c9', front: '복합환승센터 3유형', back: '국가기간(권역 간 대용량 + 복합 지원), 광역(주로 권역 내 + 복합 지원), 일반(지역 내 환승 처리). 모두 제45조로 지정.' },
  { ch: 'c10', front: 'ARZ', sub: 'Auto Restricted Zone', back: '차량진입제한구역. CBD 곳곳에 작게, fringe parking + transit. 경제 활성화에도 유용. 사례: Miami Beach, Kalamazoo 등. 참조: ULEZ·LEZ·ZTL.' },
  { ch: 'c10', front: 'HPTM', back: 'Human Powered Transportation Mode, 인력교통수단(자전거·보행).' },
  { ch: 'c10', front: 'ULEZ · LEZ · ZTL', back: '런던 초저배출구역 · 유럽 저배출구역 · 이탈리아 교통제한구역.' },
  { ch: 'c10', front: 'ANPR', back: 'Automatic Number Plate Recognition, 자동번호판인식 단속(Bus Gate).' },
  { ch: 'c10', front: 'Rising bollard', back: '허가 차량이 오면 내려가는 승강식 볼라드. ARZ 진입 통제 수단.' },
  { ch: 'c10', front: 'Traffic cells', back: '유럽식 승용차 통제. 구역을 cell로 나누고 물리적 장벽, 환상도로, 정해진 곳에서만 진출입.' },
  { ch: 'c10', front: 'Carpool vs Vanpool', back: '카풀: 자기 차 교대 운전, 금전 거래 없음. 밴풀: 10~12명, 10마일+ 편도, 요금 지불, 밴은 운전자·고용주·회사 소유.' },
  { ch: 'c10', front: 'Bike Class Ⅰ·Ⅱ·Ⅲ', back: 'Ⅰ 완전 분리 전용(공원·교외) / Ⅱ (반)전용 일반 자전거도로 / Ⅲ 표지·노면 stencil로 차도 공유.' },
  { ch: 'c10', front: 'Bike and Ride', back: '정류장 근처 안전한 보관시설로 대중교통 이용 장려. 버스에 자전거를 싣는 piggyback 설비도 있음.' },
  { ch: 'c10', front: 'Superblocks', back: '2016 바르셀로나. 9개 블록을 묶어 차량은 둘레 도로, 내부는 보행·자전거. walkable city의 상징.' },
  { ch: 'c11', front: 'CPTED', back: '범죄예방 환경설계. 정거장·쉘터의 양호한 시야와 조명으로 범죄 억제.' },
  { ch: 'c11', front: 'Exact fare', back: '정액 현금 지불. 잔돈 문제 해소, 돈에 접근하기 어려워 절도 억제.' },
  { ch: 'c11', front: 'Flat · Zonal · Distance fare', back: '균일요금(위치 무관 동일) · 구역요금(구역별 차등, 예 신분당선) · 거리기반(통행거리 비례, 예 일본).' },
  { ch: 'c11', front: 'Toll · Fee · Fare', back: 'Toll 통행료(도로·교량) · Fee 시설·서비스 이용요금(주차 등) · Fare 대중교통 운임.' },
  { ch: 'c11', front: '수입금공동관리형', back: '수입금 공동관리·실적 배분, 적자 지자체 보전(서울·5개 광역시). +과다경쟁↓ 수익보장 / −경영개선 소홀, 재정부담.' },
  { ch: 'c11', front: '노선입찰형', back: '노선 소유권 배제, 경쟁입찰로 업체 선정(경기도). +공공성, 비용절감, 비수익노선 안정 / −노선권 확보, 전담기구, 행정력.' },
  { ch: 'c11', front: '위탁운영형', back: '적자노선 등 일부를 위탁. +공영제 대비 운영비↓, 적자노선 부담 해소, 행정부담↓ / −위탁업체 관리, 업체 변경 어려움.' },
  { ch: 'c11', front: 'Paratransit 특징', back: '탄력적 노선 변경, 안락, 편의, 사생활 보장, 적은 수요·저밀도 지역에 최선. (DRT 같은 것)' },
  { ch: 'c11', front: 'Subscription bus', back: '전세(예약기반) 버스. 장거리 통근자가 모여 조직, 대중교통이 없거나 불편한 노선 운행.' },
  { ch: 'c11', front: 'Dial-a-ride', back: '수요응답형. 이용자 호출에 반응(예: 콜택시), 여러 명 pick-up을 위해 복잡한 경로.' },
  { ch: 'c11', front: 'Jitney', back: '소형버스·밴. 스케줄 없이 고정노선, 노선 변경 가능, 어디서든 불러 세움. 저소득 지역.' },
  { ch: 'c11', front: 'Gypsy cab', back: '무허가 택시. 도시 빈민가에서 운행되는 informal service.' }
);

/* ===================== numbers ===================== */
T.numbers.push(
  { ch: 'c8', label: '맨해튼 시차제 (1970): 사업장 / 근로자', value: '400여 개 / 22만 명', note: '평소보다 30분 일찍·늦게' },
  { ch: 'c8', label: '맨해튼 시차제: 첨두 대중교통시설 사용 감소', value: '18~26%' },
  { ch: 'c8', label: 'Core time 예', value: '오전 10시 ~ 오후 3시' },
  { ch: 'c8', label: '노조가 주장한 주당 근무시간', value: '35시간', note: '기준은 40시간' },
  { ch: 'c8', label: '1970년대 말 주4일제: 기업 / 근로자', value: '3천 개 / 100만 명' },
  { ch: 'c8', label: '주4일제 유지 기업 비율', value: '85~95%' },
  { ch: 'c8', label: '싱가포르 ALS 도입', value: '1975년' },
  { ch: 'c8', label: '싱가포르 ALS 오전 첨두 교통량 감소', value: '약 40%' },
  { ch: 'c8', label: '간선도로 트럭 1대의 교통영향', value: '승용차 10대' },
  { ch: 'c8', label: '트럭 배송 금지 예시 시간대', value: '9:00 ~ 16:00' },
  { ch: 'c9', label: '차량이 주차해 있는 시간 비율', value: '연평균 85%' },
  { ch: 'c9', label: '단기(2시간 이하) 주차 보행거리', value: '120~180m' },
  { ch: 'c9', label: '장기 주차 보행 의향 거리 (CBD)', value: '500m' },
  { ch: 'c9', label: '항상 비어 있어야 할 주차면', value: '10~15%' },
  { ch: 'c9', label: '주차면 최소 크기', value: '2.5m × 5.3m', note: '필기: 5.2m' },
  { ch: 'c9', label: '노상 단기주차 시간제한', value: '30분 ~ 2시간' },
  { ch: 'c9', label: '주차미터기 발명', value: '1935년 Carl MaGee', note: '최대 허용 1시간 또는 2시간' },
  { ch: 'c9', label: 'D.C. 미터기 설치 → 주차차량 수', value: '250% 증가', note: '1970년대 중반' },
  { ch: 'c9', label: 'NY 미터기 요금 인상 → 회전율', value: '53% 증가' },
  { ch: 'c9', label: '미터기 설치 조건: 주차면 점유', value: '70% 이상' },
  { ch: 'c9', label: '미터기 가격 (two-headed)', value: '$200' },
  { ch: 'c9', label: '피츠버그 파업 (1972): 기간 / 폐쇄 비율', value: '3일 / 80%' },
  { ch: 'c9', label: '피츠버그: 첨두 교통량 감소 / 대중교통 전환', value: '25% / 75%' },
  { ch: 'c9', label: 'P&R: CBD로부터 최소 / 이상 거리', value: '1.5km / 5~6km' },
  { ch: 'c9', label: 'P&R 버스 배차 (첨두) / 최소 운행', value: '5분 / 시간당 1대' },
  { ch: 'c9', label: 'P&R 태동: 불법 주차 차량', value: '1천여 대', note: '코네티컷주 교통부' },
  { ch: 'c9', label: 'P&R 이상 도보거리', value: '100~120m' },
  { ch: 'c9', label: 'P&R 실질 도보거리', value: '180~300m', note: 'Texas: 200m 넘으면 제한구역 주차' },
  { ch: 'c9', label: 'P&R 이상 배차간격', value: '5~10분' },
  { ch: 'c9', label: '첨두 3분 배차 시 승강장당 주차면 상한', value: '1,800면' },
  { ch: 'c9', label: '환승 목적 P&R 최소 주차면', value: '250면' },
  { ch: 'c9', label: 'P&R 최소 access/egress point', value: '2개' },
  { ch: 'c10', label: '밴풀 승객 / 통근 거리', value: '10~12명 / 10마일 이상' },
  { ch: 'c10', label: '재차인원 1.40 → 1.56일 때 교통량 감소', value: '약 10%' },
  { ch: 'c10', label: '3M 밴풀: 직원 몇 명당 밴 1대', value: '8명' },
  { ch: 'c10', label: '3M 밴풀: 면제된 월 주차요금', value: '$15/월' },
  { ch: 'c10', label: '3M 밴풀: 주차시설 절감액', value: '약 $3,000,000' },
  { ch: 'c10', label: '바르셀로나 Superblock', value: '2016년 · 9개 블록' },
  { ch: 'c11', label: '준대중교통 장점 개수', value: '7가지' },
  { ch: 'c11', label: '준대중교통 특징 개수', value: '5가지', note: '시험엔 3~4개 말할 수 있게' },
  { ch: 'c11', label: '수입금공동관리형 도입 지역', value: '서울시 + 5개 광역시' }
);
})();
