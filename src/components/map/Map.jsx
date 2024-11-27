import './map.css'
export default function Map() {
  return (
    <section>
        <h3 className="title">
            Location
        </h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13116.329665920719!2d36.7028503!3d34.7283169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15230f18e424b941%3A0x82f5833cfb41105c!2z2KfZhNij2YPYp9iv2YrZhdmK2Kkg2KfZhNmI2LfZhtmK2Kkg2KfZhNiz2YjYsdmK2Kk!5e0!3m2!1sar!2s!4v1732104932121!5m2!1sar!2s" width="600" height="450"  style={{boreder:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}
