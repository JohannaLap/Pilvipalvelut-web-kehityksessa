import ProductList from



    return (
        <div>
            <h2>Tuotelista</h2>
            <div> style = {{display: 'flex' , flexDirection: 'colum' , gap: '10px' }}
            <input type ="text" placeholder= "Tuotteen nimi"
            value = {newName} onChange={handleInputChange} />
            <button onClick = {addProduct}>Lisää tuote</button>
            </div>
        </div>
    );
};