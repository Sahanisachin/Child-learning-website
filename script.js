const categoryConfig = {
  numbers: {
    label: 'Numbers',
    icon: '🔢',
    tasks: [
      {
        title: 'Spell the Number',
        type: 'choice',
        prompt: 'Choose the correct spelling for 13',
        answers: ['Thirteen', 'Thirty', 'Twelve', 'Three'],
        correct: 'Thirteen',
        visual: ['13']
      },
      {
        title: 'Before and After',
        type: 'choice',
        prompt: 'What comes AFTER 7?',
        answers: ['8', '6', '9', '5'],
        correct: '8',
        visual: ['6', '7', '?', '9']
      },
      {
        title: 'Between Numbers',
        type: 'choice',
        prompt: 'Which number is BETWEEN 11 and 13?',
        answers: ['12', '10', '14', '15'],
        correct: '12',
        visual: ['11', '?', '13']
      },
      {
        title: 'Greater or Less',
        type: 'choice',
        prompt: 'Which is GREATER: 19 or 17?',
        answers: ['19', '17', 'Same', 'None'],
        correct: '19',
        visual: ['19', '>', '17']
      },
      {
        title: 'Smallest & Biggest',
        type: 'choice',
        prompt: 'Which number is the smallest?',
        answers: ['5', '9', '8', '7'],
        correct: '5',
        visual: ['5', '9', '8', '7']
      },
      {
        title: 'Ordinal Numbers',
        type: 'choice',
        prompt: 'What is the 3rd position?',
        answers: ['3rd', '1st', '2nd', '4th'],
        correct: '3rd',
        visual: ['1st', '2nd', '?', '4th']
      }
    ]
  },
  maths: {
    label: 'Maths',
    icon: '➕',
    tasks: [
      {
        title: 'Addition',
        type: 'choice',
        prompt: 'What is 4 + 3?',
        answers: ['7', '5', '6', '8'],
        correct: '7',
        visual: ['4', '+', '3', '=', '?']
      },
      {
        title: 'Subtraction',
        type: 'choice',
        prompt: 'What is 9 - 4?',
        answers: ['5', '4', '7', '3'],
        correct: '5',
        visual: ['9', '-', '4', '=', '?']
      },
      {
        title: 'Ascending Order',
        type: 'choice',
        prompt: 'Put in ascending order: 5, 2, 4',
        answers: ['2, 4, 5', '5, 4, 2', '4, 2, 5', '2, 5, 4'],
        correct: '2, 4, 5',
        visual: ['5', '2', '4']
      },
      {
        title: 'Descending Order',
        type: 'choice',
        prompt: 'Put in descending order: 3, 8, 6',
        answers: ['8, 6, 3', '3, 6, 8', '6, 8, 3', '8, 3, 6'],
        correct: '8, 6, 3',
        visual: ['3', '8', '6']
      },
      {
        title: 'Comparing Length',
        type: 'choice',
        prompt: 'Which line is LONGER?',
        answers: ['Long line', 'Short line', 'Same', 'None'],
        correct: 'Long line',
        visual: ['📏', '📏📏']
      },
      {
        title: 'Fill in the Blank',
        type: 'choice',
        prompt: 'Fill in the blank: 10, 11, __, 13',
        answers: ['12', '10', '14', '11'],
        correct: '12',
        visual: ['10', '11', '?', '13']
      }
    ]
  },
  tables: {
    label: 'Tables',
    icon: '📚',
    tasks: [
      {
        title: 'Table of 2',
        type: 'choice',
        prompt: 'What is 2 × 4?',
        answers: ['8', '6', '10', '4'],
        correct: '8',
        visual: ['2', '×', '4', '=', '?']
      },
      {
        title: 'Table of 3',
        type: 'choice',
        prompt: 'What is 3 × 5?',
        answers: ['15', '12', '18', '9'],
        correct: '15',
        visual: ['3', '×', '5', '=', '?']
      },
      {
        title: 'Table of 4',
        type: 'choice',
        prompt: 'What is 4 × 3?',
        answers: ['12', '8', '16', '10'],
        correct: '12',
        visual: ['4', '×', '3', '=', '?']
      },
      {
        title: 'Table of 5',
        type: 'choice',
        prompt: 'What is 5 × 2?',
        answers: ['10', '15', '20', '12'],
        correct: '10',
        visual: ['5', '×', '2', '=', '?']
      }
    ]
  },
  english: {
    label: 'Words',
    icon: '🔤',
    tasks: [
      {
        title: 'Unscramble the Word',
        type: 'choice',
        prompt: 'Unscramble: R A T',
        answers: ['ART', 'TAR', 'RTA', 'A TR'],
        correct: 'ART',
        visual: ['R', 'A', 'T']
      },
      {
        title: 'Unscramble the Word',
        type: 'choice',
        prompt: 'Unscramble: D O G',
        answers: ['DOG', 'GOD', 'DGO', 'ODG'],
        correct: 'DOG',
        visual: ['D', 'O', 'G']
      },
      {
        title: 'Unscramble the Word',
        type: 'choice',
        prompt: 'Unscramble: C A T',
        answers: ['CAT', 'ACT', 'TAC', 'CTA'],
        correct: 'CAT',
        visual: ['C', 'A', 'T']
      },
      {
        title: 'Unscramble the Word',
        type: 'choice',
        prompt: 'Unscramble: B O O K',
        answers: ['BOOK', 'KOOB', 'BOKO', 'O B K'],
        correct: 'BOOK',
        visual: ['B', 'O', 'O', 'K']
      }
    ]
  },
  rewards: {
    label: 'My Rewards',
    icon: '🏆',
    tasks: []
  }
};

const state = {
  stars: Number(localStorage.getItem('ukg-stars')) || 0,
  completed: JSON.parse(localStorage.getItem('ukg-completed') || '[]'),
  currentGame: null,
  currentIndex: 0,
  currentCategory: null
};

const elements = {
  navButtons: [...document.querySelectorAll('.nav-btn')],
  activityCards: [...document.querySelectorAll('.activity-card')],
  categoryList: document.getElementById('categoryList'),
  headerStars: document.getElementById('headerStars'),
  rewardStars: document.getElementById('rewardStars'),
  progressStars: document.getElementById('progressStars'),
  badgeRow: document.getElementById('badgeRow'),
  doneCount: document.getElementById('doneCount'),
  progressList: document.getElementById('progressList'),
  gameModal: document.getElementById('gameModal'),
  closeModal: document.getElementById('closeModal'),
  questionText: document.getElementById('questionText'),
  displayVisual: document.getElementById('displayVisual'),
  questionHint: document.getElementById('questionHint'),
  answerButtons: document.getElementById('answerButtons'),
  feedback: document.getElementById('feedback'),
  gameTag: document.getElementById('gameTag'),
  gameTitle: document.getElementById('gameTitle'),
  modalStars: document.getElementById('modalStars')
};

function showView(viewName) {
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('active', view.id === `${viewName}View`);
  });

  elements.navButtons.forEach((button) => {
    const active = button.dataset.view === viewName;
    button.classList.toggle('active', active);
  });
}

function syncStars() {
  elements.headerStars.textContent = state.stars;
  elements.rewardStars.textContent = state.stars;
  elements.progressStars.textContent = state.stars;
  elements.modalStars.textContent = state.stars;
}

function getBadges() {
  const badges = [];
  if (state.stars >= 10) badges.push('⭐ Star Starter');
  if (state.stars >= 30) badges.push('🎉 Star Explorer');
  if (state.stars >= 60) badges.push('🚀 Math Rocket');
  if (state.stars >= 100) badges.push('🏅 Learning Hero');
  if (badges.length === 0) badges.push('🌱 New Learner');
  return badges;
}

function renderRewards() {
  elements.badgeRow.innerHTML = getBadges()
    .map((badge) => `<span class="badge">${badge}</span>`)
    .join('');
}

function renderProgress() {
  elements.doneCount.textContent = state.completed.length;
  const completedByType = state.completed.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const progressEntries = Object.entries(categoryConfig)
    .filter(([key]) => key !== 'rewards')
    .map(([key, config]) => ({
      name: config.label,
      count: completedByType[key] || 0,
      icon: config.icon
    }));

  elements.progressList.innerHTML = progressEntries
    .map(
      (item) => `
        <li>
          <span>${item.icon} ${item.name}</span>
          <span>${item.count} done</span>
        </li>
      `
    )
    .join('');
}

function buildCategoryCards() {
  const entries = Object.entries(categoryConfig).filter(([key]) => key !== 'rewards');

  elements.categoryList.innerHTML = entries
    .map(
      ([key, config]) => `
        <div class="topic-card">
          <div class="topic-icon">${config.icon}</div>
          <h3>${config.label}</h3>
          <p>${config.tasks.length ? `${config.tasks.length} fun games` : 'Rewards'}</p>
          <button data-open-category="${key}">Play Now</button>
        </div>
      `
    )
    .join('');

  document.querySelectorAll('[data-open-category]').forEach((button) => {
    button.addEventListener('click', () => openCategory(button.dataset.openCategory));
  });
}

function getCategoryTasks(categoryKey) {
  const cat = categoryConfig[categoryKey];
  return cat ? cat.tasks : [];
}

function openCategory(categoryKey) {
  if (!categoryConfig[categoryKey]) return;

  const tasks = getCategoryTasks(categoryKey);
  if (!tasks.length) {
    showView('rewards');
    return;
  }

  state.currentCategory = categoryKey;
  state.currentIndex = 0;
  state.currentGame = tasks[state.currentIndex];
  showModal();
}

function showModal() {
  if (!state.currentGame) return;

  elements.gameTag.textContent = categoryConfig[state.currentCategory].label;
  elements.gameTitle.textContent = state.currentGame.title;
  renderQuestion();
  elements.gameModal.classList.remove('hidden');
}

function closeModal() {
  elements.gameModal.classList.add('hidden');
  state.currentGame = null;
  state.currentCategory = null;
  state.currentIndex = 0;
  elements.feedback.classList.add('hidden');
  elements.questionHint.textContent = 'Tap the right answer!';
  elements.questionHint.classList.remove('hidden');
  elements.answerButtons.innerHTML = '';
  elements.displayVisual.innerHTML = '';
  elements.questionText.textContent = '';
}

function renderQuestion() {
  const game = state.currentGame;
  if (!game) return;

  elements.questionText.textContent = game.prompt;
  elements.displayVisual.innerHTML = '';

  if (game.visual && game.visual.length) {
    const chips = game.visual.map((item) => `<span class="visual-chip">${item}</span>`).join('');
    elements.displayVisual.innerHTML = chips;
  }

  elements.questionHint.textContent = 'Tap the right answer!';
  elements.questionHint.classList.remove('hidden');
  elements.feedback.classList.add('hidden');
  elements.answerButtons.innerHTML = game.answers
    .map(
      (answer) =>
        `<button class="answer-btn" data-answer="${answer}">${answer}</button>`
    )
    .join('');

  elements.answerButtons.querySelectorAll('.answer-btn').forEach((button) => {
    button.addEventListener('click', () => handleAnswer(button.dataset.answer));
  });
}

function registerCompleted(categoryKey, title) {
  const exists = state.completed.some((item) => item.category === categoryKey && item.title === title);
  if (!exists) {
    state.completed.push({ category: categoryKey, title });
    localStorage.setItem('ukg-completed', JSON.stringify(state.completed));
  }
}

function handleAnswer(selected) {
  const game = state.currentGame;
  if (!game) return;

  const buttons = [...elements.answerButtons.querySelectorAll('.answer-btn')];
  buttons.forEach((button) => {
    const isCorrect = button.dataset.answer === game.correct;
    if (selected === game.correct && button.dataset.answer === selected) {
      button.classList.add('correct');
    }
    if (selected !== game.correct && button.dataset.answer === game.correct) {
      button.classList.add('correct');
    }
    if (button.dataset.answer === selected && selected !== game.correct) {
      button.classList.add('wrong');
    }
    button.disabled = true;
  });

  if (selected === game.correct) {
    const starGain = 10;
    state.stars += starGain;
    localStorage.setItem('ukg-stars', state.stars);
    syncStars();
    renderRewards();
    renderProgress();
    registerCompleted(state.currentCategory, game.title);
    elements.questionHint.classList.add('hidden');
    elements.feedback.textContent = '🎉 GREAT JOB! ⭐ +10 Stars';
    elements.feedback.style.background = 'linear-gradient(180deg, #e6fff0, #c0f5d5)';
    elements.feedback.style.borderColor = 'rgba(65, 185, 107, 0.25)';
    elements.feedback.style.color = '#0d6d3f';
    elements.feedback.classList.remove('hidden');
  } else {
    elements.questionHint.textContent = 'Almost! 😊 Try again!';
    elements.questionHint.classList.remove('hidden');
    elements.feedback.textContent = 'Almost! 😊 Try again!';
    elements.feedback.style.background = 'linear-gradient(180deg, #fff4d9, #ffe0a7)';
    elements.feedback.style.borderColor = 'rgba(255, 168, 68, 0.35)';
    elements.feedback.style.color = '#8b4d00';
    elements.feedback.classList.remove('hidden');
    setTimeout(() => {
      renderQuestion();
    }, 1300);
    return;
  }

  setTimeout(() => {
    const tasks = getCategoryTasks(state.currentCategory);
    const nextIndex = state.currentIndex + 1;

    if (nextIndex < tasks.length) {
      state.currentIndex = nextIndex;
      state.currentGame = tasks[nextIndex];
      renderQuestion();
    } else {
      const category = categoryConfig[state.currentCategory];
      elements.feedback.textContent = `🎉 ${category.label} complete! You did it!`;
      setTimeout(() => {
        closeModal();
      }, 1200);
    }
  }, 1100);
}

function attachEventListeners() {
  elements.navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const view = button.dataset.view;
      if (view === 'play') {
        showView('play');
      } else if (view === 'rewards') {
        showView('rewards');
      } else if (view === 'progress') {
        showView('progress');
      } else {
        showView('home');
      }
    });
  });

  elements.activityCards.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      if (category === 'rewards') {
        showView('rewards');
        return;
      }
      openCategory(category);
    });
  });

  document.querySelector('[data-close="true"]').addEventListener('click', closeModal);
  elements.closeModal.addEventListener('click', closeModal);

  document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => {
      const viewName = button.dataset.view;
      showView(viewName);
    });
  });
}

function init() {
  buildCategoryCards();
  syncStars();
  renderRewards();
  renderProgress();
  attachEventListeners();
  showView('home');
}

init();
