import React from 'react'
import { styles } from '../styles.js'
import { ComputersCanvas } from './canvas/index.js'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#9955ff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#9955ff]">Abimael</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I'm a fullstack developer with a knack for crafting awesome web
            experiences. From creating stunning front-end designs to building
            robust back-end systems, I bring your ideas to life with a touch of
            coding magic. Let's collaborate and create something amazing
            together!
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero
