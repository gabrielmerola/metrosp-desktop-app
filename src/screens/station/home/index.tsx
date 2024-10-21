import { NavBar } from "../../../components/navbar"

export function StationDasboard() {
    const operators = [
        {
            id: '1',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '2',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '3',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '4',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '5',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '6',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '1',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '2',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '3',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '4',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '5',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '6',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '1',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '2',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '3',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '4',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '5',
            station: '17236',
            name: 'Luz'
        },
        {
            id: '6',
            station: '17236',
            name: 'Luz'
        },
    ]
    
    return (
        <>
        <main style={{display:"flex"}}>
            <NavBar type="station" />
            <section className="containerCentralDashboard">
                <h1>Visão Geral</h1>
                <div style={{height: '90%', display: 'flex', flexDirection: 'column', marginTop: 24}}>
                    <div style={{height: '50%'}}>
                        <label>Registros</label>
                        <div className='table'>
                            <header style={{display: 'flex'}}>
                                <div style={{textAlign: 'center', width: '33.3%'}}>Horário</div>
                                <div style={{textAlign: 'center', width: '33.3%'}}>leitor</div>
                                <div style={{textAlign: 'center', width: '33.3%'}}>status</div>
                            </header>
                            <div className='scrollable' style={{height:'90%', overflow:'auto'}}>
                                <div style={{height:'90%', overflow:'auto'}}>
                                    {operators.map((operator) => (
                                        <div style={{display: 'flex'}}>
                                            <div style={{width: '33.3%'}}>{operator.id}</div>
                                            <div style={{width: '33.3%'}}>{operator.station}</div>
                                            <div style={{width: '33.3%'}}>{operator.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* DIVIDES */}
                    <div style={{height: '50%'}}>
                        <label>Cameras</label>
                        <div className='table'>
                            {/* CAMERA */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}