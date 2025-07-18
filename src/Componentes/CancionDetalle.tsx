import styles from './CancionDetalle.module.css';

type CancionDetalleProps = {
  Orden: string;
  Titulo: string;
  Arte: string;
  Año: string;
  onPlay?: () => void;
  Duracion: string;
};

function CancionDetalle(props: CancionDetalleProps) {
  const { Orden, Titulo, Arte, Año, onPlay, Duracion } = props;

  return (
    <section className={styles.MusicContenedorCancion}>
      <div className={styles.LeftContent}>
        <span className={styles.OrdenFavoritos}>{Orden}</span>
        {Arte && (
          <img
            onClick={onPlay}
            src={Arte}
            alt={Titulo}
            className={styles.ArteFavoritos}
          />
        )}
        <div className={styles.Textos}>
          <h2 className={styles.CancionFavoritos}>{Titulo}</h2>
          <h5 className={styles.AñoFavoritos}>Año de lanzamiento: {Año}</h5>
        </div>
      </div>
      <div className={styles.Duracion}>{Duracion}</div>
    </section>
  );
}

export default CancionDetalle;