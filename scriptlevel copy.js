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
  const headerTitle = document.getElementById('headerTitle');
  const Title = document.getElementById('title'); 

  let currentLevel = getQueryParam('level') || 1;
 
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
          <input type="text" id="codeInput" class="codeInput" placeholder="cout<<&quot;Hello, C++ World!&quot;;" autocomplete="off" spellcheck="false" />
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
          <input type="text" id="codeInput1" class="codeInput" placeholder="cin >> name;" autocomplete="off" spellcheck="false" />
          <input type="text" id="codeInput2" class="codeInput" placeholder="cout << &quot;Hello, &quot; << name << &quot;!&quot;;" autocomplete="off" spellcheck="false" />
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
// Level 3
else if (level === 3) {
  instructions.innerHTML = `
    <h2>Мисия</h2>
    <p>Напишете програма, която въвежда две цели числа и извежда тяхната сума.</p>
    <ol>
      <p><strong>1. cin >> a;</strong> – за въвеждане на първото число</p>
      <p><strong>2. cin >> b;</strong> – за въвеждане на второто число</p>
      <p><strong>3. cout << a + b;</strong> – за извеждане на резултата</p>
      <button id="hintBtn">Подсказка (50 монети)</button>
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


}
// Level 4
else if (level === 4) {
  instructions.innerHTML = `
    <h2>Мисия</h2>
    <p>
      Добавете if условие в C++, което проверява дали стойността на променливата <strong>score</strong> е по-голяма или равна на 50.<br>
      Ако условието е вярно, трябва да се изведе <strong>"Passed"</strong>.
    </p>
    <p>Напишете кода между <strong>main()</strong> и <strong>return 0;</strong>.</p>
    <button id="hintBtn">Подсказка (50 монети)</button>
  `;

  playground.innerHTML = `
    <div id="codeWrapper">
      <pre class="codeLine">#include &lt;iostream&gt;</pre>
      <pre class="codeLine">using namespace std;</pre>
      <pre class="codeLine">int main() {</pre>
      <pre class="codeLine">    int score = 60;</pre>
      <input type="text" id="codeInput1" class="codeInput" placeholder="if (score>=50)" autocomplete="off" spellcheck="false" />
      <input type="text" id="codeInput2" class="codeInput" placeholder='cout << "Passed"; ' autocomplete="off" spellcheck="false" />
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


} 
// Level 5
else if (level === 5) {
  instructions.innerHTML = `
    <h2>Мисия</h2>
    <p>
      Попълнете условие с <code>if</code> и <code>else</code> на два реда:<br>
      <strong>Първи ред:</strong> ако <code>score >= 50</code>, изведете <code>"Passed"</code><br>
      <strong>Втори ред:</strong> <code>else</code> изведете <code>"Failed"</code><br>
      <button id="hintBtn">Подсказка (50 монети)</button>
    </p>
  `;

  playground.innerHTML = `
    <div id="codeWrapper">
      <pre class="codeLine">#include &lt;iostream&gt;</pre>
      <pre class="codeLine">using namespace std;</pre>
      <pre class="codeLine">int main() {</pre>
      <pre class="codeLine">    int score = 40;</pre>
      <input type="text" id="codeInput1" class="codeInput" placeholder='if (score >= 50) cout<< "Passed";' autocomplete="off"/>
      <input type="text" id="codeInput2" class="codeInput" placeholder='else cout<< "Failed";' autocomplete="off"/>
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

} 
// Level 6
else if (level === 6) {
  instructions.innerHTML = `
    <h2>Мисия</h2>
    <p>
      Използвайте <code>switch(day)</code> конструкция и попълнете 4 случая.<br>
      Всеки <code>case</code> трябва да показва ден от седмицата.<br><br>
      Пример: <code>case 1: cout << "Monday"; break;</code>
    </p>
    <button id="hintBtn">Подсказка (50 монети)</button>
  `;

  playground.innerHTML = `
  <div id="codeWrapper">
    <pre class="codeLine">#include &lt;iostream&gt;</pre>
    <pre class="codeLine">using namespace std;</pre>
    <pre class="codeLine">int main() {</pre>
    <pre class="codeLine">    int day;</pre>
    <pre class="codeLine">    cin >> day;</pre>
    <pre class="codeLine">    switch(day) {</pre>
    <input type="text" id="codeInput1" class="codeInput" placeholder='case 1: cout << "Monday"; break;' autocomplete="off"/>
    <input type="text" id="codeInput2" class="codeInput" placeholder='case 2: cout << "Tuesday"; break;' autocomplete="off"/>
    <input type="text" id="codeInput3" class="codeInput" placeholder='case 3: cout << "Wednesday"; break;' autocomplete="off"/>
    <input type="text" id="codeInput4" class="codeInput" placeholder='case 4: cout << "Thursday"; break;' autocomplete="off"/>
    <input type="text" id="codeInput5" class="codeInput" placeholder='case 5: cout << "Friday"; break;' autocomplete="off"/>
    <input type="text" id="codeInput6" class="codeInput" placeholder='case 6: cout << "Saturday"; break;' autocomplete="off"/>
    <input type="text" id="codeInput7" class="codeInput" placeholder='case 7: cout << "Sunday"; break;' autocomplete="off"/>
    <input type="text" id="codeInput8" class="codeInput" placeholder='default: cout << "Invalid day";' autocomplete="off"/>
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

} 
// Level 7
else if (level === 7) {
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
  <button id="hintBtn">Подсказка (50 монети)</button>
`;
playground.innerHTML = `
  <div id="codeWrapper">
    <pre class="codeLine">#include &lt;iostream&gt;</pre>
    <pre class="codeLine">using namespace std;</pre>
    <pre class="codeLine">int main() {</pre>
    <pre class="codeLine">    int i = 1;</pre>
    <input type="text" id="codeInput1" class="codeInput" placeholder="while (i <= 5) {" autocomplete="off"/>
    <input type="text" id="codeInput2" class="codeInput" placeholder="cout << i;" autocomplete="off"/>
    <input type="text" id="codeInput3" class="codeInput" placeholder="i++;" autocomplete="off"/>
    <input type="text" id="codeInput4" class="codeInput" placeholder="}" autocomplete="off"/>
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


} 
// Level 8 
else if (level === 8) {
instructions.innerHTML = `
  <h2>Мисия</h2>
  <p>
    Създай програма, която използва <strong>do...while</strong> цикъл и извежда "Counting: i" докато i е по-малко от <strong>въведено число</strong> от потребителя.
  </p>
  <ol>
    <p>1. Въведи вход от потребителя: <code>cin >> n;</code></p>
    <p>2. Използвай <code>int i = 0;</code></p>
    <p>3. Създай <code>do { ... } while(i < n);</code> цикъл</p>
    <p>4. В тялото на цикъла добави <code>cout << "Counting: " << i << endl;</code> и <code>i++;</code></p>
  </ol>
  <p>
    Програмата трябва да изброи от 0 до n-1.
  </p>
  <button id="hintBtn">Подсказка (50 монети)</button>
`;
playground.innerHTML = `
  <div id="codeWrapper">
    <pre class="codeLine">#include &lt;iostream&gt;</pre>
    <pre class="codeLine">using namespace std;</pre>
    <pre class="codeLine">int main() {</pre>
    <pre class="codeLine">    int n, i = 0;</pre>
    <input type="text" id="codeInput1" class="codeInput" placeholder="cin >> n;" autocomplete="off"/>
    
    <input type="text" id="codeInput2" class="codeInput" placeholder="do {" autocomplete="off"/>
    <input type="text" id="codeInput3" class="codeInput" placeholder='cout << "Counting: " << i << endl;' autocomplete="off"/>
    <input type="text" id="codeInput4" class="codeInput" placeholder="i++;" autocomplete="off"/>
    <input type="text" id="codeInput5" class="codeInput" placeholder="} while(i < n);" autocomplete="off"/>

    <pre class="codeLine">    return 0;</pre>
    <pre class="codeLine">}</pre>
  </div>

  <button id="runBtn">Стартирай кода</button>

  <div id="userInputWrapper" style="display:none; margin-top:1rem;">
    <input type="number" id="userInput" placeholder="Въведи число..." style="padding:0.5rem;border-radius:6px;width:100%;" />
    <button id="sayHelloBtn" style="margin-top:0.5rem;">Изпълни</button>
  </div>

  <div id="outputWindow"></div>

  <div id="levelButtons">
    <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
    <button id="prevLevelBtn">Предишно ниво</button>
    <a href="main.html"><button id="menuBtn">Меню</button></a>
  </div>
`;

bindLevel8();

} 
// Level 9
else if (level === 9) {
instructions.innerHTML = `
  <h2>Мисия</h2>
  <p>
    Сега ще добавим вход от потребителя! 🎯<br><br>
    <strong>1.</strong> Използвай <code>cin >> n;</code> за да въведеш число от потребителя.<br>
    <strong>2.</strong> Използвай <code>for</code> цикъл, за да отпечаташ числата от 1 до <code>n</code>.<br><br>

    <strong>Пример:</strong> ако въведеш 4, изходът трябва да е <code>1 2 3 4</code>
  </p>
  <ol>
    <p>1. <code>cin >> n;</code></p>
    <p>2. <code>for (i = 1; i &lt;= n; i++) {</code></p>
    <p>3. <code>cout << i << " ";</code></p>
    <p>4. <code>}</code></p>
  </ol>
  <p>
    ✅ Увери се, че всички редове завършват с <code>;</code> или <code>{ }</code>, както е нужно.
  </p>
  <button id="hintBtn">Подсказка (50 монети)</button>
`;

playground.innerHTML = `
  <div id="codeWrapper">
    <pre class="codeLine">#include &lt;iostream&gt;</pre>
    <pre class="codeLine">using namespace std;</pre>
    <pre class="codeLine">int main() {</pre>
    <pre class="codeLine">    int i, n;</pre>
    <input type="text" id="codeInput1" class="codeInput" placeholder="cin >> n;" autocomplete="off"/>
    <input type="text" id="codeInput2" class="codeInput" placeholder="for (i = 1; i <= n; i++) {" autocomplete="off"/>
    <input type="text" id="codeInput3" class="codeInput" placeholder='cout << i << " ";' autocomplete="off"/>
    <input type="text" id="codeInput4" class="codeInput" placeholder="}" autocomplete="off"/>
    <pre class="codeLine">    return 0;</pre>
    <pre class="codeLine">}</pre>
  </div>

  <button id="runBtn">Стартирай кода</button>

  <div id="userInputWrapper" style="display: none; margin-top:1rem;">
  <input type="number" id="userInput" placeholder="Въведи число n..." style="padding:0.5rem;border-radius:6px;width:100%;" />
  <button id="sayHelloBtn" style="margin-top:0.5rem;">Изпълни</button>
</div>


  <div id="outputWindow"></div>

  <div id="levelButtons">
    <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
    <button id="prevLevelBtn" style="display: block;">Предишно ниво</button>
    <a href="main.html"><button id="menuBtn">Меню</button></a>
  </div>
`;

bindLevel9();


}
// Level 10
else if (level === 10) {

instructions.innerHTML = `
  <h2>Мисия: Създай калкулатор</h2>
  <p>
    Сега ще създадеш прост C++ калкулатор, който използва <code>switch</code>, за да изчисли резултата между две числа.<br><br>
    ✅ Потребителят трябва да въведе <code>число1 оператор число2</code>.<br>
    ➕ Поддържани оператори: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>.<br>
    ⚠️ Ако се дели на 0, изведи "Деление на 0!"<br>
    ❗ Ако операторът не е валиден, изведи "Невалиден оператор!"<br><br>

    <strong>Примерен вход:</strong> <code>3 + 5</code><br>
    <strong>Изход:</strong> <code>8</code>
  </p>
  <p>Въведи всички редове на програмата ръчно, включително <code>#include</code> и <code>main()</code>.</p>
  <p><strong>Увери се, че всеки ред завършва с <code>;</code> или <code>}</code>, където е нужно.</strong></p>
  <button id="hintBtn">Подсказка (50 монети)</button>
`;
playground.innerHTML = `
  <div id="codeWrapper">
    <input type="text" class="codeInput" id="codeInput1" placeholder="#include <iostream>" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput2" placeholder="using namespace std;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput3" placeholder="int main() {" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput4" placeholder="double a, b;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput5" placeholder="char op;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput6" placeholder="cin >> a >> op >> b;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput7" placeholder="switch(op) {" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput8" placeholder="case '+': cout &lt;&lt; (a + b); break;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput9" placeholder="case '-': cout &lt;&lt; (a - b); break;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput10" placeholder="case '*': cout << (a * b); break;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput11" placeholder="case '/':" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput12" placeholder='if (b != 0) cout << (a / b);' autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput13" placeholder='else cout << "Деление на 0!";' autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput14" placeholder="break;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput15" placeholder='default: cout << "Невалиден оператор!";' autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput16" placeholder="}" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput17" placeholder="return 0;" autocomplete="off"/>
    <input type="text" class="codeInput" id="codeInput18" placeholder="}" autocomplete="off"/>
  </div>

  <button id="runBtn">Стартирай кода</button>

  <div id="userInputWrapper" style="display: none; margin-top:1rem;">
    <input type="text" id="userInput" placeholder="Въведи: 3 + 5" />
    <button id="calculateBtn" style="margin-top:0.5rem;">Изпълни</button>
  </div>

  <div id="outputWindow"></div>

  <div id="levelButtons">
    <button id="nextLevelBtn" style="display: none;">Следващо ниво</button>
    <button id="prevLevelBtn">Предишно ниво</button>
    <a href="main.html"><button id="menuBtn">Меню</button></a>
  </div>
`;
bindLevel10();

} 
// If the level is not implemented yet
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
    // For real users.

    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                            
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
    // For real users.

    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                        
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

  // Bind events for level 3
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
  const hintCost  = 50;
  const hintBtn   = document.getElementById('hintBtn');  
  const originalPH1 = input1.getAttribute('placeholder') || '';
  const originalPH2 = input2.getAttribute('placeholder') || '';
  const originalPH3 = input3.getAttribute('placeholder') || '';


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
  input3.setAttribute('placeholder', '');


  // If the player already bought the hint earlier
  if (localStorage.getItem('hasHint3')) revealHint();
  
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
    // For real users

    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                          
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint3', 1);                   
    revealHint();
  });

  function revealHint () {
    input1.setAttribute('placeholder', originalPH1);
    input2.setAttribute('placeholder', originalPH2);
    input3.setAttribute('placeholder', originalPH3);
    hintBtn.disabled = true;
    hintBtn.innerText = 'Подсказка активирана';
  }
})();
  }
  

// Bind events for level 4
function bindLevel4() {
  const input1 = document.getElementById('codeInput1');
  const input2 = document.getElementById('codeInput2'); 
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const hintCost  = 50;
  const hintBtn   = document.getElementById('hintBtn');  
  const originalPH1 = input1.getAttribute('placeholder') || '';
  const originalPH2 = input2.getAttribute('placeholder') || '';

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

   
    const ifPattern = /^\s*if\s*\(\s*score\s*>=\s*50\s*\)\s*$/;

    const coutPattern = /^\s*cout\s*<<\s*"Passed"\s*;\s*$/;

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
  if (localStorage.getItem('hasHint4')) revealHint();
  
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
    // For real users
 
    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                             
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint4', 1);                   
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


// Bind events for level 5
function bindLevel5() {
  const input1 = document.getElementById('codeInput1');
  const input2 = document.getElementById('codeInput2');
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const hintCost  = 50;
  const hintBtn   = document.getElementById('hintBtn');  
  const originalPH1 = input1.getAttribute('placeholder') || '';
  const originalPH2 = input2.getAttribute('placeholder') || '';

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
  if (localStorage.getItem('hasHint5')) revealHint();
  
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
    // For real users

    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                              
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint5', 1);                   
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

//Bind events for level 6
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
  const hintCost  = 50;
  const hintBtn   = document.getElementById('hintBtn');  
  const originalPH = inputs.map(input => input?.getAttribute('placeholder') || '');


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
  inputs.forEach(input => input.setAttribute('placeholder', ''));


  // If the player already bought the hint earlier
  if (localStorage.getItem('hasHint6')) revealHint();
  
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
    // For real users

    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                        
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint6', 1);                   
    revealHint();
  });

  function revealHint () {
    inputs.forEach((input, i) => {
      input.setAttribute('placeholder', originalPH[i]);
    });
    hintBtn.disabled = true;
    hintBtn.innerText = 'Подсказка активирана';
  }
})();
  }

// Bind events for level 7
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
  const hintCost  = 50;
  const hintBtn   = document.getElementById('hintBtn');  
  const originalPH = inputs.map(input => input?.getAttribute('placeholder') || '');

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
    updateUrlLevel(currentLevel);
    loadLevel(currentLevel);
    window.location.href = `level.html?level=${currentLevel}`;
  });

  prevBtn.addEventListener('click', () => {
    currentLevel--;
    updateUrlLevel(currentLevel);
    loadLevel(currentLevel);
    window.location.href = `level.html?level=${currentLevel}`;
  });
 (function initHintPower () {
  inputs.forEach(input => input.setAttribute('placeholder', ''));


  // If the player already bought the hint earlier
  if (localStorage.getItem('hasHint7')) revealHint();
  
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
    // For real users
  
    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                             
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint7', 1);                   
    revealHint();
  });

  function revealHint () {
    inputs.forEach((input, i) => {
      input.setAttribute('placeholder', originalPH[i]);
    });
    hintBtn.disabled = true;
    hintBtn.innerText = 'Подсказка активирана';
  }
})();
  }

// Bind events for level 8
function bindLevel8() {
  const in1 = document.getElementById('codeInput1');
  const in2 = document.getElementById('codeInput2');
  const in3 = document.getElementById('codeInput3');
  const in4 = document.getElementById('codeInput4');
  const in5 = document.getElementById('codeInput5');
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const userInputWrapper = document.getElementById('userInputWrapper');
  const userInput = document.getElementById('userInput');
  const sayHelloBtn = document.getElementById('sayHelloBtn');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const hintCost  = 50;
  const hintBtn   = document.getElementById('hintBtn');  
  const originalPH1 = in1.getAttribute('placeholder') || '';
  const originalPH2 = in2.getAttribute('placeholder') || '';
  const originalPH3 = in3.getAttribute('placeholder') || '';
  const originalPH4 = in4.getAttribute('placeholder') || '';
  const originalPH5 = in5.getAttribute('placeholder') || '';

  runBtn.addEventListener('click', () => {
    const validCin = /^\s*cin\s*>>\s*n\s*;\s*$/;
    const validDo = /^\s*do\s*{\s*$/;
    const validCout = /^\s*cout\s*<<\s*"Counting:\s*"\s*<<\s*i\s*<<\s*endl\s*;\s*$/;
    const validInc = /^\s*i\+\+\s*;\s*$/;
    const validWhile = /^\s*}\s*while\s*\(\s*i\s*<\s*n\s*\)\s*;\s*$/;

    output.innerHTML = '';
    userInputWrapper.style.display = 'none';

    if (
      validCin.test(in1.value.trim()) &&
      validDo.test(in2.value.trim()) &&
      validCout.test(in3.value.trim()) &&
      validInc.test(in4.value.trim()) &&
      validWhile.test(in5.value.trim())
    ) {
      output.innerHTML = '✅ Кодът изглежда правилен. Въведи число и натисни "Изпълни".';
      userInputWrapper.style.display = 'block';
    } else {
      output.innerHTML = '<span class="error">⛔ Провери дали синтаксисът на do-while цикъла е коректен.</span>';
    }
  });

  sayHelloBtn.addEventListener('click', () => {
    const n = parseInt(userInput.value.trim());
    if (isNaN(n)) {
      output.innerHTML = '<span class="error">⛔ Моля въведи валидно число!</span>';
      return;
    }
    let result = '';
    let i = 0;
    do {
      result += `Counting: ${i}<br>`;
      i++;
    } while (i < n);
    output.innerHTML = `<span class="success">${result}</span>\n\n✅ Нивото е преминато!`;
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
  in1.setAttribute('placeholder', '');
  in2.setAttribute('placeholder', '');
  in3.setAttribute('placeholder', '');
  in4.setAttribute('placeholder', '');
  in5.setAttribute('placeholder', '');



  // If the player already bought the hint earlier
  if (localStorage.getItem('hasHint8')) revealHint();
  
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
    // For real users

    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                             
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint8', 1);                   
    revealHint();
  });

  function revealHint () {
    in1.setAttribute('placeholder', originalPH1);
    in2.setAttribute('placeholder', originalPH2);
    in3.setAttribute('placeholder', originalPH3);
    in4.setAttribute('placeholder', originalPH4);
    in5.setAttribute('placeholder', originalPH5);
    hintBtn.disabled = true;
    hintBtn.innerText = 'Подсказка активирана';
  }
})();
  }

// Bind events for level 9
function bindLevel9() {
  const [in1, in2, in3, in4] = [
    document.getElementById('codeInput1'),
    document.getElementById('codeInput2'),
    document.getElementById('codeInput3'),
    document.getElementById('codeInput4')
  ];
  const userInputWrapper = document.getElementById('userInputWrapper');
  const runBtn = document.getElementById('runBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const userInput = document.getElementById('userInput');
  const sayHelloBtn = document.getElementById('sayHelloBtn');
  const hintCost  = 50;
  const hintBtn   = document.getElementById('hintBtn');  
  const inputs = [in1, in2, in3, in4];
  const originalPH = inputs.map(input => input?.getAttribute('placeholder') || '');

  [in1, in2, in3, in4].forEach((input, i, arr) => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (i < arr.length - 1) arr[i + 1].focus();
        else runBtn.click();
      }
    });
  });

  runBtn.addEventListener('click', () => {
    const validCin = /^\s*cin\s*>>\s*n\s*;\s*$/;
    const validFor = /^\s*for\s*\(\s*i\s*=\s*1\s*;\s*i\s*<=\s*n\s*;\s*i\+\+\s*\)\s*{\s*$/;
    const validCout = /^\s*cout\s*<<\s*i\s*<<\s*" "\s*;\s*$/;
    const validClose = /^\s*}\s*$/;

    output.innerHTML = '';
    nextBtn.style.display = 'none';

    if (
  validCin.test(in1.value.trim()) &&
  validFor.test(in2.value.trim()) &&
  validCout.test(in3.value.trim()) &&
  validClose.test(in4.value.trim())
) {
  output.innerHTML = `✅ Кодът изглежда правилен. Въведи число и натисни "Изпълни".`;
  userInputWrapper.style.display = 'block'; // <-- показваме входа
} else {
  output.innerHTML = `<span class="error">⛔ Някой ред е неправилен. Увери се, че всеки ред е синтактично коректен.</span>`;
  userInputWrapper.style.display = 'none'; // <-- скриваме го, ако е грешно
}

  });

  sayHelloBtn.addEventListener('click', () => {
    const val = parseInt(userInput.value, 10);
    if (isNaN(val) || val < 1) {
      output.innerHTML = '<span class="error">⛔ Моля въведи число по-голямо от 0</span>';
      return;
    }
    let result = '';
    for (let i = 1; i <= val; i++) {
      result += i + ' ';
    }
    output.innerHTML = `<span class="success">${result.trim()}</span><br><br>✅ Нивото е преминато!`;
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
(function initHintPower () {
  inputs.forEach(input => input.setAttribute('placeholder', ''));


  // If the player already bought the hint earlier
  if (localStorage.getItem('hasHint9')) revealHint();
  
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
    // For real users

    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                         
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint9', 1);                   
    revealHint();
  });

  function revealHint () {
    inputs.forEach((input, i) => {
      input.setAttribute('placeholder', originalPH[i]);
    });
    hintBtn.disabled = true;
    hintBtn.innerText = 'Подсказка активирана';
  }
})();
  }

// Bind events for level 10
function bindLevel10() {
  const inputs = Array.from(document.querySelectorAll('.codeInput'));
  const runBtn = document.getElementById('runBtn');
  const userInputWrapper = document.getElementById('userInputWrapper');
  const userInput = document.getElementById('userInput');
  const calcBtn = document.getElementById('calculateBtn');
  const output = document.getElementById('outputWindow');
  const nextBtn = document.getElementById('nextLevelBtn');
  const prevBtn = document.getElementById('prevLevelBtn');
  const hintCost  = 50;
  const hintBtn   = document.getElementById('hintBtn');  
  const originalPH = inputs.map(input => input?.getAttribute('placeholder') || '');

  inputs.forEach((input, i, arr) => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (i < arr.length - 1) arr[i + 1].focus();
        else runBtn.click();
      }
    });
  });

  runBtn.addEventListener('click', () => {
    const expected = [
      /^\s*#include\s*<iostream>\s*$/,
      /^\s*using\s+namespace\s+std\s*;\s*$/,
      /^\s*int\s+main\s*\(\)\s*{\s*$/,
      /^\s*double\s+a\s*,\s*b\s*;\s*$/,
      /^\s*char\s+op\s*;\s*$/,
      /^\s*cin\s*>>\s*a\s*>>\s*op\s*>>\s*b\s*;\s*$/,
      /^\s*switch\s*\(\s*op\s*\)\s*{\s*$/,
      /^\s*case\s+'\+'\s*:\s*cout\s*<<\s*\(a\s*\+\s*b\)\s*;\s*break\s*;\s*$/,
      /^\s*case\s+'-'\s*:\s*cout\s*<<\s*\(a\s*-\s*b\)\s*;\s*break\s*;\s*$/,
      /^\s*case\s+'\*'\s*:\s*cout\s*<<\s*\(a\s*\*\s*b\)\s*;\s*break\s*;\s*$/,
      /^\s*case\s+'\/'\s*:\s*$/,
      /^\s*if\s*\(\s*b\s*!=\s*0\s*\)\s*cout\s*<<\s*\(a\s*\/\s*b\)\s*;\s*$/,
      /^\s*else\s*cout\s*<<\s*"Деление на 0!"\s*;\s*$/,
      /^\s*break\s*;\s*$/,
      /^\s*default\s*:\s*cout\s*<<\s*"Невалиден оператор!"\s*;\s*$/,
      /^\s*}\s*$/,
      /^\s*return\s+0\s*;\s*$/,
      /^\s*}\s*$/
    ];

    const allCorrect = inputs.every((input, idx) => expected[idx].test(input.value.trim()));

    output.innerHTML = '';
    nextBtn.style.display = 'none';

    if (allCorrect) {
      output.innerHTML = `✅ Кодът изглежда правилен. Въведи израз за изчисление и натисни "Изпълни".`;
      userInputWrapper.style.display = 'block';
    } else {
      output.innerHTML = `<span class="error">⛔ Някой ред е неправилен. Провери синтаксиса и интервалите.</span>`;
      userInputWrapper.style.display = 'none';
    }
  });

  calcBtn.addEventListener('click', () => {
    const val = userInput.value.trim();
    const match = val.match(/^(-?\d+(\.\d+)?)\s*([+\-*/])\s*(-?\d+(\.\d+)?)$/);

    if (!match) {
      output.innerHTML = `<span class="error">⛔ Невалиден вход. Използвай формат: 3 + 5</span>`;
      return;
    }

    const a = parseFloat(match[1]);
    const op = match[3];
    const b = parseFloat(match[4]);

    let result;
    switch (op) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = b !== 0 ? a / b : 'Деление на 0!'; break;
      default: result = 'Невалиден оператор!';
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
(function initHintPower () {
  inputs.forEach(input => input.setAttribute('placeholder', ''));


  // If the player already bought the hint earlier
  if (localStorage.getItem('hasHint10')) revealHint();
  
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
    // For real users

    alert('Трябва да добавите сървърна логика за реални потребители!');
    updateCoinDisplay(newAmount);
  }
}

  hintBtn.addEventListener('click', () => {
    const coins = getCoins();                              
    if (coins < hintCost) { alert('Нямате достатъчно монети!'); return; }

    setCoins(coins - hintCost);                            
    localStorage.setItem('hasHint10', 1);                   
    revealHint();
  });

  function revealHint () {
    inputs.forEach((input, i) => {
      input.setAttribute('placeholder', originalPH[i]);
    });
    hintBtn.disabled = true;
    hintBtn.innerText = 'Подсказка активирана';
  }
})();
  }

  
// Initial load
loadLevel(currentLevel);

})();


// Coin management
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