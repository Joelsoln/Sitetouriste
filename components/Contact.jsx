'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import styles from './Contact.module.css';

export default function Contact() {
  const [result, setResult] = useState('');
  const [success, setSuccess] = useState(true);

  const {
      register, handleSubmit, getValues,
      formState: { errors }
  } = useForm({
      defaultValues: {
          nom: '',
          email: '',
          objet: '',
          message: ''
      }
  });

  const sendmail = () =>{
      const values = getValues();

      const templateParams = {
          name: values.nom,
          subject: values.objet,
          email: values.email,
          message: values.message,
      }

      emailjs.send(
        'service_xz20dww', // service id
        'template_mi5ydnz', // template id
            templateParams,
        '0sgwvNyWP3GZkhdeC' // user public key
      ).then(
          (response) =>{
              setResult("message envoye avec succes");
              setSuccess(true);
          },
          (error) =>{
              setResult("message non envoye");
              setSuccess(false)
          }
      )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contactez-nous</h2>
      <form className={styles.form} onSubmit={handleSubmit(sendmail)}>
          <div>
              <label className={styles.label}>
                  Nom :
                  <input
                      type="text"
                      placeholder='votre nom'
                      className={styles.input}
                      {...register("nom",
                          {
                              required: 'Ce champ est obligatoire',
                          }
                      )}
                  />
              </label>
              <div className={styles.erreur}>{errors.nom?.message}</div>
          </div>

          <div>
              <label className={styles.label}>
                  Email:
                  <input
                      type="text"
                      placeholder='votre email'
                      className={styles.input}
                      {...register("email",
                          {
                              required: 'Ce champ est obligatoire',
                              pattern: {
                                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  message: 'Email invalide'
                              }
                          }
                      )}
                  />
              </label>
              <div className={styles.erreur}>{errors.email?.message}</div>
          </div>

          <div>
              <label className={styles.label}>
                  Objet :
                  <input
                      type="text"
                      placeholder='objet du message'
                      className={styles.input}
                      {...register("objet",
                          {
                              required: 'Ce champ est obligatoire',
                          }
                      )}
                  />
              </label>
              <div className={styles.erreur}>{errors.objet?.message}</div>
          </div>

          <div>
              <label className={styles.label}>
                  Message :
                  <textarea
                      cols={20}
                      rows={10}
                      placeholder='votre message'
                      className={styles.textarea}
                      {...register("message",
                          {
                              required: 'Ce champ est obligatoire',
                          }
                      )}
                  />
              </label>
              <div className={styles.erreur}>{errors.message?.message}</div>
          </div>

          <button type='submit' className={styles.button}>Envoyer</button>
          <div className={success ? styles.result_OK : styles.result_NOT_OK}>{result}</div>
      </form>
    </div>
  );
}

