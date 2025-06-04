import styles from './PiePagina.module.css';

type PiePagina = {
  Logo: string;
  Texto: string;
  Texto2: string;  
  
}

function PiePagina(props: PiePagina) {
  const { Logo, Texto, Texto2 } = props;
  return (
    <section className={styles.Contenedor}>
      <img src={Logo} alt="Logo" className={styles.Logo} />  
      <div className={styles.TextoContainer}>
        <h5 className={styles.Texto}>{Texto}</h5>
        <h5 className={styles.Texto}>{Texto2}</h5>
      </div>
    </section>
  );
}
export default PiePagina;