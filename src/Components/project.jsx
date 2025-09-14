import React from 'react'
import { CurvedLoop } from 'react-curved-loop';

function Project() {
  return (
    <section className="w-screen min-h-screen bg-[#000000] text-white flex flex-col items-center px-6 py-12">
      {/* Section Heading */}
      <CurvedLoop 
        marqueeText="Welcome ✦ to ✦ My ✦ Project ✦ World ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
        />
    </section>
  )
}

export default Project