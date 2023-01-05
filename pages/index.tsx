import Link from "next/link";
import styles from '../styles/Home.module.css'
import Image from "next/image";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Жирные бургеры | Главня</title>
                <meta name="title" content="Жирные Бургеры"/>
            </Head>
            <div>
                <h1 className={`${styles.title} font-effect-fire-animation`}>Главня</h1>
                <div className={styles.mainImage}>
                    <Image width={400} height={300} src="/fatburger.png" alt="burger"/>
                </div>
                <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо.
                    О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
                <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
                    обслуживания, правильная атмосфера заведения.</p>
                <Link href='/burgers'><span className={styles.btn}>Все бургеры</span></Link>
            </div>
        </>
    )
}
