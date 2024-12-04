import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
import { AmbientLight } from 'three';
import { calculateSizes } from '../../constants/index.js';
import { useMediaQuery } from 'react-responsive';
function Hero() {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });


    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full relative flex flex-col sm:mt-36 mt-20">
            <div className="w-full mx-auto flex flex-col c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-palanquin">
                    Hi, I am Sanket. <span className="waving-hand">🙂</span>
                </p>
                <p className="hero_tag text-gray_gradient">Machine Learning Engineer</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas>
                    <Suspense fallback={<CanvasLoader />}>
                        {/* To hide controller */}
                        {/* <Leva hidden /> */}
                        {/* <perspectiveCamera makeDefault position={[0, 0, 30]} /> */}
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <ambientLight intensity={4} />
                        {/* <directionalLight position={[10, 10, 10]} intensity={10} /> */}
                        <HackerRoom scale={sizes.deskScale + 0.04} position={sizes.deskPosition} rotation={[0.2, -Math.PI, 0]} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero
