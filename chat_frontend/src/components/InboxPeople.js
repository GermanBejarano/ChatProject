import React from 'react';
import { Searchbox } from './Searchbox';
import { Sidebar } from './Sidebar';

export const InboxPeople = () => {
    return (
        <div className="inbox_people">

            {/* Componente que muestra el usuario y la funcion de salir */}
            <Searchbox />

            {/* Componente que despliega la lista de usuarios */}
            <Sidebar />

        </div>
    )
}
