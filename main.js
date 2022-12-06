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
    createGame("croatia", "0  X  0", "belgium") +
      createGame("canada", "1  X  2", "morroco") +
      createGame("japan", "2  X  1", "spain") +
      createGame("costarica", "2  X  4", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southKorea", "2  X  1", "portugal") +
      createGame("ghana", "0  X  2", "urugay") +
      createGame("serbia", "2  X  3", "switzerland") +
      createGame("cameroon", "1  X  0", "brazil")
  ) +
  createCard(
    "03/12",
    "sábado",
    createGame("netherlands", "3  X  1", "unitedStates") +
      createGame("argentina", "2  X  1", "australia")
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("france", "3  X  1", "poland") +
      createGame("england", "3  X  0", "senegal")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("japan", "1(1)x1(3)", "croatia") +
      createGame("brazil", "4  X  1", "southKorea")
  ) +
  createCard(
    "06/12",
    "terça",
    createGame("morroco", "0(3)x0(0)", "spain") +
      createGame("portugal", "6  X  1", "switzerland")
  ) +
  createCard(
    "09/12",
    "sexta",
    createGame("croatia", "12:00", "brazil") +
      createGame("netherlands", "16:00", "argentina")
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame("morroco", "12:00", "portugal") +
      createGame("england", "16:00", "france")
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
