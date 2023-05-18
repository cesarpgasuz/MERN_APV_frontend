import React from 'react'
import usePacientes from '../hooks/usePacientes';
import Paciente from './Paciente';

function ListadoPacientes() {

  const {pacientes} = usePacientes();

  return (
    <>
      {pacientes.length ? (

        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
             Administra tus Pacientes y Citas
          </p>

          {pacientes.map(paciente => (
              <Paciente
                key={paciente._id}
                paciente={paciente}
              />
          ))}


        </>
      ) : (

        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            comienza a agregar pacientes.
          </p>
        </>

      )}
    </>
  )
}

export default ListadoPacientes