import React, { useRef, Suspense } from 'react';
import Navigation from '../components/Navigation'
import Clients from '../components/Clients'
import Footer from '../components/Footer'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {  useGLTF, PerspectiveCamera, Environment, useProgress, Html, Loader} from "@react-three/drei";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/box.gltf')

    //const set = useThree(state => state.set)

    const { mouse } = useThree()

    useScrollPosition(({ prevPos, currPos }) => {
        group.current.position.y = -0.0025 * currPos.y
        group.current.rotation.y = 0.001 * currPos.y

      })

    useFrame(( { clock } ) => {
        group.current.position.x = mouse.x * 0.05
        group.current.position.z =  (mouse.y * 0.05)
    })

    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[0, 0, 0]}
        />
      </group>
    )
  }
  useGLTF.preload('/box.gltf')

export default function Home() {
    return (
        <>
        <Canvas className='webgl'>
            <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[-0.5,1,2]} near={0.1} far={1000}/>
                <ambientLight intensity={0}/>
                <Environment  preset='sunset'/>
                <Model/>
            </Suspense>
        </Canvas>
        <Loader/>
        <div className='section top-section'>
            <h1>THE<br/>INDEPENDENT<br/>AGENCY<br/>AWARDS</h1>
        </div>
        <div className='section mid-section'>
        <h1>Independent agencies are exactly that. Free.<br/>
            Free from parent companies, free to be entrepreneurial and free to be bold.<br/>
            It's why when you win the Independent Agency Awards … you get your wings.</h1>
        </div>
        <Clients/>
        <section className="section more-info">
            <div className="container">
                <h2>What's different?</h2>
                <br/>
                <p>It's your peers, and your clients that decide who gets their wings with a commitment to have 50% client marketer judges in the live judging. An Award isn't just for the winning agency either. We strive to recognise the people behind the work, with individual recognition going to everyone on the winning teams.</p>
                <br/>
                <h2>The Freedom Awards…</h2>
                <br/>
                <p>The Freedom awards are 3 extra trophies that will be selected by the judges for outstanding agency performances in these three areas:</p>
                <br/>
                <ul>
                    <li>Agency Collaboration.</li>
                    <li>Agility.</li>
                    <li>Client Service.</li>
                </ul>
                <br/>
                <p>Trophies will be awarded in 15 categories that span the many disciplines and skills across the independent agency landscape. Each category is judged online by a hand-picked selection of judges who are leaders in their fields. The shortlist then moves to a live debate, where 50% of all judges will be from client organisations. Every entry is judged on its strategy, execution and effectiveness. After judging, finalist agencies are acknowledged for producing great work and embracing the freedom that being independent offers. Every category winner then 'earns their wings' for being the best of the best and soaring higher than others.</p>
            </div>
        </section>
        <section className="section maa">
            <h2>MAA Worldwide GLOBES</h2>
            <p>Winners in The Independent Agency Awards are automatically qualified to enter the 35th MAA Worldwide GLOBES Awards</p>
        </section>
        <Footer/>
        </>
    )
}
