import React, { useContext } from 'react';

import { ChatContext } from '../context/chat/ChatContext';
import { fetchConToken } from '../helpers/fetch';
import { scrollToBottom } from '../helpers/scrollToBottom';

import { types } from '../types/types';

export const SidebarChatItem = ({ usuario }) => {

    const { chatState, dispatch } = useContext(ChatContext);
    const { chatActivo } = chatState;

    const onClick = async () => {
        dispatch({
            type: types.activarChat,
            payload: usuario.uid
        });

        // Cargar los mensajes del chat
        const resp = await fetchConToken(`mensajes/${usuario.uid}`);
        dispatch({
            type: types.cargarMensajes,
            payload: resp.mensajes
        });

        scrollToBottom('mensajes');
    }


    const person = {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lastSeen: null,
        lastSeenDateTime: '2023-01-23T13:23Z',
    }


    return (
        <div
            className={`chat_list ${(usuario.uid === chatActivo) && 'active_chat'}`}
            onClick={onClick}
        >
            <div className="chat_people">
                <div className="flex justify-between gap-x-6 py-2">
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{usuario.nombre}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{usuario.email}</p>
                        </div>
                    </div>

                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                        {person.lastSeen ? (
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                            </p>
                        ) : (
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs leading-5 text-gray-500">Online</p>
                            </div>
                        )}
                    </div>
                </div>


                {/* <div>
                    {
                        (usuario.online)
                            ? <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                Online
                            </span>
                            : <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                Offline
                            </span>
                    }

                </div> */}
            </div>
        </div>
    )
}
