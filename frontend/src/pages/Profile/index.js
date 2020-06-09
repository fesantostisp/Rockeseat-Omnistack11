import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiX } from 'react-icons/fi';
import { FaEdit, } from "react-icons/fa";

import api from '../../services/api';

import './styles.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Error ao deletar o caso');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    function visitPage(){
        window.location='/delprofile';
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem Vindo(a), {ongName} </span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

                <button onClick={handleLogout} type="button">
                    <FiPower size={23} color="#E02041" />
                </button>

            
                <button onClick={visitPage} type="button">
                    <FiX size={23} color="#E02041" />
                </button>

            </header>

            <h1>Meus Casos</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>

                        <div className="icons">

                            <button className="button2" onClick={() => { }} type="button">
                                <FaEdit size={20} color="#a8a8b3" />
                            </button>

                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}