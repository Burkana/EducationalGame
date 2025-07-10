(() => {
  // Elements references
  const instructions = document.getElementById('instructions');
  const playground = document.getElementById('playground');
  const output = document.getElementById('outputWindow');
  const runBtn = document.getElementById('runBtn');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const nameWrapper = document.getElementById('nameInputWrapper');
  const userInput = document.getElementById('userInput');
  const sayHelloBtn = document.getElementById('sayHelloBtn');
  const headerTitle = document.getElementById('headerTitle');  // Header element to show current level
  const Title = document.getElementById('title'); // Title element shoows the page name


  // Helper to get level number from URL query param
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const val = urlParams.get(param);
    return val ? parseInt(val, 10) : null;
  }

  let currentLevel = getQueryParam('level') || 1;

  function loadLevel(level) {
    output.innerHTML = '';
    nextBtn.style.display = 'none';
    nameWrapper.style.display = 'none';

    // Update header to show current level
    headerTitle.textContent = `C++ Ниво ${level}`;
    Title.textContent = `CodeBusters C++ – Ниво ${level}`;


    if (level === 1) {
      instructions.innerHTML = `
        <h2>Мисия</h2>
        <p>
          Довършете едноредовата инструкция <strong>cout<<</strong> между <strong>main()</strong> и <strong>return 0;</strong>.<br>
          Тя трябва да изведе точно <strong>Hello, C++ World!</strong> и да завършва с точка и запетая.<br>
          За да изведете текста в командата той трябва да е в кавички <strong>" "</strong> <br> 
          и след тях да завършите с точка и запетая <strong>;</strong>  
        </p>
      `;
      playground.innerHTML = `
        <div id="codeWrapper">
          <pre class="codeLine">#include &lt;iostream&gt;</pre>
          <pre class="codeLine">using namespace std;</pre>
          <pre class="codeLine">int main() {</pre>
          <input type="text" id="codeInput" class="codeInput" placeholder="cout<< <– Пишете тук –>" autocomplete="off" spellcheck="false" />
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

      // Bind events for level 1 after innerHTML replacement
      bindLevel1();

    } else if (level === 2) {
      instructions.innerHTML = `
        <h2>Мисия</h2>
        <p>Добавете два реда C++ код между <strong>main()</strong> и <strong>return 0;</strong></p>
        <ol>
          <p><strong>1. cin >> name;</strong> за въвеждане на вход от потребителя.</p>
          <p><strong>2. cout << "Hello, " << name << "!";</strong> за поздрав.</p>
          Tрябва да изведе точно <strong>Hello, "въведеното от вас име"</strong>
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

      // Bind events for level 2 after innerHTML replacement
      bindLevel2();

    } else {
      // For other levels not implemented yet
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
        loadLevel(currentLevel);
      });
  }
  // Bind events for level 1
  function bindLevel1() {
    const input = document.getElementById('codeInput');
    const runBtn = document.getElementById('runBtn');
    const output = document.getElementById('outputWindow');
    const nextBtn = document.getElementById('nextLevelBtn');

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
      loadLevel(currentLevel);
    });
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
      loadLevel(currentLevel);
    });
    prevBtn.addEventListener('click', () => {
      currentLevel--;
      loadLevel(currentLevel);
    });
  }

  // Initial load
  loadLevel(currentLevel);
})();

