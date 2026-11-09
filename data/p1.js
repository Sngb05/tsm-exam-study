(() => {
const T = window.TSM;

/* ===================== 1-1 ===================== */
T.chapters.push({
  id: 'c1', no: '1-1', title: 'TSM의 배경·정의·특성', pages: '2–6',
  summary: '새로 짓기(build-more) 대신 기존 시설을 더 잘 쓰는(use-it-better) 저비용·단기 교통관리 방식.',
  sections: [
    { title: '배경과 역사', pages: '2', html: `
      <ul>
        <li><mark class="k">1975년</mark> 미국 <b>UMTA</b>(Urban Mass Transportation Administration, 현 <b>FTA</b>)와 <b>FHWA</b>(Federal Highway Administration)의 공동계획 법안으로 처음 소개됨.</li>
        <li><mark class="k">1차 오일쇼크</mark>를 겪으며, 새 시설에 투자하기보다 <b>기존 도로·시설의 용량과 효율을 극대화</b>하는 데 초점을 둔 교통정책적·기술적 방법론, 절차, 프로그램을 가리키게 됨.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>FTA 위에 "대중교통" — UMTA/FTA는 대중교통 담당 기관, FHWA는 도로 담당 기관.</div>` },
    { title: '정의와 목적', pages: '3–4', html: `
      <ul>
        <li>TSM은 <b>자원·에너지 보존</b>과 <b>도시 삶의 질 향상</b>을 위한 <mark class="k">계획 및 운영 과정</mark>(planning and operating process)이다.</li>
        <li>기존의 모든 교통시설을 <b>하나의 시스템을 이루는 요소</b>로 보고, 이를 <mark class="k">하나의 효율적·생산적·통합된 교통시스템</mark>으로 조직하는 것이 목적.</li>
        <li>근본 의도: 대중교통·<mark class="k">준대중교통(paratransit)</mark>의 효율을 높여 <b>혼잡지역의 차량 이용을 줄이는 것</b>.</li>
        <li>TSM은 <mark class="k">"build-more" → "find-more" / "use-it-better"</mark>로의 근본적인 강조점 전환이다.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>
        <ul><li>vehicle use 옆에 "승용차 / SOV", 아래에 <b>SOV → HOV</b></li><li>paratransit의 para에 박스, "준" → 준대중교통</li><li>build-more, find-more, use-it-better에 동그라미</li></ul></div>
      <div class="tip"><b class="h">시험 포인트</b>TSM의 철학을 한 줄로 쓰라면: "새로 짓는 것(build-more)에서 찾아내고 더 잘 쓰는 것(find-more, use-it-better)으로의 전환".</div>` },
    { title: 'TSM의 특성 6가지', pages: '5', html: `
      <ol>
        <li><mark class="k">적은 비용</mark> 투자</li>
        <li><mark class="k">단기적</mark>인 편익 발생</li>
        <li>기존 시설 및 서비스의 <b>효율적 활용</b></li>
        <li>규모 면에서 <mark class="k">지역적·미시적</mark></li>
        <li>비용이 많이 드는 투자사업의 <b>대체/보완</b></li>
        <li><mark class="k">차량보다는 사람</mark>의 효율적인 움직임에 중점</li>
      </ol>` },
    { title: 'TSM의 배경과 필요성 5가지', pages: '5', html: `
      <ol>
        <li>기존 시설 확장 중심 장기교통계획의 한계</li>
        <li>건설 위주로 교통문제를 해결하는 데 한계</li>
        <li><mark class="k">도시 재정의 한계</mark>와 <mark class="k">예산 절감 요구</mark></li>
        <li>기존 시설물 활용 제고의 필요성</li>
        <li>도시계획 차원의 도시교통대책 한계</li>
      </ol>
      <div class="memo"><b class="h">수업 필기</b>"도시 재정의 한계" 밑줄, "예산 절감 요구" 박스, 옆에 "복지" — 교통 예산이 복지 등 다른 분야와 경쟁한다는 뜻.</div>` },
    { title: '핵심 TSM 사업 목록', pages: '6', html: `
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>사업 (원어)</th><th>우리말 / 필기</th></tr></thead><tbody>
        <tr><td>Exclusive bus lanes</td><td>버스전용차로</td></tr>
        <tr><td>Contraflow lanes</td><td>역류(역방향) 차로</td></tr>
        <tr><td>High-occupancy lanes</td><td>다인승(HOV) 차로</td></tr>
        <tr><td>Transitways (transit-only streets)</td><td>대중교통 전용도로</td></tr>
        <tr><td>Park-and-ride lots</td><td><mark class="k">환승주차장</mark> → Modal shift</td></tr>
        <tr><td>Residential parking-permit programs</td><td><mark class="k">거주자 우선 주차제</mark></td></tr>
        <tr><td>Transit-management improvements</td><td>split shifts(분할 근무), removal of route duplication(노선 <b>중복</b> 제거)</td></tr>
        <tr><td>Innovative transit subsidies</td><td>대중교통 <b>재정지원</b></td></tr>
        <tr><td>Bus-signal priorities</td><td>버스 우선신호</td></tr>
      </tbody></table></div>
      <div class="memo"><b class="h">수업 필기</b>버스전용차로~Transitways 4개를 묶어 "Bus(HOV)가 대표주자".</div>` }
  ]
});

/* ===================== 1-2 ===================== */
T.chapters.push({
  id: 'c2', no: '1-2', title: 'TSM Action Class A~D', pages: '7–14',
  summary: '수요·공급 곡선으로 TSM 기법을 네 Class로 나누고, 곡선이 어떻게 움직이는지로 효과를 설명한다.',
  sections: [
    { title: '분류의 기초', pages: '7', html: `
      <ul>
        <li>TSM 기법(actions)을 개념적으로 <mark class="k">수요와 공급 이론</mark>에 따라 구분한다.</li>
        <li>교통시설의 <b>공급</b>(transportation supply)과 차량/이용 <b>수요</b>(vehicle/user demand)로 <mark class="k">평형(equilibrium)</mark>을 산정하고, 개별 기법의 영향과 상호작용을 분석한다.</li>
        <li>편의상 <mark class="k">네 가지 Class (A, B, C, D)</mark>로 구분한다.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>
        <ul><li>"10월 초 퀴즈: TSM의 여러 가지 정책과 기법(Action)" — Action = 기법</li>
        <li>Disutility = <b>비효용</b> (불편·혼잡·통행시간)</li>
        <li>Trip → 빈도(frequency)·길이(length)</li>
        <li>수요(Demand) = <b>VKT / VMT</b>, 교통유발원단위조사·KTDB 언급</li></ul></div>` },
    { title: '공급곡선과 축의 의미', pages: '8', html: `
      <ul>
        <li><mark class="k">공급곡선</mark>: 시스템이 제공하는 <b>서비스수준(LOS) 또는 불효용(disutility)</b>을 여러 수준의 교통수요에 대해 나타낸 곡선.</li>
        <li>수요가 줄면(자유류 쪽) LOS가 좋아지고, 수요가 늘면(혼잡 쪽) 불효용이 커진다.</li>
        <li><b>가로축</b> = 수요, 단위 <mark class="k">VMT</mark>(Vehicle Miles Traveled, 국내 VKT)</li>
        <li><b>세로축</b> = 불효용, 단위 <mark class="k">분/마일</mark>(평균속도의 역수)</li>
        <li>VMT가 늘면 통행수요가 늘어난 것이고, 평균 통행속도가 오르면 LOS가 좋아지고 불효용은 줄어든다.</li>
      </ul>` },
    { title: '네 Class 한눈에', pages: '9', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Class</th><th>정의</th><th>대표 예</th><th>필기</th></tr></thead><tbody>
        <tr><td><b>A</b></td><td><mark class="k">차량통행 수요 감소</mark><br><span class="en">Reduce demand for vehicle travel</span></td><td>ridesharing, express bus, congestion pricing</td><td>수요감소</td></tr>
        <tr><td><b>B</b></td><td><mark class="k">도로 공급 향상</mark>(교통류 개선)<br><span class="en">Enhance roadway supply</span></td><td>신호시간·연동(progression), 고속도로 교통관리</td><td>공급증가</td></tr>
        <tr><td><b>C</b></td><td><mark class="k">수요 감소 + 공급 저하</mark><br><span class="en">Reduce demand &amp; degrade supply</span></td><td>HOV 차로(<b>기존 차로 빼앗기</b>, take-a-lane), ARZ</td><td>부정적(degrade), "일반 차로 빼오기"</td></tr>
        <tr><td><b>D</b></td><td><mark class="k">공급 향상 + 수요 감소</mark><br><span class="en">Enhance supply &amp; reduce demand</span></td><td>HOV 차로(<b>추가</b> 건설), 노상주차 제한</td><td>"이상적", HOV 건설·차로 추가</td></tr>
      </tbody></table></div>
      <div class="memo"><b class="h">수업 필기</b>"여기서 구분하는 것도 퀴즈 출제". A=수요감소, B=공급증가, C=수요↓·공급↓(부정적), D=공급↑·수요↓(이상적).</div>
      <div class="tip"><b class="h">시험 포인트 · 헷갈리는 함정</b>
        <ul><li>같은 HOV 차로라도 <b>기존 일반차로를 전환</b>하면 C, <b>새로 차로를 추가</b>하면 D.</li>
        <li>노상주차 <b>제한</b>은 D(차로가 생겨 공급↑ + 주차면이 줄어 수요↓). 노외주차 <b>감축</b>은 C.</li>
        <li>램프미터링은 B(고속도로 교통관리에 포함).</li></ul>
        <p style="margin:6px 0 0">Class 판정만 집중 연습하려면 예전에 만든 <a href="https://sngb05.github.io/tsm-class-quiz/" target="_blank" rel="noopener">TSM Class A~D 퀴즈</a>도 함께 쓰세요.</p></div>` },
    { title: 'Class별 상세와 예시', pages: '10–13', html: `
      <h3>Class A — 수요 감소</h3>
      <p>여행자가 <b>저인승(LOV)에서 고인승(HOV: 대중교통·카풀)</b>으로 옮겨 타게 하거나, <b>통행빈도·통행길이</b>를 줄이게 하는 기법. <mark class="k">도로공급은 바꾸지 않고 VMT 수요를 낮춘다.</mark></p>
      <ul>
        <li>Carpooling / vanpooling (ridesharing)</li>
        <li>Transit marketing (교통 마케팅)</li>
        <li>Express bus service (급행버스)</li>
        <li>Park-and-ride 시설 건설 (환승주차장)</li>
        <li>지역 대중교통 노선·운행시간표 개선</li>
        <li>Paratransit system (준대중교통수단 활성화)</li>
        <li>자전거·보행 시설 개선</li>
        <li>Congestion pricing (통행료, HOV 요금 할인, 승용차 주차요금 인상 등)</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>Express bus 옆 "Dead heading?" → <b>공차 운행</b>(급행버스가 빈 차로 돌아오는 운행).</div>
      <h3>Class B — 공급 향상</h3>
      <p>통행시간을 줄이거나 도로공급을 늘리는 다양한 <b>교통공학·교통제어 기법</b>. 교차로 흐름을 개선하면 교차로 용량이 커지고, 결과적으로 도로공급이 "늘어난다".</p>
      <ul>
        <li>신호시간 개선, 신호연동(progression)</li>
        <li>교차로 회전 제한</li>
        <li>차로 재도색으로 용량 증대(restriping, <b>차로 재구획</b>)</li>
        <li>교차로 <mark class="k">도류화</mark>(channelization)</li>
        <li>가로·교차로 기하구조 개선</li>
        <li>고속도로 교통관리 (<b>램프미터링도 포함</b>)</li>
        <li>트럭 제한</li>
      </ul>
      <h3>Class C — 수요 감소 + 공급 저하</h3>
      <p>선호 수단(HOV·자전거·보행)의 통행시간은 줄이고 <b>LOV의 통행시간은 늘려</b> 수단 전환을 유도.</p>
      <ul>
        <li>기존 차로를 빼앗아(taking a lane away) HOV만 쓰게 하는 우대</li>
        <li>CBD에 버스·자전거·보행자만 다니게 하는 차량진입제한구역(ARZ)</li>
        <li><mark class="k">노외주차(off-street parking) 감축</mark></li>
      </ul>
      <h3>Class D — 공급 향상 + 수요 감소</h3>
      <ul>
        <li>HOV를 위한 <mark class="k">차로 추가</mark>(adding a lane) — HOV 전용 도로나 차로를 새로 건설</li>
        <li><mark class="k">노상주차 제한</mark> — 도로용량은 늘리고, 주차면이 줄어 승용차 이용은 억제</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>Preferential = 우대·우선. "adding", "lane"에 박스.</div>` },
    { title: '곡선 이동으로 보는 효과', pages: '14', html: `
      <p>TSM 기법은 <b>공급곡선, 수요곡선, 또는 둘 다</b>를 이동시키고, 그 결과 <mark class="k">평형점</mark>이 움직인다. 이동 방향은 Class에 따라 다르다.</p>
      <p>예) <b>Class A</b>는 수요곡선을 왼쪽으로 옮겨 평형점이 <b>왼쪽 아래</b>로 간다 → VMT 감소, LOS 개선, 통행속도 증가(마일당 분 감소).</p>
      <div data-widget="classdemo"></div>
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>Class</th><th>곡선 이동</th><th>VMT</th><th>불효용</th></tr></thead><tbody>
        <tr><td>A</td><td>수요 ←</td><td>↓</td><td>↓</td></tr>
        <tr><td>B</td><td>공급 ↓(오른쪽)</td><td>↑ (약간)</td><td>↓</td></tr>
        <tr><td>C</td><td>수요 ← + 공급 ↑</td><td>↓↓</td><td>불확정</td></tr>
        <tr><td>D</td><td>수요 ← + 공급 ↓</td><td>불확정</td><td>↓↓</td></tr>
      </tbody></table></div>
      <div class="memo"><b class="h">수업 필기</b>Class A 그림에 원래 평형점과 왼쪽 이동 화살표, 공급곡선을 위로 올린 초록 곡선에 "C" 표시. 가로축 옆 "VKT / VMT".</div>
      <p class="small faint">B·C·D의 화살표 정리는 수요·공급 곡선 원리로 그린 보충 설명이에요. 슬라이드에 그림으로 나온 것은 Class A예요.</p>` }
  ]
});

/* ===================== 1-3 ===================== */
T.chapters.push({
  id: 'c3', no: '1-3', title: '비용-효과 분석', pages: '15–18',
  summary: 'TSM은 싸서 대부분 비용효과적이다. 평가지표는 줄인 VMT·VHT당 비용.',
  sections: [
    { title: '비용-효과 고려사항', pages: '15', html: `
      <ul>
        <li><b>비용효과 잠재력</b>: TSM은 신규 건설보다 시행비용이 낮아 대부분 비용효과적일 잠재력이 있다. 즉 <mark class="k">편익과 절감액이 초기비용 + 유지관리비를 넘는다</mark>.</li>
        <li><b>TSM 편익</b>: 통행시간·통행거리 절감 이상의 편익을 준다 — <mark class="k">대기오염 감소, 소음 감소, 삶의 질 향상</mark>.</li>
      </ul>
      <div class="memo"><b class="h">수업 필기</b>"비용-효과 측정", 편익(benefit) → <b>금전적으로 환산</b>, savings = 절감.</div>` },
    { title: '평가지표와 절감 내용', pages: '17', html: `
      <p>TSM 사업 평가에 자주 쓰는 지표 두 가지:</p>
      <ul>
        <li><mark class="k">Cost per VMT reduced</mark> — 줄인 차량주행거리(VMT)당 비용</li>
        <li><mark class="k">Cost per VHT reduced</mark> — 줄인 차량주행시간(VHT)당 비용</li>
      </ul>
      <div class="tbl-wrap"><table class="tbl narrow"><thead><tr><th>줄인 것</th><th>절감되는 비용</th></tr></thead><tbody>
        <tr><td>VMT</td><td><b>운행비용</b>: 차량·타이어 마모, 연료 소비</td></tr>
        <tr><td>VHT</td><td><b>시간가치</b>: 절약된 시간을 생산적으로 쓸 수 있으므로 개인 비용 절감</td></tr>
      </tbody></table></div>` },
    { title: 'TSM 사업 비용표', pages: '16', html: `
      <p class="small muted">1978–80년, 인구 100만 미국 가상도시의 공공기관 연간 지출 기준.</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>TSM 사업</th><th class="num">초기비용</th><th class="num">연 운영·유지비</th><th class="num">등가균일연간비용</th></tr></thead><tbody>
        <tr><td>Ridesharing 현행</td><td class="num">없음</td><td class="num">$200,000</td><td class="num">$200,000</td></tr>
        <tr><td>Ridesharing 확대</td><td class="num">없음</td><td class="num">$400,000</td><td class="num">$400,000</td></tr>
        <tr class="hl"><td>급행버스 (신규 200대)</td><td class="num">$14 Mil</td><td class="num">$3–4 Mil</td><td class="num">$5–7 Mil</td></tr>
        <tr><td>지역버스 확대 (200대)</td><td class="num">$14 Mil</td><td class="num">$4–5 Mil</td><td class="num">$6.5 Mil</td></tr>
        <tr><td>근무시간 조정</td><td class="num">없음</td><td class="num">$200,000</td><td class="num">$200,000</td></tr>
        <tr><td>신호시간 최적화 (1,000개)</td><td class="num">없음</td><td class="num">$250,000</td><td class="num">$250,000</td></tr>
        <tr><td>전산화 교통제어 (600개)</td><td class="num">$3 Mil</td><td class="num">$300,000</td><td class="num">$800,000</td></tr>
        <tr><td>고속도로 감시·제어 (35 mi)</td><td class="num">$4 Mil</td><td class="num">$400,000</td><td class="num">$1 Mil</td></tr>
        <tr><td>트럭 제한</td><td class="num">없음</td><td class="num">$200,000</td><td class="num">$200,000</td></tr>
        <tr><td>종합 우대처리 (램프 20, 50 mi)</td><td class="num">$1 Mil</td><td class="num">$600,000</td><td class="num">$800,000</td></tr>
        <tr><td>고속도로 전용차로 (15 mi)</td><td class="num">$50–75 Mil</td><td class="num">$500,000</td><td class="num">$5–8 Mil</td></tr>
      </tbody></table></div>
      <p><b>초기비용 상각 기준</b> (모두 이자율 <mark class="k">10%</mark>): 버스 <mark class="k">15년</mark>, 교통제어시스템 <mark class="k">10년</mark>, 도로 건설 <mark class="k">30년</mark>.</p>
      <div class="memo"><b class="h">수업 필기</b>여백에 "Life Cycle". 급행버스 행의 $14 Mil → $3–4 Mil → $5–7 Mil을 화살표로 연결 (초기비용 → 연 운영비 → 등가균일연간비용).</div>` },
    { title: '줄인 VMT·VHT당 비용표', pages: '18', html: `
      <p class="small muted">인구 100만, 연간 VMT 5,000 Mil, 연간 VHT 200 Mil, 평균 네트워크 속도 25 mph 가정.</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>TSM 사업</th><th class="num">VMT 감소%</th><th class="num">통행시간 감소%</th><th class="num">연간비용</th><th class="num">VMT당</th><th class="num">VHT당</th></tr></thead><tbody>
        <tr class="hl"><td>Ridesharing 현행</td><td class="num">0.2</td><td></td><td class="num">$200,000</td><td class="num"><b>2¢</b></td><td></td></tr>
        <tr><td>Ridesharing 확대</td><td class="num">1.0</td><td></td><td class="num">$400,000</td><td class="num">1¢</td><td></td></tr>
        <tr><td>급행버스</td><td class="num">0.3</td><td></td><td class="num">$5–7 Mil</td><td class="num">40¢</td><td></td></tr>
        <tr><td>지역버스 확대</td><td class="num">0.3</td><td></td><td class="num">$6.5 Mil</td><td class="num">43¢</td><td></td></tr>
        <tr><td>근무시간 조정</td><td></td><td class="num">0.4</td><td class="num">$200,000</td><td></td><td class="num">25¢</td></tr>
        <tr class="hl"><td>신호시간 최적화</td><td></td><td class="num"><b>6.0</b></td><td class="num">$250,000</td><td></td><td class="num"><b>2¢</b></td></tr>
        <tr><td>전산화 교통제어</td><td></td><td class="num">1.5</td><td class="num">$800,000</td><td></td><td class="num">27¢</td></tr>
        <tr><td>고속도로 감시·제어</td><td></td><td class="num">0.5</td><td class="num">$1 Mil</td><td></td><td class="num">$1.00</td></tr>
        <tr><td>트럭 제한</td><td></td><td class="num">0.2</td><td class="num">$200,000</td><td></td><td class="num">50¢</td></tr>
        <tr><td>종합 우대처리</td><td class="num">−0.1</td><td class="num">+0.4</td><td class="num">$800,000</td><td class="num">16¢</td><td class="num">증가</td></tr>
        <tr><td>고속도로 전용차로</td><td class="num">0.1</td><td class="num">0.4</td><td class="num">$5–8 Mil</td><td class="num">$13.0</td><td class="num">$8.00</td></tr>
      </tbody></table></div>
      <div class="memo"><b class="h">수업 필기</b>VMT·VHT에 동그라미, "reduced" 밑줄. <b>2¢ 두 곳</b>(Ridesharing 현행 VMT당, 신호시간 최적화 VHT당)에 동그라미. 신호시간 최적화 옆에 "수명기간".</div>
      <div class="tip"><b class="h">시험 포인트</b>
        <ul><li>VMT당 가장 싼 것은 <b>Ridesharing</b>(1–2¢), VHT당 가장 싼 것은 <b>신호시간 최적화</b>(2¢)이며 통행시간 감소율도 6.0%로 가장 크다.</li>
        <li>가장 비싼 것은 고속도로 전용차로(VMT당 $13, VHT당 $8).</li>
        <li>종합 우대처리는 일반차량 통행시간을 오히려 <b>늘린다</b>(+0.4%).</li></ul></div>` }
  ]
});

/* ===================== quiz ===================== */
T.quiz.push(
  { ch: 'c1', sec: 0, type: 'mc', q: 'TSM이 처음 소개된 해와 주체로 옳은 것은?', choices: ['1975년, 미국 UMTA와 FHWA의 공동계획 법안', '1975년, 영국 교통부의 도심교통 지침', '1962년, 미국 연방도로법(Federal-Aid Highway Act)', '1981년, 미국 ITE 교통공학 핸드북'], answer: 0, exp: '1975년 UMTA(현 FTA)와 FHWA의 공동계획 법안으로 소개됐다. 1차 오일쇼크가 배경.', ref: '2' },
  { ch: 'c1', sec: 0, type: 'ox', q: 'TSM은 1차 오일쇼크를 계기로 새 시설에 대한 투자를 늘리는 방향으로 등장했다.', answer: false, exp: '새 시설 투자보다 <b>기존 도로·시설의 용량과 효율 극대화</b>에 초점을 둔다.', ref: '2' },
  { ch: 'c1', sec: 1, type: 'short', q: 'TSM 개념이 의미하는 근본적인 강조점의 전환을 영어 표현으로 쓰시오.', answer: '"build-more"에서 "find-more" 또는 "use-it-better"로의 전환', exp: '더 짓는 대신 기존 시설에서 용량을 찾아내고 더 잘 쓰는 것.', ref: '4' },
  { ch: 'c1', sec: 1, type: 'mc', q: 'TSM의 정의와 목적에 대한 설명으로 <b>옳지 않은</b> 것은?', choices: ['신규 고속도로 건설을 통해 장기적으로 교통용량을 확보하는 계획 과정이다', '자원·에너지 보존과 도시 삶의 질 향상을 위한 계획 및 운영 과정이다', '기존 교통시설을 하나의 시스템 요소로 보고 통합된 교통시스템으로 조직한다', '대중교통·준대중교통의 효율을 높여 혼잡지역의 차량 이용을 줄이려 한다'], answer: 0, exp: 'TSM은 신규 건설 중심이 아니다.', ref: '3–4' },
  { ch: 'c1', sec: 2, type: 'mc', q: 'TSM의 특성으로 <b>거리가 먼</b> 것은?', choices: ['광역적·거시적 규모의 대규모 시설 확충', '적은 비용 투자', '단기적인 편익 발생', '차량보다는 사람의 효율적인 움직임에 중점'], answer: 0, exp: 'TSM은 규모가 <b>지역적·미시적</b>이다.', ref: '5' },
  { ch: 'c1', sec: 2, type: 'short', q: 'TSM의 특성 6가지를 쓰시오.', long: true, answer: '① 적은 비용 투자 ② 단기적 편익 발생 ③ 기존 시설·서비스의 효율적 활용 ④ 규모가 지역적·미시적 ⑤ 고비용 투자사업의 대체/보완 ⑥ 차량보다 사람의 효율적 이동에 중점', ref: '5' },
  { ch: 'c1', sec: 3, type: 'short', q: 'TSM이 필요하게 된 배경(필요성)을 3가지 이상 쓰시오.', long: true, answer: '기존 시설 확장 중심 장기교통계획의 한계, 건설 위주 문제해결의 한계, 도시 재정의 한계와 예산 절감 요구, 기존 시설물 활용 제고 필요성, 도시계획 차원 도시교통대책의 한계', ref: '5' },
  { ch: 'c1', sec: 4, type: 'mc', q: '"Residential parking-permit programs"의 우리말로 가장 알맞은 것은?', choices: ['거주자 우선 주차제', '노상주차 전면 금지', '환승주차장', '부설주차장 설치 의무'], answer: 0, ref: '6' },
  { ch: 'c1', sec: 4, type: 'ox', q: 'Transit-management improvements의 예로 split shifts와 노선 중복(route duplication) 제거가 있다.', answer: true, ref: '6' },

  { ch: 'c2', sec: 2, type: 'mc', q: '다음 중 <b>Class A</b>(차량통행 수요 감소)에 해당하는 것은?', choices: ['Express bus service', '신호연동(signal progression)', '교차로 도류화', '고속도로 램프미터링'], answer: 0, exp: '나머지는 공급을 늘리는 Class B.', ref: '9–10' },
  { ch: 'c2', sec: 2, type: 'mc', q: '기존 일반차로 하나를 빼앗아 HOV 전용으로 지정하는 기법은 어느 Class인가?', choices: ['Class C', 'Class A', 'Class B', 'Class D'], answer: 0, exp: '수요는 줄이고(전환 유도) 승용차 공급은 줄이므로 C. 차로를 <b>추가</b>하면 D.', ref: '9, 12' },
  { ch: 'c2', sec: 2, type: 'mc', q: 'HOV 전용차로를 <b>새로 추가 건설</b>하는 기법의 Class는?', choices: ['Class D', 'Class C', 'Class B', 'Class A'], answer: 0, exp: '공급↑ + 수요↓ = D. 필기로 "이상적"이라고 표시됨.', ref: '9, 13' },
  { ch: 'c2', sec: 2, type: 'mc', q: '노상주차 제한(on-street parking restriction)이 Class D인 이유는?', choices: ['도로용량은 늘고 주차면이 줄어 승용차 이용이 억제되므로', '주차수요를 노외로 옮겨 수요가 늘어나므로', '도로공급은 그대로 두고 통행빈도만 줄이므로', '승용차 공급을 줄이고 대중교통 수요도 줄이므로'], answer: 0, ref: '13' },
  { ch: 'c2', sec: 2, type: 'mc', q: '노외주차(off-street parking) 감축은 어느 Class에 속하는가?', choices: ['Class C', 'Class D', 'Class B', 'Class A'], answer: 0, exp: 'Class C 예시: take-a-lane HOV, ARZ, 노외주차 감축.', ref: '12' },
  { ch: 'c2', sec: 2, type: 'mc', q: 'Auto-restricted zone(ARZ)은 어느 Class인가?', choices: ['Class C', 'Class A', 'Class B', 'Class D'], answer: 0, ref: '9, 12' },
  { ch: 'c2', sec: 3, type: 'ox', q: '고속도로 교통관리(램프미터링 포함)와 트럭 제한은 Class B의 예이다.', answer: true, ref: '11' },
  { ch: 'c2', sec: 3, type: 'ox', q: 'Class A는 도로공급을 늘려서 VMT 수요를 낮추는 기법이다.', answer: false, exp: 'Class A는 <b>도로공급을 바꾸지 않고</b> VMT 수요를 낮춘다.', ref: '10, 14' },
  { ch: 'c2', sec: 3, type: 'short', q: 'Class A 기법이 여행자에게 유도하려는 행동 세 가지를 쓰시오.', answer: 'LOV에서 HOV(대중교통·카풀)로의 전환, 통행빈도 감소, 통행길이 감소', ref: '10' },
  { ch: 'c2', sec: 3, type: 'short', q: '급행버스(express bus) 운행과 관련해 수업에서 언급된 "Dead heading"의 뜻은?', answer: '공차 운행 — 승객 없이 빈 차로 운행하는 것(급행버스가 첨두방향 운행 후 빈 차로 되돌아오는 운행)', ref: '10' },
  { ch: 'c2', sec: 1, type: 'mc', q: 'TSM Action Class 그래프에서 가로축과 세로축의 단위로 옳은 것은?', choices: ['가로축 VMT, 세로축 분/마일(평균속도의 역수)', '가로축 시간, 세로축 교통량(vph)', '가로축 VHT, 세로축 mph', '가로축 차로수, 세로축 LOS 등급'], answer: 0, ref: '8' },
  { ch: 'c2', sec: 1, type: 'ox', q: '공급곡선에서 수요가 증가하면 불효용(disutility)이 감소한다.', answer: false, exp: '수요가 늘면 혼잡 쪽으로 가서 불효용이 <b>증가</b>한다.', ref: '8' },
  { ch: 'c2', sec: 4, type: 'mc', q: 'Class A 기법을 시행했을 때 평형점의 변화로 옳은 것은?', choices: ['왼쪽 아래로 이동 — VMT 감소, LOS 개선, 속도 증가', '오른쪽 아래로 이동 — VMT 증가, 불효용 감소', '왼쪽 위로 이동 — VMT 감소, 불효용 증가', '변화 없음'], answer: 0, ref: '14' },
  { ch: 'c2', sec: 4, type: 'mc', q: '수요·공급 곡선 관점에서 Class B(공급 향상)의 효과로 가장 알맞은 것은?', choices: ['공급곡선이 아래로 이동해 불효용은 줄고 VMT는 약간 늘 수 있다', '수요곡선이 왼쪽으로 이동해 VMT와 불효용이 모두 준다', '공급곡선이 위로 이동해 불효용이 커진다', '수요곡선이 오른쪽으로 이동해 VMT가 크게 는다'], answer: 0, exp: '공급이 좋아지면 같은 수요에서 불효용이 줄고, 그만큼 수요(VMT)가 약간 유발될 수 있다.', ref: '14' },
  { ch: 'c2', sec: 0, type: 'ox', q: 'TSM 기법은 공급곡선만 이동시키며 수요곡선에는 영향을 주지 않는다.', answer: false, exp: '공급곡선, 수요곡선, 또는 둘 다를 이동시킨다.', ref: '14' },

  { ch: 'c3', sec: 1, type: 'mc', q: 'TSM 사업을 평가할 때 자주 쓰는 비용효과 지표 두 가지는?', choices: ['Cost per VMT reduced, Cost per VHT reduced', 'B/C ratio, IRR', 'LOS, V/C ratio', 'Cost per lane-mile, Cost per bus'], answer: 0, ref: '17' },
  { ch: 'c3', sec: 1, type: 'ox', q: 'VMT 감소에 따른 비용절감은 주로 시간가치 절감이고, VHT 감소에 따른 절감은 연료·타이어 마모 같은 운행비 절감이다.', answer: false, exp: '반대다. VMT↓ → 운행비용(차량·타이어 마모, 연료) 절감, VHT↓ → 시간가치 절감.', ref: '17' },
  { ch: 'c3', sec: 3, type: 'mc', q: '비용표(인구 100만 가상도시)에서 VHT 1단위를 줄이는 데 가장 싼 TSM 사업은?', choices: ['신호시간 최적화 (2¢)', '전산화 교통제어 (27¢)', '근무시간 조정 (25¢)', '트럭 제한 (50¢)'], answer: 0, exp: '신호시간 최적화는 통행시간 감소율도 6.0%로 가장 크다.', ref: '18' },
  { ch: 'c3', sec: 3, type: 'mc', q: '비용표에서 VMT 1단위를 줄이는 데 가장 싼 사업군은?', choices: ['Ridesharing (1–2¢)', '급행버스 (40¢)', '지역버스 확대 (43¢)', '고속도로 전용차로 ($13)'], answer: 0, ref: '18' },
  { ch: 'c3', sec: 2, type: 'mc', q: '비용표의 초기비용 상각 기준으로 옳은 것은? (이자율 10%)', choices: ['버스 15년, 교통제어시스템 10년, 도로 건설 30년', '버스 10년, 교통제어시스템 15년, 도로 건설 20년', '버스 12년, 교통제어시스템 10년, 도로 건설 50년', '모두 20년'], answer: 0, ref: '16' },
  { ch: 'c3', sec: 0, type: 'short', q: 'TSM 사업이 통행시간·거리 절감 외에 주는 편익을 2가지 이상 쓰시오.', answer: '대기오염 감소, 소음 감소, 삶의 질 향상', ref: '15' },
  { ch: 'c3', sec: 3, type: 'ox', q: '종합 우대처리(Comprehensive Preferential Treatments)는 표에서 일반 통행시간을 증가시키는 것으로 나타났다.', answer: true, exp: '통행시간 +0.4%, VHT당 비용 칸에 "increase".', ref: '18' }
);

/* ===================== cards ===================== */
T.cards.push(
  { ch: 'c1', front: 'TSM', sub: 'Transportation Systems Management', back: '자원·에너지 보존과 도시 삶의 질 향상을 위해 기존 교통시설을 하나의 통합된 시스템으로 조직하는 저비용·단기 계획 및 운영 과정.' },
  { ch: 'c1', front: 'build-more → use-it-better', back: 'TSM이 의미하는 강조점의 근본적 전환. 더 짓기 대신 기존 시설에서 용량을 찾아내고(find-more) 더 잘 쓰기.' },
  { ch: 'c1', front: 'UMTA / FHWA', back: 'UMTA = 도시대중교통청(현 FTA), FHWA = 연방도로청. 1975년 이 두 기관의 공동계획 법안으로 TSM이 소개됨.' },
  { ch: 'c1', front: 'Paratransit', back: '준대중교통. para = "closely related to". 카풀·밴풀·DRT·합승택시 등 전통 대중교통과 승용차 사이의 수단.' },
  { ch: 'c1', front: 'Residential parking-permit program', back: '거주자 우선 주차제.' },
  { ch: 'c2', front: 'Class A', back: '차량통행 수요 감소. LOV→HOV 전환, 통행빈도·길이 감소. 도로공급 변화 없이 VMT↓. 예: ridesharing, express bus, P&R, congestion pricing.' },
  { ch: 'c2', front: 'Class B', back: '도로 공급 향상(교통류 개선). 예: 신호시간·연동, 회전 제한, restriping, 도류화, 기하구조 개선, 고속도로 교통관리(램프미터링), 트럭 제한.' },
  { ch: 'c2', front: 'Class C', back: '수요 감소 + 공급 저하. 예: 기존 차로를 HOV 전용으로(take-a-lane), ARZ, 노외주차 감축.' },
  { ch: 'c2', front: 'Class D', back: '공급 향상 + 수요 감소("이상적"). 예: HOV 차로 추가 건설, 노상주차 제한.' },
  { ch: 'c2', front: 'Disutility', back: '비효용. 불편·혼잡·통행시간. 그래프 세로축, 단위는 분/마일(평균속도의 역수).' },
  { ch: 'c2', front: 'VMT / VKT', back: 'Vehicle Miles(Kilometers) Traveled, 차량주행거리. 그래프 가로축(수요).' },
  { ch: 'c2', front: 'Dead heading', back: '공차 운행. 승객 없이 빈 차로 운행하는 것(예: 급행버스가 첨두방향 운행 후 빈 차로 돌아옴).' },
  { ch: 'c2', front: 'Equilibrium point', back: '평형점. 공급곡선과 수요곡선의 교점. TSM 기법이 곡선을 이동시키면 평형점도 이동한다.' },
  { ch: 'c3', front: 'Cost per VMT reduced', back: '줄인 차량주행거리당 비용. VMT 감소 → 운행비(차량·타이어 마모, 연료) 절감.' },
  { ch: 'c3', front: 'Cost per VHT reduced', back: '줄인 차량주행시간당 비용. VHT 감소 → 시간가치 절감.' },
  { ch: 'c3', front: 'EUAC', sub: 'Equivalent Uniform Annual Cost', back: '등가균일연간비용. 초기비용을 수명기간·이자율로 상각해 연 운영비와 합친 연간 비용.' }
);

/* ===================== numbers ===================== */
T.numbers.push(
  { ch: 'c1', label: 'TSM이 소개된 해', value: '1975년', note: 'UMTA + FHWA 공동계획 법안' },
  { ch: 'c1', label: 'TSM의 특성 개수', value: '6가지' },
  { ch: 'c2', label: 'TSM Action Class 개수', value: '4개 (A·B·C·D)' },
  { ch: 'c3', label: '상각 기준 이자율', value: '10%' },
  { ch: 'c3', label: '상각 기간: 버스 / 교통제어 / 도로건설', value: '15 / 10 / 30년' },
  { ch: 'c3', label: '가상도시 인구', value: '100만 명', note: '연 VMT 5,000 Mil, 연 VHT 200 Mil, 25 mph' },
  { ch: 'c3', label: 'Ridesharing 현행 — VMT당 비용', value: '2¢' },
  { ch: 'c3', label: '신호시간 최적화 — VHT당 비용', value: '2¢', note: '통행시간 6.0% 감소, 연 $250,000' },
  { ch: 'c3', label: '급행버스 — 초기 / 연 운영비 / EUAC', value: '$14M / $3–4M / $5–7M' },
  { ch: 'c3', label: '고속도로 전용차로 — VMT당 / VHT당', value: '$13.0 / $8.00' }
);
})();
