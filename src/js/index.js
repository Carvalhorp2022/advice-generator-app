const botaoConselho = document.querySelector(".novo-conselho")
const novoConselho = document.querySelector(".conselhos")
const descricaoDoConselho = document.querySelector(".info")

async function getConselho() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if (!response.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
    
        }

        const conselhoContent = await response.json();
        const conselhoId = `Conselho #${conselhoContent.slip.id}`;
        const conselhoText = `"${conselhoContent.slip.advice}"`;

        novoConselho.innerText = conselhoId;
        descricaoDoConselho.innerText = conselhoText;

    } catch (error) {
        console.error("Erro, não encontrada as informações da API", error);
      }   
    
}

botaoConselho.addEventListener("click", getConselho);
getConselho();