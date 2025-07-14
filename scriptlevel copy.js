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

  let currentLevel = getQueryParam('level') || 1;

  function loadLevel(level) {
    output.innerHTML = '';
    nextBtn.style.display = 'none';
    nameWrapper.style.display = 'none';


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
    <input type="text" id="codeInput1" class="codeInput" placeholder="while ( ... ) {" autocomplete="off"/>
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


    } else if (level === 8) {
instructions.innerHTML = `
  <h2>Мисия</h2>
  <p>
    Създай програма, която използва <strong>do...while</strong> цикъл и извежда "Counting: i" докато i е по-малко от <strong>въведено число</strong> от потребителя.
  </p>
  <ol>
    <li>Въведи вход от потребителя: <code>cin >> n;</code></li>
    <li>Използвай <code>int i = 0;</code></li>
    <li>Създай <code>do { ... } while(i < n);</code> цикъл</li>
    <li>В тялото на цикъла добави <code>cout << "Counting: " << i << endl;</code> и <code>i++;</code></li>
  </ol>
  <p>
    Програмата трябва да изброи от 0 до n-1.
  </p>
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

} else if (level === 9) {
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
`;

playground.innerHTML = `
  <div id="codeWrapper">
    <pre class="codeLine">#include &lt;iostream&gt;</pre>
    <pre class="codeLine">using namespace std;</pre>
    <pre class="codeLine">int main() {</pre>
    <pre class="codeLine">    int i, n;</pre>
    <input type="text" id="codeInput1" class="codeInput" placeholder="cin >> n;" autocomplete="off"/>
    <input type="text" id="codeInput2" class="codeInput" placeholder="for (...) {" autocomplete="off"/>
    <input type="text" id="codeInput3" class="codeInput" placeholder='cout << i << " ";"' autocomplete="off"/>
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

} else if (level === 10) {
 instructions.innerHTML = `
  <h2>Мисия: C++ Калкулатор с <code>switch</code></h2>
  <p>Напишете напълно функционален C++ калкулатор, като въведете целия код ред по ред.</p>
  <p>Програмата трябва да въвежда две числа и оператор (<code>+ - * /</code>) от потребителя, да изчислява резултата с <code>switch</code> и да показва съобщения за деление на 0 или невалиден оператор.</p>
  <p>Въведете всички редове включително <code>#include</code>, <code>main()</code>, декларации, логика и <code>return 0;</code>.</p>
  <p>След като кода е коректен, ще се появят полета за въвеждане на числа и оператор.</p>
`;

playground.innerHTML = `
  <div id="codeWrapper" style="font-family: monospace; margin-bottom: 1rem;">
    <input type="text" class="codeLineInput" placeholder="#include &lt;iostream&gt;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="using namespace std;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="int main() {" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    double a, b;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    char op;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    cin >> a >> op >> b;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    switch(op) {" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        case '+': cout << (a + b); break;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        case '-': cout << (a - b); break;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        case '*': cout << (a * b); break;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        case '/': " autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="            if (b != 0) cout << (a / b);" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="            else cout << &quot;Деление на 0!&quot;;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="            break;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        default: cout << &quot;Невалиден оператор!&quot;;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    }" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    return 0;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="}" autocomplete="off" spellcheck="false" />
  </div>
  <button id="runBtn">Стартирай кода</button>

  <div id="inputWrapper" style="margin-top:1rem; display:none;">
    <input type="number" id="inputA" placeholder="Въведете число a" style="margin-bottom:0.5rem; width: 100%; padding: 0.5rem; border-radius: 5px;" />
    <input type="text" id="inputOp" maxlength="1" placeholder="Въведете оператор (+ - * /)" style="margin-bottom:0.5rem; width: 100%; padding: 0.5rem; border-radius: 5px;" />
    <input type="number" id="inputB" placeholder="Въведете число b" style="margin-bottom:0.5rem; width: 100%; padding: 0.5rem; border-radius: 5px;" />
    <button id="calcBtn">Изчисли</button>
  </div>

  <div id="outputWindow" style="margin-top: 1rem; font-weight: bold;"></div>
`;
bindLevel10();
} else if (level === 8) {
instructions.innerHTML = `
  <h2>Мисия</h2>
  <p>
    Създай програма, която използва <strong>do...while</strong> цикъл и извежда "Counting: i" докато i е по-малко от <strong>въведено число</strong> от потребителя.
  </p>
  <ol>
    <li>Въведи вход от потребителя: <code>cin >> n;</code></li>
    <li>Използвай <code>int i = 0;</code></li>
    <li>Създай <code>do { ... } while(i < n);</code> цикъл</li>
    <li>В тялото на цикъла добави <code>cout << "Counting: " << i << endl;</code> и <code>i++;</code></li>
  </ol>
  <p>
    Програмата трябва да изброи от 0 до n-1.
  </p>
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

} else if (level === 9) {
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
`;

playground.innerHTML = `
  <div id="codeWrapper">
    <pre class="codeLine">#include &lt;iostream&gt;</pre>
    <pre class="codeLine">using namespace std;</pre>
    <pre class="codeLine">int main() {</pre>
    <pre class="codeLine">    int i, n;</pre>
    <input type="text" id="codeInput1" class="codeInput" placeholder="cin >> n;" autocomplete="off"/>
    <input type="text" id="codeInput2" class="codeInput" placeholder="for (...) {" autocomplete="off"/>
    <input type="text" id="codeInput3" class="codeInput" placeholder='cout << i << " ";"' autocomplete="off"/>
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

} else if (level === 10) {
 instructions.innerHTML = `
  <h2>Мисия: C++ Калкулатор с <code>switch</code></h2>
  <p>Напишете напълно функционален C++ калкулатор, като въведете целия код ред по ред.</p>
  <p>Програмата трябва да въвежда две числа и оператор (<code>+ - * /</code>) от потребителя, да изчислява резултата с <code>switch</code> и да показва съобщения за деление на 0 или невалиден оператор.</p>
  <p>Въведете всички редове включително <code>#include</code>, <code>main()</code>, декларации, логика и <code>return 0;</code>.</p>
  <p>След като кода е коректен, ще се появят полета за въвеждане на числа и оператор.</p>
`;

playground.innerHTML = `
  <div id="codeWrapper" style="font-family: monospace; margin-bottom: 1rem;">
    <input type="text" class="codeLineInput" placeholder="#include &lt;iostream&gt;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="using namespace std;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="int main() {" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    double a, b;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    char op;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    cin >> a >> op >> b;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    switch(op) {" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        case '+': cout << (a + b); break;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        case '-': cout << (a - b); break;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        case '*': cout << (a * b); break;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        case '/': " autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="            if (b != 0) cout << (a / b);" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="            else cout << &quot;Деление на 0!&quot;;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="            break;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="        default: cout << &quot;Невалиден оператор!&quot;;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    }" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="    return 0;" autocomplete="off" spellcheck="false" />
    <input type="text" class="codeLineInput" placeholder="}" autocomplete="off" spellcheck="false" />
  </div>
  <button id="runBtn">Стартирай кода</button>

  <div id="inputWrapper" style="margin-top:1rem; display:none;">
    <input type="number" id="inputA" placeholder="Въведете число a" style="margin-bottom:0.5rem; width: 100%; padding: 0.5rem; border-radius: 5px;" />
    <input type="text" id="inputOp" maxlength="1" placeholder="Въведете оператор (+ - * /)" style="margin-bottom:0.5rem; width: 100%; padding: 0.5rem; border-radius: 5px;" />
    <input type="number" id="inputB" placeholder="Въведете число b" style="margin-bottom:0.5rem; width: 100%; padding: 0.5rem; border-radius: 5px;" />
    <button id="calcBtn">Изчисли</button>
  </div>

  <div id="outputWindow" style="margin-top: 1rem; font-weight: bold;"></div>
`;
bindLevel10();

    } else {

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
}
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
}



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
}


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
    loadLevel(currentLevel);
  });
}



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