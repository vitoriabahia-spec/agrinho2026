// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alternador de Modo Escuro (Dark Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeIcon.className = 'fa-solid fa-moon';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fa-solid fa-sun';
        }
    });

    // 2. Interceptação do Formulário de Contato
    const contactForm = document.getElementById('agro-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de recarregar
        
        // Simula o envio bem-sucedido dos dados
        formResponse.textContent = "Obrigado pelo contato! Nossa equipe de sustentabilidade responderá em breve.";
        formResponse.classList.remove('hidden');
        
        // Limpa os campos do formulário
        contactForm.reset();
        
        // Esconde a mensagem após 5 segundos
        setTimeout(() => {
            formResponse.classList.add('hidden');
        }, 5000);
    });
});
