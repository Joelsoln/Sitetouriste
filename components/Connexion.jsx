'use client';
import styles from './Connexion.module.css';
import { useForm } from 'react-hook-form';

export default function Connexion() {

    const { 
        register, handleSubmit, formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
     
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>
                        Email:
                        <input
                            type="text"
                            {...register("email", {
                                required: 'Ce champ est obligatoire',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Email invalide'
                                }
                            })}
                            className={styles.input}
                        />
                    </label>
                    <div className={styles.erreur}>{errors.email?.message}</div>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>
                        Password:
                        <input 
                            type="password" 
                            {...register("password", {
                                required: "Ce champ est obligatoire",
                                minLength: { value: 8, message: "8 caractères minimum" },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                    message: "Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre."
                                }
                            })}
                            className={styles.input}
                        />
                    </label>
                    <div className={styles.erreur}>{errors.password?.message}</div>
                </div>
                <button type='submit' className={styles.button}>Se connecter</button>
            </form>
        </div>
    )
}
