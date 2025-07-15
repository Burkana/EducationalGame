(() => {
  const instructions = document.getElementById('instructions');
  const playground = document.getElementById('playground');
  const output = document.getElementById('outputWindow');
  const runBtn = document.getElementById('runBtn');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const nameWrapper = document.getElementById('nameInputWrapper');
  const userInput = document.getElementById('userInput');
  const sayHelloBtn = document.getElementById('sayHelloBtn');
  const headerTitle = document.getElementById('headerTitle');
  const Title = document.getElementById('title'); 
  

  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const val = urlParams.get(param);
    return val ? parseInt(val, 10) : null;
  }
  function updateUrlLevel(level) {
  const url = new URL(window.location);
  url.searchParams.set('level', level);
  window.history.replaceState(null, '', url.toString());
  }

 function updateCoinDisplay(val) {
  document.querySelectorAll('.coinBalance').forEach(el => el.innerText = val);
 }

  let currentLevel = getQueryParam('level') || 1;
 

  function loadLevel(level) {
    output.innerHTML = '';
    nextBtn.style.display = 'none';
    nameWrapper.style.display = 'none';

    

    headerTitle.textContent = `C++ Ниво ${level}`;
    Title.textContent = `CodeBusters C++ – Ниво ${level}`;

// Level 1
if (level === 1) {
      instructions.innerHTML = `
        <h2>Мисия</h2>
        <p>
          Довършете едноредовата инструкция <strong>cout<<</strong> между <strong>main()</strong> и <strong>return 0;</strong>.<br>
          Тя трябва да изведе точно <strong>Hello, C++ World!</strong> и да завършва с точка и запетая.<br>
          За да изведете текста в командата той трябва да е в кавички <strong>" "</strong> <br> 
          и след тях да завършите с точка и запетая <strong>;</strong>  
        </p>
        <button id="hintBtn">Подсказка (50 монети)</button>
      `;
      playground.innerHTML = `
        <div id="codeWrapper">
          <pre class="codeLine">#include &lt;iostream&gt;</pre>
          <pre class="codeLine">using namespace std;</pre>
          <pre class="codeLine">int main() {</pre>
          <input type="text" id="codeInput" class="codeInput" placeholder="cout<<Hello, C++ World!;" autocomplete="off" spellcheck="false" />
          <pre class="codeLine">    return 0;</pre>
          <pre class="codeLine">}</pre>
        </div>
        <button id="runBtn">Стартирай кода</button>
        
        <div id="outputWindow"></div>
        <div id="levelButtons">
          <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
          <button id="prevLevelBtn" style="display: none;">Предишно ниво</button>
          <a href="main.html"><button id="menuBtn">Меню</button></a>
        </div>
      `;

      bindLevel1();

} 
// Level 2    
else if (level === 2) {
      instructions.innerHTML = `
        <h2>Мисия</h2>
        <p>Добавете два реда C++ код между <strong>main()</strong> и <strong>return 0;</strong></p>
        <ol>
          <p><strong>1. cin >> name;</strong> за въвеждане на вход от потребителя.</p>
          <p><strong>2. cout << "Hello, " << name << "!";</strong> за поздрав.</p>
          Tрябва да изведе точно <strong>Hello, "въведеното от вас име"</strong>
          <br>
          <button id="hintBtn">Подсказка (50 монети)</button>
        </ol>
      `;
      playground.innerHTML = `
        <div id="codeWrapper">
          <pre class="codeLine">#include &lt;iostream&gt;</pre>
          <pre class="codeLine">using namespace std;</pre>
          <pre class="codeLine">int main() {</pre>
          <pre class="codeLine">    string name;</pre>
          <input type="text" id="codeInput1" class="codeInput" placeholder="cin>>  <– Пишете тук –>" autocomplete="off" spellcheck="false" />
          <input type="text" id="codeInput2" class="codeInput" placeholder="cout<< <– Пишете тук –>" autocomplete="off" spellcheck="false" />
          <pre class="codeLine">    return 0;</pre>
          <pre class="codeLine">}</pre>
        </div>
        <button id="runBtn">Стартирай кода</button>

        <div id="nameInputWrapper" style="display:none; margin-top: 1rem;">
          <input type="text" id="userInput" placeholder="Въведете име..." autocomplete="off" spellcheck="false" style="padding:0.5rem;border-radius:6px;width:100%;" />
          <button id="sayHelloBtn" style="margin-top:0.5rem;">Изведи поздрав</button>
        </div>

        <div id="outputWindow"></div>

      <div id="levelButtons">
        <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
        <button id="prevLevelBtn" style="display: block;">Предишно ниво</button>
        <a href="main.html"><button id="menuBtn">Меню</button></a>
      </div>
      `;


      bindLevel2();


} 
// Level that is not implemented
else {

      instructions.innerHTML = `<h2>Ниво ${level}</h2><p>Това ниво все още не е налично.</p>`;
      playground.innerHTML = `<div id="levelButtons">
      <button id="prevLevelBtn" style="display: block;">Предишно ниво</button>
      <a href="main.html"><button id="menuBtn">Върнете се обратно в Менюто</button></a>
      </div>`;
    
      headerTitle.textContent = `Ниво ${level}`;
   
      

      // Bind it so it can be loaded
      bindLevel();
  
      
    }
  }
// Bind the levels that are not implemented
function bindLevel() {
     const prevBtn = document.getElementById('prevLevelBtn');

      prevBtn.addEventListener('click', () => {
        currentLevel--;
        updateUrlLevel(currentLevel);
        loadLevel(currentLevel);
      });
}


// Bind events for level 1
function bindLevel1() {
    const input = document.getElementById('codeInput');
    const runBtn = document.getElementById('runBtn');
    const output = document.getElementById('outputWindow');
    const nextBtn = document.getElementById('nextLevelBtn');
    const hintCost  = 50;
    const hintBtn   = document.getElementById('hintBtn');  
    const codeInput = document.getElementById('codeInput'); 
    const originalPH = codeInput.getAttribute('placeholder') || '';

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); runBtn.click(); }
    });

    runBtn.addEventListener('click', () => {
      const pattern = /^\s*cout\s*<<\s*"Hello,\s*C\+\+\s*World!"\s*;\s*$/;
      const line = input.value.trim();
      output.innerHTML = '';

      if (pattern.test(line)) {
        output.innerHTML = '<span class="success">Hello, C++ World!</span>\n\n✅ Нивото е преминато!';
        nextBtn.style.display = 'inline-block';
      } else {
        let msg = 'Проверете интервалите/форматирането и дали няма допълнителен код.';
        if (!/^\s*cout<</.test(line)) msg = 'Редът трябва да започва с cout<<';
        else if (!/;\s*$/.test(line)) msg = 'Не забравяйте точката и запетая в края';
        else if (!/Hello,\s*C\+\+\s*World!/.test(line)) msg = 'Текстът на изхода трябва точно да съвпада с "Hello, C++ World!"';
        output.innerHTML = '<span class="error">⛔ ' + msg + '</span>';
        nextBtn.style.display = 'none';
      }
    });

    nextBtn.addEventListener('click', () => {
      currentLevel++;
      updateUrlLevel(currentLevel);
      loadLevel(currentLevel);
      window.location.href = `level.html?level=${currentLevel}`;
    });

  //For The Hint Powerup
  (function initHintPower () {

  codeInput.setAttribute('placeholder', '');               // hide at start

  // If the player already bought the hint earlier
  if (localStorage.getItem('hasHint1')) revealHint();
  
  function getCoins() {
  const isGuest = localStorage.getItem('isGuest') === 'true' || new URLSearchParams(window.location.search).get('guest') === 'true';
  if (isGuest) {
    return parseInt(localStorage.getItem('guestCoins') || '0', 10);
  } else {
    const coins = document.querySelector('.coinBalance')?.innerText;
    return parseInt(coins || '0', 10);
  }
}

function setCoins(newAmount) {
  const isGuest = localStorage.getItem('isGuest') === 'true' || new URLSearchParams(window.location.search).get('guest') === 'true';
  if (isGuest) {
    localStorage.setItem('guestCoins', newAmount);
    updateCoinDisplay(newAmount);
  } else {
    // For real users, you'd need an API call to persist this on your backend.
    // Placeholder only. Adjust if needed.
    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                              // your helper
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint1', 1);                   
    revealHint();
  });

  function revealHint () {
    codeInput.setAttribute('placeholder', originalPH);     
    hintBtn.disabled = true;
    hintBtn.innerText = 'Подсказка активирана';
  }
})();
}


// Bind events for level 2
function bindLevel2() {
    const input1 = document.getElementById('codeInput1');
    const input2 = document.getElementById('codeInput2');
    const runBtn = document.getElementById('runBtn');
    const output = document.getElementById('outputWindow');
    const nextBtn = document.getElementById('nextLevelBtn');
    const prevBtn = document.getElementById('prevLevelBtn');
    const nameWrapper = document.getElementById('nameInputWrapper');
    const userInput = document.getElementById('userInput');
    const sayHelloBtn = document.getElementById('sayHelloBtn');
    const hintCost  = 50;
    const hintBtn   = document.getElementById('hintBtn');  
    const originalPH1 = input1.getAttribute('placeholder') || '';
    const originalPH2 = input2.getAttribute('placeholder') || '';

    input1.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); input2.focus(); }
    });
    input2.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); runBtn.click(); }
    });

    function check(cinLine, coutLine) {
      const cinOk = /^\s*cin\s*>>\s*name\s*;\s*$/.test(cinLine);
      const coutOk = /^\s*cout\s*<<\s*"Hello,\s*"\s*<<\s*name\s*<<\s*"!"\s*;\s*$/.test(coutLine);
      if (cinOk && coutOk) return { ok: true };
      if (!cinOk) return { ok: false, msg: 'cin редът трябва да бъде: cin >> name;' };
      if (!coutOk) return { ok: false, msg: 'cout редът трябва да изведе Hello, name! точно.' };
      return { ok: false, msg: 'Проверете синтаксиса и форматирането.' };
    }

    runBtn.addEventListener('click', () => {
      const res = check(input1.value.trim(), input2.value.trim());
      output.innerHTML = '';
      nameWrapper.style.display = 'none';

      if (res.ok) {
        output.innerHTML = '✅ Кодовете изглеждат правилни.<br> Въведете име и натиснете "Изведи поздрав".';
        nameWrapper.style.display = 'block';
      } else {
        output.innerHTML = `<span class="error">⛔ ${res.msg}</span>`;
      }
      nextBtn.style.display = 'none';
    });

    sayHelloBtn.addEventListener('click', () => {
      const name = userInput.value.trim();
      if (name === '') {
        output.innerHTML = '<span class="error">⛔ Моля въведете име!</span>';
        return;
      }
      output.innerHTML = `<span class="success">Hello, ${name}!</span>\n\n✅ Нивото е преминато!`;
      nextBtn.style.display = 'inline-block';
    });
    nextBtn.addEventListener('click', () => {
      currentLevel++;
      window.location.href = `level.html?level=${currentLevel}`;
      updateUrlLevel(currentLevel);
      loadLevel(currentLevel);
    });
    prevBtn.addEventListener('click', () => {
      currentLevel--;
      window.location.href = `level.html?level=${currentLevel}`;
      updateUrlLevel(currentLevel);
      loadLevel(currentLevel);
    });
  //For The Hint Powerup
  (function initHintPower () {
  input1.setAttribute('placeholder', '');
  input2.setAttribute('placeholder', '');


  // If the player already bought the hint earlier
  if (localStorage.getItem('hasHint2')) revealHint();
  
  function getCoins() {
  const isGuest = localStorage.getItem('isGuest') === 'true' || new URLSearchParams(window.location.search).get('guest') === 'true';
  if (isGuest) {
    return parseInt(localStorage.getItem('guestCoins') || '0', 10);
  } else {
    const coins = document.querySelector('.coinBalance')?.innerText;
    return parseInt(coins || '0', 10);
  }
}

function setCoins(newAmount) {
  const isGuest = localStorage.getItem('isGuest') === 'true' || new URLSearchParams(window.location.search).get('guest') === 'true';
  if (isGuest) {
    localStorage.setItem('guestCoins', newAmount);
    updateCoinDisplay(newAmount);
  } else {
    // For real users, you'd need an API call to persist this on your backend.
    // Placeholder only. Adjust if needed.
    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                              // your helper
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint2', 1);                   
    revealHint();
  });

  function revealHint () {
    input1.setAttribute('placeholder', originalPH1);
    input2.setAttribute('placeholder', originalPH2);
    hintBtn.disabled = true;
    hintBtn.innerText = 'Подсказка активирана';
  }
})();
  }

  // Initial load
  loadLevel(currentLevel);
})();

document.addEventListener('DOMContentLoaded', () => {
  const nextBtn = document.getElementById('nextLevelBtn');
  const urlParams = new URLSearchParams(window.location.search);
  const level = urlParams.get('level') || "1"; 
  const isGuest = urlParams.get('guest') === 'true' || localStorage.getItem('isGuest') === 'true';

  function updateCoinDisplay(val) {
    document.querySelectorAll('.coinBalance').forEach(el => el.innerText = val);
  }

  if (isGuest) {
    let coins = localStorage.getItem('guestCoins');
    if (coins === null) {
      coins = 100;
      localStorage.setItem('guestCoins', coins);
    }
    updateCoinDisplay(coins);
  } else {
    fetch('http://127.0.0.1:3000/api/me', { credentials: 'include' })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(user => {
        updateCoinDisplay(user.coins ?? 100);
      });
  }

  nextBtn.addEventListener('click', () => {
    if (isGuest) {
      let completed = JSON.parse(localStorage.getItem('guestCompletedLevels') || '[]');
      completed = completed.map(String);
      if (!completed.includes(level)) {
        let coins = parseInt(localStorage.getItem('guestCoins') || '100', 10) + 50;
        localStorage.setItem('guestCoins', coins);
        completed.push(level);
        localStorage.setItem('guestCompletedLevels', JSON.stringify(completed));
        updateCoinDisplay(coins);
        //alert('+50 монети! Нов баланс: ' + coins);
      } else {
        //alert('Вече сте получили монети за това ниво!');
      }
    } else {
      fetch('http://127.0.0.1:3000/api/complete-level', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level: level })
      })
      .then(res => res.json())
      .then(data => {
        if (data.coinsAdded) {
          updateCoinDisplay(data.coins);
          //alert('+50 монети! Нов баланс: ' + data.coins);
        } else {
          //alert('Вече сте получили монети за това ниво!');
        }
      });
    }
  });
});