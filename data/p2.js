(() => {
const T = window.TSM;

/* ===================== 2-1 ===================== */
T.chapters.push({
  id: 'c4', no: '2-1', title: '차량흐름 개선 기법', pages: '19–33',
  summary: '교차로·노선·축 단위로 차량 흐름을 개선하는 10가지 저비용 기법. 장단점을 3~4개씩 말할 수 있어야 한다.',
  sections: [
    { title: '개요와 범위', pages: '19', html: `
      <ul>
        <li><b>도입</b>: 모든 TSM 기법의 주목표는 교차로·노선·도로축·전체 시스템에서 <b>차량흐름을 개선</b>하는 것. 개별 기법은 저비용·실행력·효율성을 기조로 <mark class="k">도로 확장의 필요성을 피하고자</mark> 한다.</li>
        <li><b>기대효과</b>: 성공적으로 시행하면 다른 기법의 시행을 늦출 수 있고, 혼잡 감소·속도 증가·통행시간 절감으로 나타난다.</li>
      </ul>
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>#</th><th>기법</th></tr></thead><tbody>
        <tr><td>1</td><td>신호교차로 개선 · Improvements at Signalized Intersections</td></tr>
        <tr><td>2</td><td>고속도로 램프미터링 · Freeway Ramp Metering</td></tr>
        <tr><td>3</td><td>일방도로 · One-Way Streets</td></tr>
        <tr><td>4</td><td>노상주차 제거 · Removal of On-Street Parking</td></tr>
        <tr><td>5</td><td>가변차로 · Reversible Lanes</td></tr>
        <tr><td>6</td><td>도류화 · Traffic Channelization</td></tr>
        <tr><td>7</td><td>노외 화물하역 · Off-Street Loading</td></tr>
        <tr><td>8</td><td>정류장 재배치 · Transit Stop Relocation</td></tr>
        <tr><td>9</td><td>좁은 도로와 차로 재구획 · Narrow Streets and Restriping</td></tr>
        <tr><td>10</td><td>입체화 · Grade Separations (Echelon intersection)</td></tr>
      </tbody></table></div>
      <div class="memo"><b class="h">수업 필기 · 출제 힌트</b>목록 전체에 괄호, 신호교차로 개선 밑줄, 일방도로·가변차로 박스. 아래에 "여기 중 골라서(?) 1장 이런 식. Part2의 앞부분 중 골라서. 중복 상관X." 교차로 사진 위에 "CFI"(Continuous Flow Intersection).</div>
      <div class="tip"><b class="h">시험 포인트</b>이 10가지 중 하나를 골라 <b>한 장 분량으로 서술</b>하는 문제가 나올 수 있다. 정의 → 방법 → 장점 → 단점 → 사례·수치 순서로 쓸 수 있게 기법마다 정리해 두자.</div>` },
    { title: '① 신호교차로 개선', pages: '20', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody>
        <tr><td>불필요 신호 제거<br><span class="en">Remove unwarranted signals</span></td><td>설치요건(warrant)을 충족하지 못하는 신호의 설치·운영은 비효율의 원인. <mark class="k">요건에 맞지 않는 신호 제거</mark>는 효과적인 TSM 기법.</td></tr>
        <tr><td>신호시간 요소</td><td>요건을 충족해도 신호제어의 개념·의도, <b>현시별 적절한 시간 배분</b>이 운영 효율의 핵심.</td></tr>
        <tr><td>신호 최적화</td><td>교차로별 최적 신호시간을 정한 뒤, 교차로 그룹에서 이동류별 필요시간을 최적화하거나 통과교통량을 최대화.</td></tr>
        <tr><td>고정식 신호 효율<br><span class="en">Fixed-time (pretimed)</span></td><td>교통량이 <b>일관된</b> 상황(대도시 첨두시)에서 효과적. 간선도로 <mark class="k">연동(progression)</mark>, CBD 교통 <b>순환(circulation)</b>에 유용.</td></tr>
        <tr><td>감응식 신호<br><span class="en">Traffic actuated</span></td><td>교통수요에 따라 <b>현시 순서와 시간이 변함</b> → 고정식보다 효과적. <mark class="k">독립(isolated) 교차로</mark>에서 가장 효과적. 정교한 전산화 없이는 간선 연동·신호망 운영이 어렵다.</td></tr>
        <tr><td>전산화 신호체계<br><span class="en">Computerized signal systems</span></td><td>많은 도시가 운영 효율 극대화를 위해 운영, 비용-효과성이 검증됨. 다만 <b>운영·유지 엔지니어 충원 문제</b>가 지속.</td></tr>
      </tbody></table></div>
      <div class="memo"><b class="h">수업 필기</b>"이런 거 등등." 실시간 신호제어 모델: <b>SCOOT(영국)</b>, <b>SCATS(호주)</b>, <b>MODERATO(일본)</b>. SCOOT Model 그림에 동그라미.</div>` },
    { title: '② 고속도로 램프미터링', pages: '21–23', html: `
      <ul>
        <li><b>Ramp closure</b>: 램프 제어의 <mark class="k">극단적 형태</mark>, 일시적(또는 영구적) 폐쇄. 진입 램프 상·하류 교통량 균형을 위해 실시.</li>
        <li><b>Ramp metering</b>: 진입(연결)로에서 본선 진입을 <b>신호로 조절</b>.
          <ul><li>고속도로 용량을 초과하지 않게 본선 진입 차량 수를 통제</li><li>적정 차두간격(gap)이 있을 때 진입을 허용해 본선 흐름을 매끄럽게</li></ul></li>
        <li><b>Metering rate</b>: 대부분 pretimed 진입허용율 사용, 보통 <mark class="k">시간당 300~900대</mark>(4~12초당 1대).</li>
      </ul>
      <div class="card" style="background:var(--surface-2);box-shadow:none;margin:10px 0">
        <b>계산 예제 (p.21)</b>
        <p style="margin:6px 0">상류부 수요 5,100 vph, 하류부 용량 5,400 vph, 램프 수요 500 vph</p>
        <p style="margin:6px 0">본선이 더 받을 수 있는 양 = 5,400 − 5,100 = <b>300 vph</b> &lt; 램프 수요 500 vph</p>
        <p style="margin:6px 0">→ 진입허용률 <mark class="k">300 vph = 5 vpm = 12초에 1대</mark></p>
      </div>
      <h3>장비 배치</h3>
      <p>램프미터링 신호기, 주의표시, <b>수요(D) 검지기</b>, <b>통과(P) 검지기</b>, <b>대기행렬(Q) 검지기</b>. 1차로·2차로 연결로 모두 시행 가능하고, 옆에 <b>HOV bypass ramp</b>를 두기도 한다.</p>
      <h3>잠재적 편익 (VOC·지체 절감)</h3>
      <ul><li>통행시간 단축 (shorter travel time)</li><li>지체 감소 (less delay)</li><li>본선 속도 증가 (higher freeway speeds)</li><li>본선 서비스 교통량 증가 (higher service volume)</li><li><b>안전한 합류</b> (차로변경·추돌사고 감소)</li></ul>
      <p>악천후·돌발상황을 뺀 첨두시 pretimed RMS 분석에서 긍정적 편익 보고 많음 (St. Paul, L.A.).</p>
      <h3>교통감응형 운영과 문제점</h3>
      <ul>
        <li><b>Traffic responsive</b>: 연결로와 본선에 검지기(용량·점유율, 속도, 대기행렬, 통과, 수요) 설치 → <mark class="k">수락 가능한 gap</mark>을 찾아 진입 차량 출발.</li>
        <li><b>Gap acceptance</b>: 수락 가능한 gap이 확인될 때만 진입 허용. 운전자가 받아들이는지는 별개 문제.</li>
        <li><b>대체노선</b>: 진입대기를 피한 차량의 대체노선 유무가 성패를 가름. <mark class="k">우리나라는 frontage/service road가 없어 불리</mark>.</li>
        <li><b>위반율</b>: California 연구에서 평균 <mark class="k">10~20%</mark>, 종종 50% 초과 → 합리적 단속과 계도 필요.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>"Potential Benefits of Metering System"의 Benefits에 박스.</div>` },
    { title: '③ 일방도로', pages: '24–25', html: `
      <p>두 개의 평행한 양방도로를 <mark class="k">일방도로 pair</mark>로 전환하는 것은 가장 효과적인 TSM 기법 중 하나. 비용은 적고 대부분 <b>차로 재도색, 표지 재배치, 신호계획 변경</b>에 든다.</p>
      <div class="grid two">
        <div><h3>장점</h3><ul><li>회전차량 상충 감소 → <b>안전성</b> 증가</li><li>더 효과적인 신호계획, <b>신호연동</b> 개선</li><li>두 도로를 함께 보면 <mark class="k">교통용량 50%</mark> 증가</li></ul></div>
        <div><h3>단점</h3><ul><li>노선이 옮겨져 보행시간 증가 → <b>대중교통 이용 감소</b> 경향</li><li>'around the block' 이동으로 <b>VMT 증가</b> (통행시간 감소로 보상됨)</li><li>초기 반발 (영업장 수혜 조사도 있지만)</li><li>넓은 도로에서 중앙안전지대(median) 제거 시 <b>보행안전 감소</b></li></ul></div>
      </div>
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>NYC 경험</th><th class="num">감소율</th></tr></thead><tbody>
        <tr><td>보행사고</td><td class="num">20%</td></tr><tr><td>통행시간</td><td class="num">22%</td></tr><tr><td>차량 정지수</td><td class="num">65%</td></tr><tr><td>정지시간</td><td class="num">60%</td></tr><tr><td>통과시간</td><td class="num">40%</td></tr>
      </tbody></table></div>
      <p><b>California 전환 결과</b>: 주도로와 덜 혼잡한 평행도로의 <b>짝(couplet)</b>이 도로 활용의 형평성을 보장, 흐름·회전이 쉬워지고 교차로 지체 감소, 신호시간·회전금지·주차통제 등 다른 기법보다 훨씬 효과적.</p>
      <p><b>성공의 증거</b>: <mark class="k">"One-way streets rarely have been converted back to two-way operation!"</mark></p>
      <div class="memo"><b class="h">수업 필기</b>장점·단점 목록에 괄호. "교통용량 증가" 밑줄 → "지체↓".</div>` },
    { title: '④ 노상주차 제거', pages: '26–27', html: `
      <ul>
        <li><b>주된 이점 2가지</b>: <mark class="k">도로용량 증가</mark>, <mark class="k">교통안전 향상</mark>.</li>
        <li>TSM은 대부분 <b>간선도로</b>에서 시행 → 간선도로는 이동성을 위한 시설인데 노상주차는 그 본래 목적을 침해한다.</li>
        <li>노상주차가 꼭 필요하면 <mark class="k">평행주차가 사각(diagonal)주차보다 낫다</mark>. 사각주차는 주차면은 많지만 용량 손실·안전 희생이 크고, 평행주차가 시계가 더 좋다.</li>
        <li><b>용량 효과</b>: 양방 2차로 도로의 평행·각도 주차는 시설용량을 <mark class="k">35~45%</mark> 감소시킨다. 일방도로 신호교차로에서 주차를 없애면 용량이 약 <mark class="k">250%</mark> 증가할 수도.</li>
        <li><b>부수적 이점</b>: 속도 개선, 첨두시 통행시간 감소, 지체·정지수 <b>50%까지</b> 감소, 사고 감소(도심 사고의 <b>18~19%</b>가 주차 관련).</li>
      </ul>
      <h3>첨두시 주차금지와 기타</h3>
      <ul>
        <li><b>Peak hour parking prohibition</b>: 첨두시에만 금지 → 필요할 때 용량을 얻고, 주차수요가 많은 다른 시간엔 노상주차 편의 제공.</li>
        <li>제거로 생긴 공간의 다른 활용: 좌·우회전 차로, 정류장 <b>mid-block 이전</b>, 자전거도로.</li>
        <li><b>단점</b>: 노상주차가 필요하다는 <b>사업자 불평</b>, 퇴거된(<mark class="k">displaced</mark>) 주차수요를 노외주차장으로 수용해야 함.</li>
        <li><b>부수 효과</b>: 노외주차장 부족과 함께 시행하면 통근자의 <b>카풀·대중교통 이용을 장려</b>하는 기법이 될 수 있다.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>제목 위 "Class D"(노상주차 제한 = Class D). 교통안전 향상 옆 "주정차 행태". displaced에 동그라미, 옆에 "SOV→HOV".</div>` },
    { title: '⑤ 가변차로', pages: '28', html: `
      <p><b>정의</b>: 중앙분리대(median)로 분리되지 않은 도로의 차로를 <b>설계 방향의 반대 방향으로도</b> 쓰게 하는 것. 도로 확장 없이 용량을 늘리는 효과적이고 <mark class="k">초저비용</mark>의 방법.</p>
      <h3>적용 형태</h3>
      <ul>
        <li>분리 안 된 <b>4차로</b> → 3-1 배분</li>
        <li>분리 안 된 <b>6차로</b> → 4-2 배분</li>
        <li><b>3차로</b> → 2-1, 비첨두엔 중앙차로를 TWLT(양방향 좌회전차로)로</li>
        <li><b>5차로</b> → 3-2, 비첨두엔 중앙차로를 TWLT로</li>
        <li>도로 전체의 역행 허가</li>
      </ul>
      <p><b>국내 사례</b>: 소공동길(서울), 병무청길(수원), 삼성대로 <span class="faint small">— 슬라이드의 사가정로·왕십리로·중앙대로(부산)는 수업에서 지움</span></p>
      <p><b>효과</b>: 교통안전 개선, 첨두시 혼잡 경감, <mark class="k">통행시간 20%까지</mark> 감소.</p>
      <p><b>단점</b>: 비첨두 방향 용량이 부족하면 혼잡. 그 방향을 1개 차로만 운영하면 좌회전·정차 차량 뒤로 긴 대기행렬. 교통표지 필요.</p>
      <h3>설치 요건</h3>
      <ul>
        <li>적어도 <mark class="k">65%</mark>의 차량이 한 방향으로 이동 (<b>2:1</b> 분할)</li>
        <li>비첨두 방향에도 적절한 용량 여유</li>
        <li>도로폭과 노선의 연속성</li>
        <li>중앙분리대가 없을 것</li>
        <li>좌회전과 주차를 금지할 수 있을 것</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>"가변차로제". 갓길 = shoulder. 사례 수정(삼성대로 추가, 사가정로·왕십리로·중앙대로 삭제). 설치요건 목록에 괄호.</div>` },
    { title: '⑥ 도류화', pages: '29', html: `
      <ul>
        <li>도로의 용량은 보통 <mark class="k">교차로 용량</mark>(특히 혼잡이 극심한 교차로)에 의해 결정된다. 도류화는 교차로 운영 효율을 높여 간선도로 용량을 늘린다.</li>
        <li>교통섬, 노면마킹, 표지병 같은 raised pavement markers 등으로 차량을 정해진 경로로 유도.</li>
      </ul>
      <h3>도류화의 효과</h3>
      <ul><li>운전자 <b>혼선</b>을 줄이거나 없앤다</li><li>잠재적 <b>상충지역을 분리</b>한다</li><li>교통운영 <b>안전</b>을 높인다</li><li>가용 포장면을 최대한 이용한다</li><li>차량의 이동과 <b>속도를 규제/통제</b>한다</li></ul>
      <p>좌·우회전 교통을 수용하거나 금지하는 교통섬도 설치할 수 있다. 비용은 극히 적지만 간선도로 <mark class="k">평균 운영속도를 10 mph까지</mark> 높인다는 연구가 있다.</p>` },
    { title: '⑦ 노외 화물하역', pages: '30', html: `
      <ul>
        <li>트럭의 연석차로 화물적하를 없애거나 금지 → 교통류 저항 제거, <b>도로용량 증가</b>. 대신 노외 화물하역시설이 필요.</li>
        <li>기존 도심(CBD)에 하역시설을 짓는 것은 비용이 많이 든다. 미국 인구 25만 이상 도시 <mark class="k">10개 중 1개꼴</mark>로만 CBD에 하역시설이 있음.</li>
        <li><b>신규 개발</b>: 허용 용적률에 상응하는 하역시설을 요구하는 것이 바람직.</li>
        <li><b>절충안</b>: <mark class="k">첨두시에만 트럭 화물적하 금지</mark> — 용량이 가장 필요할 때 확보하면서 상인의 필요도 충족.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>제목 옆 "화물집화(?)".</div>` },
    { title: '⑧ 정류장 재배치', pages: '31–32', html: `
      <p><b>위치 4가지</b>: 교차로 <b>near side</b>(가까운 측), <b>far side</b>(먼 측), <b>far side after a RT</b>(우회전 후 먼 측), <b>mid-block</b>(블록 중앙). 네 곳 모두 <mark class="k">턴아웃(bus bay)</mark> 가능.</p>
      <p class="small muted">그림 속 정류장 구간 길이: 블록중앙 140, 가까운 측 105, 먼 측 140·80, 턴아웃 140 (단위 ft로 보임)</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>위치</th><th>장점</th><th>단점</th></tr></thead><tbody>
        <tr><td><b>Mid-block</b><br><span class="faint small">선호</span></td><td><mark class="k">교통 방해가 가장 적음</mark></td><td>다른 정류장으로 갈아탈 때 <b>보행 거리·시간 증가</b></td></tr>
        <tr><td><b>Far-side</b><br><span class="faint small">차선책</span></td><td>① 접근부 우회전 차량 경로에서 버스 제거<br>② <b>RTOR</b> 기회 증가<br>③ 신호 대기행렬의 출발손실시간 최소화<br>④ 교차로에서 운전자 <b>시거</b> 증가(특히 비신호)</td><td>—</td></tr>
        <tr><td><b>Near-side</b><br><span class="faint small">가장 흔함</span></td><td>① <mark class="k">적색신호 시</mark> 효율적 승하차<br>② far-side 정류장으로 편리한 <mark class="k">환승</mark></td><td>① 교차로에서 운전자 시야 방해<br>② 바깥(curb) 차로의 직진 흐름 차단<br>③ 버스를 끼고 추월·회전하는 행동 조장<br>→ <b>교통 방해가 가장 큼</b></td></tr>
      </tbody></table></div>
      <ul>
        <li><b>턴아웃 효과</b>: 정지한 버스라는 교통류 저항을 없애 흐름 개선에 크게 기여.</li>
        <li><b>사례</b>: Louisville, KY에서 near-side 정류장 <mark class="k">8개를 far-side로</mark> 옮긴 결과 버스와 일반 승용차의 통행시간·지체 모두 감소.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기 · 출제 힌트</b>"장단점 이야기하라고 하면 <b>각각 3~4개씩 술술</b> 이야기해야 함." mid-block 위 "선호". 보행 → "거리", 시간. "출발손실시간 최소화" 옆 "버스 때문에". 시거에 동그라미. 사진 아래 <b>Bus Bulbs(버스곶)</b>, turnout = <b>bus-bay</b>.</div>` },
    { title: '⑨ 좁은 도로와 차로 재구획', pages: '33', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>도로 조건</th><th>TSM 대안</th><th>효과</th></tr></thead><tbody>
        <tr><td>폭 <b>9m 이하</b>, 양방 2차로</td><td>교차로부나 전체 확장 대신, 좁은 양방도로 두 개를 <mark class="k">일방 couplet</mark>으로 전환 (더 좋은 TSM)</td><td>—</td></tr>
        <tr><td>폭 <b>11–13m</b> 2차로 (한측 주차)</td><td>주차 금지 + 중앙차로를 <b>TWLTL</b>로 하는 <mark class="k">3차로</mark>로 재도색</td><td>—</td></tr>
        <tr><td>평행한 2차로 도로 두 개 (각 <b>12m</b>)</td><td>one-way pair로 전환 → 총 6개 차로</td><td>두 도로 용량 <b>2배</b></td></tr>
        <tr><td>폭 <b>12–15m</b> 양방 (양측 주차)</td><td>주차 제거 → <mark class="k">4차로</mark>화</td><td>용량 <b>적어도 2배</b></td></tr>
        <tr><td>폭 <b>15.5–18m</b> 양방 4차로</td><td>중앙에 <b>TWLTL</b> 설치 → 직진과 회전 차량 분리 (4→5)</td><td>용량 증가</td></tr>
      </tbody></table></div>
      <p class="small faint">TWLTL = Two-Way Left-Turn Lane, 양방향 좌회전 공용차로.</p>
      <h3>⑩ 입체화 (Grade Separations)</h3>
      <p>범위 목록에 Echelon intersection(엇갈림 입체교차로)으로 소개만 됨. 상세 슬라이드는 없다.</p>` }
  ]
});

/* ===================== 2-2 ===================== */
T.chapters.push({
  id: 'c5', no: '2-2', title: '다인승차량(HOV) 우대', pages: '34–42',
  summary: 'HOV에 혜택을 줘서 대중교통·카풀·밴풀로 전환시키는 4가지 기법: 고속도로 HOV, 간선도로 HOV, 버스우선신호, 통행료 정책.',
  sections: [
    { title: 'HOV 우대 4가지와 목적', pages: '34', html: `
      <p>대중교통·카풀·밴풀 이용을 장려하는 데 성공적이고 대중적인 방법이 <b>다인승차량(High Occupancy Vehicle, HOV)</b>에 혜택을 주는 것이다.</p>
      <ol>
        <li>고속도로 버스·카풀 차로와 진입램프 (Freeway Bus &amp; Carpool Lanes and Access Ramps)</li>
        <li>도시가로·간선도로의 버스·카풀 차로 (Bus &amp; Carpool Lanes on City Streets and Urban Arterials)</li>
        <li><mark class="k">버스 우선신호</mark> (Bus Pre-emption of Traffic Signals)</li>
        <li><mark class="k">통행료 정책</mark> (Toll Policies)</li>
      </ol>
      <p><b>목적</b> (특히 첨두시 수송에 유용): 통행시간 절감, 대중교통 서비스 개선, <b>LOV 사용으로부터 전환(shift)</b>, 차량흐름 개선.</p>
      <div class="memo"><b class="h">수업 필기</b>4가지 전체에 괄호. Toll → "통행료(혼잡)".</div>` },
    { title: '고속도로 HOV 차로', pages: '35–37', html: `
      <ul>
        <li>전형적 고속도로 계획(수요예측 → 시설 설계·건설)은 혼잡한 기존 도시고속도로에서 <b>성공적이지 못했다</b>. 단순히 차로를 추가해서는 필요한 용량을 제공하지 못한다.</li>
        <li>그래서 많은 도시가 HOV만을 위한 특별차로(요즘은 <mark class="k">managed lanes</mark>)를 운영. 보통 버스·밴풀용, 때로 카풀도 허용.</li>
        <li><b>사례</b>: Shirley Highway(Washington D.C., 2차로), I-66(D.C., 2차로), Lincoln Tunnel(NYC, 1차로), 경부고속도로(거의 전일제)·영동고속도로(각 2차로).</li>
      </ul>
      <h3>고속도로에서 HOV를 우대하는 3가지 방식</h3>
      <ol>
        <li><mark class="k">전용 통행권(Exclusive ROW)</mark> + 진입램프 전용 사용</li>
        <li><mark class="k">순방향(with-flow, concurrent flow)</mark> 전용차로</li>
        <li><mark class="k">역방향(contraflow)</mark> 전용차로</li>
      </ol>
      <h3>이용·단속·위반</h3>
      <ul>
        <li>버스·등록 밴풀용으로 지정된 차로도 이용성을 높이려고 카풀을 허용하기도 한다. 일반적으로 <mark class="k">재차인원 3명 이상</mark>. 처음엔 bus only로 시작해 변화.</li>
        <li>필요 재차인원이 문제 — 사람 대신 <b>마네킹</b>을 태우기도.</li>
        <li>California HOV 차로 위반율 <mark class="k">3.8~37.7%</mark>, 고속도로 수요가 늘수록 위반율도 증가. Ramp bypass lane 위반율도 많게는 약 <b>40%</b>.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>ROW 위에 "차로"(통행권), "exclusive use" 박스. 사진에 "Median-side HOV Lane". Shirley Highway·Lincoln Tunnel에 + 표시.<br>Part3 필기(국내 버스전용차로): <b>9인승 이상 승합차에 6명 이상</b> 타야 이용 가능 (예: 밴, 카니발).</div>` },
    { title: '간선도로 HOV 차로', pages: '38–39', html: `
      <p>간선도로 HOV 차로도 대중교통 이용 증가, 재차인원 제고, 차로당 사람통행(person-trip) 증가 등 고속도로와 같은 편익.</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>유형</th><th>특징 · 장단점</th></tr></thead><tbody>
        <tr><td><b>가로변(Curbside)</b><br><span class="faint small">가장 일반적</span></td><td>+ 대중교통 이용이 편리<br>− HOV와 <b>우회전 교통 상충</b><br>− 위반율이 높다</td></tr>
        <tr><td><b>역류(Contraflow)</b></td><td>Chicago, Louisville, Madison, Miami, San Juan, 런던, 파리<br>+ HOV 용량 증가<br>+ 버스의 크기·위세 때문에 <mark class="k">단속이 저절로</mark> 된다<br>− 일방통행 도로에서 쓰면 좌회전 교통과 상충 가능</td></tr>
        <tr><td><b>중앙(Median)</b></td><td>보통 옛 <b>노면전차 부지</b>를 활용. New Orleans, LA, Atlanta, Philadelphia, Chicago, <b>Curitiba(1974 BRT)</b>, 나고야, 타이베이·타이중, 서울·부산<br>− 보행자가 <mark class="k">취약한 위치(vulnerable position)</mark>에 놓인다<br>− 버스와 <b>좌회전 교통 상충</b></td></tr>
        <tr><td><b>버스전용도로(Bus Streets)</b></td><td>우대의 극단, 미국에선 드묾 (Minneapolis, Chicago, Philadelphia, D.C.)<br>+ 다른 차량과 상충이 없어 편한 승하차<br>− 승용차·트럭의 <b>노변 건물 접근 배제</b></td></tr>
      </tbody></table></div>
      <div class="memo"><b class="h">수업 필기 · 출제 힌트</b>중앙차로 단점 옆에 "이런 거 <b>장단점 3,4개씩 기술</b> 이런 게 시험문제로 자주 나옴". vulnerable 밑줄. 같은 슬라이드에 TOD(Transit Oriented Development) 언급.</div>` },
    { title: '버스 게이트 (Bus Gates)', pages: '40', html: `
      <ul>
        <li>도로 일부 구간을 <b>버스 등 허가된 차량 전용</b>으로 제한해 대중교통 속도와 신뢰성을 높이고 <b>일반차량 통행을 차단</b>하는 교통통제 수단.</li>
        <li>차로·교차로·좁은 골목 입구 등에 설치.</li>
        <li>운영 방식: <b>물리적 게이트</b>, <b>CCTV 기반 단속</b>, 표지·노면표시, 또는 <b>신호제어와 결합</b>.</li>
      </ul>
      <p class="small muted">Part3 ARZ 구현(슬라이드 76)의 ANPR 단속, Rising Bollard와 연결해서 기억하자.</p>` },
    { title: '버스 우선신호', pages: '41', html: `
      <ul>
        <li>버스 통행시간의 대략 <mark class="k">10~20%</mark>가 신호대기에 쓰인다. 버스가 '신호를 제어'하게 해 통행시간·지체를 줄이는 방법 = <mark class="k">신호 우선권(signal pre-emption, 선제적 처리)</mark>.</li>
        <li>버스 장치(<b>OBU</b>)가 보낸 신호에 광학·전자적으로 감응하는 <b>검지기(detector)나 수신기(receiver)</b>를 갖춘 신호기가 필요.</li>
        <li>방식 2가지: <mark class="k">녹색 연장(green extension)</mark>, <mark class="k">적색 조기 종료(early green)</mark>.</li>
        <li>주요 프로젝트: Louisville, Miami, Washington D.C., Los Angeles.</li>
      </ul>
      <h3>버스우선신호의 특징</h3>
      <ul>
        <li>버스 통행시간 감소가 <b>승용차 통행시간 증가로 상쇄</b>된다</li>
        <li>비첨두방향 교통이 적어 <b>역류버스차로</b>처럼 운영될 때 가장 효과적</li>
        <li>우선신호 요건이 되려면 적어도 <mark class="k">시간당 10~15대</mark>의 버스 통행 필요</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>"10~20%" 옆에 "30~40%"라고 적음(요즘 수치로 보임). "2가지 방식": green extension / early green. 검지기·수신기 밑줄.</div>` },
    { title: '통행료 정책', pages: '42', html: `
      <ul>
        <li>미국 북동부에 유료도로가 광범위. HOV는 요금소 <b>non-stop 통과</b>나 <b>통행료 감면</b> 우대를 받을 수 있다.</li>
        <li><mark class="k">non-stop 통과가 가장 효과적</mark> — 즉각적인 비용 절감과 통행시간 감소를 동시에 준다.</li>
      </ul>
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>사례</th><th>조치</th><th>결과</th></tr></thead><tbody>
        <tr><td>Seattle, San Francisco</td><td>HOV non-stop 통과</td><td>통행료 수입 <b>↓</b>, 승용차 재차인원 <b>↑</b>, 버스 통행시간 <b>↓</b></td></tr>
        <tr><td>New York, New Jersey</td><td>LOV 요금 인상, HOV 요금 유지</td><td>통행료 수입 <b>↑</b>, 재차인원 <b>미세 ↑</b></td></tr>
      </tbody></table></div>
      <p><b>HOT Lane</b> (High Occupancy &amp; Toll Lane): HOV는 무료로, 일반 차량은 통행료를 내고 쓰는 차로.</p>
      <div class="memo"><b class="h">수업 필기</b>Experience 결과 3개에 화살표: 수입↓, 재차인원↑, 버스↓. "Toll Reduction Experience" 밑줄.</div>` }
  ]
});

/* ===================== 2-3 ===================== */
T.chapters.push({
  id: 'c6', no: '2-3', title: '고속도로 교통관리 · 반복혼잡', pages: '43–48',
  summary: '고속도로 혼잡을 반복/비반복으로 나누고, 반복혼잡은 램프통제·본선통제·정보제공·재구획으로 관리한다.',
  sections: [
    { title: '고속도로 교통관리 개요', pages: '43', html: `
      <ul>
        <li>고속도로는 국가도로 연장의 약 <b>4.5%</b>, 자동차통행의 약 <b>20%(?)</b>를 차지. 그러나 도시 고속도로는 통근수요를 감당하지 못해 혼잡이 만연.</li>
        <li>혼잡은 상당 부분 <b>고속도로 자체 때문</b>: 주변 토지이용이 바뀌고, 접근성 향상으로 축 주변 상업·택지개발이 가속되며, 축 내 통행발생을 예측·통제하지 못함.</li>
        <li>도시 고속도로는 (지하 외에는) 연장을 추가할 여력이 없다 → <mark class="k">기존 고속도로를 최대한 효율적으로 운영</mark>하는 것이 필수.</li>
        <li><b>정의</b>: '교통흐름을 조절·통제하기 위해 자동차 흐름을 감시·관찰하고 운전자를 지원해, 접근제한시설(limited-access facilities)에서 사람과 물류의 흐름을 향상시키는 것'.</li>
      </ul>
      <p><b>강조점 3가지</b>: freeway control and surveillance(제어·감시), <mark class="k">incident management</mark>(돌발상황 관리), motorist information systems(운전자 정보).</p>` },
    { title: '고속도로 혼잡의 성격', pages: '44', html: `
      <p><b>혼잡의 특징</b>: 저속, 불규칙한 stop-and-go, 들쭉날쭉한 통행시간, 높은 운행비, 사고율 증가, 연료 낭비, 대기오염, 운전자 좌절.</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>반복혼잡 (Recurring)</th><th>비반복혼잡 (Non-recurring)</th></tr></thead><tbody>
        <tr><td>정의</td><td>특정 지역·특정 시간에 <b>반복</b> 발생 (오전·오후 첨두 상습정체)</td><td>돌발상황(<b>incident</b>)이라는 random event로 유발</td></tr>
        <tr><td>원인</td><td><mark class="k">운영상 병목</mark>: 본선과 연결로 교통량 합류로 인한 과다 수요<br><mark class="k">기하구조 병목</mark>: lane drops, weaving sections, 좁은 횡단면, 도로 인접 장애물</td><td>사고(적재물 낙하 포함), 도로공사, 악천후</td></tr>
        <tr><td>성격</td><td>예측 가능 → 일상적 수요통제·용량제고로 관리</td><td>규모·종류가 다양, 보통 한 차로 이상을 막음. <mark class="k">위치·시각 예측 불가</mark></td></tr>
      </tbody></table></div>
      <div class="tip"><b class="h">★ 반복해서 읽을 것 (수업 강조)</b>돌발상황의 위치나 발생 시각은 예측할 수 없기 때문에 그로 인한 혼잡을 쉽게 줄일 수 없다. 반복정체를 줄이는 데 쓰는 <b>일상적인 수요통제나 용량제고 방법</b>을 임의 이벤트에는 적용할 수 없기 때문이다.</div>
      <div class="memo"><b class="h">수업 필기</b>"★ 이거 반복적으로 읽어보고". Recurring 옆 "반복정체", Non-recurring 아래 "비반복".</div>` },
    { title: '반복혼잡 관리 기법', pages: '45', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>영역</th><th>세부 기법</th></tr></thead><tbody>
        <tr><td><b>차량수요 관리</b></td><td>진입연결로·본선 교통통제 / HOV 등 특정 차량군 우대 / 운전자 정보시스템 (pre-trip &amp; en-route 정보 → 우회 diversion)</td></tr>
        <tr><td><b>교통수요 관리</b></td><td>차량 함께타기 / 대중교통 환승주차장(P&amp;R) / 출퇴근 시차제 / 대중교통 시설·운영 개선</td></tr>
        <tr><td><b>기하학적 개선</b></td><td>병목 지점의 운영상 용량 증가: 차로 추가, 노면표시 재구획</td></tr>
      </tbody></table></div>
      <ul>
        <li><b>진입연결로 통제</b>: 고속도로 수요관리의 <mark class="k">가장 일반적인 방법</mark>. 본선이 높은 속도·최적 교통량으로 운영되도록 진입 차량 수를 제한.</li>
        <li><b>Ramp closure</b>: 궁극의 램프미터링 방법(일시·영구 폐쇄). 더 일반적인 것은 일정 시격으로 진입을 허용하는 ramp metering.</li>
      </ul>` },
    { title: '본선 통제 · 램프 통제 효과 · 교통축 관리', pages: '46', html: `
      <p><b>본선 통제</b>는 HOV 수용 기법과 연관: 분리시설(separate facilities), 역류·순류 전용차로(reserved lanes for contraflow and concurrent-flow), 우선 진입통제(priority access control).</p>
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>램프 통제 사례</th><th>효과</th></tr></thead><tbody>
        <tr><td>LA 고속도로</td><td>용량 증가, 연결로 대기 감소, 평균 통행속도 <mark class="k">25 → 52 mph</mark></td></tr>
        <tr><td>Chicago Eisenhower expressway</td><td>흐름 개선, 연결로 교통사고 <mark class="k">17% 감소</mark></td></tr>
        <tr><td>Detroit 고속도로</td><td>연간 <mark class="k">225,000 VHT</mark> 감소</td></tr>
      </tbody></table></div>
      <ul>
        <li><b>교통축 통제(Corridor control)</b>: 고속도로 본선, frontage roads, 간선도로를 포함한 교통축 안에서 수요와 용량의 <b>최적 균형</b>을 유지. 여러 기관의 협력 필요 (한국도로공사, 경찰, 지자체, 대중교통 운영자 등).</li>
        <li><b>교통축 관리팀(Corridor management team)</b>: 미국 몇몇 도시에서 조직, 교통제어·운영·안전을 맡은 다양한 조직 간 의사소통에 기여.</li>
      </ul>` },
    { title: '운전자 정보시스템과 표지', pages: '47', html: `
      <p>고속도로 운영 상황에 대한 최신 정보를 주어 본선 차량을 통제. 운전자가 하류의 혼잡을 피하도록 행동하게 한다.</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>표지 종류</th><th>설명 · 예</th></tr></thead><tbody>
        <tr><td><b>고정 표지</b> (Fixed signs)</td><td>불변하는 시각정보. 예: HOV 차로 표지, RTOR 표지</td></tr>
        <tr><td><b>Single message</b> (when flashing)</td><td>위험이 생길 때만 해당, <b>메시지 하나</b>. 예: <mark class="k">"Ramp Metered When Flashing"</mark></td></tr>
        <tr><td><b>Secret sign</b> (when applicable)</td><td>특정 시간에만 보이게 표출. 예: <mark class="k">"Ramp Closed"</mark></td></tr>
        <tr><td><b>VMS</b> (Variable message)</td><td>여러 정보를 함께 전달. 혼잡 위치·지속시간을 알면 짜증·공격성이 줄어 안전·효율 유지</td></tr>
        <tr><td><b>VSLS</b> (Variable speed limit sign)</td><td>통행속도를 <mark class="k">30~35 mph</mark>(↑) 정도로 낮추면 통과교통량이 늘 수 있다는 이론. <b>미국보다 유럽</b>에서 성공</td></tr>
      </tbody></table></div>` },
    { title: '라디오 방송과 고속도로 차로 재구획', pages: '48', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>Commercial radio</th><th>Roadside radio (HAR)</th></tr></thead><tbody>
        <tr><td>방식</td><td>통근시간 교통방송(traffic report). 지금은 디지털방송 시대(<b>지상파 DMB</b>)</td><td>도로변 송신기(안테나)로 관리자 통제 아래 운전자에게 <b>직접</b> 메시지</td></tr>
        <tr><td>장점</td><td>넓은 청취층</td><td>특정 장소의 상세 정보 → 상업방송보다 <b>더 효과적</b>. LA 연구: 운전자가 수용, 속도 통제에 효과적</td></tr>
        <tr><td>문제</td><td>정보가 not accurate, timely, reliable → 도로관리기관과 방송국 협조(파견)로 극복</td><td><b>주파수 승인·획득</b>, 라디오 수신기, tuning-in 문제</td></tr>
      </tbody></table></div>
      <p><b>고속도로 차로 재구획(restriping)</b>: <b>좌측 길어깨</b>를 제거하거나 좁혀 차로를 추가. 보통 차로폭 <mark class="k">12 ft를 11 ft</mark>까지 좁히면 가능.</p>
      <div class="memo"><b class="h">수업 필기</b>HAR(Highway Advisory Radio) 동그라미. "지상파 DMB — <b>구분할 수 있어야 함</b>", "DAB → DMB".</div>` }
  ]
});

/* ===================== 2-4 ===================== */
T.chapters.push({
  id: 'c7', no: '2-4', title: '돌발상황 관리 (FIM)', pages: '49–54',
  summary: '비반복혼잡의 원인인 돌발상황을 감지 → 대응·처리 → 운전자 정보 제공으로 관리한다.',
  sections: [
    { title: '돌발상황의 정의와 영향', pages: '49', html: `
      <ul>
        <li><b>정의</b>: 교통흐름에 영향을 줄 수 있고 대응·조치가 필요한 고속도로상의 모든 <mark class="k">accident, spill, breakdown, stoppage</mark>. 비반복혼잡의 원인.</li>
        <li>혼잡의 선두 요인. 첨두시에 발생하면 지체가 상상 이상으로 오래 지속(<b>incident duration</b>).</li>
      </ul>
      <div class="card" style="background:var(--surface-2);box-shadow:none;margin:10px 0">
        <b>가상 고속도로로 본 돌발상황 분포</b>
        <p class="small muted" style="margin:4px 0 8px">6차로, 길이 10 mile, IC 간격 1.5 mile, 첨두 각 2시간, 첨두 중방향 5,000 vph / 경방향 2,600 vph. 평일 첨두 4시간 동안 연 <b>1만 건</b> 가정(보수적, 텍사스는 5배).</p>
        <ul style="margin:0">
          <li><mark class="k">400건 통행차로</mark>: 120건 운전자 스스로 해결, 280건 조력 필요(60건 교통사고, 220건 연료·차량 원인 이동불가)</li>
          <li><mark class="k">9,600건 길어깨</mark>: 400건 교통사고(170건 fender bender 등, 230건 조력 필요), 9,200건 이동불가(7,480건 운전자 해결, 1,720건 조력 필요)</li>
        </ul>
      </div>
      <div class="memo"><b class="h">수업 필기</b>"400건은 통행 차로에서 발생"에 ✳.</div>` },
    { title: '관리의 중요성과 참여 기관', pages: '50', html: `
      <p>돌발상황은 교통흐름 효율에 큰 영향을 주는 비교적 빈도 높은 사건이므로 관리가 매우 중요하다. 차로를 하나 이상 막으면 <b>가능한 한 빨리 위치를 확인하고 바로잡아야</b> 한다. FIM 시스템은 모든 주요 도시지역에 확립되어야 한다.</p>
      <p><b>참여 기관</b> (경찰과 교통 부처가 필두): 주경찰·도로순찰대, 시군구 경찰, 군 경찰·보안관, 주 도로·교통 부서, 유료도로 운영기관, 시·군 엔지니어·공공사업부, 교통공학부서, 소방서·구조대, 구급차·병원, 지방 대중교통당국, 구조차·견인 서비스, AAA 같은 서비스 단체, 국방 시설, 트럭운송단체, 특수장비·크레인 업자, 환경 부서, 위험물관리부서, 통신·전기회사, 방송·TV·신문·포털.</p>` },
    { title: 'FIM 3대 전략과 감지 시스템', pages: '51', html: `
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>전략</th><th>목적</th></tr></thead><tbody>
        <tr><td><mark class="k">감지</mark> (감시·관제) 시스템</td><td>to detect the incident</td></tr>
        <tr><td><mark class="k">대응·처리</mark></td><td>to remove or alleviate the incident</td></tr>
        <tr><td><mark class="k">운전자 정보</mark></td><td>to alert, advise or guide motorists approaching</td></tr>
      </tbody></table></div>
      <p><b>감지 수단</b>: 검지기, CCTV, 항공기 감시, motorist call system, 무전기, 경찰·고객지원 순찰대.</p>
      <h3>검지기 기반 감시</h3>
      <p>전략적 위치의 검지기로 교통량을 상시 모니터링. 교통량이 <b>용량까지 급격히 늘거나 크게 줄면</b> 돌발상황 징후가 높다 → 교통흐름 특성 변화를 비교·분석해 신속히 감지 (모니터링 장비 필요).</p>
      <h3>CCTV</h3>
      <p>주요 지점 카메라 + 중앙제어실 운영자. 운영자가 사고를 발견하면 평가하고 대응을 결정.</p>
      <div class="grid two">
        <div><b>장점</b><ul><li>구간 <b>전경</b>과 <b>실시간</b> 모니터링</li></ul></div>
        <div><b>단점</b><ol><li>설치·유지관리 <b>비용</b>이 많이 든다</li><li><b>악천후·야간</b>엔 선명한 화면이 어렵다</li><li>화면 모니터링이 매우 <b>지루</b>하다</li><li>숙련 운영자 <b>인건비</b>가 비싸다</li></ol></div>
      </div>
      <div class="memo"><b class="h">수업 필기</b>"모니터링 장비가 요구된다" 옆 "AIDA" (자동 돌발상황 감지 알고리즘으로 보임).</div>` },
    { title: '기타 감지 수단', pages: '52', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>수단</th><th>내용</th></tr></thead><tbody>
        <tr><td>항공기 감시</td><td>경찰·방송국이 경비행기·헬기로 전체 상황 파악. 정보 취득 지연, <b>비용-효과적이지 않다</b>고 평가</td></tr>
        <tr><td>Motorist call system</td><td>도로변 운전자 전화박스·비상전화로 당사자나 목격자가 제보</td></tr>
        <tr><td>무전기(CB radio)</td><td>미국에서 성공적. 국내 화물차·운송회사는 따로 <b>TRS</b> 망 사용</td></tr>
        <tr><td>HOV 버스 운전자</td><td>휴스턴 HOV Lane 버스에 라디오 → 제보가 경찰·모니터링 기관으로 연쇄 보고</td></tr>
        <tr><td>순찰 시스템</td><td>경찰 순찰이 가장 일반적(고속도로순찰대). 서비스 순찰(고객지원단)은 연료·물·오일·경정비 도구를 실은 light-duty 차량으로 순회<br>+ 감지와 서비스를 <b>동시에</b> 달성<br>− 넓은 지역 담당에 차량·인원 <b>비용</b>이 높다</td></tr>
      </tbody></table></div>` },
    { title: '돌발상황 처리', pages: '53', html: `
      <ul>
        <li><b>Incident servicing</b>: 발견하면 가장 중요한 일은 <mark class="k">가능한 빨리 도로에서 제거</mark>하는 것. 생명이 걸리면 즉각적 의료지원이 최우선.</li>
        <li><b>경찰 개입</b>: 가장 가깝거나 관할 경찰에 빨리 연락해 공권력으로 필요한 조치.</li>
        <li><b>도로·교통 부서(DOT) 개입</b>: 고속도로 밖이나 다른 차로·길어깨로 우회시켜야 할 때 필수.</li>
        <li><b>사고 조사</b>: 견인차(wreckers) 필요. 사고조사 현장을 <b>도로 밖</b>에 설치해 정보 취득과 현장 지휘.</li>
        <li><b>HAZMAT(위험물질) 유출</b>: 소방·재난 당국, 생산·수송 관련 기업·산업계의 훈련된 인력이 특수 처리. 환경 영향을 잘 이해해야 함.</li>
        <li><mark class="k">Plan of Action is a Necessity</mark>: 모든 관련 기관이 행동요령을 명확히 이해해야 제대로 처리. 즉각 반응 필수.</li>
        <li><b>운전자 정보시스템</b>: 반복혼잡용 정보시스템을 돌발상황 알림·원인 설명·우회 결정 지원에도 활용.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>Police·DOT Involvement에 ✳. HAZMAT Spills 밑줄. "Plan of Action is a Necessity" 동그라미 → "매뉴얼".</div>` },
    { title: '고속도로 교통관리체계 구성도', pages: '54', html: `
      <p>중앙의 <mark class="k">고속도로 운영 통제센터</mark>(Freeway Operations Control Center)를 중심으로:</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>구성요소</th><th>세부</th></tr></thead><tbody>
        <tr><td>HOV Treatments</td><td>분리 HOV 시설, 우선 진입, 전용차로, 우대 주차</td></tr>
        <tr><td>Surveillance <span class="faint">(수집 Gathering)</span></td><td>차량 검지기, CCTV, 돌발상황 감지</td></tr>
        <tr><td>Lane Use Control</td><td>본선 미터링, 길어깨 활용, 가변 표지</td></tr>
        <tr><td>Ramp Control</td><td>램프미터링, 램프 폐쇄</td></tr>
        <tr><td>Information Dissemination <span class="faint">(제공)</span></td><td>전화, 인터넷, 기관 협력, 정보서비스 제공자, HAR, 차내 표시장치, 차로제어 표지, 키오스크, 라디오/TV, DMS</td></tr>
        <tr><td>Incident Management</td><td>우회 계획, 운전자 지원 순찰, 공사구간, 특별행사·대형 재난, 제거 전략</td></tr>
      </tbody></table></div>
      <p><b>돌발상황 처리 흐름 4단계</b>: <mark class="k">감지</mark>(VDS, CCTV, 비상전화, 운전자 제보, 순찰) → <mark class="k">확인</mark>(CCTV·하류 VDS로 확인, 심각도 구분, 처리시간·지체 예측) → <mark class="k">대응</mark>(관계기관 연락, 교통류 관리 RMS·LCS·신호, 운전자 정보 VMS·인터넷·라디오) → <mark class="k">처리</mark>(대응 실행, 상황 갱신, 종료 선언).</p>
      <div class="memo"><b class="h">수업 필기</b>SURVEILLANCE 아래 "수집(Gathering)", INFORMATION DISSEMINATION에 "제공".</div>` }
  ]
});

/* ===================== quiz ===================== */
T.quiz.push(
  { ch: 'c4', sec: 0, type: 'short', long: true, q: '[서술 연습] 차량흐름 개선 기법 10가지 중 하나를 골라 정의·방법·장점·단점·사례를 정리해 보시오. (수업 힌트: Part2 앞부분 중 골라 1장)', answer: '예) 일방도로: 평행한 양방도로 두 개를 일방 pair로 전환. 비용은 재도색·표지·신호계획 변경 정도. 장점 — 회전 상충↓ 안전↑, 신호연동 개선, 용량 50%↑. 단점 — 대중교통 이용↓, around-the-block VMT↑, 초기 반발, 보행안전↓(median 제거 시). NYC: 보행사고 20%↓, 통행시간 22%↓, 정지수 65%↓. "rarely converted back".', ref: '19–33' },
  { ch: 'c4', sec: 1, type: 'mc', q: '감응식(traffic actuated) 신호기가 <b>가장 효과적인</b> 곳은?', choices: ['독립(isolated) 교차로', '간선도로 연동 구간', 'CBD 신호교차로망', '교통량이 일정한 대도시 첨두시 교차로'], answer: 0, exp: '감응식은 정교한 전산화 없이는 간선 연동·신호망 운영이 어렵다. 일정한 교통량에는 고정식이 유리.', ref: '20' },
  { ch: 'c4', sec: 1, type: 'ox', q: '고정식(pretimed) 신호는 교통량이 일관된 상황에서 효과적이며 간선도로 연동과 CBD 교통순환에 유용하다.', answer: true, ref: '20' },
  { ch: 'c4', sec: 1, type: 'mc', q: '수업에서 언급된 실시간 신호제어 모델과 국가의 연결로 옳은 것은?', choices: ['SCOOT–영국, SCATS–호주, MODERATO–일본', 'SCOOT–호주, SCATS–영국, MODERATO–일본', 'SCOOT–미국, SCATS–호주, MODERATO–이탈리아', 'SCOOT–영국, SCATS–일본, MODERATO–호주'], answer: 0, ref: '20 필기' },
  { ch: 'c4', sec: 2, type: 'mc', q: '상류부 수요 5,100 vph, 하류부 용량 5,400 vph, 램프 수요 500 vph일 때 적정 진입허용률은?', choices: ['300 vph (12초에 1대)', '500 vph (7.2초에 1대)', '200 vph (18초에 1대)', '900 vph (4초에 1대)'], answer: 0, exp: '5,400 − 5,100 = 300 vph < 500 vph → 300 vph = 5 vpm = 12초에 1대.', ref: '21' },
  { ch: 'c4', sec: 2, type: 'mc', q: '일반적인 pretimed 램프미터링 진입허용률 범위는?', choices: ['시간당 300~900대 (4~12초당 1대)', '시간당 100~200대', '시간당 1,000~1,800대', '시간당 50~100대'], answer: 0, ref: '21' },
  { ch: 'c4', sec: 2, type: 'mc', q: 'California 연구에서 보고된 진입조절 램프의 평균 위반율은?', choices: ['10~20%', '3.8~37.7%', '약 40%', '1~2%'], answer: 0, exp: '종종 50%를 넘는 경우도 있었다. 3.8~37.7%는 HOV 차로 위반율.', ref: '23' },
  { ch: 'c4', sec: 2, type: 'ox', q: '우리나라는 frontage road나 service road가 잘 갖춰져 있어 램프미터링의 대체노선 확보에 유리하다.', answer: false, exp: '우리나라는 frontage/service road가 없어 이 점에서 <b>불리</b>하다.', ref: '23' },
  { ch: 'c4', sec: 2, type: 'short', q: '램프미터링 시스템의 잠재적 편익 5가지를 쓰시오.', answer: '통행시간 단축, 지체 감소, 본선 속도 증가, 본선 서비스 교통량 증가, 안전한 합류(차로변경·추돌사고 감소)', ref: '22' },
  { ch: 'c4', sec: 2, type: 'mc', q: '램프미터링 장비 배치에서 Q, D, P 검지기가 뜻하는 것으로 옳은 것은?', choices: ['Q 대기행렬, D 수요, P 통과', 'Q 용량, D 밀도, P 점유율', 'Q 대기행렬, D 지체, P 우선', 'Q 교통량, D 수요, P 주차'], answer: 0, ref: '22' },
  { ch: 'c4', sec: 3, type: 'mc', q: '일방도로 전환의 <b>단점</b>이 아닌 것은?', choices: ['회전차량에 의한 상충 증가로 안전성 저하', '보행시간 증가로 대중교통 이용 감소 경향', "'around the block' 이동으로 VMT 증가", '넓은 도로에서 median 제거 시 보행안전 감소'], answer: 0, exp: '회전 상충 <b>감소</b>로 안전성이 증가하는 것은 장점이다.', ref: '24' },
  { ch: 'c4', sec: 3, type: 'mc', q: 'NYC의 일방도로 전환 경험에서 감소율이 가장 컸던 항목은?', choices: ['차량 정지수 65%', '보행사고 20%', '통행시간 22%', '통과시간 40%'], answer: 0, exp: '정지수 65%, 정지시간 60%, 통과시간 40%, 통행시간 22%, 보행사고 20%.', ref: '24' },
  { ch: 'c4', sec: 3, type: 'ox', q: '양방도로 두 개를 일방도로 pair로 전환하면 두 도로를 함께 볼 때 교통용량이 약 50% 증가한다.', answer: true, ref: '24' },
  { ch: 'c4', sec: 3, type: 'short', q: '일방도로 전환이 성공적이라는 것을 대신하는 말(영문)을 쓰시오.', answer: '"One-way streets rarely have been converted back to two-way operation!"', ref: '25' },
  { ch: 'c4', sec: 4, type: 'mc', q: '노상주차 제거에 대한 설명으로 옳지 <b>않은</b> 것은?', choices: ['노상주차가 꼭 필요하다면 사각(diagonal)주차가 평행주차보다 낫다', '양방 2차로 도로의 노상주차는 용량을 35~45% 감소시킨다', '일방도로 신호교차로에서 주차 제거로 약 250% 용량 증가가 가능하다', '도심 교통사고의 18~19%가 주차와 관련된다'], answer: 0, exp: '<b>평행주차</b>가 사각주차보다 낫다(시계 좋고 용량 손실·안전 희생이 적음).', ref: '26' },
  { ch: 'c4', sec: 4, type: 'short', q: '노상주차 제거의 주된 이점 2가지와 단점 2가지를 쓰시오.', answer: '이점: 도로용량 증가, 교통안전 향상 / 단점: 사업자 불평, 퇴거된(displaced) 주차수요를 노외주차장으로 수용해야 함', ref: '26–27' },
  { ch: 'c4', sec: 5, type: 'mc', q: '가변차로 설치 요건으로 옳지 <b>않은</b> 것은?', choices: ['중앙분리대가 설치되어 있을 것', '적어도 65%의 차량이 한 방향으로 이동(2:1)', '비첨두 방향에도 적절한 용량 여유', '좌회전과 주차를 금지할 수 있을 것'], answer: 0, exp: '중앙분리대가 <b>없어야</b> 한다.', ref: '28' },
  { ch: 'c4', sec: 5, type: 'mc', q: '가변차로 시행으로 보고된 통행시간 감소 효과는 최대 얼마인가?', choices: ['20%', '50%', '10%', '65%'], answer: 0, ref: '28' },
  { ch: 'c4', sec: 5, type: 'ox', q: '분리되지 않은 6차로 도로는 가변차로로 4-2 배분할 수 있다.', answer: true, ref: '28' },
  { ch: 'c4', sec: 6, type: 'mc', q: '도류화(channelization)의 효과로 보고된 간선도로 평균 운영속도 증가 폭은?', choices: ['최대 10 mph', '최대 25 mph', '최대 2 mph', '최대 50 mph'], answer: 0, ref: '29' },
  { ch: 'c4', sec: 6, type: 'short', q: '도류화의 효과(benefit)를 3가지 이상 쓰시오.', answer: '운전자 혼선 감소·제거, 잠재적 상충지역 분리, 교통운영 안전 제고, 가용 포장면 최대 이용, 차량 이동과 속도 규제·통제', ref: '29' },
  { ch: 'c4', sec: 7, type: 'ox', q: '노외 화물하역의 절충안은 첨두시에만 트럭 화물적하를 금지하는 것이다.', answer: true, ref: '30' },
  { ch: 'c4', sec: 8, type: 'mc', q: '교통운영 관점에서 교통 방해가 <b>가장 적은</b> 버스정류장 위치는?', choices: ['Mid-block (블록 중앙)', 'Near-side (가까운 측)', 'Far-side (먼 측)', 'Far-side after a RT'], answer: 0, exp: '단, 다른 정류장으로 갈아탈 때 보행시간이 늘어나는 문제가 있다.', ref: '31' },
  { ch: 'c4', sec: 8, type: 'mc', q: 'Far-side 정류장의 장점이 <b>아닌</b> 것은?', choices: ['적색신호 시 효율적인 승객 승하차', '우회전 차량 경로에서 버스 제거', 'RTOR 기회 증가', '교차로에서 운전자 시거 증가'], answer: 0, exp: '적색신호 시 승하차는 <b>near-side</b>의 장점.', ref: '31–32' },
  { ch: 'c4', sec: 8, type: 'short', long: true, q: 'Near-side 정류장의 장점 2가지와 단점 3가지를 쓰시오. (수업: "장단점 3~4개씩 술술")', answer: '장점: 적색신호 시 효율적 승하차, far-side 정류장으로 편리한 환승 / 단점: 교차로에서 운전자 시야 방해, 바깥(curb) 차로 직진 흐름 차단, 버스를 끼고 추월·회전하는 행동 조장', ref: '32' },
  { ch: 'c4', sec: 8, type: 'mc', q: 'Louisville, KY의 정류장 재배치 사례로 옳은 것은?', choices: ['near-side 정류장 8개를 far-side로 옮겨 버스와 승용차 통행시간·지체 감소', 'far-side 정류장 8개를 near-side로 옮겨 환승 편의 증가', 'mid-block 정류장을 모두 폐지', '턴아웃을 모두 제거해 용량 증가'], answer: 0, ref: '32' },
  { ch: 'c4', sec: 9, type: 'mc', q: '폭 11~13m, 한측 주차가 있는 2차로 도로에 대한 TSM 대안은?', choices: ['주차 금지 후 중앙을 TWLTL로 하는 3차로로 재도색', '양측 주차를 허용하는 2차로 유지', '중앙분리대를 설치한 4차로로 확장', '일방 couplet으로 전환해 6차로 확보'], answer: 0, ref: '33' },
  { ch: 'c4', sec: 9, type: 'ox', q: '폭 12~15m 양방도로(양측 주차)의 주차를 없애고 4차로화하면 도로용량을 적어도 두 배로 늘릴 수 있다.', answer: true, ref: '33' },

  { ch: 'c5', sec: 0, type: 'short', q: 'HOV에 혜택을 주는 TSM action 4가지를 쓰시오.', answer: '고속도로 버스·카풀 차로와 진입램프, 도시가로·간선도로 버스·카풀 차로, 버스 우선신호(pre-emption), 통행료 정책(toll policies)', ref: '34' },
  { ch: 'c5', sec: 1, type: 'mc', q: '고속도로에서 HOV를 우대하는 방식에 해당하지 <b>않는</b> 것은?', choices: ['Shoulder parking lane', 'Exclusive ROW + 진입램프 전용 사용', 'Reserved with-flow (concurrent flow) lane', 'Reserved contraflow lane'], answer: 0, ref: '36' },
  { ch: 'c5', sec: 1, type: 'mc', q: 'California 연구에서 보고된 HOV 차로 위반율 범위는?', choices: ['3.8~37.7%', '10~20%', '약 65%', '0.5~1%'], answer: 0, exp: 'ramp bypass lane은 많게는 약 40%.', ref: '37' },
  { ch: 'c5', sec: 1, type: 'ox', q: 'HOV 차로에 카풀을 허용할 때 일반적으로 재차인원 2명 이상이면 이용할 수 있다.', answer: false, exp: '슬라이드 기준 일반적으로 <b>3명 이상</b>.', ref: '37' },
  { ch: 'c5', sec: 1, type: 'mc', q: '우리나라 고속도로 버스전용차로를 승합차가 이용하기 위한 조건(수업 필기)은?', choices: ['9인승 이상 승합차에 6명 이상 탑승', '7인승 이상 승합차에 3명 이상 탑승', '12인승 이상 승합차에 10명 이상 탑승', '승용차 2인 이상 탑승'], answer: 0, ref: '77 필기' },
  { ch: 'c5', sec: 2, type: 'short', long: true, q: '중앙버스차로(median lane)의 단점과 가로변(curbside) 버스차로의 장단점을 쓰시오. (수업: "장단점 3,4개씩 기술이 자주 나옴")', answer: '중앙: 보행자가 취약한 위치(vulnerable position)에 놓임, 버스와 좌회전 교통 상충 / 가로변: 대중교통 이용 편리(+), HOV와 우회전 교통 상충(−), 위반율 높음(−)', ref: '38–39' },
  { ch: 'c5', sec: 2, type: 'mc', q: '역류(contraflow) 버스차로의 특징으로 옳은 것은?', choices: ['버스의 크기와 위세 때문에 차로 단속이 저절로 된다', '보행자가 취약한 위치에 놓인다', '우회전 교통과 상충하고 위반율이 높다', '옛 노면전차 부지를 활용해 만든 것이 많다'], answer: 0, ref: '38' },
  { ch: 'c5', sec: 2, type: 'mc', q: '1974년 BRT를 도입한 도시로 슬라이드에 소개된 곳은?', choices: ['Curitiba', 'Seattle', 'Singapore', 'Houston'], answer: 0, ref: '38' },
  { ch: 'c5', sec: 2, type: 'ox', q: '버스전용도로(bus street)의 단점은 승용차·트럭의 노변 건물 접근을 배제한다는 것이다.', answer: true, ref: '39' },
  { ch: 'c5', sec: 3, type: 'short', q: 'Bus Gate의 정의와 운영 방식을 쓰시오.', answer: '도로 일부 구간을 버스 등 허가 차량 전용으로 제한해 대중교통 속도·신뢰성을 높이고 일반차량을 차단하는 통제수단. 물리적 게이트, CCTV 기반 단속, 표지·노면표시, 신호제어와 결합해 운영', ref: '40' },
  { ch: 'c5', sec: 4, type: 'mc', q: '버스 우선신호가 우선신호 요건이 되기 위해 필요한 최소 버스 통행량은?', choices: ['시간당 10~15대', '시간당 1~2대', '시간당 50~60대', '시간당 100대 이상'], answer: 0, ref: '41' },
  { ch: 'c5', sec: 4, type: 'mc', q: '버스 우선신호의 두 가지 방식은?', choices: ['녹색 연장(green extension)과 적색 조기 종료(early green)', '전적색과 황색 연장', '고정식과 감응식', '램프 폐쇄와 램프미터링'], answer: 0, ref: '41' },
  { ch: 'c5', sec: 4, type: 'ox', q: '버스 우선신호는 비첨두방향 교통이 적어 역류버스차로와 같이 운영될 때 가장 효과적이다.', answer: true, ref: '41' },
  { ch: 'c5', sec: 4, type: 'ox', q: '버스 우선신호에서 버스 통행시간 감소는 승용차 통행시간 증가로 상쇄되는 특징이 있다.', answer: true, ref: '41' },
  { ch: 'c5', sec: 5, type: 'mc', q: 'Seattle·San Francisco에서 HOV non-stop 통과를 적용한 결과가 <b>아닌</b> 것은?', choices: ['통행료 수입 증가', '승용차 재차인원 증가', '버스 통행시간 감소', '통행료 수입 감소'], answer: 0, exp: '수입은 <b>감소</b>. 수입이 증가한 것은 LOV 요금을 올린 NY·NJ.', ref: '42' },
  { ch: 'c5', sec: 5, type: 'ox', q: 'HOV 통행료 우대 중 가장 효과적인 것은 non-stop 통과이다.', answer: true, ref: '42' },

  { ch: 'c6', sec: 1, type: 'mc', q: '기하구조(geometric) 병목에 해당하지 <b>않는</b> 것은?', choices: ['본선과 연결로 교통량의 합류로 인한 과다 수요', 'lane drops', 'weaving sections', '좁은 횡단면(narrow cross-section)'], answer: 0, exp: '합류로 인한 과다 수요는 <b>운영상 병목</b>.', ref: '44' },
  { ch: 'c6', sec: 1, type: 'mc', q: '비반복혼잡을 유발하는 돌발상황(incident)의 예가 <b>아닌</b> 것은?', choices: ['오전 첨두시 상습정체', '교통사고(적재물 낙하)', '도로공사', '악천후'], answer: 0, ref: '44' },
  { ch: 'c6', sec: 1, type: 'short', long: true, q: '돌발상황으로 인한 혼잡을 쉽게 경감시킬 수 없는 이유를 쓰시오. (★ 수업 강조)', answer: '돌발상황의 위치나 발생 시각을 예측할 수 없기 때문에, 반복정체를 줄이는 데 쓰는 일상적인 수요통제나 용량제고 방법을 임의 이벤트에는 적용할 수 없다.', ref: '44' },
  { ch: 'c6', sec: 2, type: 'mc', q: '반복혼잡 관리 기법 중 "교통수요 관리"에 해당하지 <b>않는</b> 것은?', choices: ['진입연결로 교통통제', '차량 함께타기', 'P&R 운영', '출퇴근 시차제'], answer: 0, exp: '진입연결로 통제는 <b>차량수요 관리</b>.', ref: '45' },
  { ch: 'c6', sec: 2, type: 'ox', q: '고속도로 수요관리의 가장 일반적인 방법은 진입연결로 통제이다.', answer: true, ref: '45' },
  { ch: 'c6', sec: 3, type: 'mc', q: 'LA 고속도로 램프 통제 연구에서 평균 통행속도 변화는?', choices: ['25 → 52 mph', '30 → 35 mph', '40 → 60 mph', '52 → 25 mph'], answer: 0, ref: '46' },
  { ch: 'c6', sec: 3, type: 'mc', q: '램프 통제 효과 사례의 연결로 옳은 것은?', choices: ['Chicago Eisenhower — 연결로 사고 17% 감소, Detroit — 연간 225,000 VHT 감소', 'Chicago — 연간 225,000 VHT 감소, Detroit — 사고 17% 감소', 'St. Paul — 속도 25→52 mph', 'Houston — 위반율 10~20%'], answer: 0, ref: '46' },
  { ch: 'c6', sec: 4, type: 'mc', q: '"Ramp Metered When Flashing" 표지는 어떤 유형인가?', choices: ['Single message sign', 'Secret sign', 'Variable message sign', 'Fixed sign'], answer: 0, exp: '"Ramp Closed"가 특정 시간에만 보이는 것은 Secret sign.', ref: '47' },
  { ch: 'c6', sec: 4, type: 'mc', q: '가변속도제한표지(VSLS)의 근거 이론은?', choices: ['통행속도를 30~35 mph 정도로 낮추면 통과교통량이 늘 수 있다', '속도를 높이면 사고가 줄어든다', '속도와 교통량은 무관하다', '속도를 55 mph 이상으로 유지해야 용량이 최대'], answer: 0, exp: '미국보다 유럽에서 성공적으로 사용.', ref: '47' },
  { ch: 'c6', sec: 5, type: 'mc', q: 'HAR(Highway Advisory Radio)에 대한 설명으로 옳지 <b>않은</b> 것은?', choices: ['상업방송보다 넓은 지역을 포괄하므로 특정 장소 정보에 약하다', '도로변 송신기로 관리자 통제 아래 운전자에게 직접 메시지를 보낸다', '특정 장소의 상세 정보를 줄 수 있어 상업라디오보다 효과적일 수 있다', '주파수 승인·획득, 수신기, tuning-in 문제가 있다'], answer: 0, ref: '48' },
  { ch: 'c6', sec: 5, type: 'ox', q: '고속도로 차로 재구획은 좌측 길어깨를 없애거나 좁히고, 차로폭을 12 ft에서 11 ft로 줄여 차로를 추가하는 방법이다.', answer: true, ref: '48' },

  { ch: 'c7', sec: 0, type: 'mc', q: '가상 고속도로 1만 건의 돌발상황 중 <b>통행차로</b>에서 발생한 건수는?', choices: ['400건', '9,600건', '1,720건', '120건'], answer: 0, exp: '400건 통행차로(120 자력 해결, 280 조력 필요), 9,600건 길어깨.', ref: '49' },
  { ch: 'c7', sec: 0, type: 'ox', q: '돌발상황은 고속도로상 교통흐름에 영향을 주고 대응이 필요한 사고, 유출, 고장, 정차를 모두 포함한다.', answer: true, ref: '49' },
  { ch: 'c7', sec: 2, type: 'short', q: 'FIM 전략의 3가지 주요 영역을 쓰시오.', answer: '감지(감시·관제) 시스템, 돌발상황 대응·처리, 운전자 정보 제공', ref: '51' },
  { ch: 'c7', sec: 2, type: 'mc', q: 'CCTV 감시의 단점이 <b>아닌</b> 것은?', choices: ['구간 전경을 실시간으로 볼 수 없다', '설치·유지관리 비용이 많이 든다', '악천후와 야간에 선명한 화면을 얻기 어렵다', '숙련 운영자의 인건비가 비싸다'], answer: 0, exp: '전경과 실시간 모니터링은 CCTV의 <b>장점</b>.', ref: '51' },
  { ch: 'c7', sec: 2, type: 'ox', q: '검지기 기반 감시에서 교통량이 용량까지 급격히 증가하거나 크게 감소하면 돌발상황 징후가 높다고 본다.', answer: true, ref: '51' },
  { ch: 'c7', sec: 3, type: 'mc', q: '"시기 적절한 정보 취득에 지연이 있고 비용-효과적이지 않다"고 평가된 감지 수단은?', choices: ['항공기 감시', 'CCTV', 'Motorist call system', '서비스 순찰'], answer: 0, ref: '52' },
  { ch: 'c7', sec: 3, type: 'mc', q: '순찰 시스템의 장점으로 옳은 것은?', choices: ['돌발상황 감지와 서비스를 동시에 달성', '넓은 지역을 적은 비용으로 담당', '운영자 없이 자동 감지', '주파수 승인이 필요 없음'], answer: 0, exp: '단점은 넓은 지역 담당에 차량·인원 비용이 높다는 것.', ref: '52' },
  { ch: 'c7', sec: 4, type: 'ox', q: '사고조사 현장은 도로 위에 설치해 교통을 통제하면서 조사하는 것이 바람직하다.', answer: false, exp: '사고조사 현장을 <b>도로 밖</b>에 설치해 정보를 얻고 현장 조치를 지휘.', ref: '53' },
  { ch: 'c7', sec: 4, type: 'short', q: '"Plan of Action is a Necessity"의 의미를 쓰시오.', answer: '돌발상황 처리는 관계된 모든 기관이 행동요령을 명확히 이해했을 때만 제대로 이루어지므로, 사전 행동계획(매뉴얼)이 필수다. 즉각 반응하지 못하면 지체와 안전 문제로 큰 손실.', ref: '53' },
  { ch: 'c7', sec: 5, type: 'mc', q: '돌발상황 처리 흐름 4단계의 순서로 옳은 것은?', choices: ['감지 → 확인 → 대응 → 처리', '확인 → 감지 → 처리 → 대응', '대응 → 감지 → 확인 → 처리', '감지 → 대응 → 확인 → 처리'], answer: 0, ref: '54' }
);

/* ===================== cards ===================== */
T.cards.push(
  { ch: 'c4', front: 'Ramp metering', back: '진입연결로에서 본선 진입을 신호로 조절. 용량 초과를 막고 적정 gap에서 진입 허용. 보통 300~900 vph(4~12초당 1대).' },
  { ch: 'c4', front: 'Ramp closure', back: '램프 제어의 극단적(궁극의) 형태. 진입 램프의 일시적·영구적 폐쇄.' },
  { ch: 'c4', front: 'Gap acceptance', back: '수락 가능한 차두간격이 검지·확인될 때만 진입 허용(교통감응형 RMS). 운전자의 수용 여부는 별개 문제.' },
  { ch: 'c4', front: 'Pretimed vs Actuated', back: '고정식: 일정한 교통량, 간선 연동·CBD 순환에 유리. 감응식: 수요에 따라 현시 순서·시간 변화, 독립 교차로에서 최고.' },
  { ch: 'c4', front: 'SCOOT · SCATS · MODERATO', back: '실시간 신호제어 모델. SCOOT 영국, SCATS 호주, MODERATO 일본.' },
  { ch: 'c4', front: 'Couplet', back: '주도로와 평행한 도로를 짝지은 일방도로 쌍(one-way pair). 도로 활용의 형평성 보장.' },
  { ch: 'c4', front: 'Reversible lane', back: '가변차로. median 없는 도로의 차로를 반대 방향으로도 사용. 요건: 65% 한 방향(2:1), 비첨두 여유, 폭·연속성, 분리대 없음, 좌회전·주차 금지 가능.' },
  { ch: 'c4', front: 'TWLTL', back: 'Two-Way Left-Turn Lane, 양방향 좌회전 공용 중앙차로.' },
  { ch: 'c4', front: 'Channelization', back: '도류화. 교통섬·노면마킹·표지병으로 정해진 경로 유도. 혼선↓, 상충 분리, 안전↑, 포장면 활용, 속도 규제. 평균 운영속도 10 mph까지↑.' },
  { ch: 'c4', front: 'Off-street loading', back: '노외 화물하역. 연석차로 적하 제거로 용량↑. 절충안은 첨두시 적하 금지.' },
  { ch: 'c4', front: 'Bus turnout (bus bay)', back: '정류장의 버스 정차 공간을 차로 밖으로 빼낸 것. 정지 버스라는 교통류 저항을 없애 흐름 개선.' },
  { ch: 'c4', front: 'Bus bulb (버스곶)', back: '보도를 차도 쪽으로 내민 정류장. 버스가 차로에서 바로 정차(수업 필기).' },
  { ch: 'c4', front: 'RTOR', back: 'Right Turn On Red, 적색신호 시 우회전. far-side 정류장은 RTOR 기회를 늘린다.' },
  { ch: 'c4', front: 'CFI', back: 'Continuous Flow Intersection. 슬라이드 19 사진에 필기로 표시된 교차로 형식.' },
  { ch: 'c5', front: 'HOV', back: 'High Occupancy Vehicle, 다인승차량. 반대는 LOV/SOV(나홀로 차량).' },
  { ch: 'c5', front: 'Managed lanes', back: 'HOV 전용 special lanes의 요즘 명칭. HOV·HOT 등 운영 방식으로 관리되는 차로.' },
  { ch: 'c5', front: 'Concurrent-flow lane', back: '순방향(with-flow) 전용차로. 고속도로 HOV 우대 3방식 중 하나.' },
  { ch: 'c5', front: 'Contraflow lane', back: '역방향 전용차로. 버스 위세로 단속이 저절로 됨, 일방도로에선 좌회전 상충 가능.' },
  { ch: 'c5', front: 'Signal pre-emption', back: '버스 우선신호(선제적 처리). OBU 신호를 검지기·수신기로 감응해 녹색 연장 또는 적색 조기 종료. 시간당 10~15대 이상 필요.' },
  { ch: 'c5', front: 'HOT lane', back: 'High Occupancy & Toll Lane. HOV는 무료, 일반 차량은 통행료를 내고 이용.' },
  { ch: 'c5', front: 'Bus Gate', back: '일부 구간을 버스 등 허가 차량 전용으로 제한하고 일반차량을 차단. 물리적 게이트, CCTV, 표지, 신호제어.' },
  { ch: 'c5', front: 'TOD', back: 'Transit Oriented Development, 대중교통 중심 개발.' },
  { ch: 'c6', front: '반복혼잡', sub: 'Recurring congestion', back: '특정 지역·시간에 반복(첨두 상습정체). 원인: 운영상 병목(합류 과다수요), 기하구조 병목.' },
  { ch: 'c6', front: '비반복혼잡', sub: 'Non-recurring congestion', back: '돌발상황(사고·공사·악천후)이 원인. 위치·시각 예측 불가 → 일상적 수요통제·용량제고 방법 적용 불가.' },
  { ch: 'c6', front: '기하구조 병목', back: 'lane drops, weaving sections, 좁은 횡단면, 도로 인접 장애물.' },
  { ch: 'c6', front: 'Single message sign', back: '위험할 때만 점멸, 메시지 하나. 예: "Ramp Metered When Flashing".' },
  { ch: 'c6', front: 'Secret sign', back: '특정 시간에만 보이게 표출. 예: "Ramp Closed".' },
  { ch: 'c6', front: 'VSLS', back: '가변속도제한표지. 속도를 30~35 mph로 낮추면 통과교통량↑ 이론. 유럽에서 성공.' },
  { ch: 'c6', front: 'HAR', sub: 'Highway Advisory Radio', back: '도로변 송신기로 관리자가 직접 방송. 특정 장소 상세정보라 상업방송보다 효과적. 문제: 주파수 승인, 수신기, tuning-in.' },
  { ch: 'c6', front: 'Corridor control', back: '교통축 통제. 본선·frontage road·간선도로를 포함한 축 안에서 수요-용량 최적 균형. 기관 간 협력 필요.' },
  { ch: 'c7', front: 'Incident', back: '돌발상황. 교통흐름에 영향을 주고 대응이 필요한 고속도로상 accident, spill, breakdown, stoppage.' },
  { ch: 'c7', front: 'FIM 3대 전략', back: '감지(detect) → 대응·처리(remove/alleviate) → 운전자 정보(alert/advise/guide).' },
  { ch: 'c7', front: 'HAZMAT', back: '위험물질. 유출 시 소방·재난당국과 산업계 훈련 인력의 특수 처리, 환경 영향 이해 필요.' },
  { ch: 'c7', front: 'AIDA', back: '자동 돌발상황 감지 알고리즘(수업 필기). 검지기 데이터로 교통흐름 변화를 분석해 감지.' },
  { ch: 'c7', front: 'TRS', back: '국내 화물차·운송회사가 쓰는 주파수공용통신 무전망. 미국의 CB radio에 대응.' }
);

/* ===================== numbers ===================== */
T.numbers.push(
  { ch: 'c4', label: 'pretimed 램프미터링 진입허용률', value: '300~900 vph', note: '4~12초당 1대' },
  { ch: 'c4', label: '램프미터링 예제 진입허용률', value: '300 vph', note: '5,400 − 5,100 = 300 → 5 vpm, 12초에 1대' },
  { ch: 'c4', label: '진입조절 램프 위반율 (California)', value: '평균 10~20%', note: '종종 50% 초과' },
  { ch: 'c4', label: '일방도로 전환 시 용량 증가', value: '50%' },
  { ch: 'c4', label: 'NYC 일방도로: 보행사고 / 통행시간 감소', value: '20% / 22%' },
  { ch: 'c4', label: 'NYC 일방도로: 정지수 / 정지시간 / 통과시간 감소', value: '65% / 60% / 40%' },
  { ch: 'c4', label: '양방 2차로 노상주차로 인한 용량 감소', value: '35~45%' },
  { ch: 'c4', label: '일방 신호교차로 주차 제거 시 용량 증가', value: '약 250%' },
  { ch: 'c4', label: '노상주차 제거 시 지체·정지수 감소', value: '최대 50%' },
  { ch: 'c4', label: '도심 교통사고 중 주차 관련 비율', value: '18~19%' },
  { ch: 'c4', label: '가변차로 통행시간 감소', value: '최대 20%' },
  { ch: 'c4', label: '가변차로 요건: 한 방향 교통 비율', value: '65% 이상 (2:1)' },
  { ch: 'c4', label: '도류화로 평균 운영속도 증가', value: '최대 10 mph' },
  { ch: 'c4', label: 'CBD 화물하역시설 보유 (인구 25만+ 도시)', value: '10개 중 1개' },
  { ch: 'c4', label: 'Louisville 정류장 재배치 (near→far)', value: '8개' },
  { ch: 'c4', label: '일방 couplet 전환 대상 도로폭', value: '9m 이하' },
  { ch: 'c4', label: '3차로(TWLTL) 재도색 대상 도로폭', value: '11~13m', note: '한측 주차 2차로' },
  { ch: 'c4', label: '4차로화(용량 2배+) 대상 도로폭', value: '12~15m', note: '양측 주차 양방도로' },
  { ch: 'c4', label: '중앙 TWLTL 설치 대상 4차로 도로폭', value: '15.5~18m' },
  { ch: 'c5', label: 'HOV 카풀 허용 재차인원 (일반적)', value: '3명 이상' },
  { ch: 'c5', label: '국내 버스전용차로 승합차 조건 (필기)', value: '9인승 이상 · 6명 이상' },
  { ch: 'c5', label: 'California HOV 차로 위반율', value: '3.8~37.7%' },
  { ch: 'c5', label: 'Ramp bypass lane 위반율', value: '약 40%' },
  { ch: 'c5', label: 'Shirley Hwy / I-66 / Lincoln Tunnel HOV 차로수', value: '2 / 2 / 1' },
  { ch: 'c5', label: '버스 통행시간 중 신호대기 비율', value: '10~20%', note: '필기: 30~40%' },
  { ch: 'c5', label: '버스우선신호 최소 버스 통행량', value: '시간당 10~15대' },
  { ch: 'c5', label: 'Curitiba BRT 도입', value: '1974년' },
  { ch: 'c6', label: '고속도로의 국가도로 연장 비율', value: '약 4.5%', note: '자동차통행은 약 20%(?)' },
  { ch: 'c6', label: 'LA 램프통제 평균속도', value: '25 → 52 mph' },
  { ch: 'c6', label: 'Chicago Eisenhower 연결로 사고 감소', value: '17%' },
  { ch: 'c6', label: 'Detroit 연간 VHT 감소', value: '225,000 VHT' },
  { ch: 'c6', label: 'VSLS 목표 속도', value: '30~35 mph' },
  { ch: 'c6', label: '재구획 시 차로폭', value: '12 ft → 11 ft' },
  { ch: 'c7', label: '가상 고속도로 연간 돌발상황', value: '10,000건', note: '보수적 추정, 텍사스는 5배' },
  { ch: 'c7', label: '통행차로 / 길어깨 발생', value: '400 / 9,600건' },
  { ch: 'c7', label: '통행차로 400건: 자력 해결 / 조력 필요', value: '120 / 280건', note: '280 = 사고 60 + 이동불가 220' },
  { ch: 'c7', label: '가상 고속도로: 차로 / 길이 / IC 간격', value: '6차로 / 10 mi / 1.5 mi' },
  { ch: 'c7', label: '첨두 중방향 / 경방향 교통량', value: '5,000 / 2,600 vph' }
);
})();
