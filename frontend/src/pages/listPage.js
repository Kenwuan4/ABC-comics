import React from 'react';
import ItemList from '../components/listItems';
import GetList from '../hooks/listHook';


function ListPage() {
    const { isLoading, newdata, setPage } = GetList({});
    const handleNexPage = () => setPage(prevPage => prevPage + 1)
    const handlePrevPage = () => setPage(prevPage => prevPage - 1)

    if (isLoading) return <i>Cargando...</i>

    return (
        <div>
            <div className='container px-1 px-lg-1 mt-3'>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                        </div>
                        <div class="col">
                            <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic Example">
                                <button type="button" className="btn btn-outline-primary" onClick={handlePrevPage}>Pagina anterior</button>
                                <button type="button" className="btn btn-outline-primary" onClick={handleNexPage}>Pagina siguiente</button>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                </div>
            </div>
            <ItemList data={newdata} />

        </div>
    );
}

export default ListPage;