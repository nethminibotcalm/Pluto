import './index.css'
import SectionCard from './components/SectionCard'
import heroPanel      from '../../Images/botcalm_cartoon_type_etc.png'
import astronautBear  from '../../Images/image (2).png'
import planetArt      from '../../Images/image.gif'
import spaceBoard     from '../../Images/image (9).png'
import floatingBear   from '../../Images/image (3).png'
import standingBear   from '../../Images/image (8).png'
import buyNowBear     from '../../Images/image (7).png'
import tokenomicsBg   from '../../Images/image (4).png'
import meditatingBear from '../../Images/image (5).png'

export default function App() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: '100vh',
        backgroundImage: `url(${heroPanel})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,15,40,0.18)' }} />

      {/* ── Floating bears ── sit on the row-1/row-2 boundary at column borders */}
      {/* Standing bear: col1/col2 border ≈ 33.5% from left */}
      <img
        src={standingBear} alt=""
        className="pointer-events-none absolute z-30"
        style={{
          width: '8%',
          height: 'auto',
          /* row1 takes 456fr of 1342fr of the inner grid height.
             Grid inner height = 100vh - 2*16px padding - 2*10px gap = 100vh - 52px
             Bear bottom = padding(16) + gap(10) + row2height + row3height
             Easier: top of row2 from top = 16px + (456/1342)*(100vh-52px) + 10px */
          bottom: 'calc( (886/1342) * (100vh - 52px) + 26px )',
          left: 'calc( 16px + (628/1842) * (100vw - 42px) + 10px )',
          transform: 'translateX(-50%) scaleX(-1)',
        }}
      />
      {/* Astronaut bear: col2/col3 border ≈ 68% from left */}
      <img
        src={astronautBear} alt=""
        className="pointer-events-none absolute z-30"
        style={{
          width: '5.5%',
          height: 'auto',
          bottom: 'calc( (886/1342) * (100vh - 52px) + 26px )',
          left: 'calc( 16px + (1296/1842) * (100vw - 42px) + 10px )',
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
          padding: '16px',
          gap: '10px',
          /* 3 cols: Figma widths 628 : 628 : 506 out of total 1842 */
          gridTemplateColumns: '628fr 628fr 506fr',
          /* 3 rows: Figma heights 456 : 429 : 457 */
          gridTemplateRows: '456fr 429fr 457fr',
          boxSizing: 'border-box',
        }}
      >

        {/* ── ROW 1 ── */}

        {/* About Us */}
        <SectionCard
          title="About Us"
          className="absolute left-0 top-0 h-[456px] w-[628px] rounded-none border-4 border-black bg-[#c8d7eb]/70 !p-0"
          titleClassName="font-cartoon font-normal text-[#000000]"
          textClassName="font-cartoon font-semibold text-[#11173E]"
          contentClassName="w-[579.22px] h-[401.36px] gap-8 items-start justify-start pt-[27px] pl-[22px] pr-[26.78px]"
          titleStyle={{ fontSize: '64px', lineHeight: '111px' }}
          textStyle={{ fontSize: '18px', lineHeight: '31px' }}
        >
          <p>Pluto Token is a celestial cryptocurrency inspired by the mysterious dwarf planet, Pluto. Just as Pluto holds a unique place in our solar system, this token represents innovation, exploration, and discovery in the world of digital assets.</p>
          <p>With a focus on community-driven growth and transparency, Pluto Token aims to bring a sense of wonder and excitement to the crypto space. Whether you're a seasoned investor or a newcomer, Pluto Token is here to offer an out-of-this-world experience. Join us on this cosmic journey as we venture beyond the stars!</p>
        </SectionCard>

        {/* Roadmap */}
        <SectionCard
          title="Roadmap"
          className="bg-[#c8d7eb]/70"
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
        <section className="relative box-border overflow-hidden rounded-xl border-[4px] border-black bg-[#05051a]">
          <img src={planetArt} alt="planets" className="absolute inset-0 w-full h-full object-cover" />
        </section>

        {/* ── ROW 2 ── */}

        {/* Tokenomics */}
        <SectionCard
          title="Tokenomics"
          bgImage={tokenomicsBg}
          className="p-4"
          bgOverlayClassName="bg-transparent"
          titleClassName="font-cartoon text-center font-normal leading-none text-[#000000]"
          textClassName="font-cartoon font-semibold text-[#11173E] leading-snug text-center space-y-2"
          contentClassName="items-center justify-center"
          titleStyle={{ fontSize: 'clamp(1.4rem, 2.5vw, 3rem)' }}
          textStyle={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.2rem)' }}
        >
          <p>Total Supply - 6 M</p>
          <p>Burnt Liquidity</p>
          <p>Buy/Sell Tax - 0%</p>
        </SectionCard>

        {/* PLUTO hero */}
        <section
          className="relative box-border overflow-hidden rounded-xl border-[4px] border-black"
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
          className="bg-[#c8d7eb]/70"
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
        <section className="relative box-border overflow-hidden rounded-xl border-[4px] border-black bg-[#c8d7eb]/70">
          <div className="relative z-10 flex h-full flex-col items-center justify-start pt-3 px-4 text-center gap-2">
            <p style={{ fontFamily: 'Marhey, cursive', fontSize: 'clamp(0.55rem, 0.85vw, 0.9rem)', fontWeight: 600, color: '#11173E', lineHeight: 1.5 }}>
              Embark on an interstellar journey with us! Join the Pluto Token community today and be part of a vibrant group of explorers, innovators, and dreamers.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xl">➤</span>
              <span style={{ fontFamily: 'Marhey, cursive', fontSize: 'clamp(1.2rem, 2.2vw, 2rem)', fontWeight: 900, color: '#000' }}>JOIN NOW</span>
              <span className="text-xl">⟳</span>
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
          className="bg-[#c8d7eb]/70"
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
          className="relative box-border overflow-hidden rounded-xl border-[4px] border-black"
          style={{ backgroundImage: `url(${spaceBoard})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
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
            className="pointer-events-none absolute bottom-0 right-0 z-20"
            style={{ height: '88%', width: 'auto' }}
          />
        </section>

      </div>
    </div>
  )
}