import React, {FC} from 'react';
import Link from "next/link";
import styles from '../../styles/Burgers.module.css'
import Image from "next/image";

export type ResponseType = {
    name: string
    image: string
    desc: string
    price: number
    id: number
}

type BurgersPropsType = {
    burgers: ResponseType[]
}

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:9000/items')
    const data = await res.json()

    return {
        props: {burgers: data}
    }
}

const Burgers: FC<BurgersPropsType> = ({burgers}) => {
    return (
        <div>
            <h1>Наши бургеры</h1>
            {burgers.map(burger => {
                return (
                    <Link href={`/burgers/${burger.id}`} key={burger.id} className={styles.burgerCard}>
                        <div className={styles.imageContainer}>
                            <Image

                                src={burger.image}
                                alt={burger.name}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            <h3>{burger.name}</h3>
                            <p>{burger.desc}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default Burgers;