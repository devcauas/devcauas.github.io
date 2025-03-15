document.addEventListener("DOMContentLoaded", function () {
    const tela = document.querySelector(".tela"); 
    const botoes = document.querySelectorAll(".botoes ul li a");
    const botaoModoEscuro = document.getElementById("modo-escuro");
    const iconModoEscuro = botaoModoEscuro.querySelector("i");

    const conteudos = {
        home: `<div class="titulo">
                    <img src="assets/img/foto-perfil.jpeg" alt="Minha Foto" class="perfil-img">
                    <h1>- Portfólio -</h1>
                    <h2>por Cauã Souza Almeida</h2>
                    <br>
                    <h3>Este portfólio foi produzido usando CSS, HTML e JS</h3>
                    <i class="fa-solid fa-computer"></i>
               </div>`,
        sobre: `<div class="titulo">
                    <h1>- Sobre -</h1>
                    <p>Sou criativo no desenvolvimento e na resolução de problemas, explorando diferentes pontos de vista e caminhos. Busco sempre soluções sólidas e bem fundamentadas, evitando ideias superficiais que não estejam alinhadas com o contexto do problema.</p>
               </div>`,
        projeto: `<div class="titulo">
                    <h1>- Projetos -</h1>
                    <ul>
                        <li>Clone da rede social X</li>
                        <li>Minijogos em C, HTML, CSS e JS</li>
                        <li>Machine Learning com Python</li>
                        <li>Criação de gráficos interativos com Power BI</li>
                    </ul>
               </div>`,
        contato: `<div class="titulo">
                    <h1>- Contato -</h1>
                    <p><strong>Email:</strong> cauaalmeida2005@gmail.com</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/cauã-souza-almeida-2a922b231" target="_blank">Perfil (link)</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/devcauas" target="_blank">Repositórios (link)</a></p>
               </div>`
    };

    botoes.forEach(botao => {
        botao.addEventListener("click", function (event) {
            event.preventDefault(); 
            const pagina = botao.getAttribute("data-page");

            if (pagina) { 
                tela.innerHTML = conteudos[pagina];

                tela.classList.add("fade-out");
                setTimeout(() => {
                    tela.classList.remove("fade-out");
                    tela.classList.add("fade-in");
                }, 300);
            }
        });
    });

    if (localStorage.getItem("modoEscuro") === "ativado") {
        document.body.classList.add("dark-mode");
        iconModoEscuro.classList.replace("fa-sun", "fa-moon");
    }

    botaoModoEscuro.addEventListener("click", (event) => {
        event.preventDefault(); 
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modoEscuro", "ativado");
            iconModoEscuro.classList.replace("fa-sun", "fa-moon");
        } else {
            localStorage.setItem("modoEscuro", "desativado");
            iconModoEscuro.classList.replace("fa-moon", "fa-sun");
        }
    });
});
