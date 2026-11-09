(() => {
const T = window.TSM;

/* ===================== 4-1 ===================== */
T.chapters.push({
  id: 'c12', no: '4-1', title: '이면도로 관리: 차량과 보행의 공존', pages: '96–103',
  summary: '간선도로 중심 운영의 부작용을 막기 위해 생활도로에서 속도·소음을 낮추는 국가별 사례(Woonerf, Zone 30 등).',
  sections: [
    { title: '배경과 생활 중심 도로 개념', pages: '96', html: `
      <div class="tbl-wrap"><table class="tbl narrow"><tbody>
        <tr><td><b>배경</b></td><td>차량 중심 사고로 간선도로 운영·관리에 치중 → 주거지·인근 이면도로에 부하 전가 → 교통혼잡·사고·소음·매연 → 쾌적한 도시 생활환경에 중대한 위협</td></tr>
        <tr><td><b>대안의 모색</b></td><td>간선도로 보조 역할은 하면서도, <mark class="k">속도와 소음 저감</mark>으로 보행환경 개선, 다양한 목적의 공간 활용</td></tr>
        <tr><td><b>생활 중심 도로 개념</b></td><td>도시 생활공간에서 보행자·자전거 등 <mark class="k">vulnerable users</mark>를 자동차로부터 보호, 쾌적하고 안전한 도로환경 조성. <b>구미에서 태동 → 일본을 거쳐 우리나라</b>로 이식. Woonerf, <mark class="k">Traffic Calming</mark>(교통 진정·정온화) 사업으로 소개됨</td></tr>
      </tbody></table></div>
      <p class="small muted">슬라이드 그림: Pennsylvania's Traffic Calming Handbook, Woonerf 표지(종전 / 1988년 이후).</p>` },
    { title: '네덜란드 Woonerf (생활 속의 정원)', pages: '97', html: `
      <ul>
        <li><b>배경</b>: <mark class="k">1970년대</mark> 네덜란드와 벨기에 플랑드르 지역 주택 밀집지구에 통과교통이 유입 → 소음·분진·교통사고가 큰 사회문제.</li>
        <li>자동차와의 공존을 현실적으로 받아들이되 <b>도로의 물리적 개조와 운영 변화</b>로 교통안전과 생활환경 개선을 동시에 꾀함.</li>
        <li>영어로 <b>living street</b> 또는 living yard.</li>
      </ul>
      <p><b>운영 방식</b></p>
      <ul>
        <li><mark class="k">보행자 통행이 우선</mark>, 자동차를 <b>보행자 속도</b> 정도로 규제</li>
        <li>보행자도 차량 통행을 방해해선 안 되며 <b>상호 양보</b> 정신에 기초</li>
        <li>구간 입구에 교통표지나 노면표시로 구역을 알림</li>
      </ul>
      <p><b>발전과 파급</b>: <mark class="k">1975년</mark> 네덜란드 정부가 생활과 함께하는 도로로 지정 → <mark class="k">1976년</mark> 도로교통법 내에 규정 → 수직·수평 시설물 디자인·기준으로 계승되어 <b>영국·독일</b> 등으로 전파.</p>` },
    { title: '덴마크 Stillevej, 스웨덴 SCAFT·RIGU-73', pages: '98–99', html: `
      <h3>덴마크의 보행자 안전대책: Stillevej(e)</h3>
      <ul>
        <li><b>배경</b>: <mark class="k">1976년</mark> 도로교통법 개정으로 <b>Calming Devices 합법화</b>. 네덜란드 Woonerf를 참고해 두 가지 보차공존형 도로 제창.</li>
        <li><b>휴식·놀이도로</b>(rest &amp; play street): 제한속도 <mark class="k">15 km/h</mark> (Woonerf에 가까움) — 표지 E51 Living and play area</li>
        <li><b>Stilleveje</b>: 제한속도 <mark class="k">30 km/h</mark> (slow-traffic residential roads) — 표지 E53 Zone with traffic calming</li>
        <li><b>연관 조치</b>: 지방 마을로 간선도로 통과 억제, 대대적 우회도로 건설 (1990년대 우리나라에서도)</li>
      </ul>
      <h3>스웨덴의 지침과 기준</h3>
      <ul>
        <li><mark class="k">SCAFT (지침)</mark>: 국가도로청 + 국가도시계획위원회 지침. 이 지침에 따라 많은 타운이 개발. <b>교통안전(주로 보행자 중심)</b>을 최대 목표로 도로 설계. 미국 <b>Radburn 방식</b>을 참고한 도로망 구성과 <b>T형 교차로</b> 권장 (르코르뷔지에 ville contemporaine 참고설).</li>
        <li><mark class="k">RIGU-73</mark>: <b>1973년</b> 도로구조 기준에서 교통안전을 최우선으로 도로 기하구조·선형을 결정하도록 함. <b>1981년</b> 지구(주거지)도로까지 확장.</li>
      </ul>` },
    { title: '미국 Radburn: Garden City의 실현', pages: '100', html: `
      <ul>
        <li><b>배경</b>: <mark class="k">1928년</mark> 미국 NJ주 Bergen county 외곽에 계획된 주거도시. <b>1898년 영국 Ebenezer Howard</b>의 <mark class="k">Garden City</mark> 개념 계승. 급속한 자동차 확산으로부터 생활환경 보호와 교통안전 도모.</li>
        <li><b>내용</b>
          <ul><li>중심지 주요 도로에서 보행과 자동차 <mark class="k">완전 분리(입체 교차)</mark></li><li>주택지 블록을 이루는 집산가로에 <mark class="k">Cul-de-sac</mark> 설치</li><li>보행전용도로를 따라 종교·교육·행정·상업·문화시설 배치</li></ul></li>
        <li><b>성과</b>: 자동차에 의한 <b>보행사고 완전 제거</b>.</li>
      </ul>` },
    { title: '유럽의 Zone 30', pages: '101', html: `
      <ul>
        <li><b>배경</b>: Zone 30 교통표지 등이 전 유럽에 확산. 특히 <mark class="k">속도에 따른 보행자 사고 사망 확률</mark>과 통계에 기초 (교재 86쪽 계산 내용 참조).</li>
        <li><b>기법</b>: 도심에 보행전용구역을 중심으로 <b>Cell system</b>과 통과교통을 배제하는 <b>Zone system</b> 도입, 속도 저감 대책 병행.</li>
        <li><b>성과·확산</b>: 2021년 초 기준 <b>뮌헨</b> 도시가로 <mark class="k">80%</mark>, <b>마드리드</b> <mark class="k">85%</mark>, <b>브뤼셀</b>은 <mark class="k">도시 전체</mark>가 제한속도 30 km/h.</li>
      </ul>
      <p class="small muted">그래프(Pasanen, 1991): 충돌속도 30 km/h 이하에선 보행자 사망확률이 낮고, 40 km/h를 넘으면 급증해 50 km/h에서 절반 안팎, 60 km/h 이상에선 대부분 사망. (그래프를 읽은 근사치)</p>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>셀·존 결합 유럽 사례</th><th>작동 방식</th></tr></thead><tbody>
        <tr><td><b>바르셀로나 슈퍼블록</b> (Superblocks)</td><td>3×3 블록 9개를 묶어 큰 셀. 내부 속도 <b>10 km/h</b>, 통과교통 금지. 내부 교차로는 놀이터·녹지 광장</td></tr>
        <tr><td><b>네덜란드 흐로닝언</b> (Traffic Cell System)</td><td>도심을 <b>4개 교통 셀(sector)</b>로 분할. 자동차로 옆 셀로 바로 못 가고 외곽 순환도로로 돌아가야 함 → 도심에선 자전거·도보가 가장 빠름</td></tr>
        <tr><td><b>런던 코번트 가든</b> (Pedestrian Zones)</td><td>핵심 상업지구를 보행자 전용 존으로, 물류 차량도 새벽 특정 시간에만 진입 허용</td></tr>
      </tbody></table></div>` },
    { title: '일본의 이면도로 관리', pages: '102', html: `
      <div class="tbl-wrap"><table class="tbl narrow"><tbody>
        <tr><td><b>태동</b></td><td><mark class="k">1972년</mark> 이면도로 어린이 보호를 기치로 <b>'school zone'</b> 규제 시작 → 1년 만에 <b>1만 5천 곳</b>으로 급속 확대</td></tr>
        <tr><td><b>발전</b></td><td><mark class="k">1974년</mark>부터 스쿨존 범위를 넓혀 <b>'생활 zone'</b> 규제 시작. 주거·상업 활동이 이뤄지는, 간선도로에 둘러싸인 <b>1㎢</b> 정도 구역</td></tr>
        <tr><td><b>성숙</b></td><td>Woonerf 영향으로 <mark class="k">1981년</mark>부터 건설성이 <b>'Community 도로'</b> 정비사업 시작, <b>1986년</b>부터 전국적 시설 정비로 확대</td></tr>
      </tbody></table></div>` },
    { title: '우리나라의 보행·생활도로 정책', pages: '103', html: `
      <ul>
        <li><b>배경</b>
          <ul><li><mark class="k">1991년</mark> 교통사고 사망자 <b>13,429명</b>으로 정점</li><li>2025년 인구 10만 명당 사망자 4.9~5.3명(TAAS), OECD 22/35</li><li>보행 중 사망자 비중 전체의 <mark class="k">35%</mark> 수준, OECD 회원국의 <b>1.9~2.0배</b></li><li>특히 고령자 보행사고는 OECD 최하위 수준</li></ul></li>
        <li><b>관리 주체</b>: 국지도로를 포함한 이면도로 관리의 일차적 책임은 <mark class="k">지자체</mark>. 국토교통부보다 <mark class="k">행정안전부</mark>가 생활공간 보행·자전거 교통의 중요성과 안전 관련 법제도 정비, 각종 사업 수행.</li>
        <li><b>성과</b>
          <ul><li><mark class="k">2012년 '보행안전 및 편의증진법'</mark> 제정, 도로교통법 정비</li><li>동법 <b>2020년 12월</b> 개정으로 중앙정부와 지자체가 <b>'보행안전 및 편의증진 기본계획'</b>을 수립하도록 함</li><li><b>Tactical urbanism</b> 기반 보행친화 도시공간 창출 (행안부 보행자우선도로 매뉴얼, 보행업무편람 발간)</li></ul></li>
      </ul>` }
  ]
});

/* ===================== 4-2 ===================== */
T.chapters.push({
  id: 'c13', no: '4-2', title: '다양한 재원 마련 제도', pages: '104–108',
  summary: 'TSM의 성패는 재원과 제도. 일반세수·유료도로·채권·유류세·PPP·공공부지 임대로 재원을 마련한다.',
  sections: [
    { title: '재원 마련의 의미', pages: '104', html: `
      <ul>
        <li>TSM 사업의 성패는 <mark class="k">재원 조달과 제도적 뒷받침</mark>(funding &amp; institutional capacity)에 달려 있다. 시설·유지관리 재원 없이 교통시스템을 보존·개선한다는 것은 어불성설.</li>
        <li>따라서 funding &amp; institutional measures는 교통혼잡을 줄이는 <b>기법이 아니라 선결(선필) 사항</b>이다.</li>
        <li>재원 기법 중 <b>국가 차원</b>에서 실행 가능한 것과 <b>지자체 수준</b>에서 가능한 것을 잘 구분해야 한다.</li>
      </ul>
      <p><b>재원 마련 수단</b>: General Revenues, Toll Roads, Bonding, Fuel Taxes, Public/Private Partnership (PPP), Leasing Public Property and Property Rights.</p>` },
    { title: '일반세수와 유료도로', pages: '105', html: `
      <h3>일반세수 (General Revenues)</h3>
      <p>재산세·소득세·법인세·소비세·영업세 등 <b>일반 세수</b>. 일부가 교통시설 운영·개선에 쓰일 수 있지만,</p>
      <ul><li>재원 배분을 놓고 <b>다른 필요 분야와 경쟁</b></li><li>특별회계처럼 교통 목적에 전적으로 투자되지 않아 <mark class="k">불안정한 세원</mark></li></ul>
      <h3>유료도로 (Toll Roads)</h3>
      <ul>
        <li>유료도로(터널·교량 포함): 한국도로공사, 지자체, SPC가 건설·운영</li>
        <li>차관·채권으로 재원 마련이 일반적이나 최근엔 <b>민간자본</b> 유입. 대규모 사업은 재정(국가) 사업으로 일반회계를 쓰기도</li>
        <li>통행료 수입은 채권 <b>원금과 이자 상환</b>에 쓰임</li>
        <li>'유료도로법' 같은 법제도와 권한 부여가 필요</li>
        <li>경인고속도로처럼 <b>무료화 주장</b>이 나오는 배경도 이해 필요</li>
      </ul>
      <div class="grid two">
        <div><b>장점</b><ul><li>직접적인 사용료(통행 비용)</li><li>단기간에 시행 가능(현금 유입)</li><li>운영·유지관리 비용도 포함</li><li>서비스 개선(영업자·소비자가 뚜렷)</li></ul></div>
        <div><b>단점</b><ul><li>차용한 돈에 대한 이자 지급</li><li>통행료 징수 비용</li><li>정체와 환경에 미치는 영향</li><li>부지·시설비, 제한된 유출입</li><li>제도적 논란: <mark class="k">MRG</mark>(Minimum Revenue Guaranty, 최소운영수입보장)</li></ul></div>
      </div>` },
    { title: '채권과 유류세', pages: '106', html: `
      <h3>채권 (Bonding)</h3>
      <p>자체 예산, 중앙정부·기관의 (매칭) 지원금이나 지방양여금 외에 <b>채권 발행</b>도 선택지. 발행 주체의 신용과 재정 건실함이 중요.</p>
      <div class="grid two">
        <div><b>장점</b><ul><li><b>신속한</b> 재원 충당</li><li>교통시설이 필요한 다른 개발사업을 이용할 수 있다</li></ul></div>
        <div><b>단점</b><ul><li>차용한 돈에 대한 이자 지급</li><li>시장 등락(휘발성)이 거래의 질을 결정</li></ul></div>
      </div>
      <h3>유류세 (Fuel Taxes)</h3>
      <ul>
        <li>휘발유 등 자동차 연료에 대한 세금. 우리나라는 <b>국세</b>로 귀속.</li>
        <li><b>안정된 세원</b> — 특별회계에 귀속되어 정해진 목적에 사용 (곧 폐지될 수도).</li>
        <li>건설사업 지원에 용이.</li>
        <li><mark class="k">부담자 = 수혜자</mark>: 도로를 많이 쓸수록 개선에 쓸 재원이 증가.</li>
        <li>세금 인상에 대한 반대(경제적 영향).</li>
        <li>우리나라 교통세엔 <b>주행세</b> 항목이 포함.</li>
      </ul>` },
    { title: '대안적 재원과 PPP', pages: '107', html: `
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>수단</th><th>내용</th></tr></thead><tbody>
        <tr><td><b>Property Assessment Fees</b></td><td>도로 개선·개량 후 토지·건물 소유주의 부동산 감정가액을 산정하고 <b>도로 연접 길이</b>(length of property frontage)에 따라 비용을 fee로 부과</td></tr>
        <tr><td><b>Development Permit Fee</b></td><td>개발이 유발하는 교통량에 따라 부과하는 부담금. 개발의 성격·규모에 따라 금액 결정(인허가비). 국내 유사 제도:<br>· <mark class="k">광역교통시설부담금</mark> — 대도시권 광역교통관리에 관한 특별법, 개발사업에 부과<br>· <mark class="k">교통유발부담금</mark> — 도시교통정비촉진법, <b>기존 건물에 매년</b> 부과, 감면 조항 다수, <b>TDM 기법과 연관</b></td></tr>
        <tr><td><b>Tax Increment Financing (TIF)</b></td><td>TIF district를 정하고 <b>개발 후 늘어날 세수를 미리 당겨</b> 집행. 공공투자 방식으로 채권 발행으로 조달하는 경우가 많음</td></tr>
        <tr><td><b>Negotiated Investments</b></td><td>· NYC zoning 결의: 지하철 입구를 부지 내로 옮기면 건물과의 통로 허용<br>· 서울시도 조례에 따라 용적률을 올려 주기도<br>· 워싱턴 D.C.: 주변 인프라 개량비를 부담하는 부지에 접근권(진출입) 부여<br>· 교통영향평가 협의 과정에서 도로·보도 부지를 확충하고 기부채납</td></tr>
        <tr><td><b>Bus Shelter Construction</b></td><td>정류장에 광고를 싣는(통신장비 공급) 조건으로 민간이 건설 초기비용 부담 (현대캐피탈 서울역 지상 환승역 shelter, KT의 서울시 버스정류장 shelter)</td></tr>
        <tr><td><b>Private Shuttle</b></td><td>지금은 사라진 백화점 셔틀버스</td></tr>
      </tbody></table></div>` },
    { title: '공공부지와 공간 권리 임대', pages: '108', html: `
      <ul>
        <li><b>Leasing Public Property</b>: 상당 기간 사용 계획이 없는 공공부지, 또는 기능 중인 부지라도 원래 목적·기능을 침해하지 않으면 대여 (철도부지 활용).</li>
        <li><b>Leasing Air Right</b>: <mark class="k">보스턴 MTA는 99년간</mark> 도로 위에 호텔·상업용 complex(주차장 포함) 허용. 사례 다수 (미국, 일본, 네덜란드, 낙원·세운상가, 경부고속도로, 일반국도).</li>
        <li><b>Underground</b>: 미국 네바다주는 도로 지하에 Casino 허용 (일본·국내: 도로 교량 하부 리스).</li>
        <li><b>Transportation Center</b>: 공공·민간 <b>Joint Development Program</b>으로 철도·버스 역사를 짓거나, 더 나아가(용산역 개발처럼) transportation center 성격에 대규모 상업개발을 허용.</li>
      </ul>
      <p class="small muted">그림: Three-dimensional use of road — 도로 위 건물, 건물 옥상을 휴게소·주차장으로, 루프 도로 주변 랜드마크.</p>` }
  ]
});

/* ===================== 4-3 ===================== */
T.chapters.push({
  id: 'c14', no: '4-3', title: '대민홍보와 주민참여', pages: '109–110',
  summary: 'TSM은 생활에 직접 영향을 주므로 사업 성패가 대중의 지원에 달려 있다. Class B가 반감이 가장 적다.',
  sections: [
    { title: '대민홍보 (Public Relations)', pages: '109', html: `
      <ul>
        <li>TSM 사업은 기존 도로·상업활동·개발에 영향을 주므로 공공기관의 좋은 홍보가 필수. 성패가 <mark class="k">대중의 지원과 호응</mark>에 크게 좌우된다.</li>
        <li>소규모 건설, 차량 동선 변경, 진출입로 제거·재배치 등으로 자동차 이용자와 인근 주민에게 <b>직접</b> 영향.</li>
      </ul>
      <p><b>잠재적 영향</b>: 일상 통행행태 변화, 지체와 혼잡, 초기 혼선, 불편과 그에 따른 동요, 회의적 의견.</p>
      <p><b>전형적 반응</b>: 인간은 변화를 싫어하고 <mark class="k">현상유지(status quo)</mark>를 선호. TSM 사업은 결국 인정받지만 변화 과정에서 반대를 겪는다.</p>
      <p><b>시행 전 알려야 할 것</b>: TSM 개선 일정, 계획된 교통통제 변경, 도로·차로 차단, 대중교통 일정 변경, 관련 교통운영 변경.</p>
      <p><b>소통의 필요</b>: 완료되면 편익은 매우 긍정적이므로, 영향을 크게 받는 업주와 시민에게 설명하고 시행 중 문제를 최소화해야. 이들과의 <b>'소통'</b>이 홍보의 핵심.</p>` },
    { title: '주민참여 (Public Involvement)', pages: '110', html: `
      <ul>
        <li><b>Awareness</b>: 좋은 PR의 핵심은 많은 대중을 참여시키고 의견을 얻는 것. 엔지니어는 이를 계획을 알리는 기회로 삼고, 필요성과 문제에 대한 시민 의견을 <b>환류(feedback)</b>받는다. 문제에 대한 공동 인식(<b>공감</b>)이 출발점.</li>
        <li><b>Action Class</b>: <mark class="k">Class B action들이 반감이 통상 가장 적다.</mark></li>
        <li><b>Involvement</b>: 필요한 TSM 사업을 알리는 열쇠는 양질의 대민 홍보. 제안 프로젝트는 <b>기술적으로 결함이 없어야</b> 하고, 대중이 그 기법과 시행 이유를 알게 해야 한다. 이해관계자 <mark class="k">갈등관리(conflict management)</mark> 방법이기도.</li>
      </ul>
      <p><b>Public Information Programs</b></p>
      <ul><li>공청회</li><li>주민설명회</li><li>기타 참여형 프로그램</li><li>Mass Media (press release 포함)</li><li>Web 및 SNS</li><li>가로·건물·실내 게시물, 차량을 이용한 홍보, 홍보책자 배포</li><li>홍보 담당 부서·인력 운용</li></ul>
      <div class="tip"><b class="h">왜 Class B가 반감이 적을까?</b>Class B(신호 개선, 도류화 등)는 공급을 늘려 운전자에게 불이익이 없다. 반면 Class C처럼 차로를 빼앗거나 주차를 줄이는 기법은 반발이 크다.</div>` }
  ]
});

/* ===================== quiz ===================== */
T.quiz.push(
  { ch: 'c12', sec: 0, type: 'mc', q: '이면도로 관리(생활 중심 도로) 개념이 우리나라로 들어온 경로로 옳은 것은?', choices: ['구미에서 태동 → 일본을 거쳐 우리나라', '일본에서 태동 → 미국을 거쳐 우리나라', '우리나라에서 자생적으로 시작', '호주에서 태동 → 유럽을 거쳐 우리나라'], answer: 0, ref: '96' },
  { ch: 'c12', sec: 1, type: 'mc', q: 'Woonerf에 대한 설명으로 옳지 <b>않은</b> 것은?', choices: ['자동차 통행을 완전히 금지하는 보행자 전용구역이다', '1970년대 네덜란드·벨기에 플랑드르에서 통과교통 문제로 시작됐다', '보행자 통행이 우선이며 자동차를 보행자 속도 정도로 규제한다', '1976년 도로교통법 내에 규정되었다'], answer: 0, exp: 'Woonerf는 자동차와의 <b>공존</b>을 현실적으로 수용한다. 보행자도 차량 통행을 방해하면 안 되고 상호 양보에 기초.', ref: '97' },
  { ch: 'c12', sec: 1, type: 'mc', q: 'Woonerf의 연혁으로 옳은 것은?', choices: ['1975년 정부가 생활도로로 지정, 1976년 도로교통법에 규정', '1928년 지정, 1935년 법제화', '1972년 지정, 1981년 법제화', '1986년 지정, 1988년 법제화'], answer: 0, ref: '97' },
  { ch: 'c12', sec: 2, type: 'mc', q: '덴마크의 보차공존형 도로와 제한속도의 연결로 옳은 것은?', choices: ['휴식·놀이도로 15 km/h, Stilleveje 30 km/h', '휴식·놀이도로 30 km/h, Stilleveje 15 km/h', '휴식·놀이도로 10 km/h, Stilleveje 50 km/h', '둘 다 30 km/h'], answer: 0, ref: '98' },
  { ch: 'c12', sec: 2, type: 'mc', q: '미국 Radburn 방식을 참고한 도로망과 T형 교차로를 권장한 스웨덴의 지침은?', choices: ['SCAFT', 'RIGU-73', 'Stillevej', 'TAAS'], answer: 0, exp: 'RIGU-73은 1973년 도로구조 기준(1981년 지구도로까지 확장).', ref: '99' },
  { ch: 'c12', sec: 3, type: 'mc', q: 'Radburn에 대한 설명으로 옳은 것은?', choices: ['1928년 NJ에 계획, Howard의 Garden City 계승, Cul-de-sac과 보차 입체분리', '1898년 영국에 계획된 전원도시', '2016년 바르셀로나의 9블록 통합 개념', '1972년 일본의 스쿨존 규제'], answer: 0, ref: '100' },
  { ch: 'c12', sec: 3, type: 'ox', q: 'Radburn은 자동차에 의한 보행사고를 완전히 제거하는 성과를 거두었다.', answer: true, ref: '100' },
  { ch: 'c12', sec: 4, type: 'mc', q: '2021년 초 기준 도시 전체가 제한속도 30 km/h인 도시는?', choices: ['브뤼셀', '뮌헨', '마드리드', '런던'], answer: 0, exp: '뮌헨 도시가로 80%, 마드리드 85%.', ref: '101' },
  { ch: 'c12', sec: 4, type: 'mc', q: '도심을 4개 교통 셀로 나눠 자동차는 외곽 순환도로로 돌아가게 하고 도심에선 자전거·도보가 가장 빠르게 만든 사례는?', choices: ['네덜란드 흐로닝언', '바르셀로나 슈퍼블록', '런던 코번트 가든', '미국 Radburn'], answer: 0, ref: '101' },
  { ch: 'c12', sec: 5, type: 'mc', q: '일본 이면도로 관리의 연혁으로 옳은 것은?', choices: ['1972 스쿨존 → 1974 생활 zone → 1981 Community 도로', '1981 스쿨존 → 1972 생활 zone → 1986 Community 도로', '1974 스쿨존 → 1972 생활 zone → 1981 Woonerf', '1986 스쿨존 → 1981 생활 zone → 1974 Community 도로'], answer: 0, ref: '102' },
  { ch: 'c12', sec: 6, type: 'mc', q: '우리나라 교통사고 사망자 수가 정점을 찍은 해와 사망자 수는?', choices: ['1991년, 13,429명', '2001년, 8,097명', '1981년, 5,296명', '2012년, 5,392명'], answer: 0, ref: '103' },
  { ch: 'c12', sec: 6, type: 'mc', q: '우리나라 이면도로 관리의 일차적 책임 주체와, 생활공간 보행·자전거 안전 법제도를 주도하는 중앙부처는?', choices: ['지자체 / 행정안전부', '국토교통부 / 경찰청', '한국도로공사 / 국토교통부', '지자체 / 환경부'], answer: 0, ref: '103' },
  { ch: 'c12', sec: 6, type: 'ox', q: '보행안전 및 편의증진법은 2012년 제정되었고, 2020년 12월 개정으로 기본계획 수립이 의무화되었다.', answer: true, ref: '103' },
  { ch: 'c12', sec: 6, type: 'mc', q: '우리나라 보행 중 사망자 비중과 OECD 대비 수준은?', choices: ['전체의 약 35%, OECD의 1.9~2.0배', '전체의 약 15%, OECD 평균 수준', '전체의 약 50%, OECD의 3배', '전체의 약 20%, OECD의 절반'], answer: 0, ref: '103' },

  { ch: 'c13', sec: 0, type: 'ox', q: '재원 조달과 제도적 장치(funding & institutional measures)는 교통혼잡을 직접 줄이는 TSM 기법의 하나이다.', answer: false, exp: '혼잡을 줄이는 기법이 아니라 <b>선결(선필) 사항</b>이다.', ref: '104' },
  { ch: 'c13', sec: 1, type: 'mc', q: '일반세수(General Revenues)가 교통 재원으로서 갖는 한계는?', choices: ['다른 분야와 배분 경쟁을 하고 교통 목적에 전적으로 투자되지 않아 불안정하다', '부담자와 수혜자가 일치한다', '징수 비용이 매우 크다', '이자를 지급해야 한다'], answer: 0, ref: '105' },
  { ch: 'c13', sec: 1, type: 'mc', q: '유료도로의 단점이 <b>아닌</b> 것은?', choices: ['단기간에 시행할 수 있다', '차용한 돈에 대한 이자 지급', '통행료 징수에 드는 비용', '제도적 논란(MRG)'], answer: 0, exp: '단기간 시행 가능(현금 유입)은 <b>장점</b>.', ref: '105' },
  { ch: 'c13', sec: 1, type: 'short', q: 'MRG의 원어와 뜻을 쓰시오.', answer: 'Minimum Revenue Guaranty, 최소운영수입보장 — 민자도로 수입이 기준에 못 미치면 정부가 보전해 주는 제도로 제도적 논란이 있음', ref: '105' },
  { ch: 'c13', sec: 2, type: 'mc', q: '"부담자 = 수혜자" 원칙에 가장 잘 맞는 재원은?', choices: ['유류세(Fuel Taxes)', '일반세수', '채권', 'TIF'], answer: 0, exp: '도로를 많이 쓸수록 개선 재원이 늘어난다.', ref: '106' },
  { ch: 'c13', sec: 2, type: 'mc', q: '채권(Bonding)의 장점은?', choices: ['신속한 재원 충당이 가능하다', '이자를 지급하지 않는다', '시장 등락의 영향을 받지 않는다', '부담자와 수혜자가 일치한다'], answer: 0, ref: '106' },
  { ch: 'c13', sec: 3, type: 'mc', q: '도로 개선 후 부동산 감정가액을 산정해 도로 연접 길이(frontage)에 따라 부과하는 것은?', choices: ['Property Assessment Fees', 'Development Permit Fee', 'Tax Increment Financing', 'Negotiated Investments'], answer: 0, ref: '107' },
  { ch: 'c13', sec: 3, type: 'mc', q: '도시교통정비촉진법에 따라 기존 건물에 매년 부과하며 TDM 기법과 관련이 깊은 부담금은?', choices: ['교통유발부담금', '광역교통시설부담금', '개발부담금', '주행세'], answer: 0, exp: '광역교통시설부담금은 대도시권 광역교통관리 특별법, 개발사업에 부과(Development Permit Fee와 유사).', ref: '107' },
  { ch: 'c13', sec: 3, type: 'mc', q: '개발 후 늘어날 세수를 미리 당겨 집행하는 재원 방식은?', choices: ['Tax Increment Financing (TIF)', 'Bonding', 'Property Assessment Fees', 'Leasing Air Right'], answer: 0, ref: '107' },
  { ch: 'c13', sec: 3, type: 'ox', q: '버스정류장에 광고를 싣는 조건으로 민간이 쉘터 건설 초기비용을 부담하는 방식은 대안적 재원(PPP)의 예이다.', answer: true, ref: '107' },
  { ch: 'c13', sec: 4, type: 'mc', q: '보스턴 MTA가 99년간 도로 위에 호텔·상업 complex를 허용한 사례는 어떤 재원 방식인가?', choices: ['Leasing Air Right', 'Underground lease', 'TIF', 'Development Permit Fee'], answer: 0, ref: '108' },
  { ch: 'c13', sec: 4, type: 'mc', q: '도로 지하에 Casino를 허용한 지역은?', choices: ['미국 네바다주', '미국 보스턴', '일본 도쿄', '네덜란드 흐로닝언'], answer: 0, ref: '108' },

  { ch: 'c14', sec: 1, type: 'mc', q: '주민 반감이 통상 가장 적은 TSM Action Class는?', choices: ['Class B', 'Class A', 'Class C', 'Class D'], answer: 0, ref: '110' },
  { ch: 'c14', sec: 0, type: 'ox', q: '인간은 대체로 변화를 싫어하고 현상유지(status quo)를 선호하므로 TSM 사업은 변화 과정에서 반대를 겪는다.', answer: true, ref: '109' },
  { ch: 'c14', sec: 1, type: 'short', q: 'Public Information Program의 예를 4가지 이상 쓰시오.', answer: '공청회, 주민설명회, 기타 참여형 프로그램, Mass Media(press release), Web·SNS, 가로·건물·실내 게시물·차량 홍보·책자 배포, 홍보 담당 부서·인력 운용', ref: '110' },
  { ch: 'c14', sec: 1, type: 'mc', q: '좋은 PR의 핵심 측면으로 슬라이드가 강조한 것은?', choices: ['많은 대중을 참여시키고 의견을 획득하는 것', '사업 내용을 완공 후에 공개하는 것', '반대 의견을 최소한으로만 듣는 것', '전문가 위원회만으로 결정하는 것'], answer: 0, exp: '공동 인식(공감)이 출발점이고, 갈등관리 방법이기도 하다.', ref: '110' }
);

/* ===================== cards ===================== */
T.cards.push(
  { ch: 'c12', front: 'Traffic Calming', back: '교통 진정(정온화). 속도·소음을 낮춰 생활도로의 보행환경을 개선하는 물리적·운영적 기법.' },
  { ch: 'c12', front: 'Vulnerable users', back: '교통약자. 보행자·자전거 이용자 등 자동차로부터 보호해야 할 도로 이용자.' },
  { ch: 'c12', front: 'Woonerf', back: '네덜란드 "생활 속의 정원"(living street). 1970년대 시작, 1975 정부 지정, 1976 도로교통법 규정. 보행자 우선, 차는 보행 속도, 상호 양보.' },
  { ch: 'c12', front: 'Stillevej', back: '덴마크. 1976 Calming Devices 합법화. 휴식·놀이도로 15 km/h, Stilleveje 30 km/h.' },
  { ch: 'c12', front: 'SCAFT', back: '스웨덴 지침(국가도로청+국가도시계획위). 보행자 중심 교통안전, Radburn식 도로망, T형 교차로.' },
  { ch: 'c12', front: 'RIGU-73', back: '스웨덴 1973년 도로구조 기준. 교통안전 최우선으로 기하구조 결정, 1981년 지구도로까지 확장.' },
  { ch: 'c12', front: 'Radburn', back: '1928 미국 NJ Bergen county. Howard Garden City(1898) 계승. 보차 완전 입체분리, Cul-de-sac. 보행사고 완전 제거.' },
  { ch: 'c12', front: 'Cul-de-sac', back: '막다른 길(끝이 원형 회차로). 통과교통을 막아 주거지 안전 확보. Radburn의 핵심 요소.' },
  { ch: 'c12', front: 'Zone 30', back: '유럽 30 km/h 구역. 속도별 보행자 사망확률에 근거. 뮌헨 80%, 마드리드 85%, 브뤼셀 전체(2021 초).' },
  { ch: 'c12', front: '일본 이면도로', back: '1972 스쿨존(1년 만에 1만5천 곳) → 1974 생활 zone(1㎢) → 1981 Community 도로(1986 전국).' },
  { ch: 'c12', front: '보행안전 및 편의증진법', back: '2012 제정. 2020.12 개정으로 중앙·지자체가 보행안전 및 편의증진 기본계획 수립. 주관 행정안전부.' },
  { ch: 'c12', front: 'Tactical urbanism', back: '저비용·임시적 개입으로 도시공간을 빠르게 바꾸는 방식. 보행친화 공간 창출 기반.' },
  { ch: 'c13', front: 'General Revenues', back: '일반세수(재산세·소득세 등). 다른 분야와 경쟁, 교통에 전적 투자 안 돼 불안정.' },
  { ch: 'c13', front: 'MRG', back: 'Minimum Revenue Guaranty, 최소운영수입보장. 유료도로(민자) 제도적 논란.' },
  { ch: 'c13', front: 'Fuel Taxes', back: '유류세. 국세, 안정된 세원(특별회계), 부담자 = 수혜자. 교통세에 주행세 포함.' },
  { ch: 'c13', front: 'TIF', sub: 'Tax Increment Financing', back: 'TIF district를 정하고 개발 후 늘어날 세수를 미리 당겨 집행. 채권 발행으로 조달하는 경우 많음.' },
  { ch: 'c13', front: 'Development Permit Fee', back: '개발이 유발하는 교통량에 따른 부담금. 국내: 광역교통시설부담금(유사), 교통유발부담금(기존 건물 매년, TDM).' },
  { ch: 'c13', front: 'Air Right lease', back: '도로 위 공간 임대. 보스턴 MTA 99년간 호텔·상업 complex 허용.' },
  { ch: 'c13', front: 'Joint Development', back: '공공·민간 공동개발로 철도·버스 역사 건설, transportation center에 대규모 상업개발 허용(용산역).' },
  { ch: 'c14', front: 'Public Involvement', back: '주민참여. 많은 대중을 참여시켜 의견을 얻고 feedback. 공감에서 출발, 갈등관리 수단.' },
  { ch: 'c14', front: 'Status quo', back: '현상유지. 인간은 변화를 싫어해 TSM 사업 초기엔 반대가 생긴다.' }
);

/* ===================== numbers ===================== */
T.numbers.push(
  { ch: 'c12', label: 'Woonerf 정부 지정 / 도로교통법 규정', value: '1975 / 1976년' },
  { ch: 'c12', label: '덴마크 Calming Devices 합법화', value: '1976년' },
  { ch: 'c12', label: '덴마크 휴식·놀이도로 / Stilleveje 제한속도', value: '15 / 30 km/h' },
  { ch: 'c12', label: '스웨덴 RIGU-73 / 지구도로 확장', value: '1973 / 1981년' },
  { ch: 'c12', label: 'Radburn 계획 / Garden City 개념', value: '1928 / 1898년' },
  { ch: 'c12', label: 'Zone 30 비율: 뮌헨 / 마드리드', value: '80% / 85%', note: '브뤼셀은 도시 전체 (2021년 초)' },
  { ch: 'c12', label: '바르셀로나 슈퍼블록 내부 속도', value: '10 km/h' },
  { ch: 'c12', label: '흐로닝언 교통 셀 수', value: '4개' },
  { ch: 'c12', label: '일본 스쿨존 시작 / 1년 후 개소', value: '1972년 / 1만 5천 곳' },
  { ch: 'c12', label: '일본 생활 zone 시작 / 구역 크기', value: '1974년 / 약 1㎢' },
  { ch: 'c12', label: '일본 Community 도로 시작 / 전국 확대', value: '1981 / 1986년' },
  { ch: 'c12', label: '국내 교통사고 사망자 정점', value: '1991년 13,429명' },
  { ch: 'c12', label: '2025 인구 10만 명당 사망자', value: '4.9~5.3명', note: 'OECD 22/35' },
  { ch: 'c12', label: '국내 보행 중 사망자 비중', value: '약 35%', note: 'OECD의 1.9~2.0배' },
  { ch: 'c12', label: '보행안전 및 편의증진법 제정 / 개정', value: '2012 / 2020.12' },
  { ch: 'c13', label: '보스턴 MTA 공중권 임대 기간', value: '99년' }
);
})();
