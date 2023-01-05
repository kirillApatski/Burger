import React, {useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const NotFoundPAge = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router?.push('/')
        }, 3000)
    }, [])
    return (
        <div className='not-found'>
            <h1>Ой</h1>
            <h2>Такой страницы нету</h2>
            <p>Перехожу <Link href='/'>главную страницу</Link> через 3 секунды...</p>
        </div>
    );
};

export default NotFoundPAge;