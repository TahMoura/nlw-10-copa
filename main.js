function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  delay = delay + 0.6
  return `
   <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo - encerrado",
    createGame("qatar", "0  X  2", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda - encerrado",
    createGame("england", "6  X  2", "iran") +
      createGame("senegal", "0  X  2", "netherlands") +
      createGame("unitedStates", "1  X  1", "wales")
  ) +
  createCard(
    "22/11",
    "Terça - encerrado",
    createGame("argentina", "1  X  2", "saudiArabia") +
      createGame("denmark", "0  X  0", "tunisia") +
      createGame("mexico", "0  X  0", "poland") +
      createGame("france", "4  X  1", "australia")
  ) +
  createCard(
    "23/11",
    "quarta - encerrado",
    createGame("morroco", "0  X  0", "croatia") +
      createGame("germany", "1  X  2", "japan") +
      createGame("spain", "7  X  0", "costarica") +
      createGame("belgium", "1  X  0", "canada")
  ) +
  createCard(
    "24/11",
    "quinta - encerrado",
    createGame("switzerland", "1  X  0", "cameroon") +
      createGame("urugay", "0  X  0", "southKorea") +
      createGame("portugal", "3  X  2", "ghana") +
      createGame("brazil", "2  X  0", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta - encerrado",
    createGame("wales", "0  X  2", "iran") +
      createGame("qatar", "1  X  3", "senegal") +
      createGame("netherlands", "1  X  1", "ecuador") +
      createGame("england", "0  X  0", "unitedStates")
  ) +
  createCard(
    "26/11",
    "sabado - encerrado",
    createGame("tunisia", "0  X  1", "australia") +
      createGame("poland", "2  X  0", "saudiArabia") +
      createGame("france", "2  X  1", "denmark") +
      createGame("argentina", "2  X  0", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo - encerrado",
    createGame("japan", "0  X  1", "costarica") +
      createGame("belgium", "0  X  2", "morroco") +
      createGame("croatia", "4  X  1", "canada") +
      createGame("spain", "1  X  1", "germany")
  ) +
  createCard(
    "28/11",
    "segunda - encerrado",
    createGame("cameroon", "3  X  3", "serbia") +
      createGame("southKorea", "2  X  3", "ghana") +
      createGame("brazil", "1  X  0", "switzerland") +
      createGame("portugal", "2  X  0", "urugay")
  ) +
  createCard(
    "29/11",
    "terça - encerrado",
    createGame("ecuador", "1  X  2", "senegal") +
      createGame("netherlands", "2  X  0", "qatar") +
      createGame("iran", "0  X  1", "unitedStates") +
      createGame("wales", "0  X  3", "england")
  ) +
  createCard(
    "30/11",
    "quarta - encerrado",
    createGame("tunisia", "1  X  0", "france") +
      createGame("australia", "1  X  0", "denmark") +
      createGame("poland", "0  X  2", "argentina") +
      createGame("saudiArabia", "1  X  2", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morroco") +
      createGame("japan", "16:00", "spain") +
      createGame("costarica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southKorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "urugay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  ) +
  createCard(
    "03/12",
    "sábado",
    createGame("netherlands", "12:00", "unitedStates") +
      createGame("argentina", "16:00", "australia")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("france", "12:00", "poland") +
      createGame("england", "16:00", "senegal")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "09/12",
    "sexta",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("aconfirmar", "12:00", "aconfirmar") +
      createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "13/12",
    "terça",
    createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "14/12",
    "quarta",
    createGame("aconfirmar", "16:00", "aconfirmar")
  ) +
  createCard(
    "17/12",
    "sábado",
    createGame("aconfirmar", "12:00", "aconfirmar")
  ) +
  createCard(
    "18/12",
    "domingo",
    createGame("aconfirmar", "12:00", "aconfirmar")
  )
