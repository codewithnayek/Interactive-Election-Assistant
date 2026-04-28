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

    renderChatOptions();

});
