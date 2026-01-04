const questions = [
{
type: "questions", // Tipus de pregunta
category: "materials",
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
  Ens demanen la longitud final d'una barra d'acer després d'escalfar-se.
  - Dades: 
   Longitud inicial \\(L_0 = 800 mm\\)
   Coeficient de dilatació \\(alpha = 13 \\times 10^{-6} \\ ^ \\circ C^{-1}\\) 
   Increment de temperatura \\(Delta T) = 400 \\ ^\\circ C\\) 
   
  - Fórmula: 
   La llei de la dilatació lineal: 
   \\[
   \\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T
   \\]
   \\[
   L_f = L_0 + \\Delta L
   \\]
   

   - Càlcul: 
   \\[
   \\Delta L = 800 \\text{ mm} \\cdot 13 \\cdot 10^{-6} \\ ^\\circ C^{-1} \\cdot 400 \\ ^\\circ C = 4,16 \\text{ mm}
   \\]
   \\[
   L_f = 800 + 4,16 = 804,16 \\text{ mm}
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
 },
  {
        type: "questions", // Tipus de pregunta
        category: "principidelesmaquines",
        text: `Un bloc de massa \\(m = 3 kg\\) està unit mitjançant un cable al centre d’una politja de radi \\(R1 = 300 mm\\). Una corda ideal subjectada al sostre passa per la politja de la qual penja el bloc, i per una altra politja de radi \\(R2 = 150 mm\\) articulada al sostre pel seu punt mitjà. Quina força F cal fer per a mantenir el bloc en repòs? `,
        options: [
            { text: "14,71 N", value: "a" },
            { text: "29,42 N", value: "b" },
            { text: "7,355 N", value: "c" },
            { text: "3,678 N", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
      
    \\[
    \\text{Massa del bloc} = 3 \\, \\text{kg} 
    \\]
    \\[
    \\text{Acceleració de la gravetat} = 9{,}81 \\, \\text{m/s}^2 
    \\]
    \\[
    \\text{Pes del bloc} = m \\cdot g = 3 \\cdot 9{,}81 = 29{,}42 \\, \\text{N} 
    \\]
    \\[
    \\text{La politja mòbil està sostinguda per dos trams de corda} 
    \\]
    \\[
    \\text{Condició d'equilibri: } 2T = P 
    \\]
    \\[
    2T = 29{,}42 \\Rightarrow T = \\frac{29{,}42}{2} = 14{,}71 \\, \\text{N} 
    \\]
    \\[
    \\text{La politja superior és fixa, per tant } F = T 
    \\]
    \\[
    \\boxed{F = 14{,}71 \\, \\text{N}} 
    \\]
           <br><br>
           <img src="ruta/a/js2ex1q4.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/js2ex1q4.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
  }
];
