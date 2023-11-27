import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import { SidebarChatItem } from './SidebarChatItem';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'


// Componente que muestra la informacion de los usuarios en una lista
export const Sidebar = () => {
    const { chatState } = useContext(ChatContext);
    const { auth } = useContext(AuthContext);
    const { uid } = auth;

    return (
        <div className="inbox_chat">

            {/* Buscador de usuarios */}
            <div className="relative mt-2 mb-2 ml-2 mr-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="-mr-3 h-6 w-6 text-gray-400 " aria-hidden="true" />
                </div>

                <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Buscar usuarios"
                />
            </div>


            {
                chatState.usuarios
                    .filter(user => user.uid !== uid)
                    .map((usuario) => (
                        <SidebarChatItem
                            key={usuario.uid}
                            usuario={usuario}
                        />
                    ))
            }

            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>
        </div>
    )
}
