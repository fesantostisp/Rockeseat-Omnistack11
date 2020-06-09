import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {

    return (
        <div className="new-incident-container">
            <div className="delprofile">
                <section>

                    <img src={logoImg} alt="Be The Hero" />

                    <p>Tem certeza que deseja deletar o perfil ID da ong ? Você não podera fazer mais doações e não será mais um Herói! =( </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={15} color="#E02041" />
                    Não, Voltar.
                </Link>


                    <div className="divint2"> 
                        <Link className="back-link">
                            <FiCheck size={15} color="#E02041" />
                    Sim, Desejo Remover.
                </Link>

                    </div>

                </section>

            </div>
        </div>
    );
}