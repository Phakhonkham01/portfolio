
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="watch-container">
          <div className="strap top" />
          <div className="strap bottom" />
          <div className="watch-case">
            <div className="fluted-bezel" />
            <div className="rehaut" />
            <div className="main-crown" />
            <div className="dial">
              <div className="sunburst" />
              <div className="ticks">
                <div className="tick" style={{transform: 'rotate(6deg)'}} />
                <div className="tick" style={{transform: 'rotate(12deg)'}} />
                <div className="tick" style={{transform: 'rotate(18deg)'}} />
                <div className="tick" style={{transform: 'rotate(24deg)'}} />
                <div className="tick" style={{transform: 'rotate(36deg)'}} />
                <div className="tick" style={{transform: 'rotate(42deg)'}} />
                <div className="tick" style={{transform: 'rotate(48deg)'}} />
                <div className="tick" style={{transform: 'rotate(54deg)'}} />
                <div className="tick" style={{transform: 'rotate(66deg)'}} />
                <div className="tick" style={{transform: 'rotate(72deg)'}} />
                <div className="tick" style={{transform: 'rotate(78deg)'}} />
                <div className="tick" style={{transform: 'rotate(84deg)'}} />
                <div className="tick" style={{transform: 'rotate(96deg)'}} />
                <div className="tick" style={{transform: 'rotate(102deg)'}} />
                <div className="tick" style={{transform: 'rotate(108deg)'}} />
                <div className="tick" style={{transform: 'rotate(114deg)'}} />
              </div>
              <div className="marker m-12" />
              <div className="marker m-round" style={{transform: 'rotate(30deg)'}} />
              <div className="marker m-round" style={{transform: 'rotate(60deg)'}} />
              <div className="marker m-baton" style={{transform: 'rotate(90deg)', opacity: 0}} />
              <div className="marker m-round" style={{transform: 'rotate(120deg)'}} />
              <div className="marker m-round" style={{transform: 'rotate(150deg)'}} />
              <div className="marker m-baton" style={{transform: 'rotate(180deg)'}} />
              <div className="marker m-round" style={{transform: 'rotate(210deg)'}} />
              <div className="marker m-round" style={{transform: 'rotate(240deg)'}} />
              <div className="marker m-baton" style={{transform: 'rotate(270deg)'}} />
              <div className="marker m-round" style={{transform: 'rotate(300deg)'}} />
              <div className="marker m-round" style={{transform: 'rotate(330deg)'}} />
              <div className="dial-labels">
                <p className="brand-name">PHAKONEKHAM</p>
                {/* <p className="sub-brand">OYSTER PERPETUAL</p>
                <p className="sub-brand">DATEJUST</p> */}
              </div>
              <div className="date-aperture">07</div>
              {/* <div className="certification-text">
                SUPERLATIVE CHRONOMETER<br />OFFICIALLY CERTIFIED
              </div> */}
              <div className="hand hour-hand">
                <div className="mercedes-star">
                  <div className="mercedes-star-3" />
                </div>
              </div>
              <div className="hand minute-hand" />
              <div className="hand second-hand-sweep" />
              <div className="pin-assembly" />
            </div>
            <div className="crystal-edge" />
            <div className="cyclops-lens" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    --bg: #020617;
    --steel: #cbd5e1;
    --steel-light: #f8fafc;
    --steel-dark: #475569;
    --dial-color: #0f172a;
    --gold: #d4af37;
    --lume: #fcfcfc;
    --rolex-green: #006039;

    --watch-size: 380px;
    --dial-size: 280px;
    --ease: cubic-bezier(0.16, 1, 0.3, 1);

    margin: 0;
    min-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    background-image: radial-gradient(
        circle at 15% 15%,
        #1e293b 0%,
        transparent 40%
      ),
      radial-gradient(circle at 85% 85%, #020617 0%, transparent 40%);
    font-family: "Inter", sans-serif;
    overflow: hidden;
  }

  .watch-container {
    position: relative;
    width: var(--watch-size);
    height: var(--watch-size);
    perspective: 2500px;
  }

  .strap {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 170px;
    height: 220px;
    background: linear-gradient(90deg, #334155 0%, #94a3b8 50%, #334155 100%);
    border-radius: 4px;
    z-index: 1;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.8);
  }
  .strap.top {
    top: -160px;
    clip-path: polygon(0% 100%, 100% 100%, 85% 0%, 15% 0%);
  }
  .strap.bottom {
    bottom: -160px;
    clip-path: polygon(15% 100%, 85% 100%, 100% 0%, 0% 0%);
  }

  .watch-case {
    position: relative;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 30%,
      var(--steel-light) 0%,
      var(--steel) 60%,
      var(--steel-dark) 100%
    );
    border-radius: 50%;
    z-index: 10;
    box-shadow:
      0 70px 120px rgba(0, 0, 0, 0.8),
      inset 0 2px 2px rgba(255, 255, 255, 0.9),
      inset 0 -5px 25px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #94a3b8;
  }

  .fluted-bezel {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: repeating-conic-gradient(
      from 0.5deg,
      #f8fafc 0deg 1deg,
      #94a3b8 1.5deg 2.5deg,
      #475569 3deg 4deg
    );
    z-index: 11;
    box-shadow:
      inset 0 0 15px rgba(0, 0, 0, 0.6),
      0 5px 12px rgba(0, 0, 0, 0.5);
  }

  .rehaut {
    position: absolute;
    inset: 24px;
    background: radial-gradient(circle, #f8fafc 0%, #cbd5e1 100%);
    border-radius: 50%;
    z-index: 12;
    box-shadow:
      inset 0 15px 30px rgba(0, 0, 0, 0.5),
      inset 0 -5px 10px rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-crown {
    position: absolute;
    right: -14px;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 52px;
    background: linear-gradient(to bottom, #475569, #f8fafc, #475569);
    border-radius: 6px;
    border: 1.5px solid #1e293b;
    z-index: 5;
    box-shadow: 6px 0 15px rgba(0, 0, 0, 0.4);
  }
  .main-crown::after {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0,
      rgba(0, 0, 0, 0.2) 1px,
      transparent 1px,
      transparent 3px
    );
    border-radius: 4px;
  }

  .dial {
    width: var(--dial-size);
    height: var(--dial-size);
    background: radial-gradient(circle at center, #1e293b 0%, #080c14 100%);
    border-radius: 50%;
    position: relative;
    z-index: 20;
    box-shadow: inset 0 0 60px rgba(0, 0, 0, 1);
    border: 4px solid #000;
    overflow: hidden;
  }

  .sunburst {
    position: absolute;
    inset: -100%;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      rgba(255, 255, 255, 0.02) 20%,
      transparent 40%,
      rgba(255, 255, 255, 0.02) 60%,
      transparent 80%,
      transparent 100%
    );
    animation: rotateSun 80s linear infinite;
    pointer-events: none;
  }
  @keyframes rotateSun {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .marker {
    position: absolute;
    background: var(--lume);
    left: 50%;
    top: 10px;
    transform-origin: 50% 130px;
    border: 2px solid #94a3b8;
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.15);
    z-index: 25;
  }
  .m-round {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transform: translateX(-50%);
  }
  .m-baton {
    width: 10px;
    height: 20px;
    border-radius: 2px;
    transform: translateX(-50%);
  }
  .m-12 {
    // width: 24px;
    // height: 24px;
    // background: var(--lume);
    // clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    // border: none;
    // top: 12px;
  }

  .ticks {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .tick {
    position: absolute;
    width: 1px;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    left: 50%;
    top: 0;
    transform-origin: 50% 140px;
  }

  .date-aperture {
    position: absolute;
    right: 38px;
    top: 50%;
    transform: translateY(-50%);
    width: 34px;
    height: 24px;
    background: #fff;
    color: #000;
    font-family: "JetBrains Mono", monospace;
    font-weight: 800;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 30;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  .cyclops-lens {
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    width: 58px;
    height: 44px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    border-radius: 10px;
    z-index: 100;
    backdrop-filter: blur(1px);
    box-shadow:
      0 15px 25px rgba(0, 0, 0, 0.5),
      inset 0 0 12px rgba(56, 189, 248, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.15);
    pointer-events: none;
  }

  .hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom center;
    background: #fff;
    border: 1.2px solid #1e293b;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
    z-index: 50;
  }

  .hour-hand {
    width: 10px;
    height: 85px;
    border-radius: 4px;
    background: linear-gradient(to right, #fff 50%, #e2e8f0 50%);
    animation: moveTime 43200s linear infinite;
    animation-delay: -20340s;
  }

  .mercedes-star {
    position: absolute;
    top: 15px;
    left: -6px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    border: 1.5px solid #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mercedes-star::before {
    content: "";
    width: 100%;
    height: 1px;
    background: #1e293b;
    position: absolute;
    transform: rotate(0deg);
  }
  .mercedes-star::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #1e293b;
    position: absolute;
    transform: rotate(120deg);
  }
  .mercedes-star-3 {
    width: 100%;
    height: 1px;
    background: #1e293b;
    position: absolute;
    transform: rotate(240deg);
  }

  .minute-hand {
    width: 7px;
    height: 125px;
    border-radius: 3px;
    background: linear-gradient(to right, #fff 50%, #e2e8f0 50%);
    animation: moveTime 3600s linear infinite;
    animation-delay: -2340s;
    z-index: 55;
  }

  .second-hand-sweep {
    width: 1.5px;
    height: 135px;
    background: #fff;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    animation: moveTime 60s linear infinite;
    z-index: 60;
  }
  .second-hand-sweep::after {
    content: "";
    position: absolute;
    top: 105px;
    left: -4px;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #1e293b;
  }

  .pin-assembly {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, #fff 0%, #cbd5e1 100%);
    border-radius: 50%;
    z-index: 100;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.8);
    border: 1px solid #475569;
  }

  @keyframes moveTime {
    from {
      transform: translateX(-50%) rotate(0deg);
    }
    to {
      transform: translateX(-50%) rotate(360deg);
    }
  }

  .dial-labels {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    z-index: 22;
  }
  .brand-name {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 2.5px;
    margin: 0;
  }
  .sub-brand {
    font-size: 8px;
    font-weight: 600;
    color: var(--text-dim);
    letter-spacing: 1.5px;
    margin: 2px 0;
  }

  .certification-text {
    position: absolute;
    bottom: 70px;
    width: 100%;
    text-align: center;
    font-size: 6px;
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: 1.8px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.8;
    z-index: 22;
  }

  .crystal-edge {
    position: absolute;
    inset: 28px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05);
    z-index: 90;
    pointer-events: none;
  }`;

export default Card;
