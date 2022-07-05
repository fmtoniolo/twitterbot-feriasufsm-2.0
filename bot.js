console.log("WorkIt\nMakeIt\nDoIt");

require("dotenv").config();
const Twit = require("twit");
const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
};

const T = new Twit(config);
const ferias = new Date("08/19/2022");
const aulas = new Date("04/11/2022");
const hoje = new Date();
const dias = 86400000;
const diasParaFerias = Math.ceil((ferias - Date.parse(hoje)) / dias);
const diasParaAulas = Math.ceil((aulas - Date.parse(hoje)) / dias);
const contarDias = (ehPeriodoDeAula = true) => {
  return ehPeriodoDeAula ? diasParaFerias : diasParaAulas;
};

function botInit() {
  const estamosEmAula = contarDias(true);
  const estamosEmFerias = contarDias(false);

  if (estamosEmAula >= 0) {
    switch (estamosEmAula) {
      case 30:
        T.post(
          "statuses/update",
          {
            status: `Boraaa! Falta um meszinho só 🥳`
          },
          function (error, tweet, response) {
            if (!error) {
              console.log(tweet);
            } else if (error) {
              console.log(error);
            }
          }
        );
        break;
      case 15:
        T.post(
          "statuses/update",
          {
            status: `Bom diaa! Dentro de 15 dias estaremos oficialmente em férias.`
          },
          function (error, tweet, response) {
            if (!error) {
              console.log(tweet);
            } else if (error) {
              console.log(error);
            }
          }
        );
        break;
      case 7:
        T.post(
          "statuses/update",
          {
            status: `Bom diaa! Daqui uma semaninha estaremos oficialmente em férias.`
          },
          function (error, tweet, response) {
            if (!error) {
              console.log(tweet);
            } else if (error) {
              console.log(error);
            }
          }
        );
        break;
      case 1:
        T.post(
          "statuses/update",
          {
            status: `É amanhã! Falta 1 (UNZINHO) dia para as férias na UFSM.`
          },
          function (error, tweet, response) {
            if (!error) {
              console.log(tweet);
            } else if (error) {
              console.log(error);
            }
          }
        );
        break;
      case 0:
        T.post(
          "statuses/update",
          {
            status: `SEXTOU! Tamo de férias 😎 #voltaremos`
          },
          function (error, tweet, response) {
            if (!error) {
              console.log(tweet);
            } else if (error) {
              console.log(error);
            }
          }
        );
        break;
      default:
        T.post(
          "statuses/update",
          {
            status: `Faltam ${estamosEmAula} dias para as férias na UFSM 🥱`
          },
          function (error, tweet, response) {
            if (!error) {
              console.log(tweet);
            } else if (error) {
              console.log(error);
            }
          }
        );
        break;
    }
  } else {
    if (estamosEmFerias < 0) {
      T.post(
        "statuses/update",
        {
          status: `Estamos em férias! Aguardando o calendário acadêmico.`
        },
        function (error, tweet, response) {
          if (!error) {
            console.log(tweet);
          } else if (error) {
            console.log(error);
          }
        }
      );
    } else {
      switch (estamosEmFerias) {
        case 30:
          T.post(
            "statuses/update",
            {
              status: `Falta um mês para as aulas na UFSM 👀`
            },
            function (error, tweet, response) {
              if (!error) {
                console.log(tweet);
              } else if (error) {
                console.log(error);
              }
            }
          );
          break;
        case 15:
          T.post(
            "statuses/update",
            {
              status: `Faltam 15 dias para as aulas na UFSM 👀`
            },
            function (error, tweet, response) {
              if (!error) {
                console.log(tweet);
              } else if (error) {
                console.log(error);
              }
            }
          );
          break;
        case 7:
          T.post(
            "statuses/update",
            {
              status: `Última semana de férias 🥺. Faltam 7 dias para as aulas na UFSM.`
            },
            function (error, tweet, response) {
              if (!error) {
                console.log(tweet);
              } else if (error) {
                console.log(error);
              }
            }
          );
          break;
        case 1:
          T.post(
            "statuses/update",
            {
              status: `Falta 1 dia para as aulas na UFSM. Aproveitaram as férias?`
            },
            function (error, tweet, response) {
              if (!error) {
                console.log(tweet);
              } else if (error) {
                console.log(error);
              }
            }
          );
          break;
        case 0:
          T.post(
            "statuses/update",
            {
              status: `BORAA! Hoje começam as aulas na UFSM 😎 #voltamos`
            },
            function (error, tweet, response) {
              if (!error) {
                console.log(tweet);
              } else if (error) {
                console.log(error);
              }
            }
          );
          break;
        default:
          T.post(
            "statuses/update",
            {
              status: `Faltam ${estamosEmFerias} dias para as aulas na UFSM 👀`
            },
            function (error, tweet, response) {
              if (!error) {
                console.log(tweet);
              } else if (error) {
                console.log(error);
              }
            }
          );
          break;
      }
    }
  }
}

setInterval(botInit, dias);
