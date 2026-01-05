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
        text: `Un bloc de massa \\(m = 3 kg\\) està unit mitjançant un cable al centre d’una politja de radi \\(R1 = 300 mm\\). Una corda ideal subjectada al sostre passa per la politja de la qual penja el bloc, i per una altra politja de radi \\(R2 = 150 mm\\) articulada al sostre pel seu punt mitjà. Quina força F cal fer per a mantenir el bloc en repòs?
        
        <img src="https://ariadnaarcass.github.io/selectivitat2021/js2ex1q4.png" alt="Imatge relacionada amb la pregunta" width="150">`,
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
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punts]
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
        <br><br>
        <img src="https://ariadnaarcass.github.io/selectivitat2021/js2ex2c.png" alt="Imatge relacionada amb la pregunta" width="300">
        <br>`,
       },
  {
        type: "exercicis", // Tipus de pregunta
        category: "motors",
        text: `Un bombo de maceració serveix per a barrejar la carn amb els productes que la conserven. Per a fer-lo funcionar, es fa girar el bombo (1) al voltant d’un eix horitzontal per mitjà d’una corretja (2) accionada per un motor reductor (3). El motor subministra una potència \\(Pmot = 0,55 kW\\) i gira a \\(nmot = 1 415 min–1\\). El reductor té un rendiment \\(ηred = 0,96\\) i una relació de transmissió \\(τ = ωred/ωmot = 68,9 × 10–3\\). L’eix del reductor fa girar la politja de diàmetre \\(d = 63 mm\\), la qual, mitjançant una corretja ideal que no llisca, fa girar la segona politja de diàmetre \\(D = 500 mm\\). L’eix d’aquesta última politja es connecta directament al bombo de maceració. Determineu:
        <br><br><img src="https://ariadnaarcass.github.io/selectivitat2021/js2ex3.png" alt="Imatge relacionada amb la pregunta" width="250"><br>
<br><strong>a)</strong> Parell a l'eix del motor \\( \\Gamma_{mot} \\). [0,5 punts]
<br><strong>b)</strong> Parell a l'eix de sortida del reductor \\( \\Gamma_{red} \\). [0,5 punts]
<br><strong>c)</strong> Velocitat de la politja petita \\( n_d \\). [0,5 punts]
<br><strong>d)</strong> Velocitat del bombo \\( n_{bombo} \\). [0,5 punts]
<br><strong>e)</strong> Parell a l'eix del bombo \\( T_{bombo} \\). [0,5 punts]
               <br>`,
        steps: `
        <strong>a) Parell a l'eix del motor \\(\\Gamma_{mot}\\)</strong>
        <p>- Fórmula:</p>
        \\[
        P = \\Gamma \\cdot \\omega
        \\]
        <p>Cal passar \\( n \\) a rad/s.</p>
        <p>-Càlcul:</p>
        \\[
        \\omega_{mot} = 1415 \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{2\\pi}{60} \\approx 148,18 \\text{ rad/s}
        \\]
        \\[
        \\Gamma_{mot} = \\frac{P_{mot}}{\\omega_{mot}} = \\frac{550}{148,18} = 3,71 \\text{ Nm}
        \\]
        <strong>b)Parell a l'eix de sortida del reductor \\(\\Gamma_{red}\\)</strong>
        <p>El reductor augmenta el parell i redueix la velocitat, però perdem energia pel rendiment.</p>
        <p>-Fórmules:</p>
        \\[
        \\omega_{red} = \\omega_{mot} \\cdot \\tau_{red}
        \\]
        \\[
        P_{red\\_sortida} = P_{mot} \\cdot \\eta_{red}
        \\]
        \\[
        \\Gamma_{red} = \\frac{P_{red\\_sortida}}{\\omega_{red}}
        \\]
        <p>-Càlcul:</p>
        \\[
        \\omega_{red} = 148,18 \\cdot 0,0689 = 10,21 \\text{ rad/s}
        \\]
        \\[
        P_{red\\_sortida} = 550 \\cdot 0,96 = 528 \\text{ W}
        \\]
        \\[
        \\Gamma_{red} = \\frac{528}{10,21} = 51,71 \\text{ Nm}
        \\]
        <strong>c)Velocitat de la politja petita \\(n_d\\)</strong>
        <p>La politja petita està connectada directament a l'eix de sortida del reductor.</p>
        <p>-Fórmula:</p>
        \\[
        n_d = n_{mot} \\cdot \\tau_{red} 
        \\]
        <p>-Càlcul:</p>
        \\[
        n_d = 1415 \\cdot 0,0689 = 97,49 \\text{ min}^{-1}
        \\]
        <strong>d)Velocitat del bombo \\(n_{bombo}\\)</strong>
        <p>-Fórmula:</p>
        <p>Relació de transmissió per politges:</p>
        \\[
        n_1 \\cdot d = n_2 \\cdot D
        \\]
        <p>-Càlcul:</p>
        \\[
        n_{bombo} = n_d \\cdot \\frac{d}{D} = 97,49 \\cdot \\frac{63}{500} = 12,28 \\text{ min}^{-1}
        \\]
        <strong>e)Parell a l'eix del bombo \\(T_{bombo}\\)</strong>
        <p>Considerem la corretja ideal (sense pèrdues de potència entre politges)</p>
        \\[
        P_{bombo} = P_{red\\_sortida} = 528 \\text{ W}
        \\]
        <p>-Càlcul:</p>
        \\[
        \\omega_{bombo} = 12,28 \\cdot \\frac{2\\pi}{60} = 1,286 \\text{ rad/s}
        \\]
        \\[
        T_{bombo} = \\frac{528}{1,286} = 410,57 \\text{ Nm}
        \\]
        <br>`,
     },
  {
        type: "exercicis", // Tipus de pregunta
        category: "energia",
        text: `L’Ajuntament d’un poble ha aprovat un pla de millora energètica i ambiental que inclou la instaŀlació de conjunts de plaques solars fotovoltaiques en un dels edificis municipals amb la finalitat de cobrir un \\(r = 15 %\\) de la demanda d’electricitat. La potència total instaŀlada en aquest edifici és \\(Pinst = 30 kW\\) i s’estima un consum mitjà \\(c = 75 %\\) durant \\(t = 12 h/dia\\). El factor d’emissió de la comercialitzadora elèctrica és \\(FE = 241 g CO2/(kW h)\\). L’Ajuntament ha escollit una placa que té una àrea efectiva \\(A = 1,45 m2\\) i que, en condicions normals (és a dir, a \\(20 °C\\) i amb una intensitat de radiació solar \\(Irad = 1 000 W/m2\\)) subministra una potència \\(Pplaca = 194 W\\). Determineu:
               <br><strong>a)</strong> Energia total consumida a l'any \\(E_{cons}\\). [0,5 punts]
               <br><strong>b)</strong> Potència que ha de subministrar la instal·lació \\(P_{foto}\\).  [0,5 punt]
               <br><strong>c)</strong> Rendiment de la placa \\(\\eta_{placa}\\). [0,5 punts]
               <br><strong>d)</strong> Nombre mínim de plaques \\(n_p\\). [0,5 punts]
               <br><strong>e)</strong> Estalvi d'emissions \\(\\Delta m\\). [0,5 punts]
               <br>`,
        steps: `
        <strong>a)Energia total consumida a l'any \\(E_{cons}\\)</strong>
        <p>-Càlcul:</p>
        \\[
        P_{mitjana} = P_{inst} \\cdot c = 30 \\text{ kW} \\cdot 0,75 = 22,5 \\text{ kW}
        \\]
        \\[
        E_{diaria} = 22,5 \\text{ kW} \\cdot 12 \\text{ h} = 270 \\text{ kWh/dia}
        \\]
        \\[
        E_{anual} = 270 \\cdot 365 = 98.550 \\text{ kWh}
        \\]
        <strong>b)Potència que ha de subministrar la instal·lació \\(P_{foto}\\)</strong>
        <p>L'enunciat diu "cobrir un 15% de la demanda". Això s'interpreta com el 15% de la potència mitjana de consum.</p>
        <p>-Càlcul:</p>
        \\[
        P_{foto} = P_{mitjana} \\cdot 0,15 = 22,5 \\text{ kW} \\cdot 0,15 = 3,375 \\text{ kW} = 3.375 \\text{ W}
        \\]
        <strong>c)Rendiment de la placa \\(\\eta_{placa}\\)</strong>
        <p>-Fórmula:</p>
        \\[
        \\eta = \\frac{P_{sortida}}{P_{entrada}}
        \\]
        <p>-Càlcul:</p>
        <p>Potència solar rebuda (Entrada) = \\( I_{rad} \\cdot A = 1000\\,\\text{W/m}^2 \\cdot 1{,}45\\,\\text{m}^2 = 1450\\,\\text{W} \\)</p>
        \\[
        \\eta = \\frac{194 \\text{ W}}{1450 \\text{ W}} = 0,1338 \\quad \\rightarrow \\quad 13,38\\%
        \\]
        <strong>d)Nombre mínim de plaques \\(n_p\\)</strong>
        <p>-Càlcul:</p>
        \\[
        n_p = \\frac{\\text{Potència necessària}}{\\text{Potència per placa}} = \\frac{3.375 \text{ W}}{194 \\text{ W}} = 17,39
        \\]
        <p>Hem d'arrodonir cap amunt per garantir la potència.</p>
        \\[
        n_p = 18 \\text{ plaques}
        \\]
        <strong>e)Estalvi d'emissions \\(\\Delta m\\)</strong>
        <p>Estalviem el 15% de l'energia anual.</p>
        <p>-Càlcul:</p>
        \\[
        E_{estalviada} = 98.550 \\text{ kWh} \\cdot 0,15 = 14.782,5 \\text{ kWh}
        \\]
        \\[
        \\Delta m_{CO2} = 14.782,5 \\text{ kWh} \\cdot 241 \\frac{\\text{g}}{\\text{kWh}} = 3.562.582,5 \\text{ g}
        \\]
        \\[
        \\Delta m \\approx 3.562,6 \\text{ kg de } CO_2 \\text{ (o } 3,56 \\text{ tones)}
        \\]
         <br>`,
     },
  {
        type: "exercicis", // Tipus de pregunta
        category: "principis",
        text: `Una persona de massa \\(m = 80 kg\\) utilitza l’estructura de barres de la figura per a fer exercicis de gimnàstica a casa. L’estructura té articulacions a la paret pels punts O i S. La barra QS està unida a la barra OP mitjançant una articulació. En la situació d’estudi, la persona es penja del punt P (sense que els peus toquin a terra) i s’hi manté en repòs. 
        <br><br><img src="https://ariadnaarcass.github.io/selectivitat2021/js2ex5.png" alt="Imatge relacionada amb la pregunta" width="250"><br>
<br><strong>a)</strong> Dibuixeu el diagrama de cos lliure de la barra OP. [0,5 punts]
<br><strong>b)</strong> La força \\(F_{QS}\\) a la qual està sotmesa la barra QS. A quin tipus d’esforç està sotmesa aquesta barra?  [1 punts]
<br><strong>c)</strong> Les forces horitzontal \\(F_H\\) i vertical \\(F_V\\) a l’articulació O. [1 punts]
               <br>`,
        steps: `
        <strong>a) Diagrama del cos lliure de la barra OP</strong>
        <br><br>
        <img src="https://ariadnaarcass.github.io/selectivitat2021/js2ex5a.png" alt="Imatge relacionada amb la pregunta" width="300">
        <br>
        <strong>b)Força \\(F_{QS}\\) i tipus d'esforç</strong>
        <p>-Càlcul:</p>
        <p>Sumatori de moments respecte al punt O (per eliminar les incògnites de la reacció a O).</p>
        \\[
        \\sum M_O = 0
        \\]
        <p>La força \\( F_{QS} \\) té una component vertical \\( F_{QS_y} = F_{QS} \\cdot \\sin(30^\\circ) \\).</p>
        \\[
        (F_{QS} \\cdot \\sin 30^\\circ) \\cdot 4L - (m \\cdot g) \\cdot 6L = 0
        \\]
        \\[
        F_{QS} \\cdot 0,5 \\cdot 4L = 784,8 \\cdot 6L
        \\]
        \\[
        F_{QS} \\cdot 2L = 4708,8 \\cdot L \\quad (\\text{Les L se simplifiquen})
        \\]
        \\[
        F_{QS} = \\frac{4708,8}{2} = 2.354,4 \\text{ N}
        \\]
        <p>La barra QS empeny la barra OP cap amunt, per tant, la barra OP empeny QS cap avall (compressió). Esforç: Compressió.</p>
        <strong>c)Forces a l'articulació O \\(F_H, F_V\\)</strong>
        <p>-Equilibri de forces:</p>
        <p>Horitzontal (x):</p>
        \\[
        R_{Ox} - F_{QS\\_x} = 0 \\rightarrow R_{Ox} = F_{QS} \\cdot \\cos(30^\\circ).
        \\]
        \\[
        F_H = 2.354,4 \\cdot \\cos 30^\\circ = 2.038,97 \\text{ N}
        \\]
        <p>Vertical (y):</p>
        \\[
        R_{Oy} + F_{QS\\_y} - mg = 0.
        \\]
        \\[
        R_{Oy} + (2.354,4 \\cdot 0,5) - 784,8 = 0
        \\]
        \\[
        R_{Oy} + 1177,2 - 784,8 = 0 \\rightarrow R_{Oy} = -392,4 \\text{ N}
        \\]
        <p>El signe negatiu indica que la força vertical a O realment va cap avall (l'articulació estira la barra avall perquè no roti cap amunt pel pivotatge a Q).</p>
        \\[
        F_V = 392,4 \\text{ N (cap avall)}
        \\]
        <br>`,
    },
  {
        type: "exercicis", // Tipus de pregunta
        category: "energia",
        text: `S’utilitza un petit generador elèctric dièsel per a subministrar electricitat a llocs on no arriba el corrent elèctric. El sistema es compon d’un motor dièsel (amb una velocitat de gir del motor \\(n = 3 000 min–1)\\) i un alternador monofàsic units directament per un eix comú. El gasoil utilitzat té un poder calorífic \\(pc = 44,8 MJ/kg\\) i una densitat \\(ρgasoil = 0,85 kg/L\\). La potència subministrada pel motor dièsel és \\(Pmot = 7,457 kW\\), i la subministrada per l’alternador \\(Pelèctr = 5,5 kW\\). El sistema disposa d’un dipòsit de combustible de volum \\(V= 14 L\\) que garanteix \\(t = 13 h\\) d’autonomia en les condicions descrites. Determineu:
               <br><strong>a)</strong> El rendiment de l’alternador \\(\\eta_{alt}\\). [0,5 punts]
               <br><strong>b)</strong> El consum del motor dièsel \\(c_{gasoil}\\) en g/h.  [0,5 punt]
               <br><strong>c)</strong> El rendiment del motor \\(\\eta_{mot}\\). [1 punts]
               <br><strong>d)</strong> La potència total dissipada \\(P_{diss}\\) pel conjunt. [0,5 punts]
               <br>`,
        steps: `
        <strong>a)Rendiment de l'alternador \\(\\eta_{alt}\\)</strong>
        <p>-Fórmula:</p>
        \\[
        \\eta = P_{sortida} / P_{entrada} \\text {(l'entrada de l'alternador és la sortida del motor)}
        \\]
        <p>-Càlcul</p>
        \\[
        \\eta_{alt} = \\frac{P_{elec}}{P_{mot}} = \\frac{5,5}{7,457} = 0,7375 \\quad \\rightarrow \\quad 73,75\\%
        \\]
        <strong>b)Consum del motor \\(c_{gasoil}\\) en g/h</strong>
        <p>-Massa total combustible:</p>
        \\[
        m_{total} = V \\cdot \\rho = 14 \\text{ L} \\cdot 0,85 \\text{ kg/L} = 11,9 \\text{ kg} = 11.900 \\text{ g}
        \\]
        <p>-Consum horari:</p>
        \\[
        c_{gasoil} = \\frac{m_{total}}{t} = \\frac{11.900 \\text{ g}}{13 \\text{ h}} = 915,38 \\text{ g/h}
        \\]
        <strong>c) Rendiment del motor \\(\\eta_{mot}\\)</strong>
        <p>Potència calorífica aportada \\(P_{comb}\\): Primer passem el consum a kg/s:</p>
        \\[
        \\dot{m} = \\frac{11,9 \\text{ kg}}{13 \\cdot 3600 \\text{ s}} = 2,54 \\times 10^{-4} \\text{ kg/s}
        \\]
        \\[
        P_{comb} = \\dot{m} \\cdot pc = 2,54 \\times 10^{-4} \\text{ kg/s} \\cdot 44,8 \\times 10^6 \\text{ J/kg} = 11.391 \\text{ W} = 11,39 \\text{ kW}
        \\]
        <p>-Rendiment:</p>
        \\[
        \\eta_{mot} = \\frac{P_{mot}}{P_{comb}} = \\frac{7,457}{11,39} = 0,6547 \\quad \\rightarrow \\quad 65,47\\%
        \\]
        <strong>d)Potència total dissipada \\(P_{diss}\\)</strong>
        <p>És la diferència entre l'energia total que entra (combustible) i l'energia útil final que surt (electricitat).</p>
        \\[
        P_{diss} = P_{comb} - P_{elec}
        \\]
        \\[
        P_{diss} = 11{,}39\\,\\text{kW} - 5{,}5\\,\\text{kW} = 5{,}89\\,\\text{kW}
        \\]
         <br>`,
    },
{
type: "questions", // Tipus de pregunta
category: "materials",
text: `Una proveta de níquel té una secció circular de \\(10 mm de diàmetre\\) i una \\(longitud de 120 mm\\). El \\(mòdul elàstic del níquel és de 207 × 103 MPa\\), el seu \\(límit elàstic és de 138 MPa\\) i la seva \\(resistència al trencament és de 483 MPa\\). Es duu a terme un assaig de tracció aplicant una \\(força de 35 kN\\) a la proveta. Un cop es deixi d’aplicar-hi la càrrega, es pot afirmar que la proveta`,
options: [
{ text: "s’haurà trencat.", value: "a" },
{ text: "s’haurà deformat plàsticament.", value: "b" },
{ text: "tornarà a la seva longitud inicial.", value: "c" },
{ text: "haurà augmentat de diàmetre.", value: "d" }
],
correctAnswer: "b",
steps: `
<p>-Càlcul tensió \\(\\sigma\\):</p>
\\[
A = \\pi \\cdot r^2 = \\pi \\cdot 25 \\approx 78,54 \\text{ mm}^2
\\]
\\[
\\sigma = \\frac{F}{A} = \\frac{35.000}{78,54} = 445,6 \\text{ MPa}
\\]
<p>La tensió (445 MPa) és superior al límit elàstic (138 MPa) però inferior al de trencament (483 MPa).</p>
           <br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
  },
{
type: "questions", // Tipus de pregunta
category: "metrologia",
text: `En un circuit elèctric, es connecten en sèrie dues resistències de \\(12 \\Omega\\) cadascuna i toleràncies de \\(\\pm 0,25\\% i \\pm 1\\%\\), respectivament. Tenint en compte aquesta informació, es pot afirmar que la resistència equivalent`,
options: [
{ text: "té un valor màxim de 24,24 Ω.", value: "a" },
{ text: "té un valor mínim de 23,85 Ω.", value: "b" },
{ text: "té un valor màxim de 24,3 Ω.", value: "c" },
{ text: "té un valor mínim de 23,82 Ω.", value: "d" }
],
correctAnswer: "b",
steps: `
<p>-Càlcul valors extrems:</p>
\\[
R1 (mín): 12 \\cdot 0,9975 = 11,97 \\Omega.
\\]
\\[
R2 (mín): 12 \\cdot 0,99 = 11,88 \\Omega.
\\]
\\[
Total Mínim: 11,97 + 11,88 = 23,85 \\Omega.
\\]
           <br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
  },
{
type: "questions", // Tipus de pregunta
category: "energia",
text: `El conductor d’un cotxe pot decidir si utilitza com a combustible gasolina o gas liquat del petroli (GLP). Quan fa servir gasolina consumeix \\(6,3 L/100 km\\) i emet \\(149 g de CO2 per kilòmetre\\) recorregut, i quan fa servir GLP consumeix \\(7,0 L/100 km\\) i emet \\(114 g de CO2 per kilòmetre\\) recorregut. Segons el combustible utilitzat, quina és la diferència en la petjada de carboni, expressada en grams de CO2 per litre de combustible?`,
options: [
{ text: "736,5 g/L", value: "a" },
{ text: "2 365 g/L", value: "b" },
{ text: "1 629 g/L", value: "c" },
{ text: "3 994 g/L", value: "d" }
],
correctAnswer: "a",
steps: `
<p>-Càlculs:</p>
\\[
Gasolina: 149 \\text{ g/km} \\div 0,063 \\text{ L/km} = 2.365,08 \\text{ g } CO_2/L.
\\]
\\[
GLP: 114 \\text{ g/km} \\div 0,070 \\text{ L/km} = 1.628,57 \\text{ g } CO_2/L.
\\]
\\[
Diferència: 2.365 - 1.628,5 = 736,5 \\text{ g/L}.
\\]
           <br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
  },
{
type: "questions", // Tipus de pregunta
category: "energia",
text: `El motor d’una motocicleta desenvolupa una potència efectiva màxima de \\(7,8 kW a 7 750 min–1\\). Quin parell subministra en aquest moment?`,
options: [
{ text: "9,611 N m", value: "a" },
{ text: "1,997 N m", value: "b" },
{ text: "16,02 N m", value: "c" },
{ text: "60,39 N m", value: "d" }
],
correctAnswer: "a",
steps: `
<p>-Càlcul:</p>
\\[
\\Gamma = \\frac{P}{\\omega} = \\frac{7800}{7750 \\cdot \\frac{2\\pi}{60}} = \\frac{7800}{811,57} = 9,61 \\text{ Nm}
\\]
<br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
  ,
{
type: "questions", // Tipus de pregunta
category: "materials",
text: `Els aliatges crom-cobalt són molt utilitzats en les pròtesis dentals. En un aliatge amb un 63 % de cobalt (Co), un \\(30 %\\) de crom (Cr), un \\(5 %\\) de molibdè (Mo) i la resta del percentatge d’altres components (Si, Mn, C), quina quantitat de Co es necessita si s’usen \\(17 g\\) de Cr?`,
options: [
{ text: "56,6 g", value: "a" },
{ text: "3,97 g", value: "b" },
{ text: "35,7 g", value: "c" },
{ text: "17,0 g", value: "d" }
],
correctAnswer: "c",
steps: `
<p>-Càlcul:</p>
<p>Si 17 g són el 30%, la massa total de l'aliatge és:</p>
\\[
M_{total} = \\frac{17}{0,30} = 56,66 \\text{ g}
\\]
<p>Massa de Cobalt (63% del total):</p>
\\[
M_{Co} = 56,66 \\cdot 0,63 = 35,7 \\text{ g}
\\]
<br><br>
           <img src="ruta/a/imatgeResposta.jpg" alt="Imatge relacionada amb la resposta">`,  // Imatge opcional al final de la resposta
images: `<img src="ruta/a/imatgePregunta.jpg" alt="Imatge relacionada amb la pregunta">`  // Imatge opcional al final de la pregunta
  },
  {
        type: "exercicis", // Tipus de pregunta
        category: "control",
        text: `El sistema d’obertura automàtica de portes d’emergència està format per tres detectors: un detector de fum, un de temperatura i un de tensió elèctrica de la xarxa. La porta s’obre si es detecta fum i un augment brusc de la temperatura, o si la tensió d’alimentació passa a ser nuŀla. Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
        <br><br><img src="https://ariadnaarcass.github.io/selectivitat2021/js5ex2.png" alt="Imatge relacionada amb la pregunta" width="450"><br>
               <br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br>`,
        steps: `
        <strong>a)Taula de veritat</strong>
        <br>
        <table>
        <thead>
        <tr>
        <th>\\(f\\)</th>
        <th>\\(t\\)</th>
        <th>\\(v\\)</th>
        <th>\\(p\\)</th>
        </tr>
        </thead>
        <tbody>
        <tr><td>0</td><td>0</td><td>0</td><td>1</td></tr>
        <tr><td>0</td><td>0</td><td>1</td><td>0</td></tr>
        <tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>
        <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
        <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
        <tr><td>1</td><td>0</td><td>1</td><td>0</td></tr>
        <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
        <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
        </tbody>
        </table>
        <br>
        <strong>b)Funció lògica</strong>
        \\[
        p = (f + t + p_1 + \\bar{v}) \\cdot (f + \\bar{t} + \\bar{v}) \\cdot (\\bar{f} + t + \\bar{v})
        \\]
        <p>Simplifiquem:</p>
        \\[
        p = (f \\cdot t) + \\bar{v} 
        \\]
        <strong>c)Esquema de portes lògiques</strong>
        <br><br>
        <img src="https://ariadnaarcass.github.io/selectivitat2021/js5ex2c.png" alt="Imatge relacionada amb la pregunta" width="300">
        <br>`,
    },
  {
        type: "exercicis", // Tipus de pregunta
        category: "energia",
        text: `Una central de carbó té \\(n = 3\\) grups de turbines de vapor amb una potència \\(P_turb = 362 MW\\) cada un i utilitza carbó del tipus lignit amb un poder calorífic \\(pc_c = 28 400 kJ/kg\\) i una densitat \\(ρ = 1 050 kg/m3\\). La central està en funcionament les \\(24 hores\\) del dia i té un rendiment \\(ηc = 0,236\\). Determineu:
               <br><strong>a)</strong> L’energia diària consumida \\(E_{cons}\\) que cal aportar a la central. [1 punts]
               <br><strong>b)</strong> La massa de carbó \\m_c\\ diària necessària perquè funcioni.  [0,5 punt]
               <p>S’estima que si la central treballés amb querosè (de poder calorífic \\(pc_q = 43 400 kJ/kg)\\) n’utilitzaria \\(m_q = 6 177 × 103 kg\\) diaris i mantindria constant la potència subministrada per cada turbina. Determineu, en aquest cas:</p>
               <br><strong>c)</strong> El nou rendiment de la central \\(\\eta_q\\). [1 punts]
               <br>`,
        steps: `
        <strong>a)Energia diària consumida \\(E_{cons}\\)</strong>
        <p>-Energia elèctrica produïda (sortida):</p>
        \\[
        E_{elec} = 1.086 \\text{ MW} \\cdot 24 \\text{ h} = 26.064 \\text{ MWh}
        \\]
        <p>-Energia primària necessària (entrada):</p<
        \\[
        E_{cons} = \\frac{E_{elec}}{\\eta} = \\frac{26.064}{0,236} = 110.440,6 \\text{ MWh}
        \\]
        <p>En Joules \\(1 \\text{ MWh} = 3,6 \\times 10^9 \\text{ J}\\):</p>
        \\[
        E_{cons} = 3,97 \\times 10^{14} \\text{ J}
        \\]
        <strong>b)Massa de carbó \\(m_c\\)</strong>
        <p>-Càlculs:</p>
        \\[
        m_c = \\frac{E_{cons} \\text{ (en kJ)}}{pc}
        \\]
        \\[
        E_{cons} \\text{ (kJ)} = 110.440.677 \\text{ kWh} \\cdot 3.600 \\text{ kJ/kWh} = 3,975 \\times 10^{11} \\text{ kJ}
        \\]
        \\[
        m_c = \\frac{3,975 \\times 10^{11}}{28.400} = 13.996.478 \\text{ kg} \\approx 14.000 \\text{ tones}
        \\]
        <strong>c) Nou rendiment amb Querosè \\(\\eta_q\\)</strong>
        <p>Nou combustible:</p> 
        \\[
        m_q = 6,177 \\times 10^6 \\text{ kg}, pc_q = 43.400 \\text{ kJ/kg}.
        \\]
        <p>Energia entrada nova:</p> 
        \\[
        E_{in\\_q} = 6,177 \\times 10^6 \\cdot 43.400 = 2,68 \\times 10^{11} \\text{ kJ}
        \\]
        <p>Energia sortida (es manté constant segons enunciat):</p> 
        \\[
        E_{out} = 26.064 \\text{ MWh} \\cdot 3.600 = 9,38 \\times 10^{10} \\text{ kJ}
        \\]
        <p>Nou rendiment:</p> 
        \\[
        \\eta_q = \\frac{9,38 \\times 10^{10}}{2,68 \\times 10^{11}} = 0,35 \\quad \\rightarrow \\quad 35\\%
        \\]
         <br>`,
    },
  {
        type: "exercicis", // Tipus de pregunta
        category: "energia",
        text: `Un motorista utilitza una moto elèctrica per a recórrer una distància \\(s = 12 km\\) per una carretera de pendent ascendent i constant del \\(5 %\\). El recorregut es fa a velocitat constant i la moto disposa d’una bateria d’energia \\(E_bat = 1,53 kW h\\) (la bateria té un comportament ideal). La massa del conjunt format per la moto i el motorista és \\(m = 130 kg\\). En aquesta situació, el sistema té un rendiment \\(ηglob = 0,9\\). Si les pèrdues causades pel rodolament i per l’aerodinàmica es poden negligir, determineu:
               <br><strong>a)</strong> El desnivell de la carretera \\(\\Delta h\\). [0,5 punt]
               <br><strong>b)</strong> L’increment d’energia potencial \\(\\Delta E_p\\). [0,5 punts]
               <br><strong>c)</strong> L’energia de la bateria consumida \\(E_{cons}\\). [0,5 punts]
               <p>Després de fer aquest recorregut, el motorista baixa per la mateixa carretera fent servir únicament el fre motor i així torna a carregar la bateria. En aquest cas, el procés de regeneració té un rendiment \\(ηreg = 0,65\\). Si abans d’iniciar el recorregut de pujada la bateria estava al \\(100 %\\) de la seva capacitat, determineu:</p>
               <br><strong>d)</strong> El percentatge d’energia E_% que queda a la bateria respecte de l’energia inicial després de recórrer els \\(24 km\\).. [1 punts]
               <br>`,
        steps: `
        <strong>a)Desnivell \\(\\Delta h\\). </strong>
        \\[
        \\Delta h = s \\cdot \text{pendent} = 12.000 \\text{ m} \\cdot 0,05 = 600 \\text{ m}
        \\]
        <strong>b)Increment energia potencial \\(\\Delta E_p\\)</strong>
        \\[
        \\Delta E_p = m \\cdot g \\cdot \\Delta h = 130 \\cdot 9,81 \\cdot 600 = 765.180 \\text{ J}
        \\]
        <p>Passem a Wh:</p>
        \\[
        765.180 / 3600 = 212,55 \\text{ Wh}. 
        \\]
        <strong>c)Energia bateria consumida \\(E_{cons}\\)</strong>
        <p>Com que \\(\\eta = E_{util} / E_{consumida}\\):</p> 
        \\[
        E_{cons} = \\frac{\\Delta E_p}{\\eta_{glob}} = \\frac{212,55 \\text{ Wh}}{0,9} = 236,17 \\text{ Wh}
        \\]
        <strong>d)Percentatge restant després de baixar \\(E_{\\%}\\)</strong>
        <p>Baixada (Regeneració): L'energia potencial es recupera.</p>
        \\[
        E_{recuperada} = \\Delta E_p \\cdot \\eta_{reg} = 212,55 \\cdot 0,65 = 138,16 \\text{ Wh}
        \\]
        <p>Balanç final: Energia final = \\(E_{inicial} - E_{pujada} + E_{baixada}\\)</p>
        \\[
        E_{final} = 1.530 \\text{ Wh} - 236,17 \\text{ Wh} + 138,16 \\text{ Wh} = 1.431,99 \\text{ Wh}
        \\]
        <p>Percentatge:</p>
        \\[
        \\eta = \\frac{1.431,99}{1.530} = 0,9359 \\rightarrow 93,6\\%
        \\]
         <br>`,
    },
]
