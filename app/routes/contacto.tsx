/**
 * Lo que puede tener una ruta
 * 
 * 1.- Exportar el componente  () => Cliente(navegador)
 * 2.- El loader (API) JSON, Cargador de datos (Server) => async
 * 3.- El action (CRUD) post, put, patch, delete (Server) => async
 * 4.- Los metas (SEO) => Google index, títulos etc...
 * 5.- Los links recursos externos (CSS, ASSETS) => statics, fonts, icons
 */
import styles from "~/styles/styles.css";
import { useLoaderData, useActionData } from "@remix-run/react";

export const links = () => {
    return [{
        rel: 'stylesheet',
        href: styles,
    }]; // La única que devuelve un array
}

export const meta = () => ({
    title: 'Contacto',
    description: 'Este sitio web es false'
})

export const action = async ({ request }) => {
    const formData = await request.formData();
    console.log(
        "El nombre es ",
        formData.get('name')
    )
    return null;
}

export const loader = async () => {
    const characters = await (await fetch("https://rickandmortyapi.com/api/character")).json();
    return characters;
}

export default function Contacto() { // ESM => EsModules (import / export)
    const chars = useLoaderData();
    return (
        <div>
            <h2>{chars.results[0].name}</h2>
            <img src={chars.results[0].image} alt='character' />
            <form action="" method="post">
                <label>
                    nombre
                    <input type="text" name="name" placeholder="escribe nomre" />

                </label>
                <label htmlFor="">
                    email
                    <input type="email" name="email" placeholder="escribe email" />
                </label>
                <label htmlFor="">
                    email
                    <input type="email" name="email" placeholder="escribe email" />
                </label>
                <button type="submit">Enviar</button>
            </form>
            {chars.results.map((char: any) => (
                <>
                    <h2>{char.name}</h2>
                    <img src={char.image} alt='character' />
                </>
            ))}
        </div>
    )
}   