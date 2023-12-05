import React from 'react';
import { InboxPeople } from '../components/InboxPeople';

import '../css/chat.css';

// Pagina principal del chat
export const RegisterPage = () => {

    return (
        <div className="messaging bodyChat">
            <div className="inbox_msg">

                {/* Componente lateral que muestra los usuarios y otras funcionalidades */}
                <InboxPeople />

            </div>
        </div>
    )
}
