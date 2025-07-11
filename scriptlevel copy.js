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


} else if (level === 3) {
  instructions.innerHTML = `
    <h2>Мисия</h2>
    <p>Напишете програма, която въвежда две цели числа и извежда тяхната сума.</p>
    <ol>
      <p><strong>1. cin >> a;</strong> – за въвеждане на първото число</p>
      <p><strong>2. cin >> b;</strong> – за въвеждане на второто число</p>
      <p><strong>3. cout << a + b;</strong> – за извеждане на резултата</p>
    </ol>
  `;
  playground.innerHTML = `
    <div id="codeWrapper">
      <pre class="codeLine">#include &lt;iostream&gt;</pre>
      <pre class="codeLine">using namespace std;</pre>
      <pre class="codeLine">int main() {</pre>
      <pre class="codeLine">    int a, b;</pre>
      <input type="text" id="codeInput1" class="codeInput" placeholder="cin >> a;" autocomplete="off" spellcheck="false" />
      <input type="text" id="codeInput2" class="codeInput" placeholder="cin >> b;" autocomplete="off" spellcheck="false" />
      <input type="text" id="codeInput3" class="codeInput" placeholder="cout << a + b;" autocomplete="off" spellcheck="false" />
      <pre class="codeLine">    return 0;</pre>
      <pre class="codeLine">}</pre>
    </div>

    <button id="runBtn">Стартирай кода</button>

    <div id="nameInputWrapper" style="display:none; margin-top: 1rem;">
      <input type="number" id="inputA" placeholder="Първо число" />
      <input type="number" id="inputB" placeholder="Второ число" />
      <button id="sayHelloBtn" style="margin-left:0.5rem;">Изведи сбор</button>
    </div>

    <div id="outputWindow"></div>

    <div id="levelButtons">
      <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
      <button id="prevLevelBtn" style="display: block;">Предишно ниво</button>
      <a href="main.html"><button id="menuBtn">Меню</button></a>
    </div>
  `;

  bindLevel3();


}else if (level === 4) {
  instructions.innerHTML = `
    <h2>Мисия</h2>
    <p>
      Добавете if условие в C++, което проверява дали стойността на променливата <strong>score</strong> е по-голяма или равна на 50.<br>
      Ако условието е вярно, трябва да се изведе <strong>"Passed"</strong>.
    </p>
    <p>Напишете кода между <strong>main()</strong> и <strong>return 0;</strong>.</p>
  `;

  playground.innerHTML = `
    <div id="codeWrapper">
      <pre class="codeLine">#include &lt;iostream&gt;</pre>
      <pre class="codeLine">using namespace std;</pre>
      <pre class="codeLine">int main() {</pre>
      <pre class="codeLine">    int score = 60;</pre>
      <input type="text" id="codeInput1" class="codeInput" placeholder="if (...) { ... }" autocomplete="off" spellcheck="false" />
      <input type="text" id="codeInput2" class="codeInput" placeholder="cout << ..." autocomplete="off" spellcheck="false" />
      <pre class="codeLine">    return 0;</pre>
      <pre class="codeLine">}</pre>
    </div>

    <button id="runBtn">Стартирай кода</button>
    <div id="outputWindow"></div>

    <div id="levelButtons">
      <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
      <button id="prevLevelBtn" style="display: block;">Предишно ниво</button>
      <a href="main.html"><button id="menuBtn">Меню</button></a>
    </div>
  `;

  bindLevel4(); // call level 4 logic


} else if (level === 5) {
  instructions.innerHTML = `
    <h2>Мисия</h2>
    <p>
      Попълнете условие с <code>if</code> и <code>else</code> на два реда:<br>
      <strong>Първи ред:</strong> ако <code>score >= 50</code>, изведете <code>"Passed"</code><br>
      <strong>Втори ред:</strong> <code>else</code> изведете <code>"Failed"</code><br>
    </p>
  `;

  playground.innerHTML = `
    <div id="codeWrapper">
      <pre class="codeLine">#include &lt;iostream&gt;</pre>
      <pre class="codeLine">using namespace std;</pre>
      <pre class="codeLine">int main() {</pre>
      <pre class="codeLine">    int score = 40;</pre>
      <input type="text" id="codeInput1" class="codeInput" placeholder="if (...) cout << ...;" autocomplete="off"/>
      <input type="text" id="codeInput2" class="codeInput" placeholder="else cout << ...;" autocomplete="off"/>
      <pre class="codeLine">    return 0;</pre>
      <pre class="codeLine">}</pre>
    </div>

    <button id="runBtn">Стартирай кода</button>
    <div id="outputWindow"></div>
    <div id="levelButtons">
      <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
      <button id="prevLevelBtn" style="display: block;">Предишно ниво</button>
      <a href="main.html"><button id="menuBtn">Меню</button></a>
    </div>
  `;

  bindLevel5();

} else if (level === 6) {
  instructions.innerHTML = `
    <h2>Мисия</h2>
    <p>
      Използвайте <code>switch(day)</code> конструкция и попълнете 4 случая.<br>
      Всеки <code>case</code> трябва да показва ден от седмицата.<br><br>
      Пример: <code>case 1: cout << "Monday"; break;</code>
    </p>
  `;

  playground.innerHTML = `
  <div id="codeWrapper">
    <pre class="codeLine">#include &lt;iostream&gt;</pre>
    <pre class="codeLine">using namespace std;</pre>
    <pre class="codeLine">int main() {</pre>
    <pre class="codeLine">    int day;</pre>
    <pre class="codeLine">    cin >> day;</pre>
    <pre class="codeLine">    switch(day) {</pre>
    <input type="text" id="codeInput1" class="codeInput" placeholder="case 1: ..." autocomplete="off"/>
    <input type="text" id="codeInput2" class="codeInput" placeholder="case 2: ..." autocomplete="off"/>
    <input type="text" id="codeInput3" class="codeInput" placeholder="case 3: ..." autocomplete="off"/>
    <input type="text" id="codeInput4" class="codeInput" placeholder="case 4: ..." autocomplete="off"/>
    <input type="text" id="codeInput5" class="codeInput" placeholder="case 5: ..." autocomplete="off"/>
    <input type="text" id="codeInput6" class="codeInput" placeholder="case 6: ..." autocomplete="off"/>
    <input type="text" id="codeInput7" class="codeInput" placeholder="case 7: ..." autocomplete="off"/>
    <input type="text" id="codeInput8" class="codeInput" placeholder="default: ..." autocomplete="off"/>
    <pre class="codeLine">    }</pre>
    <pre class="codeLine">    return 0;</pre>
    <pre class="codeLine">}</pre>
  </div>

  <button id="runBtn">Стартирай кода</button>

  <div id="nameInputWrapper" style="display:none; margin-top: 1rem;">
    <input type="number" id="userInput" placeholder="Въведете число (1-7)" />
    <button id="sayHelloBtn">Провери деня</button>
  </div>

  <div id="outputWindow"></div>

  <div id="levelButtons">
    <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
    <button id="prevLevelBtn" style="display: block;">Предишно ниво</button>
    <a href="main.html"><button id="menuBtn">Меню</button></a>
  </div>
`;

  bindLevel6();

} else if (level === 7) {
instructions.innerHTML = `
  <h2>Мисия</h2>
  <p>
    Използвай <strong>while</strong> цикъл, за да отпечаташ числата от <strong>1 до 5</strong>.<br><br>
    Добави 4 реда между <code>int i = 1;</code> и <code>return 0;</code>:
  </p>
  <ol>
    <p>1. <code>while (i &lt;= 5) {</code></p>
    <p>2. <code>cout << i;</code></p>
    <p>3. <code>i++;</code></p>
    <p>4. <code>}</code></p>
  </ol>
  <p>
    Увери се, че използваш правилно синтаксиса:<br>
    - Всички редове завършват с <strong>точка и запетая</strong>, освен отварящия <code>{</code> и затварящия <code>}</code>.<br>
    - Няма допълнителни интервали, символи или липсващи елементи.
  </p>
`;
playground.innerHTML = `
  <div id="codeWrapper">
    <pre class="codeLine">#include &lt;iostream&gt;</pre>
    <pre class="codeLine">using namespace std;</pre>
    <pre class="codeLine">int main() {</pre>
    <pre class="codeLine">    int i = 1;</pre>
    <input type="text" id="codeInput1" class="codeInput" placeholder="while ( ... ) {" />
    <input type="text" id="codeInput2" class="codeInput" placeholder="cout << i;" />
    <input type="text" id="codeInput3" class="codeInput" placeholder="i++;" />
    <input type="text" id="codeInput4" class="codeInput" placeholder="}" />
    <pre class="codeLine">    return 0;</pre>
    <pre class="codeLine">}</pre>
  </div>

  <button id="runBtn">Стартирай кода</button>

  <div id="outputWindow"></div>

  <div id="levelButtons">
    <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
    <button id="prevLevelBtn" style="display: block;">Предишно ниво</button>
    <a href="main.html"><button id="menuBtn">Меню</button></a>
  </div>
`;
bindLevel7();


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

function bindLevel3() {
  const input1 = document.getElementById('codeInput1');
  const input2 = document.getElementById('codeInput2');
  const input3 = document.getElementById('codeInput3');
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const nameWrapper = document.getElementById('nameInputWrapper');
  const inputA = document.getElementById('inputA');
  const inputB = document.getElementById('inputB');
  const sayHelloBtn = document.getElementById('sayHelloBtn');

  input1.addEventListener('keydown', e => { if (e.key === 'Enter') e.preventDefault(), input2.focus(); });
  input2.addEventListener('keydown', e => { if (e.key === 'Enter') e.preventDefault(), input3.focus(); });
  input3.addEventListener('keydown', e => { if (e.key === 'Enter') e.preventDefault(), runBtn.click(); });

  function check(cin1, cin2, coutLine) {
    const c1 = /^\s*cin\s*>>\s*a\s*;\s*$/.test(cin1);
    const c2 = /^\s*cin\s*>>\s*b\s*;\s*$/.test(cin2);
    const coutOk = /^\s*cout\s*<<\s*a\s*\+\s*b\s*;\s*$/.test(coutLine);
    if (c1 && c2 && coutOk) return { ok: true };
    if (!c1) return { ok: false, msg: 'cin редът трябва да е: cin >> a;' };
    if (!c2) return { ok: false, msg: 'cin редът трябва да е: cin >> b;' };
    if (!coutOk) return { ok: false, msg: 'cout редът трябва да е: cout << a + b;' };
    return { ok: false, msg: 'Проверете синтаксиса и форматирането.' };
  }

  runBtn.addEventListener('click', () => {
    const res = check(input1.value.trim(), input2.value.trim(), input3.value.trim());
    output.innerHTML = '';
    nameWrapper.style.display = 'none';

    if (res.ok) {
      output.innerHTML = '✅ Кодовете изглеждат правилни. Въведете две числа за събиране.';
      nameWrapper.style.display = 'block';
    } else {
      output.innerHTML = `<span class="error">⛔ ${res.msg}</span>`;
    }

    nextBtn.style.display = 'none';
  });

  sayHelloBtn.addEventListener('click', () => {
    const a = parseInt(inputA.value);
    const b = parseInt(inputB.value);

    if (isNaN(a) || isNaN(b)) {
      output.innerHTML = '<span class="error">⛔ Въведете валидни цели числа!</span>';
      return;
    }

    const sum = a + b;
    output.innerHTML = `<span class="success">${a} + ${b} = ${sum}</span><br>✅ Нивото е преминато!`;
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


function bindLevel4() {
  const input1 = document.getElementById('codeInput1'); // if line
  const input2 = document.getElementById('codeInput2'); // cout line
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');

  input1.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      input2.focus();
    }
  });

  input2.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runBtn.click();
    }
  });

  runBtn.addEventListener('click', () => {
    const line1 = input1.value.trim();
    const line2 = input2.value.trim();

    // Regex to match: if (score >= 50) { 
    const ifPattern = /^\s*if\s*\(\s*score\s*>=\s*50\s*\)\s*\{\s*$/;
    // Match: cout << "Passed";
    const coutPattern = /^\s*cout\s*<<\s*"Passed"\s*;\s*\}?\s*$/;

    output.innerHTML = '';
    nextBtn.style.display = 'none';

    if (ifPattern.test(line1) && coutPattern.test(line2)) {
      output.innerHTML = `<span class="success">Passed</span><br><br>✅ Нивото е преминато!`;
      nextBtn.style.display = 'inline-block';
    } else {
      output.innerHTML = `<span class="error">⛔ Уверете се, че условието е <code>if (score >= 50)</code> и че използвате <code>cout << "Passed";</code></span>`;
    }
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

   function bindLevel5() {
  const input1 = document.getElementById('codeInput1');
  const input2 = document.getElementById('codeInput2');
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');

  input1.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      input2.focus();
    }
  });

  input2.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runBtn.click();
    }
  });

  runBtn.addEventListener('click', () => {
    const line1 = input1.value.trim();
    const line2 = input2.value.trim();

    const validLine1 = /^if\s*\(\s*score\s*>=\s*50\s*\)\s*cout\s*<<\s*"Passed"\s*;\s*$/;
    const validLine2 = /^else\s*cout\s*<<\s*"Failed"\s*;\s*$/;

    output.innerHTML = '';
    nextBtn.style.display = 'none';

    if (validLine1.test(line1) && validLine2.test(line2)) {
      output.innerHTML = `<span class="success">Failed</span><br><br>✅ Нивото е преминато!<br><small>(score = 40)</small>`;
      nextBtn.style.display = 'inline-block';
    } else {
      let msg = '⛔ Проверете синтаксиса и дали сте поставили <code>else</code> на нов ред.';
      output.innerHTML = `<span class="error">${msg}</span>`;
    }
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

function bindLevel6() {
  const inputs = [
    document.getElementById('codeInput1'),
    document.getElementById('codeInput2'),
    document.getElementById('codeInput3'),
    document.getElementById('codeInput4'),
    document.getElementById('codeInput5'),
    document.getElementById('codeInput6'),
    document.getElementById('codeInput7'),
    document.getElementById('codeInput8') // default
  ];
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const nameWrapper = document.getElementById('nameInputWrapper');
  const userInput = document.getElementById('userInput');
  const sayHelloBtn = document.getElementById('sayHelloBtn');

  inputs.forEach((input, i) => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (i < inputs.length - 1) inputs[i + 1].focus();
        else runBtn.click();
      }
    });
  });

  runBtn.addEventListener('click', () => {
    const patterns = [
      /^case\s+1\s*:\s*cout\s*<<\s*"Monday"\s*;\s*break\s*;$/,
      /^case\s+2\s*:\s*cout\s*<<\s*"Tuesday"\s*;\s*break\s*;$/,
      /^case\s+3\s*:\s*cout\s*<<\s*"Wednesday"\s*;\s*break\s*;$/,
      /^case\s+4\s*:\s*cout\s*<<\s*"Thursday"\s*;\s*break\s*;$/,
      /^case\s+5\s*:\s*cout\s*<<\s*"Friday"\s*;\s*break\s*;$/,
      /^case\s+6\s*:\s*cout\s*<<\s*"Saturday"\s*;\s*break\s*;$/,
      /^case\s+7\s*:\s*cout\s*<<\s*"Sunday"\s*;\s*break\s*;$/,
      /^default\s*:\s*cout\s*<<\s*"Invalid day"\s*;\s*$/
    ];

    let allOk = true;
    for (let i = 0; i < patterns.length; i++) {
      if (!patterns[i].test(inputs[i].value.trim())) {
        allOk = false;
        break;
      }
    }

    output.innerHTML = '';
    nameWrapper.style.display = 'none';
    nextBtn.style.display = 'none';

    if (allOk) {
      output.innerHTML = `✅ Въведете число (1-7), за да видите кой ден е.`;
      nameWrapper.style.display = 'block';
    } else {
      output.innerHTML = `<span class="error">⛔ Някой от case/default блоковете е грешен или неправилно форматиран.</span>`;
    }
  });

  sayHelloBtn.addEventListener('click', () => {
    const day = parseInt(userInput.value.trim(), 10);
    let result = '';
    switch (day) {
      case 1: result = 'Monday'; break;
      case 2: result = 'Tuesday'; break;
      case 3: result = 'Wednesday'; break;
      case 4: result = 'Thursday'; break;
      case 5: result = 'Friday'; break;
      case 6: result = 'Saturday'; break;
      case 7: result = 'Sunday'; break;
      default: result = 'Invalid day';
    }
    output.innerHTML = `<span class="success">${result}</span><br><br>✅ Нивото е преминато!`;
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

function bindLevel7() {
  const inputs = [
    document.getElementById('codeInput1'),
    document.getElementById('codeInput2'),
    document.getElementById('codeInput3'),
    document.getElementById('codeInput4')
  ];
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');

  inputs.forEach((input, i) => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (i < inputs.length - 1) inputs[i + 1].focus();
        else runBtn.click();
      }
    });
  });

  runBtn.addEventListener('click', () => {
    const patterns = [
      /^while\s*\(\s*i\s*<=\s*5\s*\)\s*{$/,
      /^cout\s*<<\s*i\s*;\s*$/,
      /^i\+\+\s*;\s*$/,
      /^}\s*$/
    ];

    let allOk = true;
    for (let i = 0; i < patterns.length; i++) {
      if (!patterns[i].test(inputs[i].value.trim())) {
        allOk = false;
        break;
      }
    }

    output.innerHTML = '';
    nextBtn.style.display = 'none';

    if (allOk) {
      let result = '';
      let i = 1;
      while (i <= 5) {
        result += i + ' ';
        i++;
      }
      output.innerHTML = `<span class="success">${result.trim()}</span><br><br>✅ Нивото е преминато!`;
      nextBtn.style.display = 'inline-block';
    } else {
      output.innerHTML = `<span class="error">⛔ Някой ред е неправилен. Увери се, че пишеш правилно while цикъла.</span>`;
    }
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

