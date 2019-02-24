import React from 'react';
import InlineSVG from 'svg-inline-react';
import Heading from './Heading';

export default () => (
  <section className="bg-white pb-lg-10 pb-5 pt-5" id="paslaugos">
    <div className="container pt-lg-5 pt-0">
      <div className="row mb-0">
        <Heading
          eyebrow="Paslaugos ir Sprendimai"
          title="Mūsų tikslas teikti tokias paslaugas, kurių vertę supranta klientas"
          description="Teikdami paslaugas kiekvieną situaciją vertiname individualiai - klientus konsultuojame atsižvelgdami į jų verslo pobūdį. Mums svarbiausia yra profesionalumas ir ilgalaikis siūlomų sprendimų gyvavimas."
          col="8"
          align="center"
        />
      </div>
      <div className="row gutter-5 pt-sm-0 pt-0">
        <div className="col-md-6 col-lg-4">
          <div className="media align-items-center mb-2">
            <i className="svg-icon fs-50 text-primary mr-3">
              <InlineSVG
                src={`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" x="0px" y="0px" enable-background="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" xml:space="preserve">
<path fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" d="M32,1c14.359,0,27,12.641,27,27S46.359,55,32,55
            c-10,0-13-4-13-4"/>
<circle cx="32" cy="28" r="20" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
<line x1="32" x2="32" y1="54" y2="64" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
<line x1="22" x2="42" y1="63" y2="63" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2"/>
</svg>`}
              />
            </i>
            <div className="media-body">
              <h5 className="fs-20">Interneto svetainių kūrimas ir priežiūra</h5>
            </div>
          </div>
          <p>
            Nuo idėjos iki pilnai veikiančio interneto puslapio. Mes įgyvendinsime Jūsų viziją tam,
            kad galėtumėte pasiekti maksimalius rezultatus.
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="media align-items-center mb-2">
            <i className="svg-icon fs-50 text-primary mr-3">
              <InlineSVG
                src={`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
             <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,12 32,32 41,41 "/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="4" y1="32" x2="8" y2="32"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="56" y1="32" x2="60" y2="32"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="32" y1="60" x2="32" y2="56"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="32" y1="8" x2="32" y2="4"/>
             <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M32,63C14.879,63,1,49.121,1,32S14.879,1,32,1"/>
             <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M32,63c17.121,0,31-13.879,31-31
               c0-6.713-2.134-12.926-5.759-18l-5.62-5.621"/>
             <polyline fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="51,19 51,8 62,8 
               "/>
             </svg>`}
              />
            </i>
            <div className="media-body">
              <h5 className="fs-20">Informacinių sistemų modifikavimas ir priežiūra</h5>
            </div>
          </div>
          <p>
            Turite informacinę sistemą (IS) ir norite užtikrinti sėkmingą jos veikimą? Mes
            užriktinsime tinkamą IS eksploataciją, klaidų šalinimą ir papildomų funkcionalumų
            diegimą.
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="media align-items-center mb-2">
            <i className="svg-icon fs-50 text-primary mr-3">
              <InlineSVG
                src={`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
             <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M50,27H14C6.82,27,1,32.82,1,40s5.82,13,13,13
               c4.6,0,8.632-2.396,10.943-6h14.113C41.368,50.604,45.4,53,50,53c7.18,0,13-5.82,13-13S57.18,27,50,27z"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" x1="14" y1="32" x2="14" y2="48"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" x1="22" y1="40" x2="6" y2="40"/>
             <circle fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" cx="50" cy="39.99" r="7"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" x1="50" y1="33" x2="50" y2="47"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" x1="57" y1="40" x2="43" y2="40"/>
             <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,27 32,21 46,21 46,14 36,14 36,11 "/>
             </svg>`}
              />
            </i>
            <div className="media-body">
              <h5 className="fs-20">Duomenų analitika</h5>
            </div>
          </div>
          <p>
            Duomenys valdo pasaulį. Norite optimizuoti savo verslą ir prieš priimdami svarbius
            sprendimus pasikliauti susisteminta informacija? Mes padėsime Jums atrasti atsakymus iš
            Jūsų turimų duomenų.
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="media align-items-center mb-2">
            <i className="svg-icon fs-50 text-primary mr-3">
              <InlineSVG
                src={`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
             <polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="63,18 63,54 1,54 1,10 22,10 30,18 "/>
             </svg>`}
              />
            </i>
            <div className="media-body">
              <h5 className="fs-20">Skaitmeninė rinkodara</h5>
            </div>
          </div>
          <p>
            Reklame internete iki 2020 m. pralenks tradicinę. Nesvarbu, kokią veiklą vykdote -
            tinkama internetinės rinkodaros strategija ne tik sustiprins Jūsų pozicijas versle,
            tačiau kartu pakels ir prekės ženklo vertę.{' '}
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="media align-items-center mb-2">
            <i className="svg-icon fs-50 text-primary mr-3">
              <InlineSVG
                src={`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
             <g>
               <rect x="1" y="1" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="62" height="62"/>
             </g>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="18" y1="8" x2="18" y2="28"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="28" y1="18" x2="8" y2="18"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="56" y1="18" x2="36" y2="18"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="10" y1="54" x2="26" y2="38"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="10" y1="38" x2="26" y2="54"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="36" y1="43" x2="56" y2="43"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="36" y1="49" x2="56" y2="49"/>
             </svg>`}
              />
            </i>
            <div className="media-body">
              <h5 className="fs-20">Duomenų apsauga</h5>
            </div>
          </div>
          <p>
            2018 m. gegužės 25 d. įsigaliojęs Bendrasis duomenų apsaugos reglamentas įpareigoja
            įmones tinkamai tvarkyti fizinių asmenų duomenis. Mes rengiame dokumentus, procedūras ir
            teikiame konsultacijas asmens duomenų apsaugos klausimais.
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="media align-items-center mb-2">
            <i className="svg-icon fs-50 text-primary mr-3">
              <InlineSVG
                src={`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
             <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="31"/>
             <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="15"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="26" y1="18" x2="26" y2="1"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="38" y1="18" x2="38" y2="1"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="26" y1="63" x2="26" y2="46"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="38" y1="63" x2="38" y2="46"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="46" y1="26" x2="63" y2="26"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="46" y1="38" x2="63" y2="38"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="1" y1="26" x2="18" y2="26"/>
             <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="1" y1="38" x2="18" y2="38"/>
             </svg>`}
              />
            </i>

            <div className="media-body">
              <h5 className="fs-20">Kibernetinis saugumas</h5>
            </div>
          </div>
          <p>
            Lietuva kiekvienais metais patiria daugiau kaip 50000 kibernetinių atakų. Įmonės, kurios
            dirba su jautria informacija, privalo užtikrinti tinkamą elektroninės informacijos
            apsaugą. Mūsų specialistai, turintis ilgametę patirtį padės išspręsti saugumo problemas
            Jūsų versle.
          </p>
        </div>
      </div>
    </div>
  </section>
);
