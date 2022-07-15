const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Desenvolvedor Front End", "UI Design", "UX Design"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
    } 
    else {
    cursorSpan.classList.remove("typing");
setTimeout(erase, newTextDelay);
    }
}
function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
} 
else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
    }
}
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const clicado = document.querySelectorAll(".li");

function descricao(index) {
	const titulo = document.querySelector(".titulo");
	const data = document.querySelector(".data");
	const local = document.querySelector(".local");
	const desc = document.querySelector(".desc2");
	if (index == 0) {
		titulo.innerHTML = "Avibras - Industria Aeroespacial";
		data.innerHTML = "Jul 2021 - o momento";
		local.innerHTML = "Jacarei, São Paulo, Brasil";
		desc.innerHTML =
			"Analise da aplicação e suporte a usuários ERP – TOTVS, com participação no desenvolvimento de projetos e melhorias do sistema Protheus. Suporte a usuários dos sistemas Legados. Desenvolvimento web com HTML e CSS para manutenção da intranet. Elaboração de procedimentos técnicos e operacionais dos serviços exercidos na área de TI. Criação de automações com Visual Basic Applications (VBA) para análise de dados. Utilização do banco de dados SQL Server para a montagem de Query's com o propósito de criar relatórios personalizados no Report Services.";
	} else if (index == 1) {
		titulo.innerHTML = "Eipro Tecnologia";
		data.innerHTML = "Jan 2020 - Jul 2020 ";
		local.innerHTML = "São José dos Campos, São Paulo, Brasil";
		desc.innerHTML =
			"Prestar suporte aos clientes via remoto, instalação e configuração de softwares. Acompanhar as atividades relacionadas ao departamento de informática, tais como, suporte a Software, Windows, Office, Antivírus. Elaborar relatórios com as atividades exercidas, ajudar a criar os procedimentos operacionais dos serviços executados. ";
	} else if (index == 2) {
		titulo.innerHTML = "Estudante de Ciência da Computação";
		data.innerHTML = "Ago 2019 - o momento";
		local.innerHTML = "UNIP, São José dos Campos, Brasil";
		desc.innerHTML =
			"Estou cursando Ciência da Computação na Universidade Paulista - UNIP, atualmente estou no 7º Semestre.";
	} else {
		titulo.innerHTML = "Cursos realizados";
        data.innerHTML = "";
		local.innerHTML = "Plataformas Online";
		desc.innerHTML =
			"Realizo cursos voltados para o Front - End. Desenvolvendo competências em HTML, CSS e Javascript, pela plataforma Origamid e também cursos voltados para o SQL pela plataforma Udemy. ";
	}
}
for (let i = 0; i < clicado.length; i++) {
	clicado[i].addEventListener("click", () => {
		for (let j = 0; j < clicado.length; j++) {
			clicado[j].classList.remove("ativo");
		}
		clicado[i].classList.add("ativo");
		descricao(i);
	});
}

const menuMobile = document.querySelector(".visible");
const closer = document.querySelector(".hidden");
const menu2 = document.querySelector(".menu");
menuMobile.addEventListener("click", () => {
	menuMobile.classList.toggle("hidden");
	menuMobile.classList.toggle("visible");
	closer.classList.toggle("hidden");
	closer.classList.toggle("visible");
	menu2.classList.add("menuG");
	document.documentElement.style.overflow = "hidden";
	document.body.scroll = "no";
});

closer.addEventListener("click", () => {
	menuMobile.classList.toggle("hidden");
	menuMobile.classList.toggle("visible");
	closer.classList.toggle("hidden");
	closer.classList.toggle("visible");
	menu2.classList.remove("menuG");
	document.documentElement.style.overflow = "auto";
	document.body.scroll = "yes";
});

const clicar = document.querySelector(".toggle");

function themeDark(variavel, class1, class2) {
	for (let index = 0; index < variavel.length; index++) {
		variavel[index].classList.toggle(`${class1}`);
		variavel[index].classList.toggle(`${class2}`);
	}
}
clicar.addEventListener("click", function () {
	const dark = document.querySelectorAll(".dark");
	const dark2 = document.querySelectorAll(".dark2");
	const light = document.querySelectorAll(".light");
	const light2 = document.querySelectorAll(".gray-light");

	themeDark(dark, "dark", "light");
	themeDark(light, "dark", "light");
	themeDark(dark2, "dark2", "gray-light");
	themeDark(light2, "dark2", "gray-light");
});

new SimpleAnime();




