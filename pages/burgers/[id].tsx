import React, {FC} from 'react';
import {ResponseType} from "./index";
import styles from '../../styles/Burgers.module.css'
import Image from "next/image";


type burger = {
    burger: ResponseType
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:9000/items')
    const data:ResponseType[] = await res.json()
    const paths = data.map(burger => {
        return {
            params: {id: burger.id}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:9000/items/${id}`)
    const data = await res.json()

    return {
        props: { burger: data }
    }
}


const Details: FC<burger> = ({burger}) => {
    return (
        <div className={styles.singleBurger}>
            <h1>{burger.name}</h1>
            <div className={styles.imageContainer}>
                <Image src={burger.image} alt={burger.name} width={200} height={150}/>
            </div>
            <div>
                <p>{burger.desc}</p>
            </div>
        </div>
    );
};

export default Details;