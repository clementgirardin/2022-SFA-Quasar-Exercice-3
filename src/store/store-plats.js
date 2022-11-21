import { uid } from 'quasar'

const state = {
  plats: [
    {
      id: 1,
      image: 'https://i.imgur.com/0umadnY.jpg',
      nom: 'Burger',
      description: "Un hamburger est un sandwich composé d'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain ou une brioche.",
      note: 4
    },
    {
      id: 2,
      image: 'https://i.imgur.com/b9zDbyb.jpg',
      nom: 'Pizza',
      description: "La pizza est un plat savoureux d'origine italienne, consistant en une base généralement ronde et aplatie de pâte levée à base de blé.",
      note: 5
    },
    {
      id: 3,
      image: 'https://i.imgur.com/RbKjUjB.jpg',
      nom: 'Petits choux',
      description:
        'Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...',
      note: 1
    },
    {
      id: 4,
      image: 'https://i.imgur.com/xAuhNVg.jpg',
      nom: 'BBQ Ribs',
      description: 'Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.',
      note: 5
    }
  ]
}

const mutations = {

  // Suppression plat
  supprimerTache (state, id) {
    // Filtre les données du tableau
    // et garde les tâches dont l'id est différent de celui à supprimer
    state.plats = state.plats.filter(el => el.id !== id)
  },

  // Ajout plat
  addPlat (state, plat) {
    state.plats.push(plat)
  },

  // Modification plat
  modifPlat (state, plat) {
    const index = state.plats.findIndex(el => el.id === plat.id)
    console.log(index, typeof plat.id)
    if (index !== -1) {
      Object.assign(state.plats[index], plat)
    }
  }
}

const actions = {

  // Suppression plat
  supprimerTache ({ commit }, id) {
    commit('supprimerTache', id)
  },

  // Ajout plat
  addPlat ({ commit }, plat) {
    const newId = uid()
    plat.id = newId
    commit('addPlat', plat)
  },

  // Modification plat
  modifPlat ({ commit }, plat) {
    commit('modifPlat', plat)
  }
}

const getters = {
  plats: function (state) {
    return state.plats
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
