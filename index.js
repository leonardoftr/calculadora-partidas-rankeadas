const vitorias = 121
const derrotas = 20

function Saldo(vitorias, derrotas) {
	saldoVitoria = vitorias - derrotas
	rank = ""

	if (saldoVitoria <= 10) {
		rank = "Ferro"
	} else if (saldoVitoria >= 11 && saldoVitoria <= 20) {
		rank = "Bronze"
	} else if (saldoVitoria >= 21 && saldoVitoria <= 50) {
		rank = "Prata"
	} else if (saldoVitoria >= 51 && saldoVitoria <= 80) {
		rank = "Ouro"
	} else if (saldoVitoria >= 81 && saldoVitoria <= 90) {
		rank = "Diamante"
	} else if (saldoVitoria >= 91 && saldoVitoria <= 100) {
		rank = "Lendário"
	} else {
		rank = "Imortal"
	}

	return "O Herói tem de saldo de " + saldoVitoria + " e está no nível de " + rank;
}

const resultado = Saldo(vitorias, derrotas)
console.log(resultado)