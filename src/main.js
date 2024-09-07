document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // Controla o Display do Cabeçalho
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        } else {
            exibeElementosHeader();
        }
    })

    // Troca de Abas - Seção Atrações
    for (let i= 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            tab.classList.add('shows__list--is-active')
            activeButton();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    // Abrir e Fechar Perguntas do FAQ
    for (let i = 0; i < questions.length;i ++) {
        questions[i].addEventListener('click', openOrCloseAnswer);
    }
})

function activeButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i= 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function ocultaElementosHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function openOrCloseAnswer(element) {
    const classe = 'faq__questions__item--is-open';
    const elementParent = element.target.parentNode;

    elementParent.classList.toggle(classe);
}