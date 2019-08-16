import Component from '../components/Component.js';

class PokeCard extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        return /*html*/`
        <li>
            <h2>${pokemon.pokemon}</h2>
            <img class="poke-img" src="${pokemon.url_image}" alt="${pokemon.pokemon}">
            <div>
                <h3>Type:</h3>
                <p>${pokemon.type_1}grass/${pokemon.type_2}poison</p>
            </div>
        </li>
        `;
    }
}

export default PokeCard;