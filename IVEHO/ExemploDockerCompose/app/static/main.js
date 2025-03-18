const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Funções de validação
const validateName = () => {
    const value = nameInput.value.trim();
    if (!value) return 'Nome é obrigatório';
    if (value.length < 3) return 'Mínimo 3 caracteres';
    return null;
};

const validateEmail = () => {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!value) return 'E-mail é obrigatório';
    if (!emailRegex.test(value)) return 'E-mail inválido';
    return null;
};

// Manipulação de erros
const showError = (input, message) => {
    input.classList.add('input-error');
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = 'block';
};

const clearError = (input) => {
    input.classList.remove('input-error');
    const errorElement = input.nextElementSibling;
    errorElement.textContent = '';
    errorElement.style.display = 'none';
};

// Event listeners para validação em tempo real
nameInput.addEventListener('input', () => {
    const error = validateName();
    error ? showError(nameInput, error) : clearError(nameInput);
});

emailInput.addEventListener('input', () => {
    const error = validateEmail();
    error ? showError(emailInput, error) : clearError(emailInput);
});

// Submit do formulário
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validação final
    const nameError = validateName();
    const emailError = validateEmail();

    if (nameError) showError(nameInput, nameError);
    if (emailError) showError(emailInput, emailError);
    if (nameError || emailError) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    
    try {
        // Estado de loading
        submitBtn.innerHTML = '<div class="loader"></div>';
        submitBtn.disabled = true;

        // Simulação de requisição
        const response = await fetch('http://localhost:5000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInput.value.trim(),
                email: emailInput.value.trim()
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro no cadastro');
        }

        // Reset e feedback
        form.reset();
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Cadastro realizado com sucesso!</p>
        `;
        form.parentNode.insertBefore(successDiv, form.nextElementSibling);
        
        setTimeout(() => successDiv.remove(), 3000);

    } catch (error) {
        showError(emailInput, error.message);
    } finally {
        submitBtn.innerHTML = 'Cadastrar';
        submitBtn.disabled = false;
    }
});