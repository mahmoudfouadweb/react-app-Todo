const menu = this.props.dishes.mab((dish)=> {
    return(
        <div key={dish.id}>
        <h1>{dish.name}</h1>
        <p>{dish.description}</p>
    </div>
    );
})

