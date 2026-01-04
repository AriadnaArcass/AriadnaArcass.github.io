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
  <p>Ens demanen la longitud final d'una barra d'acer després d'escalfar-se.</p>
  <p>- Fórmula: </p>
  <p> La llei de la dilatació lineal: </p>
   \\[
   \\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T
   \\]
   \\[
   L_f = L_0 + \\Delta L
   \\]
   <p>- Càlcul:</p>
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
category: "sistemes",
text: `Quina és la velocitat de rotació d’un cargol de pas (avanç per volta) \\(p = 2 mm\\) que té una velocitat d’avanç de \\(15 mm/s\\)?`,
options: [
{ text: "480 min–1", value: "a" },
{ text: "7,5 min–1", value: "b" },
{ text: "450 min–1", value: "c" },
{ text: "8 min–1", value: "d" }
],
correctAnswer: "c",
steps: `
<p>Ens demanen la velocitat de rotació \\(n\\) donant l'avanç i el pas.</p>
<p>- Fórmula: </p>
<p>La relació entre avanç, pas i velocitat angular:</p>
\\[
v_{av} = p \\cdot n \\quad \\rightarrow \\quad n = \\frac{v_{av}}{p} 
\\]
<p>- Càlcul:</p>
   \\[
   n = \\frac{15 \\text{ mm/s}}{2 \\text{ mm/volta}} = 7,5 \\text{ voltes/s} (s^{-1})
   \\]
   <p>Convertim a minuts \\(\\text{min}^{-1}\\) (rpm):</p>
   \\[
   n = 7,5 \\cdot 60 = 450 \\min^{-1}
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
<p>Ens demanen les emissions totals de \\(CO_2\\) en un any.</p>
<p>-Càlcul de distància total:</p>
\\[
\\text{Viatges diaris} = 4 \\frac{\\text{viatges}}{\\text{hora}} \\cdot 12 \\text{ hores} = 48 \\text{ viatges}
\\]
\\[
\\text{Km diaris} = 48 \\cdot 12 \\text{ km} = 576 \\text{ km}
\\]
\\[
\\text{Km anuals} = 576 \\cdot 270 = 155.520 \\text{ km}
\\]    
<p>-Càlcul emissions:</p>
\\[
\\text{Massa } CO_2 = 155.520 \\text{ km} \\cdot 1.155,52 \\frac{\\text{g}}{km} \\approx 179.706.470 \\text{ g}
\\]
<p>Passem a tones \\( 1\\,\\text{t} = 10^{6}\\,\\text{g} \\):</p>
\\[
179,71 \\text{ tones}
\\]
            <br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
 },
  {
        type: "questions", // Tipus de pregunta
        category: "principi",
        text: `Un bloc de massa \\(m = 3 kg\\) està unit mitjançant un cable al centre d’una politja de radi \\(R1 = 300 mm\\). Una corda ideal subjectada al sostre passa per la politja de la qual penja el bloc, i per una altra politja de radi \\(R2 = 150 mm\\) articulada al sostre pel seu punt mitjà. Quina força F cal fer per a mantenir el bloc en repòs?`,
        image: `<img src="https://ariadnaarcass.github.io/selectivitat2021/js2ex1q4.png" alt="Imatge relacionada amb la pregunta" width="150">`,
        options: [
            { text: "14,71 N", value: "a" },
            { text: "29,42 N", value: "b" },
            { text: "7,355 N", value: "c" },
            { text: "3,678 N", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
        <p>Ens demanen la força \\(F\\) per mantenir l'equilibri.</p>
        <p>-Anàlisi:</p>
        <p>Tenim una politja mòbil \\(R_1\\) que suporta la massa \\(m\\). La corda passa per sota, de manera que dues seccions de corda aguanten el pes. La tensió de la corda és igual a la força \\(F\\) que apliquem a l'extrem.</p>
        <p>-Fórmula:</p>
        <p>Equilibri de forces a la politja mòbil:</p>
        \\[
        2 \\cdot T = m \\cdot g \\quad (\\text{on } T = F)
        \\]
        \\[
        2F = m \\cdot g \\quad \\rightarrow \\quad F = \\frac{m \\cdot g}{2}
        \\]
        <p>-Càlcul:</p>
        \\[
        F = \\frac{3 \\text{ kg} \\cdot 9,81 \\text{ m/s}^2}{2} = 14,715 \\text{ N}
        \\]
           <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
    },
  {
        type: "questions", // Tipus de pregunta
        category: "sistemes",
        text: `Una bombona de gas butà conté \\(12,5 kg\\) d’aquest gas en estat líquid a una pressió de \\(303\\) kPa quan es troba a \\(20 °C\\). Aquestes bombones estan dissenyades perquè, si la pressió arriba a \\(2 634 kPa\\), salti la vàlvula de seguretat i surti el gas de l’interior. La bombona s’escalfa fins a \\(600 °C\\). Considerant el butà un gas ideal, es pot afirmar que`,
        options: [
            { text: "la bombona explotarà", value: "a" },
            { text: "es dispararà la vàlvula de seguretat", value: "b" },
            { text: "la pressió augmentarà fins a 902,8 kPa", value: "c" },
            { text: "la pressió a l’interior de la bombona no canviarà", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
        <p>Ens demanen què passa dins la bombona en augmentar la temperatura a volum constant.</p>
        <p>-Fórmula:</p>
        <p>Llei de Gay-Lussac (Volum constant):</p>
        \\[
        \\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\quad \\rightarrow \\quad P_2 = P_1 \\cdot \\frac{T_2}{T_1}
        \\]
        <p>-Càlcul:</p>
        \\[
        P_2 = 303 \\cdot \\frac{873}{293} \\approx 902,8 \\text{ kPa}
        \\]
        <p>La pressió final (902,8 kPa) és molt inferior al límit (2.634 kPa). No explota ni s'obre la vàlvula.</p>
           <br><br>
            <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
},
  {
        type: "exercicis", // Tipus de pregunta
        category: "control",
        text: `En una línia de producció hi ha una estació de treball on es realitzen operacions de tallat. El sistema de seguretat vol evitar que l’operari es trobi prop de l’eina de tall; amb aquesta finalitat, s’han instaŀlat quatre polsadors: dos de situats a mitja altura (que s’accionen amb les mans) i dos de situats al terra (que s’accionen amb els peus). Per a realitzar l’operació de tallat, cal que l’operari premi a la vegada almenys un polsador de mitja altura amb la mà i un del terra amb el peu. Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
        <br><br><img src="https://ariadnaarcass.github.io/selectivitat2021/js2ex2.png" alt="Imatge relacionada amb la pregunta" width="450"><br>
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [0,5 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br>`,
        steps: `
        <strong>a)Taula de veritat</strong>
        <br>
        <table>
        <thead>
        <tr>
        <th>\\(m1\\)</th>
        <th>\\(m2\\)</th>
        <th>\\(p1\\)</th>
        <th>\\(p2\\)</th>
        <th>\\(t\\)</th>
        </tr>
        </thead>
        <tbody>
        <tr><td>0</td><td>0</td><td>0</td><td>0<td>0</td></tr>
        <tr><td>0</td><td>0</td><td>0</td><td>1<td>0</td></tr>
        <tr><td>0</td><td>0</td><td>1</td><td>0<td>0</td></tr>
        <tr><td>0</td><td>0</td><td>1</td><td>1<td>0</td></tr>
        <tr><td>0</td><td>1</td><td>0</td><td>0<td>0</td></tr>
        <tr><td>0</td><td>1</td><td>0</td><td>1<td>1</td></tr>
        <tr><td>0</td><td>1</td><td>1</td><td>0<td>1</td></tr>
        <tr><td>0</td><td>1</td><td>1</td><td>1<td>1</td></tr>
        <tr><td>1</td><td>0</td><td>0</td><td>0<td>0</td></tr>
        <tr><td>1</td><td>0</td><td>0</td><td>1<td>1</td></tr>
        <tr><td>1</td><td>0</td><td>1</td><td>0<td>1</td></tr>
        <tr><td>1</td><td>0</td><td>1</td><td>1<td>1</td></tr>
        <tr><td>1</td><td>1</td><td>0</td><td>0<td>0</td></tr>
        <tr><td>1</td><td>1</td><td>0</td><td>1<td>1</td></tr>
        <tr><td>1</td><td>1</td><td>1</td><td>0<td>1</td></tr>
        <tr><td>1</td><td>1</td><td>1</td><td>1<td>1</td></tr>
        </tbody>
        </table>
        <br>
        <strong>b)Funció lògica</strong>
        \\[
        t = (m_1 + m_2 + p_1 + p_2) \\cdot (m_1 + m_2 + p_1 + \\bar{p}_2) \\cdot (m_1 + m_2 + \\bar{p}_1 + p_2)
        \\]
        \\[
        t = (m_1 + m_2 + \\bar{p}_1 + \\bar{p}_2) \\cdot (m_1 + \\bar{m}_2 + p_1 + p_2)
        \\]
        \\[
        t = (\\bar{m}_1 + m_2 + p_1 + p_2) \\cdot (\\bar{m}_1 + \\bar{m}_2 + p_1 + p_2)
        \\]
        <p>Simplifiquem:</p>
        \\[
        t = (m_1 + m_2) \\cdot (p_1 + p_2)
        \\]
        <strong>c)Esquema de portes lògiques</strong>
        /**
 * Objecte per emmagatzemar l'estat actual de les entrades
 */
const estatEntrades = {
    m1: false,
    m2: false,
    p1: false,
    p2: false
};

/**
 * Funció principal per calcular la lògica i actualitzar la interfície
 */
function actualitzarEsquema() {
    // 1. Càlcul de la lògica booleana
    // Porta OR superior: (p1 o p2)
    const resultatOrSuperior = estatEntrades.p1 || estatEntrades.p2;
    
    // Porta OR inferior: (m1 o m2)
    const resultatOrInferior = estatEntrades.m1 || estatEntrades.m2;
    
    // Porta AND final: (resultatOrSuperior i resultatOrInferior)
    const sortidaT = resultatOrSuperior && resultatOrInferior;

    // 2. Actualització visual dels cables (Cables d'entrada)
    pintarElement('cable-m1', estatEntrades.m1);
    pintarElement('cable-m2', estatEntrades.m2);
    pintarElement('cable-p1', estatEntrades.p1);
    pintarElement('cable-p2', estatEntrades.p2);

    // 3. Actualització visual de les sortides de les portes
    pintarElement('sortida-or-superior', resultatOrSuperior);
    pintarElement('sortida-or-inferior', resultatOrInferior);
    
    // 4. Actualització de la sortida final
    pintarElement('sortida-t', sortidaT);
    
    console.log(`Estat: m1:${estatEntrades.m1}, m2:${estatEntrades.m2}, p1:${estatEntrades.p1}, p2:${estatEntrades.p2}\nT: ${sortidaT}`);

}

/**
 * Funció auxiliar per canviar el color de les línies SVG
 * @param {string} id - L'ID de l'element SVG
 * @param {boolean} actiu - Si el senyal és 1 (true) o 0 (false)
 */
function pintarElement(id, actiu) {
    const el = document.getElementById(id);
    if (el) {
        // Apliquem un color verd si està actiu, o gris/negre si no
        el.style.stroke = actiu ? "#2ecc71" : "#000000";
        el.style.strokeWidth = actiu ? "3px" : "2px";
    }
}

/**
 * Funció per commutar el valor d'una entrada (per fer servir amb botons)
 * @param {string} entrada - 'm1', 'm2', 'p1' o 'p2'
 */
function toggleEntrada(entrada) {
    estatEntrades[entrada] = !estatEntrades[entrada];
    actualitzarEsquema();
}
           <br><br>
  }
];
