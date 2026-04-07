document.getElementById("formAdocao").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = parseInt(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = parseInt(document.getElementById("horas").value);
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").checked;
    let cpfsExistentes = ["12345678900", "11122233344"];
    let condicao = document.getElementById("condicao")?.value;
    let decisao = document.getElementById("decisao")?.value;
    let espaco = document.getElementById("espaco")?.value;
    let motivosInvalidos = ["quero", "porque sim"];

    if (nome.length < 3) return alert("Nome Inválido");
    if (!email.includes("@")) return alert("Email inválido");
    if (telefone.length < 10) return alert("Telefone inválido");
    if (cpf === "") return alert("CPF é obrigatório");
    if (cpfsExistentes.includes(cpf)) return alert("CPF já está cadastrado");
    if (idade < 18) return alert("Você deve ser maior de idade");
    if (cidade === "") return alert("Cidade obrigatória");
    if (moradia === "") return alert("Selecione a moradia");
    if (quintal === "") return alert("Informe sobre o quintal");
    if (pet === "") return alert("Informe se já teve pet");
    if (isNaN(horas)) return alert("Horas inválidas");
    if (motivo.length < 10) return alert("Motivo muito curto");
    if (!termo) return alert("Aceite o termo");

    if (moradia === "apartamento" && quintal === "sim") {
        return alert("Apartamento não pode ter quintal");
    }
    if (horas > 8) {
        alert("O animal ficará muito tempo sozinho!");
    }
    if (pet === "nao") {
        alert("A ONG poderá acompanhar sua adaptação com o pet.");
    }
    if (motivosInvalidos.includes(motivo.toLowerCase())) {
        return alert("Motivo inválido");
    }
    if (condicao === "nao") {
        return alert("Você precisa ter condições financeiras para adotar");
    }
    if (decisao === "hoje") {
        alert("Cuidado com decisões impulsivas");
    }
    if (quintal === "nao" && espaco === "sim") {
        return alert("Não é possível ter espaço externo sem quintal");
    }
    if (moradia === "casa" && quintal === "nao") {
        alert("Verifique se o quintal é seguro para o animal");
    }

    alert(`
        Dados enviados: 

        Nome: ${nome} 
        Email: ${email} 
        Telefone: ${telefone} 
        CPF: ${cpf} 
        Idade: ${idade} 
        Cidade: ${cidade} 
        Moradia: ${moradia} 
        Quintal: ${quintal} 
        Já teve pet: ${pet}
        Horas sozinho: ${horas}
        Motivo: ${motivo}
        `);
    formData.requestFullscreen();

});