(() => {
  'use strict';
  const D = window.TSM;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const main = $('#main');

  /* ---------- data helpers ---------- */
  const partOf = {};
  D.parts.forEach((p) => p.chapters.forEach((c) => (partOf[c] = p)));
  const chap = {};
  D.chapters.forEach((c, i) => { c.idx = i; chap[c.id] = c; });
  D.quiz.forEach((q, i) => { if (!q.id) q.id = q.ch + '-q' + i; });
  D.cards.forEach((c, i) => { if (!c.id) c.id = c.ch + '-c' + i; });
  const pcls = (chId) => (partOf[chId] ? partOf[chId].cls : '');

  /* ---------- storage ---------- */
  const KEY = 'tsm-exam-v1';
  const defaults = () => ({ read: {}, q: {}, cards: {}, prefs: { memo: true, blur: false, hidenum: false, theme: 'system' }, last: null });
  let S = defaults();
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw && typeof raw === 'object') {
      S = Object.assign(defaults(), raw);
      S.prefs = Object.assign(defaults().prefs, raw.prefs || {});
    }
  } catch (e) { /* storage blocked */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };

  /* ---------- prefs ---------- */
  function applyPrefs() {
    document.body.classList.toggle('nomemo', !S.prefs.memo);
    document.body.classList.toggle('blur', !!S.prefs.blur);
    document.body.classList.toggle('hidenum', !!S.prefs.hidenum);
    const t = S.prefs.theme;
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }

  function toast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1600);
  }

  const shuffle = (a) => {
    const b = a.slice();
    for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
    return b;
  };

  /* ---------- router ---------- */
  let cleanup = null;
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    const h = location.hash.replace(/^#\/?/, '');
    const [tab = 'home', a, b] = h.split('/');
    $$('[data-tab]').forEach((el) => el.setAttribute('aria-current', el.dataset.tab === tab ? 'page' : 'false'));
    const sideCh = $('#sideChapters');
    $$('a', sideCh).forEach((el) => el.setAttribute('aria-current', tab === 'notes' && el.dataset.ch === a ? 'true' : 'false'));
    if (tab === 'notes' && a && chap[a]) renderChapter(a, b);
    else if (tab === 'notes') renderNotesIndex();
    else if (tab === 'quiz') renderQuiz(a);
    else if (tab === 'cards') renderCards();
    else if (tab === 'numbers') renderNumbers();
    else renderHome();
    if (!(tab === 'notes' && b)) window.scrollTo(0, 0);
  }

  /* ---------- stats ---------- */
  function stats() {
    const total = D.quiz.length;
    const tried = Object.keys(S.q).filter((id) => D.quiz.some((q) => q.id === id));
    const right = tried.filter((id) => S.q[id].last === 1).length;
    const wrong = tried.filter((id) => S.q[id].last === 0).length;
    const read = D.chapters.filter((c) => S.read[c.id]).length;
    const known = D.cards.filter((c) => S.cards[c.id] === 1).length;
    return { total, tried: tried.length, right, wrong, read, known };
  }

  /* ---------- home ---------- */
  function renderHome() {
    document.title = 'TSM&O 시험 대비';
    const st = stats();
    const acc = st.tried ? Math.round((st.right / st.tried) * 100) + '%' : '–';
    const last = S.last && chap[S.last] ? chap[S.last] : null;
    main.innerHTML = `
      <section class="hero">
        <h1>TSM&amp;O 시험 대비</h1>
        <p class="lead">${esc(D.meta.scope)}</p>
      </section>
      <div class="stats">
        <div class="stat"><b>${st.read}/${D.chapters.length}</b><span>읽은 장</span></div>
        <div class="stat"><b>${st.tried}/${st.total}</b><span>풀어본 문제</span></div>
        <div class="stat"><b>${acc}</b><span>최근 정답률</span></div>
        <div class="stat"><b>${st.known}/${D.cards.length}</b><span>외운 카드</span></div>
      </div>
      <h2 class="sec">바로 시작</h2>
      <div class="quick">
        <a class="main" href="#/notes/${last ? last.id : D.chapters[0].id}"><b>${last ? '이어서 읽기' : '요약노트 처음부터'}</b><span>${last ? esc(last.no + ' ' + last.title) : esc(D.chapters[0].title)}</span></a>
        <a href="#/quiz/random"><b>랜덤 20문제</b><span>전 범위에서 섞어서</span></a>
        <a href="#/quiz/wrong"><b>오답 다시 풀기</b><span>${st.wrong ? '틀린 문제 ' + st.wrong + '개' : '아직 틀린 문제 없음'}</span></a>
        <a href="#/numbers"><b>숫자 암기표</b><span>${D.numbers.length}개 수치 가리고 외우기</span></a>
      </div>
      <h2 class="sec">시험 범위</h2>
      <div class="partlist">${D.parts.map(partCard).join('')}</div>
      <h2 class="sec">헷갈리기 쉬운 비교</h2>
      <div class="vs">${D.compare.map((c) => `
        <a class="card" style="text-decoration:none;color:inherit" href="#/notes/${c.ch}"><h4>${esc(c.title)}</h4><p>${c.html}</p></a>`).join('')}
      </div>
      <h2 class="sec">설정</h2>
      <div class="card">
        <div class="row">
          <span class="small muted" style="margin-right:4px">화면</span>
          <div class="seg" style="grid-template-columns:repeat(3,1fr);flex:1;max-width:320px" id="themeSeg">
            ${[['system', '자동'], ['light', '밝게'], ['dark', '어둡게']].map(([v, l]) => `<button type="button" data-v="${v}" aria-pressed="${S.prefs.theme === v}">${l}</button>`).join('')}
          </div>
        </div>
        <div class="row" style="margin-top:12px">
          <button class="btn sm" type="button" id="resetBtn">학습 기록 초기화</button>
          <span class="small faint">기록은 이 기기의 브라우저에만 저장돼요.</span>
        </div>
      </div>
      <p class="footer">${D.meta.footer}</p>`;
    $$('#themeSeg button').forEach((b) => b.addEventListener('click', () => {
      S.prefs.theme = b.dataset.v; save(); applyPrefs();
      $$('#themeSeg button').forEach((x) => x.setAttribute('aria-pressed', x === b));
    }));
    $('#resetBtn').addEventListener('click', () => {
      if (!confirm('읽음 표시, 퀴즈 기록, 카드 기록을 모두 지울까요?')) return;
      const prefs = S.prefs; S = defaults(); S.prefs = prefs; save(); renderHome(); toast('기록을 지웠어요');
    });
  }

  function partCard(p) {
    return `<div class="card part-card ${p.cls}">
      <span class="badge part">${esc(p.label)}</span>
      <h3>${esc(p.title)}</h3>
      <div class="small muted">${esc(p.pages)}</div>
      <ol>${p.chapters.map((id) => { const c = chap[id]; return `<li><a href="#/notes/${id}"><span class="no">${esc(c.no)}</span><span>${esc(c.title)}</span>${S.read[id] ? '<span class="chk">✓</span>' : ''}<span class="pg">${esc(c.pages)}</span></a></li>`; }).join('')}</ol>
    </div>`;
  }

  /* ---------- notes ---------- */
  function renderNotesIndex() {
    document.title = '요약노트 · TSM&O';
    main.innerHTML = `
      <h1 class="page">요약노트</h1>
      <p class="lead">강의자료 순서대로 정리했어요. <span style="color:var(--memo);font-weight:700">빨간 펜 상자</span>는 수업 중 필기, <span style="color:var(--warn);font-weight:700">노란 상자</span>는 시험 포인트예요.</p>
      <div class="partlist">${D.parts.map(partCard).join('')}</div>`;
  }

  function renderChapter(id, secIdx) {
    const c = chap[id];
    const p = partOf[id];
    S.last = id; save();
    document.title = c.no + ' ' + c.title + ' · TSM&O';
    const prev = D.chapters[c.idx - 1];
    const next = D.chapters[c.idx + 1];
    const nq = D.quiz.filter((q) => q.ch === id).length;
    main.innerHTML = `
      <header class="ch-head ${p.cls}">
        <div class="row"><span class="badge part">${esc(p.label)}</span><span class="badge">강의자료 ${esc(c.pages)}</span></div>
        <h1>${esc(c.no)} ${esc(c.title)}</h1>
        <p>${c.summary}</p>
      </header>
      <div class="ch-tools">
        <div class="row">
          <button class="toggle" type="button" id="tgMemo" aria-pressed="${S.prefs.memo}"><i></i>필기</button>
          <button class="toggle" type="button" id="tgBlur" aria-pressed="${S.prefs.blur}"><i></i>핵심어 가리기</button>
          <span class="spacer"></span>
          <a class="btn sm" href="#/quiz/ch-${id}">퀴즈 ${nq}</a>
        </div>
        <nav class="toc-chips" aria-label="이 장의 목차">${c.sections.map((s, i) => `<a href="#/notes/${id}/${i}" data-i="${i}">${esc(s.title)}</a>`).join('')}</nav>
      </div>
      ${c.sections.map((s, i) => `
        <article class="note" id="sec-${i}" data-i="${i}">
          <h2>${esc(s.title)}${s.pages ? `<span class="pg">p.${esc(s.pages)}</span>` : ''}</h2>
          ${s.html}
        </article>`).join('')}
      <div class="ch-end">
        <button class="btn ${S.read[id] ? '' : 'primary'}" type="button" id="readBtn">${S.read[id] ? '✓ 읽음 표시됨' : '이 장 다 읽었어요'}</button>
        <a class="btn" href="#/quiz/ch-${id}">이 장 퀴즈 풀기</a>
      </div>
      <nav class="ch-nav">
        ${prev ? `<a href="#/notes/${prev.id}"><small>이전</small>${esc(prev.no + ' ' + prev.title)}</a>` : '<span></span>'}
        ${next ? `<a class="next" href="#/notes/${next.id}"><small>다음</small>${esc(next.no + ' ' + next.title)}</a>` : '<span></span>'}
      </nav>`;
    $('#tgMemo').addEventListener('click', (e) => { S.prefs.memo = !S.prefs.memo; save(); applyPrefs(); e.currentTarget.setAttribute('aria-pressed', S.prefs.memo); });
    $('#tgBlur').addEventListener('click', (e) => {
      S.prefs.blur = !S.prefs.blur; save(); applyPrefs(); e.currentTarget.setAttribute('aria-pressed', S.prefs.blur);
      $$('mark.k.show').forEach((m) => m.classList.remove('show'));
    });
    $('#readBtn').addEventListener('click', (e) => {
      S.read[id] = !S.read[id]; if (!S.read[id]) delete S.read[id]; save();
      e.currentTarget.textContent = S.read[id] ? '✓ 읽음 표시됨' : '이 장 다 읽었어요';
      e.currentTarget.classList.toggle('primary', !S.read[id]);
      renderSideChapters();
      if (S.read[id]) toast('읽음으로 표시했어요');
    });
    main.querySelectorAll('mark.k').forEach((m) => m.addEventListener('click', () => { if (document.body.classList.contains('blur')) m.classList.toggle('show'); }));
    $$('.toc-chips a').forEach((a) => a.addEventListener('click', (e) => {
      e.preventDefault();
      history.replaceState(null, '', a.getAttribute('href'));
      scrollToSec(+a.dataset.i);
    }));
    mountWidgets(main);
    // highlight current section chip
    const chips = $$('.toc-chips a');
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          const i = +en.target.dataset.i;
          chips.forEach((ch) => ch.classList.toggle('on', +ch.dataset.i === i));
          const on = chips[i];
          if (on && on.parentElement) {
            const par = on.parentElement;
            const left = on.offsetLeft - par.clientWidth / 2 + on.clientWidth / 2;
            par.scrollTo({ left, behavior: 'smooth' });
          }
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    $$('.note').forEach((n) => io.observe(n));
    cleanup = () => io.disconnect();
    if (secIdx != null && secIdx !== '') requestAnimationFrame(() => scrollToSec(+secIdx, true));
  }

  function scrollToSec(i, instant) {
    const el = document.getElementById('sec-' + i);
    if (!el) return;
    const tools = $('.ch-tools');
    // when stuck, the toolbar sits at its CSS `top`; offset by that plus its own height
    const offset = tools ? (parseFloat(getComputedStyle(tools).top) || 0) + tools.offsetHeight + 10 : 10;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: instant ? 'auto' : 'smooth' });
  }

  /* ---------- widgets ---------- */
  function mountWidgets(root) {
    $$('[data-widget="classdemo"]', root).forEach(classDemo);
    // On phones, tables with 3+ columns stack into labeled rows (see .tbl.stack in CSS)
    $$('table.tbl', root).forEach((t) => {
      const ths = $$('thead th', t).map((th) => th.textContent.trim());
      if (ths.length < 3 || t.classList.contains('nostack')) return;
      t.classList.add('stack');
      $$('tbody tr', t).forEach((tr) => $$('td', tr).forEach((td, i) => td.setAttribute('data-label', ths[i] || '')));
    });
  }

  function classDemo(el) {
    const X = (x) => 46 + x * 30;
    const Y = (y) => 236 - y * 21;
    const curves = {
      S0: (x) => 1 + 0.08 * x * x,
      Sup: (x) => 2.2 + 0.13 * x * x,
      Sdn: (x) => 0.6 + 0.055 * x * x,
      D0: (x) => 9.5 - 0.95 * x,
      Dl: (x) => 7.6 - 0.95 * x,
    };
    const path = (f, x0 = 0, x1 = 10) => {
      let d = '';
      for (let x = x0; x <= x1 + 1e-9; x += 0.1) {
        const y = f(x);
        if (y > 10.4 || y < -0.2) continue;
        d += (d ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(y).toFixed(1);
      }
      return d;
    };
    const cross = (f, g) => {
      let lo = 0, hi = 10;
      for (let k = 0; k < 60; k++) { const m = (lo + hi) / 2; (f(m) - g(m) < 0) ? (lo = m) : (hi = m); }
      return { x: lo, y: f(lo) };
    };
    const info = {
      A: { s: 'S0', d: 'Dl', name: 'Class A · 수요 감소', move: '수요곡선 ← 왼쪽 이동', vmt: '↓ 감소', dis: '↓ 감소 (LOS 개선)', ex: '함께타기, 급행버스, P&R, 혼잡통행료' },
      B: { s: 'Sdn', d: 'D0', name: 'Class B · 공급 향상', move: '공급곡선 ↓ 아래(오른쪽) 이동', vmt: '↑ 약간 증가 (유발수요)', dis: '↓ 감소', ex: '신호시간·연동, 도류화, 램프미터링, 고속도로 교통관리' },
      C: { s: 'Sup', d: 'Dl', name: 'Class C · 수요 감소 + 공급 저하', move: '수요 ← 이동 + 공급 ↑ 이동', vmt: '↓↓ 크게 감소', dis: '불확정 (승용차는 대개 ↑)', ex: '기존 차로를 HOV 전용으로(take-a-lane), ARZ, 노외주차 감축' },
      D: { s: 'Sdn', d: 'Dl', name: 'Class D · 공급 향상 + 수요 감소', move: '공급 ↓ 이동 + 수요 ← 이동', vmt: '불확정 (대개 ↓)', dis: '↓↓ 크게 감소', ex: 'HOV 차로 추가 건설, 노상주차 제한' },
    };
    el.innerHTML = `
      <div class="cls-demo">
        <div>
          <div class="seg" role="group" aria-label="Class 선택">${['A', 'B', 'C', 'D'].map((k) => `<button type="button" data-k="${k}" aria-pressed="${k === 'A'}">Class ${k}</button>`).join('')}</div>
          <svg viewBox="0 0 360 270" role="img" aria-label="수요·공급 곡선과 평형점 이동">
            <defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
            <g stroke="var(--faint)" stroke-width="1.5" fill="none">
              <path d="M46 14V236H350" marker-end="url(#ah)" style="color:var(--faint)"/>
            </g>
            <text x="352" y="256" text-anchor="end" font-size="12" fill="var(--muted)">수요 (VMT)</text>
            <text x="14" y="125" font-size="12" fill="var(--muted)" transform="rotate(-90 14 125)" text-anchor="middle">불효용 (분/마일)</text>
            <g id="cdBase" fill="none" stroke="var(--faint)" stroke-width="2" stroke-dasharray="5 5"></g>
            <g id="cdNew" fill="none" stroke-width="3"></g>
            <g id="cdPts"></g>
            <g id="cdLbl" font-size="12" font-weight="700"></g>
          </svg>
        </div>
        <div class="out" id="cdOut"></div>
      </div>`;
    const svg = $('svg', el);
    function draw(k) {
      const it = info[k];
      const f = curves[it.s], g = curves[it.d];
      const p0 = cross(curves.S0, curves.D0);
      const p1 = cross(f, g);
      $('#cdBase', svg).innerHTML = `<path d="${path(curves.S0)}"/><path d="${path(curves.D0)}"/>`;
      const sC = it.s === 'S0' ? 'var(--faint)' : 'var(--p3)';
      const dC = it.d === 'D0' ? 'var(--faint)' : 'var(--p1)';
      $('#cdNew', svg).innerHTML = `${it.s !== 'S0' ? `<path d="${path(f)}" stroke="${sC}"/>` : ''}${it.d !== 'D0' ? `<path d="${path(g)}" stroke="${dC}"/>` : ''}`;
      $('#cdPts', svg).innerHTML = `
        <line x1="${X(p0.x)}" y1="${Y(p0.y)}" x2="${X(p0.x)}" y2="236" stroke="var(--faint)" stroke-dasharray="2 3"/>
        <line x1="${X(p1.x)}" y1="${Y(p1.y)}" x2="${X(p1.x)}" y2="236" stroke="var(--text)" stroke-dasharray="2 3"/>
        <line x1="46" y1="${Y(p1.y)}" x2="${X(p1.x)}" y2="${Y(p1.y)}" stroke="var(--text)" stroke-dasharray="2 3"/>
        <line x1="46" y1="${Y(p0.y)}" x2="${X(p0.x)}" y2="${Y(p0.y)}" stroke="var(--faint)" stroke-dasharray="2 3"/>
        <circle cx="${X(p0.x)}" cy="${Y(p0.y)}" r="5" fill="var(--surface)" stroke="var(--faint)" stroke-width="2"/>
        <circle cx="${X(p1.x)}" cy="${Y(p1.y)}" r="6" fill="var(--text)"/>`;
      $('#cdLbl', svg).innerHTML = `
        <text x="${X(9.1)}" y="${Y(curves.S0(9.1)) + 4}" fill="var(--faint)" text-anchor="end">S</text>
        <text x="${X(9.6)}" y="${Y(curves.D0(9.6)) - 6}" fill="var(--faint)">D</text>
        ${it.s !== 'S0' ? `<text x="${X(it.s === 'Sup' ? 6.7 : 10)}" y="${Y(f(it.s === 'Sup' ? 6.7 : 10)) + 16}" fill="${sC}" text-anchor="end">S′</text>` : ''}
        ${it.d !== 'D0' ? `<text x="${X(7.6)}" y="${Y(g(7.6)) - 6}" fill="${dC}">D′</text>` : ''}
        <text x="${X(p1.x) + 8}" y="${Y(p1.y) - 8}" fill="var(--text)">새 평형</text>`;
      $('#cdOut', el).innerHTML = `
        <h3 style="margin:0 0 6px;font-size:17px">${it.name}</h3>
        <p class="muted" style="margin:0 0 8px">${it.move}</p>
        <div class="row"><span class="arrow-tag">VMT ${it.vmt}</span></div>
        <div class="row"><span class="arrow-tag">불효용 ${it.dis}</span></div>
        <p class="small" style="margin:10px 0 0"><b>예</b> · ${it.ex}</p>
        <p class="small faint" style="margin:6px 0 0">점선: 원래 곡선·평형 / 실선: 이동 후</p>`;
      $$('button', el).forEach((b) => b.setAttribute('aria-pressed', b.dataset.k === k));
    }
    $$('button', el).forEach((b) => b.addEventListener('click', () => draw(b.dataset.k)));
    draw('A');
  }

  /* ---------- quiz ---------- */
  let QZ = null; // running session
  const qSel = { chs: new Set(), types: new Set(['mc', 'ox', 'short']), n: 20 };

  function renderQuiz(arg) {
    document.title = '퀴즈 · TSM&O';
    if (arg === 'random') { startQuiz(pickQuestions([...D.chapters.map((c) => c.id)], qSel.types, 20)); return; }
    if (arg === 'wrong') {
      const ids = D.quiz.filter((q) => S.q[q.id] && S.q[q.id].last === 0);
      if (!ids.length) { renderQuizSetup('틀린 문제가 아직 없어요. 먼저 퀴즈를 풀어 보세요.'); return; }
      startQuiz(shuffle(ids), '오답 다시 풀기'); return;
    }
    if (arg && arg.startsWith('ch-') && chap[arg.slice(3)]) {
      const id = arg.slice(3);
      startQuiz(shuffle(D.quiz.filter((q) => q.ch === id)), chap[id].no + ' ' + chap[id].title); return;
    }
    if (arg === 'run' && QZ) { drawQuestion(); return; }
    renderQuizSetup();
  }

  function pickQuestions(chs, types, n) {
    const pool = D.quiz.filter((q) => chs.includes(q.ch) && types.has(q.type));
    return shuffle(pool).slice(0, n === 'all' ? pool.length : n);
  }

  function renderQuizSetup(notice) {
    const st = stats();
    const typeNames = { mc: '객관식', ox: 'OX', short: '단답·서술' };
    main.innerHTML = `
      <h1 class="page">퀴즈</h1>
      <p class="lead">총 ${D.quiz.length}문제 · 객관식 ${D.quiz.filter((q) => q.type === 'mc').length} · OX ${D.quiz.filter((q) => q.type === 'ox').length} · 단답·서술 ${D.quiz.filter((q) => q.type === 'short').length}</p>
      ${notice ? `<div class="tip"><b class="h">알림</b>${esc(notice)}</div>` : ''}
      <div class="q-setup">
        <div class="card">
          <div class="row" style="margin-bottom:8px"><h3 style="margin:0">범위</h3><span class="spacer"></span><button class="btn sm" type="button" id="allCh">전체 선택</button></div>
          ${D.parts.map((p) => `<div class="small muted" style="margin:10px 0 6px">${esc(p.label)} · ${esc(p.title)}</div>
            <div class="chips">${p.chapters.map((id) => `<button class="chip" type="button" data-ch="${id}" aria-pressed="${qSel.chs.has(id)}">${esc(chap[id].no + ' ' + chap[id].title)}</button>`).join('')}</div>`).join('')}
        </div>
        <div class="card">
          <h3>문제 유형</h3>
          <div class="chips">${Object.entries(typeNames).map(([k, v]) => `<button class="chip" type="button" data-type="${k}" aria-pressed="${qSel.types.has(k)}">${v}</button>`).join('')}</div>
          <h3 style="margin-top:14px">문제 수</h3>
          <div class="chips">${[10, 20, 30, 'all'].map((n) => `<button class="chip" type="button" data-n="${n}" aria-pressed="${String(qSel.n) === String(n)}">${n === 'all' ? '전부' : n + '문제'}</button>`).join('')}</div>
        </div>
        <div class="row" style="margin-top:14px">
          <button class="btn primary" type="button" id="startQ" style="flex:1">시작하기 <span id="poolN" class="small" style="opacity:.7"></span></button>
          <a class="btn" href="#/quiz/wrong" style="flex:1">오답만 (${st.wrong})</a>
        </div>
      </div>`;
    const upd = () => {
      const chs = qSel.chs.size ? [...qSel.chs] : D.chapters.map((c) => c.id);
      const pool = D.quiz.filter((q) => chs.includes(q.ch) && qSel.types.has(q.type)).length;
      const n = qSel.n === 'all' ? pool : Math.min(pool, qSel.n);
      $('#poolN').textContent = `${n}문제${qSel.chs.size ? '' : ' · 전 범위'}`;
      $('#startQ').disabled = !n;
    };
    $$('[data-ch]').forEach((b) => b.addEventListener('click', () => {
      const id = b.dataset.ch; qSel.chs.has(id) ? qSel.chs.delete(id) : qSel.chs.add(id);
      b.setAttribute('aria-pressed', qSel.chs.has(id)); upd();
    }));
    $('#allCh').addEventListener('click', () => {
      const all = qSel.chs.size !== D.chapters.length;
      qSel.chs = new Set(all ? D.chapters.map((c) => c.id) : []);
      $$('[data-ch]').forEach((b) => b.setAttribute('aria-pressed', qSel.chs.has(b.dataset.ch))); upd();
    });
    $$('[data-type]').forEach((b) => b.addEventListener('click', () => {
      const k = b.dataset.type;
      if (qSel.types.has(k) && qSel.types.size === 1) return;
      qSel.types.has(k) ? qSel.types.delete(k) : qSel.types.add(k);
      b.setAttribute('aria-pressed', qSel.types.has(k)); upd();
    }));
    $$('[data-n]').forEach((b) => b.addEventListener('click', () => {
      qSel.n = b.dataset.n === 'all' ? 'all' : +b.dataset.n;
      $$('[data-n]').forEach((x) => x.setAttribute('aria-pressed', x === b)); upd();
    }));
    $('#startQ').addEventListener('click', () => {
      const chs = qSel.chs.size ? [...qSel.chs] : D.chapters.map((c) => c.id);
      startQuiz(pickQuestions(chs, qSel.types, qSel.n));
    });
    upd();
  }

  function startQuiz(list, title) {
    if (!list.length) { renderQuizSetup('조건에 맞는 문제가 없어요.'); return; }
    QZ = { list: list.map((q) => prepQ(q)), i: 0, res: [], title: title || '퀴즈', done: false };
    if (location.hash !== '#/quiz/run') { history.replaceState(null, '', '#/quiz/run'); }
    drawQuestion();
  }

  function prepQ(q) {
    if (q.type !== 'mc') return { q, order: null };
    const idx = q.choices.map((_, i) => i);
    return { q, order: q.fixed ? idx : shuffle(idx) };
  }

  function drawQuestion() {
    window.scrollTo(0, 0);
    if (QZ.i >= QZ.list.length) return drawResult();
    const { q, order } = QZ.list[QZ.i];
    const c = chap[q.ch];
    const typeName = { mc: '객관식', ox: 'OX', short: q.long ? '서술' : '단답' }[q.type];
    main.innerHTML = `
      <div class="q-top">
        <a class="btn sm" href="#/quiz" aria-label="퀴즈 그만하기">✕</a>
        <div class="progress" aria-hidden="true"><i style="width:${(QZ.i / QZ.list.length) * 100}%"></i></div>
        <span class="count">${QZ.i + 1} / ${QZ.list.length}</span>
      </div>
      <div class="card q-card">
        <div class="q-meta"><span class="badge part ${pcls(q.ch)}">${esc(c.no + ' ' + c.title)}</span><span class="badge">${typeName}</span></div>
        <p class="q-text">${q.q}</p>
        <div id="qBody"></div>
        <div id="qFb"></div>
        <div class="q-actions" id="qAct"></div>
      </div>`;
    const body = $('#qBody');
    if (q.type === 'mc') {
      body.innerHTML = `<div class="opts">${order.map((ci, k) => `<button class="opt" type="button" data-ci="${ci}"><span class="n">${k + 1}</span><span>${q.choices[ci]}</span></button>`).join('')}</div>`;
      $$('.opt', body).forEach((b) => b.addEventListener('click', () => answerMC(+b.dataset.ci)));
    } else if (q.type === 'ox') {
      body.innerHTML = `<div class="ox"><button class="opt" type="button" data-v="1" aria-label="맞다">O</button><button class="opt" type="button" data-v="0" aria-label="틀리다">X</button></div>`;
      $$('.opt', body).forEach((b) => b.addEventListener('click', () => answerOX(b.dataset.v === '1')));
    } else {
      $('#qAct').innerHTML = `<button class="btn primary" type="button" id="reveal">정답 보기</button>`;
      $('#reveal').addEventListener('click', revealShort);
    }
  }

  function record(ok) {
    const { q } = QZ.list[QZ.i];
    QZ.res[QZ.i] = ok;
    const r = S.q[q.id] || { n: 0, ok: 0 };
    r.n++; if (ok) r.ok++; r.last = ok ? 1 : 0;
    S.q[q.id] = r; save();
  }

  function feedback(ok, extra) {
    const { q } = QZ.list[QZ.i];
    const c = chap[q.ch];
    $('#qFb').innerHTML = `<div class="fb ${ok == null ? '' : ok ? 'ok' : 'no'}">
      ${ok == null ? '' : `<b class="h">${ok ? '정답이에요' : '틀렸어요'}</b>`}
      ${extra || ''}${q.exp ? `<div>${q.exp}</div>` : ''}
      <a class="ref" href="#/notes/${q.ch}${q.sec != null ? '/' + q.sec : ''}">${esc(c.no + ' ' + c.title)}${q.ref ? ' · p.' + esc(q.ref) : ''} 노트 보기 →</a>
    </div>`;
  }

  function nextBtn() {
    const last = QZ.i === QZ.list.length - 1;
    $('#qAct').innerHTML = `<button class="btn primary" type="button" id="nextQ">${last ? '결과 보기' : '다음 문제'} <kbd style="background:transparent;color:inherit;border-color:currentColor;opacity:.6">Enter</kbd></button>`;
    $('#nextQ').addEventListener('click', () => { QZ.i++; drawQuestion(); });
    $('#nextQ').focus({ preventScroll: true });
  }

  function answerMC(ci) {
    const { q } = QZ.list[QZ.i];
    if (QZ.res[QZ.i] != null) return;
    const ok = ci === q.answer;
    $$('.opt').forEach((b) => {
      b.disabled = true;
      const v = +b.dataset.ci;
      if (v === q.answer) b.classList.add('ok');
      else if (v === ci) b.classList.add('no');
    });
    record(ok); feedback(ok); nextBtn();
  }

  function answerOX(v) {
    const { q } = QZ.list[QZ.i];
    if (QZ.res[QZ.i] != null) return;
    const ok = v === q.answer;
    $$('.opt').forEach((b) => {
      b.disabled = true;
      const bv = b.dataset.v === '1';
      if (bv === q.answer) b.classList.add('ok');
      else if (bv === v) b.classList.add('no');
    });
    record(ok); feedback(ok, `<div>정답: <b>${q.answer ? 'O' : 'X'}</b></div>`); nextBtn();
  }

  function revealShort() {
    const { q } = QZ.list[QZ.i];
    $('#qBody').innerHTML = `<div class="answer-box"><b class="h">모범 답안</b>${q.answer}</div>`;
    feedback(null);
    $('#qAct').innerHTML = `<button class="btn" type="button" id="selfNo" style="color:var(--no)">못 맞혔어요</button><button class="btn" type="button" id="selfOk" style="color:var(--ok)">맞혔어요</button>`;
    $('#selfNo').addEventListener('click', () => { record(false); QZ.i++; drawQuestion(); });
    $('#selfOk').addEventListener('click', () => { record(true); QZ.i++; drawQuestion(); });
  }

  function drawResult() {
    const n = QZ.list.length;
    const ok = QZ.res.filter(Boolean).length;
    const wrong = QZ.list.filter((_, i) => QZ.res[i] === false);
    QZ.done = true;
    main.innerHTML = `
      <h1 class="page">${esc(QZ.title)} 결과</h1>
      <div class="card result-big"><b>${ok} / ${n}</b><span class="muted">${Math.round((ok / n) * 100)}점</span></div>
      <div class="row" style="margin-top:12px">
        ${wrong.length ? `<button class="btn primary" type="button" id="retryW" style="flex:1">틀린 ${wrong.length}문제 다시</button>` : ''}
        <a class="btn" href="#/quiz" style="flex:1">새 퀴즈</a>
      </div>
      ${wrong.length ? `<h2 class="sec">틀린 문제 해설</h2><div class="wrong-list">${wrong.map(({ q }) => `
        <div class="card"><div class="q-meta"><span class="badge part ${pcls(q.ch)}">${esc(chap[q.ch].no)}</span></div>
          <p style="font-weight:650">${q.q}</p>
          <p><b>정답</b> · ${q.type === 'mc' ? q.choices[q.answer] : q.type === 'ox' ? (q.answer ? 'O' : 'X') : q.answer}</p>
          ${q.exp ? `<p class="muted">${q.exp}</p>` : ''}
          <a class="small" href="#/notes/${q.ch}${q.sec != null ? '/' + q.sec : ''}">노트 보기 →</a></div>`).join('')}</div>` : '<p class="lead" style="margin-top:16px">전부 맞혔어요.</p>'}`;
    const r = $('#retryW');
    if (r) r.addEventListener('click', () => startQuiz(shuffle(wrong.map((w) => w.q)), '틀린 문제 다시'));
  }

  /* ---------- flashcards ---------- */
  const FC = { chs: new Set(), onlyUnknown: false, deck: [], i: 0, flipped: false };
  function buildDeck() {
    const chs = FC.chs.size ? FC.chs : new Set(D.chapters.map((c) => c.id));
    let d = D.cards.filter((c) => chs.has(c.ch));
    if (FC.onlyUnknown) d = d.filter((c) => S.cards[c.id] !== 1);
    FC.deck = shuffle(d); FC.i = 0; FC.flipped = false;
  }
  function renderCards() {
    document.title = '플래시카드 · TSM&O';
    buildDeck();
    main.innerHTML = `
      <h1 class="page">플래시카드</h1>
      <p class="lead">용어를 보고 뜻을 떠올린 뒤 카드를 눌러 확인하세요. <span class="faint kbd-hint">키보드: Space 뒤집기 · ← 몰라요 · → 알아요</span></p>
      <div class="chips" id="fcCh" style="margin-bottom:8px">
        <button class="chip" type="button" data-all aria-pressed="${FC.chs.size === 0}">전체</button>
        ${D.parts.map((p) => `<button class="chip" type="button" data-part="${p.id}" aria-pressed="${p.chapters.every((c) => FC.chs.has(c))}">${esc(p.label)}</button>`).join('')}
        <button class="chip" type="button" id="fcUnk" aria-pressed="${FC.onlyUnknown}">모르는 것만</button>
      </div>
      <div id="fcArea"></div>`;
    $('[data-all]').addEventListener('click', () => { FC.chs.clear(); renderCards(); });
    $$('[data-part]').forEach((b) => b.addEventListener('click', () => {
      const p = D.parts.find((x) => x.id === b.dataset.part);
      const on = p.chapters.every((c) => FC.chs.has(c));
      p.chapters.forEach((c) => (on ? FC.chs.delete(c) : FC.chs.add(c)));
      renderCards();
    }));
    $('#fcUnk').addEventListener('click', () => { FC.onlyUnknown = !FC.onlyUnknown; renderCards(); });
    drawCard();
    const onKey = (e) => {
      if (e.target.closest('input,textarea') || $('.search-ov')) return;
      if (e.key === ' ') { e.preventDefault(); flipCard(); }
      else if (e.key === 'ArrowLeft') markCard(0);
      else if (e.key === 'ArrowRight') markCard(1);
    };
    document.addEventListener('keydown', onKey);
    cleanup = () => document.removeEventListener('keydown', onKey);
  }
  function drawCard() {
    const area = $('#fcArea');
    const known = FC.deck.filter((c) => S.cards[c.id] === 1).length;
    if (!FC.deck.length) {
      area.innerHTML = `<div class="card" style="text-align:center;padding:28px"><p style="margin:0 0 12px">${FC.onlyUnknown ? '모르는 카드가 없어요. 전부 외웠어요!' : '카드가 없어요.'}</p>${FC.onlyUnknown ? '<button class="btn" type="button" id="fcAllBtn">전체 카드 보기</button>' : ''}</div>`;
      const b = $('#fcAllBtn'); if (b) b.addEventListener('click', () => { FC.onlyUnknown = false; renderCards(); });
      return;
    }
    if (FC.i >= FC.deck.length) {
      area.innerHTML = `<div class="card" style="text-align:center;padding:28px">
        <p style="font-size:18px;font-weight:700;margin:0 0 6px">한 바퀴 끝!</p>
        <p class="muted" style="margin:0 0 14px">이 묶음 ${FC.deck.length}장 중 ${known}장을 알아요.</p>
        <div class="row" style="justify-content:center"><button class="btn primary" type="button" id="fcAgain">다시 섞기</button><button class="btn" type="button" id="fcUnk2">모르는 것만</button></div></div>`;
      $('#fcAgain').addEventListener('click', () => { buildDeck(); drawCard(); });
      $('#fcUnk2').addEventListener('click', () => { FC.onlyUnknown = true; renderCards(); });
      return;
    }
    const c = FC.deck[FC.i];
    const ch = chap[c.ch];
    area.innerHTML = `
      <div class="row" style="margin-bottom:8px"><div class="progress" style="flex:1"><i style="width:${(FC.i / FC.deck.length) * 100}%"></i></div><span class="small muted" style="font-variant-numeric:tabular-nums">${FC.i + 1} / ${FC.deck.length}</span></div>
      <div class="fc-wrap">
        <div class="fc" role="button" tabindex="0" id="fcCard" aria-label="카드 뒤집기">
          <div class="face front"><span class="lab">용어</span><span class="ch badge part ${pcls(c.ch)}">${esc(ch.no)}</span><div class="t">${c.front}</div>${c.sub ? `<div class="s">${c.sub}</div>` : ''}<span class="hint">눌러서 뒤집기</span></div>
          <div class="face back"><span class="lab">설명</span><span class="ch badge part ${pcls(c.ch)}">${esc(ch.no)}</span><div class="t">${c.back}</div></div>
        </div>
      </div>
      <div class="fc-actions"><button class="btn no" type="button" id="fcNo">몰라요</button><button class="btn yes" type="button" id="fcYes">알아요</button></div>`;
    $('#fcCard').addEventListener('click', flipCard);
    $('#fcCard').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); flipCard(); } });
    $('#fcNo').addEventListener('click', () => markCard(0));
    $('#fcYes').addEventListener('click', () => markCard(1));
  }
  function flipCard() { const el = $('#fcCard'); if (!el) return; FC.flipped = !FC.flipped; el.classList.toggle('flip', FC.flipped); }
  function markCard(v) {
    const c = FC.deck[FC.i]; if (!c) return;
    S.cards[c.id] = v; save();
    FC.i++; FC.flipped = false; drawCard();
  }

  /* ---------- numbers ---------- */
  function renderNumbers() {
    document.title = '숫자 암기표 · TSM&O';
    const groups = D.chapters.map((c) => ({ c, rows: D.numbers.filter((n) => n.ch === c.id) })).filter((g) => g.rows.length);
    main.innerHTML = `
      <h1 class="page">숫자 암기표</h1>
      <p class="lead">시험에 숫자로 나올 만한 값만 모았어요. 가리기를 켜면 값을 눌러야 보여요.</p>
      <div class="row" style="margin-bottom:6px">
        <button class="toggle" type="button" id="tgNum" aria-pressed="${S.prefs.hidenum}"><i></i>숫자 가리기</button>
        <button class="btn sm" type="button" id="numReset">모두 다시 가리기</button>
      </div>
      ${groups.map(({ c, rows }) => `
        <div class="num-group">
          <h3><span class="badge part ${pcls(c.id)}">${esc(c.no)}</span>${esc(c.title)}</h3>
          <div class="card num-list">${rows.map((r) => `
            <div class="num-row"><div class="l">${r.label}${r.note ? `<small>${r.note}</small>` : ''}</div><button class="v" type="button">${r.value}</button></div>`).join('')}
          </div>
        </div>`).join('')}`;
    $('#tgNum').addEventListener('click', (e) => { S.prefs.hidenum = !S.prefs.hidenum; save(); applyPrefs(); e.currentTarget.setAttribute('aria-pressed', S.prefs.hidenum); $$('.num-row .v').forEach((v) => v.classList.remove('show')); });
    $('#numReset').addEventListener('click', () => { $$('.num-row .v').forEach((v) => v.classList.remove('show')); if (!S.prefs.hidenum) { S.prefs.hidenum = true; save(); applyPrefs(); $('#tgNum').setAttribute('aria-pressed', 'true'); } });
    $$('.num-row .v').forEach((v) => v.addEventListener('click', () => { if (document.body.classList.contains('hidenum')) v.classList.toggle('show'); }));
  }

  /* ---------- search ---------- */
  let IDX = null;
  const strip = (h) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent.replace(/\s+/g, ' ').trim(); };
  function buildIndex() {
    IDX = [];
    D.chapters.forEach((c) => c.sections.forEach((s, i) => IDX.push({ kind: '노트', title: c.no + ' ' + c.title + ' › ' + s.title, text: strip(s.html), href: `#/notes/${c.id}/${i}` })));
    D.cards.forEach((c) => IDX.push({ kind: '카드', title: strip(c.front), text: strip(c.back), href: `#/notes/${c.ch}` }));
    D.numbers.forEach((n) => IDX.push({ kind: '숫자', title: strip(n.label), text: strip(n.value + ' ' + (n.note || '')), href: '#/numbers' }));
    IDX.forEach((it) => { it.norm = (it.title + ' ' + it.text).toLowerCase().replace(/\s+/g, ''); });
  }
  function openSearch() {
    if ($('.search-ov')) return;
    if (!IDX) buildIndex();
    const ov = document.createElement('div');
    ov.className = 'search-ov';
    ov.innerHTML = `<div class="search-box" role="dialog" aria-label="검색">
      <div class="in"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      <input type="search" placeholder="예: 램프미터링, 준공영제, 500m" autocomplete="off" enterkeyhint="search"><button class="btn sm" type="button" data-close>닫기</button></div>
      <div class="res"><div class="empty">용어, 숫자, 지명 무엇이든 검색하세요.</div></div></div>`;
    document.body.appendChild(ov);
    const inp = $('input', ov), res = $('.res', ov);
    let sel = 0;
    const close = () => { ov.remove(); document.removeEventListener('keydown', onKey, true); };
    const run = () => {
      const raw = inp.value.trim();
      const qn = raw.toLowerCase().replace(/\s+/g, '');
      if (!qn) { res.innerHTML = '<div class="empty">용어, 숫자, 지명 무엇이든 검색하세요.</div>'; return; }
      const hits = IDX.filter((it) => it.norm.includes(qn)).slice(0, 40);
      if (!hits.length) { res.innerHTML = `<div class="empty">“${esc(raw)}” 결과가 없어요.</div>`; return; }
      const terms = raw.split(/\s+/).filter(Boolean).map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      const re = new RegExp('(' + terms.join('|') + ')', 'gi');
      const snip = (t) => {
        const k = t.toLowerCase().indexOf(raw.split(/\s+/)[0].toLowerCase());
        const s = Math.max(0, k - 40);
        return (s > 0 ? '…' : '') + t.slice(s, s + 120) + (t.length > s + 120 ? '…' : '');
      };
      sel = 0;
      res.innerHTML = hits.map((h, i) => `<a href="${h.href}" class="${i === 0 ? 'sel' : ''}"><small>${h.kind}</small>${esc(h.title).replace(re, '<em>$1</em>')}<span>${esc(snip(h.text)).replace(re, '<em>$1</em>')}</span></a>`).join('');
      $$('a', res).forEach((a) => a.addEventListener('click', close));
    };
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const as = $$('a', res); if (!as.length) return;
        e.preventDefault(); sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + as.length) % as.length;
        as.forEach((a, i) => a.classList.toggle('sel', i === sel)); as[sel].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        const a = $$('a', res)[sel]; if (a) { e.preventDefault(); location.hash = a.getAttribute('href'); close(); }
      }
    };
    inp.addEventListener('input', run);
    ov.addEventListener('click', (e) => { if (e.target === ov || e.target.closest('[data-close]')) close(); });
    document.addEventListener('keydown', onKey, true);
    setTimeout(() => inp.focus(), 30);
  }

  /* ---------- sidebar chapters ---------- */
  function renderSideChapters() {
    $('#sideChapters').innerHTML = D.parts.map((p) => `<h4>${esc(p.label)} · ${esc(p.title)}</h4>${p.chapters.map((id) => `<a href="#/notes/${id}" data-ch="${id}"><span class="no">${esc(chap[id].no)}</span>${esc(chap[id].title)}${S.read[id] ? '<span class="dot" title="읽음"></span>' : ''}</a>`).join('')}`).join('');
    const h = location.hash.replace(/^#\/?/, '').split('/');
    $$('#sideChapters a').forEach((el) => el.setAttribute('aria-current', h[0] === 'notes' && el.dataset.ch === h[1] ? 'true' : 'false'));
  }

  /* ---------- global keys ---------- */
  document.addEventListener('keydown', (e) => {
    const inField = e.target.closest && e.target.closest('input,textarea,select');
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !inField)) { e.preventDefault(); openSearch(); return; }
    if (inField || $('.search-ov')) return;
    if (location.hash.startsWith('#/quiz/run') && QZ && !QZ.done) {
      const { q } = QZ.list[QZ.i] || {};
      if (!q) return;
      if (QZ.res[QZ.i] != null && e.key === 'Enter') { const b = $('#nextQ'); if (b && document.activeElement !== b) { e.preventDefault(); b.click(); } return; }
      if (q.type === 'mc' && /^[1-9]$/.test(e.key)) { const b = $$('.opt')[+e.key - 1]; if (b && !b.disabled) b.click(); }
      if (q.type === 'ox' && (e.key === 'o' || e.key === 'O')) $$('.opt')[0].click();
      if (q.type === 'ox' && (e.key === 'x' || e.key === 'X')) $$('.opt')[1].click();
      if (q.type === 'short' && e.key === 'Enter') { const b = $('#reveal'); if (b) { e.preventDefault(); b.click(); } }
    }
  });
  $$('[data-search]').forEach((b) => b.addEventListener('click', openSearch));

  // keep the sticky chapter toolbar right under the (variable-height) top bar
  const head = $('.topbar');
  const setHead = () => document.documentElement.style.setProperty('--head', head.offsetHeight + 'px');
  if ('ResizeObserver' in window) new ResizeObserver(setHead).observe(head);
  window.addEventListener('resize', setHead);
  setHead();

  applyPrefs();
  renderSideChapters();
  window.addEventListener('hashchange', route);
  route();

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
