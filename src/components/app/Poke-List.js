import Component from '../components/Component.js';
import PokeCard from './PokeCard.js';

class PokeList extends Component {

    onRender(dom) {
        const pokemons = this.props.pokemon;
        
        pokemons.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonCard = new PokeCard(props);
            const pokemonCardDOM = pokemonCard.renderDOM();
            dom.appendChild(pokemonCardDOM);
        });
    }

    renderHTML() {
        return /*html*/`
        <ul class="poke-list"></ul>
        `;
    }
}

export default PokeList;