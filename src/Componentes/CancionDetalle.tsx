import styles from './CancionDetalle.module.css';

type CancionDetalleProps = {
  Orden: string;
  Titulo: string;
  Arte: string;
  Año: string;
  Album: string;
<<<<<<< HEAD
  onPlay?: () => void;
  Duracion: string;
};

function CancionDetalle(props: CancionDetalleProps) {
  const { Orden, Titulo, Arte, Año, Album ,onPlay, Duracion } = props;

  return (
    <section className={styles.MusicContenedorCancion}>
      <div className={styles.LeftContent}>
=======
  Duracion: string;
  onPlay?: () => void;
  onDelete?: () => void;  
  className?: string;
};

function CancionDetalle(props: CancionDetalleProps) {
  const { Orden, Titulo, Arte, Año, Album, Duracion, onPlay, onDelete } = props;

  return (
    <section className={styles.MusicContenedorCancion} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div className={styles.LeftContent} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
>>>>>>> TP4-React
        <span className={styles.OrdenFavoritos}>{Orden}</span>
        {Arte && (
          <img
            onClick={onPlay}
            src={Arte}
            alt={Titulo}
            className={styles.ArteFavoritos}
<<<<<<< HEAD
=======
            style={{ cursor: onPlay ? 'pointer' : 'default' }}
>>>>>>> TP4-React
          />
        )}
        <div className={styles.Textos}>
          <h2 className={styles.CancionFavoritos}>{Titulo}</h2>
          <h5 className={styles.AñoFavoritos}>Año de lanzamiento: {Año}</h5>
        </div>
      </div>
<<<<<<< HEAD
      <div className={styles.AlbumFavoritos}>{Album}</div>
      <div className={styles.Duracion}>{Duracion}</div>
=======

      <div className={styles.AlbumFavoritos}>{Album}</div>
      <div className={styles.Duracion}>{Duracion}</div>

      {/* Botón eliminar */}
      {onDelete && (
        <button
          onClick={onDelete}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'red',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            cursor: 'pointer',
            padding: 0,
            marginLeft: '1rem',
          }}
          title="Eliminar canción"
          aria-label={`Eliminar canción ${Titulo}`}
          type="button"
        >
          ×
        </button>
      )}
>>>>>>> TP4-React
    </section>
  );
}

<<<<<<< HEAD
export default CancionDetalle;
=======
export default CancionDetalle;
>>>>>>> TP4-React
