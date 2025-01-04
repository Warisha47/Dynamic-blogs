import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
      <section className="py-24 relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
          <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
          TRANSFORMATION

Smarter Technology for All          </h2>
          <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
          Lenovo is a global technology powerhouse, ranked at 217 in the Fortune Global 500, and a $62 billion revenue company that employs 77,000 people worldwide focused on delivering “smarter technology for all”. Building on our success as the world’s number one PC maker, Lenovo is expanding its research into growth areas to advance “New IT” technologies (client, edge, cloud, network, and intelligence).
          Lenovo’s continued investment in innovation and commitment to research and development is changing the way we live and work today and for years to come. Those innovations need to progress in harmony with our planet and its people, and so Lenovo prioritizes corporate citizenship in all that it does - from exploring net-zero emissions to global philanthropy. From cities studded with edge computing cabinets that help stop traffic accidents to a ‘Cyber Space’ room where people interact with life-size objects on a transparent screen, our whole idea of computing is changing. The real and virtual worlds are colliding – not metaphorically, but in a very real way.

</p>
        </div>
     
      </div>
      <Image
        className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
        src="https://pagedone.io/asset/uploads/1717751272.png"
        alt="about Us image"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default About
