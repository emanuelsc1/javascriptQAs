const LIST = [
    {
        id: 1,
        nome: 'C3po',
        avatar: 'images/c3po.png'
    },
    {
        id: 2,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 3,
        nome: 'Hansolo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 4,
        nome: 'Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 5,
        nome: 'Luke',
        avatar: 'images/luke.png'
    },
    {
        id: 6,
        nome: 'R2d2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 7,
        nome: 'Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 8,
        nome: 'Yoda',
        avatar: 'images/yoda.png'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Emanuel',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(nomePersonagem) {
            alert(`O personagem ${nomePersonagem} recebeu um like!`)
        },
        remove(id){
            const list = this.characters
            const result = list.filter(item => {
                return item.id !== id
            })
            this.characters = result
        },
        search() {

            if(this.searchName === '') {
                return alert('O campo de busca é obrigatório')
            }

            const list = this.characters = LIST
            const result = list.filter(item => {
                return item.nome === this.searchName
            })

            if(result.length <= 0){
                alert('Nenhum registro encontrado.')
            } else {
                this.characters = result
            }

            
        }
    }
})


