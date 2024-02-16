import { Pokemon } from "../pokemon";

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{pokemon?.name}</h5>
                <p className="card-text">
                    {pokemon?.description}
                </p>
            </div>
        </div>
    );
}

export default PokemonCard;