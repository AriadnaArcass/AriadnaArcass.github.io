const questions = [
{
type: "exercicis",
category: "energia",
text: `S’han instal·lat \\(n = 50\\) aerogeneradors de 3 pales en un parc eòlic. 
              El diàmetre de l’àrea d’escombratge de les pales és \\(d = 77 \\, \\text{m}\\) i el rendiment dels aerogeneradors \\(\\eta_{\\text{aerog}} = 0{,}68\\). 
              S’estima que la velocitat mitjana del vent al parc és \\(v = 25 \\, \\text{km/h}\\); el parc està en funcionament 300 dies a l’any i obté energia 18 hores diàries. 
              La potència mitjana del vent \\(P_{\\text{vent}}\\) es pot estimar, per a un aerogenerador, com l’energia cinètica del vent per unitat de temps mitjançant l’expressió:
              \\[
              P_{\\text{vent}} = \\frac{1}{2} \\rho A v^3
              \\]
              en què \\(A\\) és l’àrea que escombren les pales de l’aerogenerador, \\(\\rho\\) és la densitat de l’aire i \\(v\\) és la velocitat del vent. 
              D’aquesta potència, el coeficient d’aprofitament del vent és \\(c_a = 0{,}42\\).
              
              Sabent que \\(1{,}225 \\, \\text{g}\\) d’aire ocupen un volum d’\\(1 \\, \\text{m}^3\\), determineu:
              <br><strong>a)</strong> La potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador. [0,5 punts]
              <br><strong>b)</strong> La potència elèctrica útil \\(P_{\\text{útil}}\\) que generarà cada aerogenerador. [0,5 punts]
              <br><strong>c)</strong> L’energia elèctrica total \\(E_{\\text{total}}\\) que es generarà al parc durant un any. [0,5 punts]
              <br><strong>d)</strong> Els ingressos que tindrà el parc eòlic si el preu de venda de l’energia eòlica és \\(p_{\\text{venda}} = 7{,}624\\) cèntims d’euro per \\(\\text{kWh}\\). [0,5 punts]
              <br><strong>e)</strong> En quin percentatge disminuirien els ingressos anteriors si la velocitat mitjana del vent es reduís un 10 %.
              <br><br>
              <img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`,  // Imatge opcional al final de la pregunta
correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
steps: `
           <strong>a) Càlcul de la potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador:</strong>
           <br>
           - Àrea d’escombratge de les pales:
           \\[
           A = \\frac{\\pi d^2}{4} = \\frac{\\pi \\times (77 \\, \\text{m})^2}{4} = 4657{,}7 \\, \\text{m}^2
           \\]
           - Densitat de l’aire:
           \\[
           \\rho = \\frac{1{,}225 \\, \\text{g}}{\\text{m}^3} = 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3}
           \\]
           - Velocitat del vent (en \\(\\text{m/s}\\)):
           \\[
           v = \\frac{25 \\, \\text{km/h}}{3{,}6} = 6{,}94 \\, \\text{m/s}
           \\]
           - Potència del vent:
           \\[
           P_{\\text{vent}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}94 \\, \\text{m/s})^3 = 828{,}08 \\, \\text{kW}
           \\]
           <br>
           <strong>b) Potència elèctrica útil \\(P_{\\text{útil}}\\) generada per cada aerogenerador:</strong>
           <br>
           - Aplicant el rendiment de l’aerogenerador:
           \\[
           P_{\\text{útil}} = P_{\\text{vent}} \\times \\eta_{\\text{aerog}} \\times c_a = 828{,}08 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 236{,}62 \\, \\text{kW}
           \\]
           <br>
           <strong>c) Energia elèctrica total \\(E_{\\text{total}}\\) generada al parc durant un any:</strong>
           <br>
           - Nombre total d'hores operatives a l'any:
           \\[
           h = 300 \\, \\text{dies/any} \\times 18 \\, \\text{h/dia} = 5400 \\, \\text{h/any}
           \\]
           - Energia generada per un aerogenerador:
           \\[
           E_{\\text{útil}} = P_{\\text{útil}} \\times h = 236{,}62 \\, \\text{kW} \\times 5400 \\, \\text{h} = 1277{,}75 \\, \\text{MWh/any}
           \\]
           - Energia total generada per 50 aerogeneradors:
           \\[
           E_{\\text{total}} = 1277{,}75 \\, \\text{MWh/any} \\times 50 = 63{,}89 \\, \\text{GWh/any}
           \\]
           <br>
           <strong>d) Ingressos del parc eòlic:</strong>
           <br>
           - Ingressos totals:
           \\[
           Ingressos = E_{\\text{total}} \\times p_{\\text{venda}} = 63{,}89 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 4865{,}9 \\, \\text{k€}
           \\]
           <br>
           <strong>e) Impacte d'una reducció del 10 % en la velocitat del vent:</strong>
           <br>
           - Nova velocitat del vent:
           \\[
           v_{nou} = 0{,}9 \\times v = 0{,}9 \\times 6{,}94 \\, \\text{m/s} = 6{,}25 \\, \\text{m/s}
           \\]
           - Nova potència del vent:
           \\[
           P_{\\text{vent, nou}} = \\frac{1}{2} \\times 1{,}225 \\, \\frac{\\text{kg}}{\\text{m}^3} \\times 4657{,}7 \\, \\text{m}^2 \\times (6{,}25 \\, \\text{m/s})^3 = 654{,}8 \\, \\text{kW}
           \\]
           - Nova potència útil:
           \\[
           P_{\\text{útil, nou}} = 654{,}8 \\, \\text{kW} \\times 0{,}68 \\times 0{,}42 = 187{,}19 \\, \\text{kW}
           \\]
           - Nova energia total:
           \\[
           E_{\\text{total, nou}} = 187{,}19 \\, \\text{kW} \\times 5400 \\, \\text{h} \\times 50 = 50{,}7 \\, \\text{GWh/any}
           \\]
           - Nous ingressos:
           \\[
           Ingressos_{nou} = 50{,}7 \\, \\text{GWh/any} \\times 7{,}624 \\, \\text{cèntims/kWh} = 3865{,}58 \\, \\text{k€}
           \\]
           - Percentatge de disminució:
           \\[
           \\frac{4865{,}9 - 3865{,}58}{4865{,}9} \\times 100 \\approx 20{,}6\\%
           \\]
           <br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
},
{
type: "questions", // Tipus de pregunta
category: "materialsiassaigs",
text: `Es disposa d’una barra d’acer amb una longitud inicial \\(L= 800 mm\\) a \\(20 °C\\). El coeficient de dilatació lineal de l’acer és \\(α = 13 × 10–6 °C–1\\). Quina serà la longitud final quan la temperatura hagi incrementat \\(400 °C\\)?
`,
options: [
{ text: "804,16 mm", value: "a" },
{ text: "803,95 mm", value: "b" },
{ text: "800,01 mm", value: "c" },
{ text: "800,30 mm", value: "d" }
],
correctAnswer: "a",
  steps: `
<strong>a) Càlcul del canvi de longitud ΔL: </strong>

           
           - La fórmula de dilatació tèrmica lineal és: 
           \\[
           \\Delta L = L \\times \\alpha \\times \\Delta T
           \\]
           - Substituint els valors:
           \\[
           \\Delta L = 800 \\, \\text{mm} \\times 13 \\times 10^{-6} \\, ^\\circ\\text{C}^{-1} \\times 400 \\, ^\\circ\\text{C} = 4{,}16 \\, \\text{mm}
           \\]
           <strong>b) Càlcul de la longitud final:</strong>
           <br>
           - La longitud final és la suma de la longitud inicial i el canvi:
           \\[
           L_{\\text{final}} = L + \\Delta L = 800 \\, \\text{mm} + 4{,}16 \\, \\text{mm} = 804{,}16 \\, \\text{mm}
           \\]
           <br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
},
{
type: "questions", // Tipus de pregunta
category: "sistemespneumaticsioleohidraulics",
text: `Quina és la velocitat de rotació d’un cargol de pas (avanç per volta) \\(p = 2 mm\\) que té una velocitat d’avanç de \\(15 mm/s\\)?`,
options: [
{ text: "480 min–1", value: "a" },
{ text: "7,5 min–1", value: "b" },
{ text: "450 min–1", value: "c" },
{ text: "8 min–1", value: "d" }
],
correctAnswer: "c",
steps: `
          <strong>Càlcul de la velocitat de rotació del cargol:</strong>
            <br>
            - Fórmula utilitzada:
            \\[
            v = n \\times p
            \\]
            - On:
            \\[
            v = 15 \\, \\text{mm/s} \\quad (\\text{velocitat d'avanç})
            \\]
            \\[
            p = 2 \\, \\text{mm/rev} \\quad (\\text{pas del cargol})
            \\]
            \\[
            n = \\frac{v}{p} = \\frac{15 \\, \\text{mm/s}}{2 \\, \\text{mm/rev}} = 7{,}5 \\, \\text{rev/s}
            \\]
            - Convertir a revolucions per minut:
            \\[
            n_{\\text{min}^{-1}} = 7{,}5 \\, \\text{rev/s} \\times 60 \\, \\text{s/min} = 450 \\, \\text{min}^{-1}
            \\]
           <br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
{
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `Un trajecte interurbà circular d’autobús té una \\(longitud de 12 km\\) i un total de \\(6 parades\\). La freqüència de pas de l’autobús és de \\(15 minuts durant 12 hores al dia, 270 dies l’any\\). L’Oficina Catalana del Canvi Climàtic estima un factor d’emissió \\(FE = 1 155,52 g de CO2 /km\\) per a aquest tipus d’autobús. Quina petjada de carboni deixa l’autobús al cap de l’any?`,
        options: [
            { text: "11,23 tones de CO2", value: "a" },
            { text: "179,71 tones de CO2", value: "b" },
            { text: "6,739 tones de CO2", value: "c" },
            { text: "242,94 tones de CO2", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <strong>Càlcul de la petjada de carboni de l'autobús:</strong>
            <br>
            - Fórmula utilitzada:
            \\[
            \\text{Emissions totals} = \\text{Distància total} \\times \\text{FE}
            \\]
            - On:
            \\[
            \\text{FE} = 1155{,}52 \\, \\text{g CO}_2/\\text{km}
            \\]
            - Nombre de viatges per dia:
            \\[
            \\text{Viatges/dia} = \\frac{12 \\, \\text{h} \\times 60 \\, \\text{min/h}}{15 \\, \\text{min/viatge}}
            \\]
            <br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
  }
];
