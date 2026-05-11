const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

const menuLinks = document.querySelectorAll(".menu a");
menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("show");
    });
});


const accordionBtn = document.getElementById("accordionBtn");
const accordionContent = document.getElementById("accordionContent");

accordionBtn.addEventListener("click", function () {
    if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
        accordionBtn.textContent = "▶ Detalhes das Habilidades";
    } else {
        accordionContent.style.display = "block";
        accordionBtn.textContent = "▼ Detalhes das Habilidades";
    }
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        const erroNome = document.getElementById("erroNome");
        const erroEmail = document.getElementById("erroEmail");
        const erroMensagem = document.getElementById("erroMensagem");
        const mensagemSucesso = document.getElementById("mensagemSucesso");

        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroMensagem.textContent = "";

        nome.classList.remove("erro");
        email.classList.remove("erro");
        mensagem.classList.remove("erro");

        let formularioValido = true;

        if (nome.value.trim().length < 3) {
            erroNome.textContent = "⚠ Nome deve ter pelo menos 3 caracteres";
            nome.classList.add("erro");
            formularioValido = false;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(email.value)) {
            erroEmail.textContent = "⚠ Digite um e-mail válido";
            email.classList.add("erro");
            formularioValido = false;
        }

        if (mensagem.value.trim().length < 10) {
            erroMensagem.textContent = "⚠ Mensagem deve ter pelo menos 10 caracteres";
            mensagem.classList.add("erro");
            formularioValido = false;
        }

        if (formularioValido) {
            // Esconde o formulário e mostra mensagem de sucesso
            formulario.style.display = "none";

            mensagemSucesso.innerHTML = `
                <div class="sucesso">
                    <p><strong>✓ Mensagem enviada com sucesso!</strong></p>
                    <p>Obrigado por entrar em contato, ${nome.value}! Retornarei em breve.</p>
                </div>
            `;
        }
    });
}