"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const message = (userId, service) => {
    return ` 
    <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }

                h1 {
                    color: #1e92c8;
                }

                #container {
                    background: #fff;
                    border-radius: 0.5rem;
                    border: 2px solid #9d9797;
                    padding: 1rem;
                }

                p {
                    color: #9D9797;
                }

                button {
                background: #5dc4e4;
                color: #fff;
                border-radius: 0.5rem;
                border: transparent;
                height: 2rem;
                }
            </style>
        </head>
        <body>
            <div id='container'> 
                <h1>Meu cadastro</h1>

                <p>Seja muito bem vindo ao nosso serviço de autenticação</p>

                <p>
                Para finalizar o seu cadastro, você será redirecionar para criar sua senha
                </p>

                <button>
                <a href="${process.env.AUTHENTICATOR_FRONT}/cadastro/${service}/${userId}">Cadastrar senha</a>
                </button>
            </div>
        </body>
    </html>`;
};
exports.message = message;
//# sourceMappingURL=emailMsg.js.map