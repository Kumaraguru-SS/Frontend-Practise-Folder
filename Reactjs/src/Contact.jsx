export default function Contact() {
  return (
    <section style={{ padding: '16px' }}>
      <h1>Contact Page</h1>
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
      >
        <source src="/src/assets/cute_anime_chibi.mp4" type="video/mp4" />
      </video>
    </section>
  )
}