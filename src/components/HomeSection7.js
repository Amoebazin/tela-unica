import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../Apphs7.css';

export default function MeuFormulario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipoServico, setTipoServico] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nome: ${nome}\nEmail: ${email}\nTipo de Serviço: ${tipoServico}`);
    };

    return (
        <div className="home-section-7">
            <Container className="home-section-7-content">
                <div className="title-box-home-section-7">
                    <h1 className="home-section-7-part-1-text">
                        COMO PODEMOS AJUDAR?
                    </h1>
                </div>

                <div className="home-section-7-text-description">
                    <p><strong>
                        Entre em contato e veja as vantagens que oferecemos<br/>
                        para que sua empresa cresça cada vez mais<br/>
                        aproveitando o que a internet possibilita.
                    </strong></p>
                </div>

                <div className="caixa">
                <form onSubmit={handleSubmit} className="form">

                    <div className="form-nome">
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="NOME"
                            required
                        />
                    </div>

                    <div className="form-email">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-MAIL"
                            required
                        />
                        
                    </div>

                    <div className="tipos-servicos">
                        <select
                            value={tipoServico}
                            onChange={(e) => setTipoServico(e.target.value)}
                            required
                        >
                            <option value="">TIPO DE SERVIÇO</option>
                            <option value="manutencao">Manutenção</option>
                            <option value="instalacao">Instalação</option>
                            <option value="consultoria">Consultoria</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <button type="submit">Mandar Sinal</button>
                </form>
                </div>
                <div className="contato-box">
                        <div className="contato-linha">
                            <FaWhatsapp size={20} />
                            <a href="https://wa.me/5561983442017">
                            <strong>(61) 98344.2017</strong>
                            </a>
                        </div>

                        <div className="contato-linha">
                            <FaEnvelope size={18} />
                            <a href="mailto:sergio@batscollab.com.br">
                            <strong>sergio@batscollab.com.br</strong>
                            </a>
                        </div>

                        <div className="contato-redes">
                            <a href="https://facebook.com" aria-label="Facebook">
                            <FaFacebookF size={18} />
                            </a>
                            /
                            <a href="https://instagram.com" aria-label="Instagram">
                            <FaInstagram size={18} />
                            </a>
                        </div>
                </div>
            </Container>
        </div>
    );
}
