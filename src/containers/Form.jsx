import React from 'react';

export default () => (
  <section
    className="bg-dark text-white pt-lg-10 pt-5 pb-lg-5 pb-5 separator-top hero-pattern"
    id="kontaktai"
  >
    <div className="container">
      <div className="row justify-content-center mb-1">
        <div className="col-lg-6 col-12">
          <span className="eyebrow mb-1 text-primary">Kontaktai</span>
          <h3>Kuo galime Jums padėti?</h3>
          <p className="">
            Užpildykite žemiau esančią formą ir mes greitu metu su Jumis susisieksime.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mb-1">
        <div className="col-lg-6 col-12">
          <form
            method="POST"
            name="requests"
            netlify="true"
            netlify-honeypot="bot-field"
            action="/success/"
            id="requests"
          >
            <input type="hidden" name="bot-field" />
            <p className="label eyebrow">
              Įrašykite savo el. paštą:
              <input
                type="email"
                className="form-control mt-1"
                placeholder="vardas@elpaštas.lt"
                name="email"
                required
                id="email"
                style={{ fontSize: '1.125rem' }}
              />
            </p>
            <p className="label eyebrow">
              Aprašykite savo projektą:
              <textarea
                className="form-control mt-1"
                rows="5"
                placeholder="Pageidaujamos paslaugos, turima platforma, sistema, problemos ir t.t."
                name="Message"
                required
                id="message"
                style={{ fontSize: '1.125rem' }}
              />
            </p>
            <p style={{ display: 'block' }} className="mt-2 mb-2">
              * Naudodamiesi Evular paslaugomis, pateikdami savo duomenis, pildydami užklausos
              formą, tęsdami naršymą svetainėje, Jūs patvirtinate, kad susipažinote su šia Privatumo
              politika, suprantate jos nuostatas ir sutinkate jos laikytis.
            </p>
            <p className="">
              <button className="btn btn-outline-white" style={{ width: '100%' }}>
                Siųsti užklausą
                <svg
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="angle-right"
                  className="svg-inline--fa fa-angle-right fa-w-8"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                  style={{
                    height: '1.25rem',
                    marginLeft: '.625rem',
                    transform: 'translateY(-1px)'
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                  />
                </svg>
              </button>
            </p>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12 text-dark text-left">
          <hr />
          <h3>Pagrindinė informacija apie bendrovę:</h3>
          <ul style={{ padding: '0', listStyleType: 'none' }}>
            <li className="list-item">
              <p> Juridinis asmuo: Interneto ir multimedijos projektai, MB</p>
            </li>
            <li className="list-item">
              <p>Juridinio asmens kodas: 304710068</p>{' '}
            </li>
            <li className="list-item">
              <p>Banko sąskaita: LT53 7044 0600 0819 0794</p>{' '}
            </li>
            <li className="list-item">
              <p>El. paštas: info@evular.lt</p>{' '}
            </li>
            <li className="list-item">
              <p>Tel. Nr: +37068295319</p>{' '}
            </li>
            <li className="list-item">
              <p>Adresas: Vilniaus miestas, Lietuva</p>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
