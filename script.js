const botoes = document.querySelectorAll("main button");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("fui clicado");

        let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});

// Botão de tema escuro
const btnTema = document.querySelector(".btn-tema");

btnTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");
});

// Botão voltar ao topo
const btnVoltarTopo = document.querySelector(".btn-voltar-topo");

btnVoltarTopo.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
