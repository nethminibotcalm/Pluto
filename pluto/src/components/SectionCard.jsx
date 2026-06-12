export default function SectionCard({
  title,
  children,
  image,
  bgImage,
  className = '',
  titleClassName = '',
  textClassName = '',
  contentClassName = '',
  titleStyle = {},
  textStyle = {},
  bgOverlayClassName = 'bg-white/10',
  imageStyle,
}) {
  const defaultTitleStyle = {
    fontFamily: 'Marhey, cursive',
    fontSize: 'clamp(1.5rem, 2.8vw, 3.5rem)',
    fontWeight: 400,
    color: '#000000',
    lineHeight: 1.1,
    ...titleStyle,
  }

  const defaultTextStyle = {
    fontFamily: 'Marhey, cursive',
    fontSize: 'clamp(0.55rem, 0.85vw, 0.95rem)',
    fontWeight: 600,
    color: '#11173E',
    lineHeight: 1.6,
    ...textStyle,
  }

  return (
    <article
      className={`relative box-border flex min-w-0 flex-col overflow-hidden rounded-xl border-[4px] border-black p-4 text-left ${className}`}
      style={{
        /* fill the grid cell completely */
        width: '100%',
        height: '100%',
        ...(bgImage ? {
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          contain: 'paint',
        } : { contain: 'paint' }),
      }}
    >
      {bgImage && <div className={`absolute inset-0 ${bgOverlayClassName}`} />}

      <div className={`relative z-10 flex h-full flex-col gap-2 ${contentClassName}`}>
        {title && (
          <h3 className={titleClassName} style={defaultTitleStyle}>{title}</h3>
        )}
        <div className={textClassName} style={defaultTextStyle}>{children}</div>
      </div>

      {image && (
        <img
          src={image}
          alt="character"
          className="pointer-events-none absolute z-20"
          style={{ bottom: 0, right: 0, width: '85px', height: 'auto', ...imageStyle }}
        />
      )}
    </article>
  )
}