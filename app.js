document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // Navigation Logic
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-links li');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active from all links and pages
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Add active to clicked
            link.classList.add('active');
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // ==========================================
    // Render Timeline (Dashboard)
    // ==========================================
    const timelineContainer = document.getElementById('timeline-container');
    
    electionData.timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-icon">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    // ==========================================
    // Voter Help Dashboard Logic
    // ==========================================
    const readinessQuizContainer = document.getElementById('readiness-quiz');
    const readinessResultContainer = document.getElementById('readiness-result');
    const missingStepsList = document.getElementById('missing-steps-list');
    const btnRetakeReadiness = document.getElementById('btn-retake-readiness');
    const readinessQuestions = electionData.readinessQuestions;
    let readinessAnswers = {};

    function renderReadinessQuiz() {
        readinessQuizContainer.innerHTML = '';
        readinessResultContainer.style.display = 'none';
        readinessQuizContainer.style.display = 'block';
        readinessAnswers = {};

        readinessQuestions.forEach((q, index) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'readiness-question';
            qDiv.innerHTML = `
                <p><strong>${index + 1}.</strong> ${q.text}</p>
                <div class="readiness-options">
                    <button class="btn btn-yes" data-id="${q.id}" data-val="yes">Yes</button>
                    <button class="btn btn-no" data-id="${q.id}" data-val="no">No</button>
                </div>
            `;
            readinessQuizContainer.appendChild(qDiv);
        });

        // Add event listeners to buttons
        document.querySelectorAll('.readiness-options .btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const val = e.target.getAttribute('data-val');
                
                // Styling
                const parent = e.target.parentElement;
                parent.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                readinessAnswers[id] = val;

                // Check if all answered
                if (Object.keys(readinessAnswers).length === readinessQuestions.length) {
                    setTimeout(showReadinessResult, 500);
                }
            });
        });
    }

    function showReadinessResult() {
        readinessQuizContainer.style.display = 'none';
        readinessResultContainer.style.display = 'block';
        missingStepsList.innerHTML = '';

        let score = 0;
        let missing = [];

        readinessQuestions.forEach(q => {
            if (readinessAnswers[q.id] === 'yes') {
                score += 20; // 5 questions * 20 = 100%
            } else {
                missing.push(q.text);
            }
        });

        document.getElementById('readiness-score-text').textContent = `You are ${score}% ready to vote.`;
        
        const missingContainer = document.getElementById('missing-steps-container');
        if (missing.length > 0) {
            missingContainer.style.display = 'block';
            missing.forEach(m => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-xmark" style="color: #ff4c4c;"></i> Need to resolve: ${m.replace('?', '')}`;
                missingStepsList.appendChild(li);
            });
        } else {
            missingContainer.style.display = 'none';
            document.getElementById('readiness-score-text').innerHTML += "<br><span style='color: var(--accent-green);'>You are fully prepared for Election Day!</span>";
        }
    }

    if(btnRetakeReadiness) {
        btnRetakeReadiness.addEventListener('click', renderReadinessQuiz);
    }
    renderReadinessQuiz();

    // Render Help Guides
    const helpGrid = document.getElementById('help-grid');
    const dynamicGuideContainer = document.getElementById('dynamic-guide-container');
    const dynamicGuideTitle = document.getElementById('dynamic-guide-title');
    const dynamicGuideContent = document.getElementById('dynamic-guide-content');
    const btnCloseGuide = document.getElementById('btn-close-guide');

    electionData.voterHelpGuides.forEach(guide => {
        const card = document.createElement('div');
        card.className = 'help-card glass-panel';
        card.innerHTML = `<i class="fa-solid ${guide.icon}"></i> <h3>${guide.title}</h3>`;
        
        card.addEventListener('click', () => {
            dynamicGuideTitle.innerHTML = `<i class="fa-solid ${guide.icon}"></i> ${guide.title}`;
            dynamicGuideContent.innerHTML = '';
            guide.steps.forEach((step, index) => {
                const stepDiv = document.createElement('div');
                stepDiv.className = 'guide-step-item';
                stepDiv.innerHTML = `<span class="step-num">${index + 1}</span> <p>${step}</p>`;
                dynamicGuideContent.appendChild(stepDiv);
            });
            dynamicGuideContainer.style.display = 'block';
            
            // Scroll to guide
            dynamicGuideContainer.scrollIntoView({ behavior: 'smooth' });
        });

        helpGrid.appendChild(card);
    });

    if(btnCloseGuide) {
        btnCloseGuide.addEventListener('click', () => {
            dynamicGuideContainer.style.display = 'none';
        });
    }

    // ==========================================
    // Flashcards Logic
    // ==========================================
    const flashcardElement = document.getElementById('flashcard');
    const fcTerm = document.getElementById('fc-term');
    const fcDef = document.getElementById('fc-def');
    const fcCounter = document.getElementById('fc-counter');
    const btnPrevCard = document.getElementById('btn-prev-card');
    const btnNextCard = document.getElementById('btn-next-card');
    
    let currentCardIndex = 0;
    const flashcards = electionData.flashcards;

    function updateFlashcard() {
        const card = flashcards[currentCardIndex];
        // Only change content when not flipped, or unflip first
        if (flashcardElement.classList.contains('is-flipped')) {
            flashcardElement.classList.remove('is-flipped');
            setTimeout(() => {
                fcTerm.textContent = card.term;
                fcDef.textContent = card.definition;
                fcCounter.textContent = `${currentCardIndex + 1} / ${flashcards.length}`;
            }, 300); // Wait for unflip animation
        } else {
            fcTerm.textContent = card.term;
            fcDef.textContent = card.definition;
            fcCounter.textContent = `${currentCardIndex + 1} / ${flashcards.length}`;
        }
    }

    flashcardElement.addEventListener('click', () => {
        flashcardElement.classList.toggle('is-flipped');
    });

    btnPrevCard.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateFlashcard();
        }
    });

    btnNextCard.addEventListener('click', () => {
        if (currentCardIndex < flashcards.length - 1) {
            currentCardIndex++;
            updateFlashcard();
        }
    });

    // Initialize first card
    updateFlashcard();

    // ==========================================
    // Quiz Logic
    // ==========================================
    const quizData = electionData.quiz;
    let currentQuestionIndex = 0;
    let score = 0;
    let quizActive = false;

    const quizIntro = document.getElementById('quiz-intro');
    const quizQuestionArea = document.getElementById('quiz-question-area');
    const quizResult = document.getElementById('quiz-result');
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    const btnNextQuestion = document.getElementById('btn-next-question');
    const btnRestartQuiz = document.getElementById('btn-restart-quiz');
    const quizOptionsContainer = document.getElementById('quiz-options');
    
    const elQuizProgress = document.getElementById('quiz-progress');
    const elQuizScore = document.getElementById('quiz-score');
    const elQuizQuestion = document.getElementById('quiz-question');

    function loadQuestion() {
        btnNextQuestion.style.display = 'none';
        const q = quizData[currentQuestionIndex];
        
        elQuizProgress.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
        elQuizScore.textContent = `Score: ${score}`;
        elQuizQuestion.textContent = q.question;
        
        quizOptionsContainer.innerHTML = '';
        
        q.options.forEach((opt, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'quiz-option';
            optionEl.textContent = opt;
            optionEl.addEventListener('click', () => handleOptionClick(index, optionEl));
            quizOptionsContainer.appendChild(optionEl);
        });
    }

    function handleOptionClick(selectedIndex, optionElement) {
        if (!quizActive) return;
        
        const q = quizData[currentQuestionIndex];
        const options = document.querySelectorAll('.quiz-option');
        
        quizActive = false; // Prevent multiple clicks
        
        if (selectedIndex === q.answer) {
            optionElement.classList.add('correct');
            score++;
            elQuizScore.textContent = `Score: ${score}`;
        } else {
            optionElement.classList.add('incorrect');
            options[q.answer].classList.add('correct'); // Show correct answer
        }

        btnNextQuestion.style.display = 'inline-block';
    }

    function showResults() {
        quizQuestionArea.style.display = 'none';
        quizResult.style.display = 'block';
        
        document.getElementById('final-score').textContent = `${score}/${quizData.length}`;
        
        const feedback = document.getElementById('quiz-feedback');
        if (score === quizData.length) feedback.textContent = "Perfect! You are an election expert!";
        else if (score >= quizData.length / 2) feedback.textContent = "Good job! You know your democracy.";
        else feedback.textContent = "Keep learning! Check out the flashcards to improve.";
    }

    btnStartQuiz.addEventListener('click', () => {
        quizIntro.style.display = 'none';
        quizQuestionArea.style.display = 'block';
        currentQuestionIndex = 0;
        score = 0;
        quizActive = true;
        loadQuestion();
    });

    btnNextQuestion.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            quizActive = true;
            loadQuestion();
        } else {
            showResults();
        }
    });

    btnRestartQuiz.addEventListener('click', () => {
        quizResult.style.display = 'none';
        quizIntro.style.display = 'block';
    });


    // ==========================================
    // Render Voter Guide
    // ==========================================
    const guideGrid = document.getElementById('guide-grid');
    
    electionData.voterGuide.forEach(step => {
        const card = document.createElement('div');
        card.className = 'guide-card';
        card.innerHTML = `
            <div class="step-number">${step.step}</div>
            <h3>${step.title}</h3>
            <p>${step.details}</p>
        `;
        guideGrid.appendChild(card);
    });

    // ==========================================
    // Chatbot Logic
    // ==========================================
    const chatBox = document.getElementById('chat-box');
    const chatOptionsContainer = document.getElementById('chat-options');
    const chatQuestions = electionData.chatQuestions;

    function addMessage(text, isUser = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
        msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function renderChatOptions() {
        chatOptionsContainer.innerHTML = '';
        chatQuestions.forEach(q => {
            const btn = document.createElement('button');
            btn.className = 'chat-option-btn';
            btn.textContent = q.question;
            btn.addEventListener('click', () => {
                addMessage(q.question, true); // User asked
                
                // Remove clicked option
                btn.remove();

                // Bot reply after delay
                setTimeout(() => {
                    addMessage(q.answer, false);
                }, 600);
            });
            chatOptionsContainer.appendChild(btn);
        });
    }

    // ==========================================
    // Interactive Map Logic
    // ==========================================
    if (typeof google !== 'undefined') {
        google.charts.load('current', {
            'packages': ['geochart']
        });
        google.charts.setOnLoadCallback(drawMap);
    }

    function drawMap() {
        const data = new google.visualization.DataTable();
        data.addColumn('string', 'State');
        data.addColumn('number', 'Value');
        
        const mapData = electionData.mapData;
        const rows = [];
        
        for (const [code, info] of Object.entries(mapData)) {
            // Value 1 makes it colored
            rows.push([code, 1]);
        }
        
        data.addRows(rows);

        const options = {
            region: 'IN', // India
            resolution: 'provinces',
            backgroundColor: 'transparent',
            datalessRegionColor: 'rgba(255, 255, 255, 0.05)',
            defaultColor: '#138808', // Green default
            colorAxis: {colors: ['#FF9933', '#FF9933']}, // All saffron
            legend: 'none',
            tooltip: { trigger: 'hover' },
            keepAspectRatio: true
        };

        const chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        
        // Handle clicks
        google.visualization.events.addListener(chart, 'select', () => {
            const selection = chart.getSelection();
            if (selection.length > 0) {
                const row = selection[0].row;
                const stateCode = data.getValue(row, 0);
                updateStateInfoPanel(stateCode);
            }
        });

        // Add a slight delay to ensure container is fully visible if it's the active page
        setTimeout(() => {
            chart.draw(data, options);
        }, 100);
        
        // Redraw map on window resize
        window.addEventListener('resize', () => {
            chart.draw(data, options);
        });

        // Also redraw when the map tab is clicked to ensure correct dimensions
        const mapLink = document.querySelector('[data-target="map"]');
        if(mapLink) {
            mapLink.addEventListener('click', () => {
                setTimeout(() => { chart.draw(data, options); }, 50);
            });
        }
    }

    function updateStateInfoPanel(stateCode) {
        const info = electionData.mapData[stateCode];
        if (!info) return;

        document.querySelector('.state-placeholder').style.display = 'none';
        document.getElementById('state-details').style.display = 'block';

        document.getElementById('info-state-name').textContent = info.name;
        document.getElementById('info-seats').textContent = info.seats;
        document.getElementById('info-turnout').textContent = info.turnout;
        document.getElementById('info-parties').textContent = info.parties;
        document.getElementById('info-phase').textContent = info.phase;
    }

    renderChatOptions();

});
