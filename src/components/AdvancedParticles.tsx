import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';
import './AdvancedParticles.css';

const AdvancedParticles: React.FC = () => {
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   await loadSlim(engine);
  // }, []);

  // // Configuration des particules
  // const options = {
  //   fullScreen: { enable: false },
  //   fpsLimit: 144,
  //   particles: {
  //     number: {
  //       value: 100,
  //       density: {
  //         enable: true,
  //         value_area: 800,
  //       },
  //     },
  //     color: {
  //       value: ['#3b82f6', '#38bdf8', '#f8fafc'],
  //     },
  //     shape: {
  //       type: 'circle',
  //     },
  //     opacity: {
  //       value: 0.5,
  //       random: true,
  //       anim: {
  //         enable: true,
  //         speed: 0.5,
  //         opacity_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     size: {
  //       value: 3,
  //       random: true,
  //       anim: {
  //         enable: true,
  //         speed: 2,
  //         size_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     line_linked: {
  //       enable: true,
  //       distance: 150,
  //       color: '#3b82f6',
  //       opacity: 0.2,
  //       width: 1,
  //     },
  //     move: {
  //       enable: true,
  //       speed: 1,
  //       direction: 'none',
  //       random: true,
  //       straight: false,
  //       out_mode: 'out',
  //       bounce: false,
  //       attract: {
  //         enable: true,
  //         rotateX: 600,
  //         rotateY: 1200,
  //       },
  //     },
  //   },
  //   interactivity: {
  //     detect_on: 'window',
  //     events: {
  //       onhover: {
  //         enable: true,
  //         mode: 'grab',
  //       },
  //       onclick: {
  //         enable: true,
  //         mode: 'push',
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       grab: {
  //         distance: 140,
  //         line_linked: {
  //           opacity: 0.5,
  //         },
  //       },
  //       push: {
  //         particles_nb: 4,
  //       },
  //     },
  //   },
  //   retina_detect: true,
  // };

  return (
    <Particles
      id="tsparticles"
      className="particles-container"
      // init={particlesInit}
      // options={options}
    />
  );
};

export default AdvancedParticles;
