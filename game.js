(function() {
            // -------------------------------------------------------------
            // 20 ВОПРОСОВ О ХАБАРОВСКОМ КРАЕ + РЕАЛИСТИЧНЫЕ SVG-ИЛЛЮСТРАЦИИ
            // -------------------------------------------------------------
            const questions = [
                {
                    question: "Какое озеро Хабаровского края славится цветением лотоса?",
                    options: ["Болонь", "Эворон", "Бархатное", "Амут"],
                    correct: 2,
                    fact: "🌿 Лотос Комарова — реликтовое растение, «дальневосточное чудо». Цветёт в августе на озере Бархатное (Хабаровский район).",
                    image: "images/img_0.png"
                },
                {
                    question: "Как называется самая высокая точка Хабаровского края?",
                    options: ["г. Беррилл", "г. Тордоки-Яни", "г. Ко", "хр. Дуссе-Алинь"],
                    correct: 0,
                    fact: "⛰️ Самой высокой точкой Хабаровского края является гора Берилл, высота которой составляет 2934 метра (по некоторым данным 2933 м). Она расположена на севере края, в горной системе Сунтар-Хаята, на границе с Якутией.",
                    image: "images/img_1.png"
                },
                {
                    question: "Какая река является главной водной артерией края?",
                    options: ["Уссури", "Амур", "Лена", "Бурея"],
                    correct: 1,
                    fact: "🏞️ Амур — одна из величайших рек России, бассейн покрывает почти весь Хабаровский край.",
                    image: "images/img_2.png"                },
                {
                    question: "Какой заповедник Хабаровского края назван в честь реки и находится в Советско-Гаванском районе?",
                    options: ["Большехехцирский", "Ботчинский", "Комсомольский", "Буреинский"],
                    correct: 1,
                    fact: "🐅 Заповедник «Ботчинский» — место обитания амурского тигра, назван в честь реки Ботчи.",
                    image: "images/img_3.png"
                },
                {
                    question: "Какой редкий хищник, символ края, охраняется в заповедниках?",
                    options: ["Белый медведь", "Амурский тигр", "Леопард", "Гималайский медведь"],
                    correct: 1,
                    fact: "🐯 Амурский тигр — крупнейший подвид тигра, гордость дальневосточной тайги.",
                    image: "images/img_4.png"
                },
                {
                    question: "Как называются древние петроглифы на скалах у реки Амур?",
                    options: ["Сикачи-Алян", "Кия", "Шереметьево", "Гродеково"],
                    correct: 0,
                    fact: " Петроглифы Сикачи-Алян — уникальные наскальные рисунки возрастом более 10 000 лет.",
                    image: "images/img_5.jpeg"
                },
                {
                    question: "Какое уникальное животное обитает на Шантарских островах?",
                    options: ["Морж", "Сивуч", "Белый медведь", "Кит"],
                    correct: 3,
                    fact: "🦭 Шантарские острова в Охотском море знамениты на весь мир тем, что здесь обитает уникальная и крайне редкая охотоморская популяция гренландского кита",
                    image: "images/img_6.png"
                },
                {
                    question: "Какой город является административным центром края?",
                    options: ["Комсомольск-на-Амуре", "Хабаровск", "Советская Гавань", "Николаевск-на-Амуре"],
                    correct: 1,
                    fact: "🏙️ Город Хабаровск основан в 1858 году, назван в честь Ерофея Хабарова.",
                    image: "images/img_7.png"
                },
                {
                    question: "Какой мост через Амур называют «Амурским чудом»?",
                    options: ["Железнодорожный", "Автомобильный", "Совмещённый", "Старый"],
                    correct: 2,
                    fact: "🌉 Хабаровский мост (совмещённый) — самый длинный на Транссибе, символ города, а так же он изображен на 5000 купюре.",
                    image: "images/img_8.jpeg"
                },
                {
                    question: "Какой хребет называют «дальневосточными Альпами»?",
                    options: ["Сихотэ-Алинь", "Дуссе-Алинь", "Джугджур", "Ям-Алинь"],
                    correct: 1,
                    fact: "🏔️ Хребет Дуссе-Алинь — горный узел с ледниками, водопадами, очень живописен.",
                    image: "images/img_9.png"
                },
                {
                    question: "Какая рыба семейства осетровых обитает в Амуре и считается ценной?",
                    options: ["Стерлядь", "Калуга", "Севрюга", "Белуга"],
                    correct: 1,
                    fact: "🐟 Калуга — гигантская пресноводная рыба, эндемик Амура, может достигать 5 метров!",
                    image: "images/img_10.png"
                },
                {
                    question: "Какой минеральный источник находится в районе Шмаковки?",
                    options: ["Сульфатный", "Шмаковский нарзан", "Радоновый", "Железистый"],
                    correct: 1,
                    fact: "💧 Шмаковка — известный бальнеологический курорт, богатый углекислыми водами.",
                    image: "images/img_11.png"
                },
                {
                    question: "Какой коренной народ Дальнего Востока проживает на территории края?",
                    options: ["Чукчи", "Нанайцы", "Эскимосы", "Коряки"],
                    correct: 1,
                    fact: "🧝 Нанайцы — один из тунгусо-маньчжурских народов, традиционно живут рыболовством.",
                    image: "images/img_12.png"
                },
                {
                    question: "В каком году основан Комсомольск-на-Амуре?",
                    options: ["1932", "1917", "1945", "1925"],
                    correct: 0,
                    fact: "🏗️ Комсомольск-на-Амуре основан в 1932 году комсомольцами-строителями.",
                    image: "images/img_13.png"
                },
                {
                    question: "Какой залив Охотского моря находится у побережья края?",
                    options: ["Залив Шелихова", "Залив Академии", "Залив Петра Великого", "Амурский лиман"],
                    correct: 1,
                    fact: "🌊 Залив Академии — часть Охотского моря, у Тугуро-Чумиканского района.",
                    image: "images/img_14.png"
                },
                {
                    question: "Какое дерево — символ дальневосточной тайги?",
                    options: ["Лиственница", "Кедр корейский", "Ель", "Пихта"],
                    correct: 1,
                    fact: "🌲 Кедр корейский — даёт орехи, основа питания многих животных.",
                    image: "images/img_15.png"
                },
                {
                    question: "Как называются острова в Охотском море, известные китами и туманами?",
                    options: ["Курилы", "Шантарские", "Командоры", "Сахалин"],
                    correct: 1,
                    fact: "🐋 Шантарские острова — труднодоступный рай для туристов и экологов.",
                    image: "images/img_16.png"
                },
                {
                    question: "Какой вид лосося массово идёт на нерест в реки края?",
                    options: ["Кета", "Форель", "Сиг", "Таймень"],
                    correct: 0,
                    fact: "🐟 Кета — главная промысловая рыба Хабаровского края, красная икра.",
                    image: "images/img_17.png"
                },
                {
                    question: "Какой заповедник находится в окрестностях Хабаровска?",
                    options: ["Большехехцирский", "Хехцир", "Вяземский", "Хорский"],
                    correct: 0,
                    fact: "🌳 Заповедник «Большехехцирский» расположен на сопках Хехцир, рядом с Хабаровском.",
                    image: "images/img_18.png"
                },
                {
                    question: "Сколько районов в Хабаровском крае?",
                    options: ["15", "17", "19", "22"],
                    correct: 1,
                    fact: "📊 Хабаровский край включает 17 муниципальных районов.",
                    image: "images/img_19.png"
                }
            ];

            // -------------------------------
            // Состояние игры
            // -------------------------------
            let currentIndex = 0;
            let playerScore = 0;
            let selectedOption = null;
            let isAnswered = false;
            let canAdvance = true;

            const dynamicEl = document.getElementById('dynamicContent');
            const scoreEl = document.getElementById('scoreDisplay');
            const progressBar = document.getElementById('progressBar');

            // -------------------------------
            // Функции рендера (без изменений)
            // -------------------------------
            function renderWelcome() {
                const welcomeHtml = `
                    <div style="text-align: center;">
                        <div class="image-area">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%233f7352'/%3E%3Ccircle cx='150' cy='90' r='60' fill='%23ffc857'/%3E%3Cpath d='M130 40 L150 0 L170 40 Z' fill='%23faaa3a'/%3E%3Ctext x='40' y='150' fill='white' font-size='22' font-weight='bold'%3E🌏 ХАБАРОВСКИЙ КРАЙ%3C/text%3E%3C/svg%3E" alt="Природа края">
                        </div>
                        <div style="font-size: 2.2rem; font-weight: 800; color: #26532b; margin: 20px 0 10px;">ПУТЕШЕСТВИЕ НАЧИНАЕТСЯ</div>
                        <p style="font-size: 1.3rem; background: #ffe28c; padding: 18px; border-radius: 50px; margin: 20px 0; font-weight: 600;">🗿 20 вопросов о природе, истории и людях Хабаровского края</p>
                        <button class="action-btn" id="startQuizBtn">▶ СТАРТ</button>
                    </div>
                `;
                dynamicEl.innerHTML = welcomeHtml;
                document.getElementById('startQuizBtn')?.addEventListener('click', startQuiz);
            }

            function startQuiz() {
                currentIndex = 0;
                playerScore = 0;
                updateScore();
                renderQuestion();
            }

            function renderQuestion() {
                if (currentIndex >= questions.length) {
                    showFinalResult();
                    return;
                }

                const q = questions[currentIndex];
                selectedOption = null;
                isAnswered = false;
                canAdvance = true;

                const letters = ['А', 'Б', 'В', 'Г'];
                let optionsHtml = '';
                q.options.forEach((opt, idx) => {
                    optionsHtml += `
                        <div class="option-btn" data-opt-index="${idx}">
                            <span class="option-letter">${letters[idx]}</span>
                            ${opt}
                        </div>
                    `;
                });

                const progressPercent = ((currentIndex) / questions.length) * 100;
                progressBar.style.width = progressPercent + '%';

                const html = `
                    <div class="image-area">
                        <img id="questionImage"  alt="Изображение к вопросу">
                    </div>
                    <div class="question-text">${currentIndex+1}. ${q.question}</div>
                    <div class="options" id="optionsContainer">
                        ${optionsHtml}
                    </div>
                    <button class="action-btn" id="submitAnswerBtn" ${!canAdvance ? 'disabled' : ''}>✅ ОТВЕТИТЬ</button>
                    <div id="factContainer" style="display: none;" class="fact-box"></div>
                `;

                dynamicEl.innerHTML = html;
                const img = document.getElementById("questionImage");
                console.log("IMAGE PATH:", q.image);
                // принудительно обновляем src
                img.src = "";
                img.src = q.image;
                 const next = questions[currentIndex + 1];

                 if (next && next.image) {
                    const preload = new Image();
                    preload.src = next.image;
                }

                document.querySelectorAll('.option-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        if (isAnswered) return;
                        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
                        this.classList.add('selected');
                        selectedOption = parseInt(this.dataset.optIndex);
                    });
                });

                document.getElementById('submitAnswerBtn').addEventListener('click', function() {
                    if (selectedOption === null) {
                        alert('❓ Сначала выберите ответ!');
                        return;
                    }
                    if (isAnswered) return;
                    isAnswered = true;
                    checkAnswer(selectedOption);
                });
            }

            function checkAnswer(selectedIdx) {
                const q = questions[currentIndex];
                const isCorrect = (selectedIdx === q.correct);
                if (isCorrect) {
                    playerScore++;
                    updateScore();
                }

                const factDiv = document.getElementById('factContainer');
                factDiv.style.display = 'block';
                const letters = ['А', 'Б', 'В', 'Г'];
                const correctLetter = letters[q.correct];
                const correctText = q.options[q.correct];
                const resultMsg = isCorrect ? '✅ ВЕРНО!' : '❌ НЕВЕРНО...';
                factDiv.innerHTML = `<span style="font-size:1.5rem; font-weight:800;">${resultMsg}</span><br> 
                                     <span style="background: #fad974; padding: 5px 15px; border-radius: 40px;">✓ Правильно: ${correctLetter} — ${correctText}</span><br>
                                     💡 <strong>Факт:</strong> ${q.fact}`;

                document.querySelectorAll('.option-btn').forEach((btn, idx) => {
                    btn.style.pointerEvents = 'none';
                    if (idx === q.correct) {
                        btn.style.background = '#a7e0a0';
                        btn.style.borderColor = '#1f7a1f';
                    } else if (idx === selectedIdx && !isCorrect) {
                        btn.style.background = '#f8b5b5';
                        btn.style.borderColor = '#b33a3a';
                    }
                });

                const submitBtn = document.getElementById('submitAnswerBtn');
                submitBtn.textContent = currentIndex === questions.length - 1 ? '🏁 ФИНАЛ' : '⏩ СЛЕДУЮЩИЙ';
                submitBtn.removeEventListener('click', checkAnswer);
                submitBtn.addEventListener('click', function nextStep() {
                    if (currentIndex < questions.length - 1) {
                        currentIndex++;
                        renderQuestion();
                    } else {
                        showFinalResult();
                    }
                });
            }

            function showFinalResult() {
                progressBar.style.width = '100%';
                let status = '';
                if (playerScore >= 18) status = '🏆 ХРАНИТЕЛЬ ТАЙГИ';
                else if (playerScore >= 13) status = '🎓 ЗНАТОК КРАЯ';
                else if (playerScore >= 8) status = '🌿 ПУТЕШЕСТВЕННИК';
                else status = '🥾 НОВИЧОК';

                const finalHtml = `
                    <div class="result-area">
                        <div class="result-title">ПУТЕШЕСТВИЕ ЗАВЕРШЕНО!</div>
                        <div class="image-area" style="height:180px;">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 180'%3E%3Crect width='300' height='180' fill='%23cf8f3a'/%3E%3Ctext x='40' y='110' fill='white' font-size='44' font-weight='bold'%3E🏆%3C/text%3E%3C/svg%3E">
                        </div>
                        <div class="result-score">🎯 ${playerScore} / 20</div>
                        <div class="status-badge">${status}</div>
                        <p style="margin-top: 35px; font-size:1.5rem;">Хабаровский край — удивительный!<br> Узнай больше!</p>
                        <button class="action-btn restart-btn" id="restartBtn">🔄 СЫГРАТЬ СНОВА</button>
                    </div>
                `;
                dynamicEl.innerHTML = finalHtml;
                document.getElementById('restartBtn').addEventListener('click', function() {
                    currentIndex = 0;
                    playerScore = 0;
                    updateScore();
                    renderWelcome();
                });
            }

            function updateScore() {
                scoreEl.innerText = `🏆 ${playerScore}`;
            }

            // Старт
            renderWelcome();
            updateScore();
        })();
