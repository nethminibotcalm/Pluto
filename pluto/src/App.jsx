import './index.css'
import SectionCard from './components/SectionCard'
import heroPanel      from './assets/Images/botcalm_cartoon_type_etc.png'
import astronautBear  from './assets/Images/image (2).png'
import planetArt      from './assets/Images/image.gif'
import spaceBoard     from './assets/Images/image (9).png'
import floatingBear   from './assets/Images/image (3).png'
import standingBear   from './assets/Images/image (8).png'
import buyNowBear     from './assets/Images/image (7).png'
import tokenomicsBg   from './assets/Images/image (4).png'
import meditatingBear from './assets/Images/image (5).png'

export default function App() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Single bg image — 30% opacity, offset like Figma */}
      {/* Single bg image — 30% opacity, full cover */}
<img
  src={heroPanel}
  alt=""
  className="pointer-events-none absolute z-0"
  style={{
    width: '100%',
    height: '2572px',
    top: -300,
    left: 0,
    objectFit: 'cover',
    objectPosition: 'center top',
    opacity: 0.5,
  }}
/>

      {/* ── Floating bears ── */}
      <img
        src={standingBear} alt=""
        className="pointer-events-none absolute z-30"
        style={{
          width: '8%',
          height: 'auto',
          bottom: 'calc( (886/1342) * (100vh - 96px) + 48px )',
          left: 'calc( 24px + (628/1842) * (100vw - 72px) + 24px )',
          transform: 'translateX(-50%) scaleX(-1)',
        }}
      />
      <img
        src={astronautBear} alt=""
        className="pointer-events-none absolute z-30"
        style={{
          width: '5.5%',
          height: 'auto',
          bottom: 'calc( (886/1342) * (100vh - 96px) + 48px )',
          left: 'calc( 24px + (1296/1842) * (100vw - 72px) + 24px )',
          transform: 'translateX(-50%)',
        }}
      />

      {/* ── Main grid ── */}
      <div
        className="relative z-10"
        style={{
          display: 'grid',
          height: '100vh',
          width: '100%',
          padding: '24px',
          gap: '24px',
          gridTemplateColumns: '628fr 628fr 506fr',
          gridTemplateRows: '456fr 429fr 457fr',
          boxSizing: 'border-box',
        }}
      >

        {/* ── ROW 1 ── */}

        {/* About Us */}
        <SectionCard
          title="About Us"
          className="bg-[#c8d7eb]/0"
          titleClassName="font-cartoon font-normal leading-none text-[#000000]"
          textClassName="font-cartoon font-semibold text-[#11173E] leading-snug"
          titleStyle={{ fontSize: 'clamp(1.5rem, 2.8vw, 3.5rem)' }}
          textStyle={{ fontSize: 'clamp(0.55rem, 0.85vw, 0.95rem)' }}
        >
          <p>Pluto Token is a celestial cryptocurrency inspired by the mysterious dwarf planet, Pluto. Just as Pluto holds a unique place in our solar system, this token represents innovation, exploration, and discovery in the world of digital assets.</p>
          <p>With a focus on community-driven growth and transparency, Pluto Token aims to bring a sense of wonder and excitement to the crypto space. Whether you're a seasoned investor or a newcomer, Pluto Token is here to offer an out-of-this-world experience. Join us on this cosmic journey as we venture beyond the stars!</p>
        </SectionCard>

        {/* Roadmap */}
        <SectionCard
          title="Roadmap"
          className="bg-[#c8d7eb]/0"
          titleClassName="font-cartoon font-normal leading-none text-[#000000]"
          textClassName="font-cartoon font-semibold text-[#11173E] leading-snug space-y-2"
          titleStyle={{ fontSize: 'clamp(1.5rem, 2.8vw, 3.5rem)' }}
          textStyle={{ fontSize: 'clamp(0.55rem, 0.85vw, 0.95rem)' }}
        >
          <p>Officially launch Pluto Token and establish a vibrant, engaged community through social media, partnerships, and educational content.</p>
          <p>Develop and integrate Pluto Token into key platforms, building real-world use cases.</p>
          <p>Focus on expanding Pluto Token's ecosystem, introducing new features, and exploring innovative ways.</p>
        </SectionCard>

        {/* Planets (top-right) */}
        <section className="relative box-border overflow-hidden rounded-xl border-[2px] border-black/70 shadow-md">
          <img
            src={spaceBoard}
            alt="space background"
            style={{
              position: 'absolute',
              width: '970px',
              height: '600px',
              left: '-227px',
              top: '-20px',
            }}
          />
          <div className="absolute inset-0 bg-black/10" />
          <img
            src={planetArt}
            alt="planets"
            style={{
              position: 'absolute',
              width: '163.36px',
              height: '173.09px',
              left: '85px',
              top: '51px',
              zIndex: 10,
            }}
          />
        </section>

        {/* ── ROW 2 ── */}

        {/* Tokenomics */}
        <section className="relative overflow-hidden rounded-xl border-[2px] border-black/70 shadow-md">
          <img
            src={tokenomicsBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 py-8">
            <h2
              style={{
                fontFamily: 'Marhey, cursive',
                fontSize: 'clamp(1.4rem, 2.5vw, 3rem)',
                fontWeight: 900,
                color: '#000',
                lineHeight: 1,
                marginBottom: '1rem',
              }}
            >
              Tokenomics
            </h2>
            <div
              style={{
                fontFamily: 'Marhey, cursive',
                fontSize: 'clamp(0.75rem, 1.2vw, 1.2rem)',
                fontWeight: 600,
                color: '#11173E',
                lineHeight: 1.6,
              }}
            >
              <p>Total Supply - 6 M</p>
              <p>Burnt Liquidity</p>
              <p>Buy/Sell Tax - 0%</p>
            </div>
          </div>
        </section>

        {/* PLUTO hero */}
        <section
          className="relative box-border overflow-hidden rounded-xl border-[2px] border-black/70 shadow-md"
          style={{ backgroundImage: `url(${heroPanel})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <h1 style={{
              fontFamily: 'Marhey, cursive',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: '#ff9a2e',
              textShadow: '3px 3px 0px #000, -1px -1px 0px #000',
              lineHeight: 1,
            }}>
              PLUTO
            </h1>
            <p style={{
              fontFamily: 'Marhey, cursive',
              fontSize: 'clamp(0.55rem, 0.85vw, 0.9rem)',
              fontWeight: 600,
              color: '#fff',
              textShadow: '1px 1px 4px rgba(0,0,0,0.9)',
              maxWidth: '60%',
              lineHeight: 1.4,
              marginTop: '0.5rem',
              fontStyle: 'italic',
            }}>
              Your gateway to a cosmic crypto adventure, where innovation meets the stars.
            </p>
          </div>
          <img
            src={floatingBear} alt=""
            className="pointer-events-none absolute z-20"
            style={{ bottom: 0, right: '4%', height: '55%', width: 'auto' }}
          />
        </section>

        {/* How to Buy */}
        <SectionCard
          title="How to Buy"
          className="bg-[#c8d7eb]/0"
          titleClassName="font-cartoon font-normal leading-none text-[#000000]"
          textClassName="font-cartoon font-semibold text-[#11173E] leading-snug space-y-2"
          titleStyle={{ fontSize: 'clamp(1.5rem, 2.8vw, 3.5rem)' }}
          textStyle={{ fontSize: 'clamp(0.55rem, 0.85vw, 0.95rem)' }}
        >
          <p>Prepare Your Rocket Fuel – Set up a digital wallet to fuel your journey to Pluto.</p>
          <p>Blast Off to the Exchange – Visit a trusted decentralized exchange (DEX).</p>
          <p>Land on Pluto – Once your wallet is connected, swap your ETH or BNB for Pluto Token and watch your assets launch into the cosmos!</p>
        </SectionCard>

        {/* ── ROW 3 ── */}

        {/* Join Now */}
        <section className="relative box-border overflow-hidden rounded-xl border-[2px] border-black/0 shadow-md bg-[#c8d7eb]/70">
          <div className="relative z-10 flex h-full flex-col items-center justify-start pt-3 px-4 text-center gap-2">
            <p style={{ fontFamily: 'Marhey, cursive', fontSize: 'clamp(0.55rem, 0.85vw, 0.9rem)', fontWeight: 600, color: '#11173E', lineHeight: 1.5 }}>
              Embark on an interstellar journey with us! Join the Pluto Token community today and be part of a vibrant group of explorers, innovators, and dreamers.
            </p>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.05 3.6 2.8 10.8c-1.05.42-1.04 1.4.02 1.8l4.6 1.7 1.8 5.6c.24.7 1.1.86 1.66.34l2.5-2.3 4.6 3.4c.7.5 1.7.14 1.9-.7l3.2-15c.22-.96-.6-1.7-1.53-1.04Zm-4.3 3.4-7.6 7-0.3 4.3-1.5-4.6 9.4-6.7Z" fill="#000"/>
              </svg>
              <span style={{ fontFamily: 'Marhey, cursive', fontSize: 'clamp(1.2rem, 2.2vw, 2rem)', fontWeight: 900, color: '#000' }}>JOIN NOW</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 1H21l-7.2 8.2L22 23h-6.9l-5.4-7.1L3.4 23H0l7.7-8.8L0 1h7l4.9 6.5L17.5 1Zm-2 19.7h1.9L6.6 2.6H4.6l10.9 18.1Z" fill="#000"/>
              </svg>
            </div>
          </div>
          <img
            src={meditatingBear} alt=""
            className="pointer-events-none absolute z-20"
            style={{ height: '42%', width: 'auto', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
          />
        </section>

        {/* Our Story */}
        <SectionCard
          title="Our Story"
          className="bg-[#c8d7eb]/0"
          titleClassName="font-cartoon font-normal leading-none text-[#000000]"
          textClassName="font-cartoon font-semibold text-[#11173E] leading-snug space-y-2"
          titleStyle={{ fontSize: 'clamp(1.5rem, 2.8vw, 3.5rem)' }}
          textStyle={{ fontSize: 'clamp(0.55rem, 0.85vw, 0.95rem)' }}
        >
          <p>In the vast expanse of the digital universe, Pluto Token was born as a small but powerful entity designed to make a big impact.</p>
          <p>Much like Pluto, which was once seen as a distant and enigmatic world, Pluto Token represents the spirit of exploration and discovery in the crypto space. With a mission to bring innovation and inclusivity to the world of digital assets.</p>
        </SectionCard>

        {/* Buy Now */}
        <section
          className="relative box-border overflow-hidden rounded-xl border-[2px] border-black/70 shadow-md"
        >
          <img
            src={tokenomicsBg}
            alt=""
            style={{
              position: 'absolute',
              width: '1436px',
              height: '874px',
              left: '-122px',
              top: '-384px',
              objectFit: 'cover',
            }}
          />
          <div
            className="absolute z-20 flex items-center justify-center rounded-full bg-[#e02020]"
            style={{
              width: 'clamp(55px, 7.5vw, 105px)',
              height: 'clamp(55px, 7.5vw, 105px)',
              left: '8%',
              top: '50%',
              transform: 'translateY(-50%)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
            }}
          >
            <span style={{
              fontFamily: 'Marhey, cursive',
              fontSize: 'clamp(0.8rem, 1.6vw, 1.4rem)',
              fontWeight: 900,
              color: '#fff',
              textAlign: 'center',
              lineHeight: 1.1,
              textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            }}>
              BUY<br />NOW
            </span>
          </div>
          <img
            src={buyNowBear} alt=""
            className="pointer-events-none absolute z-20"
            style={{
              width: '212.67px',
              height: '313.84px',
              left: '236px',
              top: '106px',
            }}
          />
        </section>

      </div>
    </div>
  )
}console.log("test update");