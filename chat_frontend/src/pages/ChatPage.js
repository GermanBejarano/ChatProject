import React, { useContext } from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';
import { ChatContext } from '../context/chat/ChatContext';

import '../css/chat.css';

// Pagina principal del chat
export const ChatPage = () => {

    const { chatState } = useContext(ChatContext);
    return (
        <div className="messaging bodyChat">
            <div className="inbox_msg">

                {/* Componente lateral que muestra los usuarios y otras funcionalidades */}
                <InboxPeople />

                {/* Componente que despliega los mensajes */}
                {
                    (chatState.chatActivo)
                        ? <Messages />
                        : <ChatSelect />
                }

            </div>
        </div>
    )
}
