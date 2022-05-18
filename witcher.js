const witcher = {
    name: 'Геральт из Ривии',
    nickName: 'Белый волк, Мясник из Блавикена',
    age: 70+ '(более точный возраст неизвестен)',
    description:'Геральт описывается как высокий, худощавый, стройный неестественно бледный не молодой и не старый мужчина с полностью седыми, как молоко, волосами, в книгах перехваченными на лбу кожаной повязкой, в играх же он собирает их в высокий хвост на затылке. Имеет жёлтые фосфоресцирующие глаза с вертикальными зрачками.',
    health: 200,
    intoxication: 0,
    weapon: {
        weaponName1: 'Steel sword',
        weaponName2: 'Arondite(silver sword)'
    },
    elixirs: 5,
    getStatus() {
        return `Имя: ${this.name} (${this.nickName}),Возраст: ${this.age}, Здоровье: ${this.health}, Интоксикация: ${this.intoxication}, Оружие: ${this.weapon.weaponName1}/${this.weapon.weaponName2}, Эликсиры: ${this.elixirs}`
    },
    attack() {
        if (this.weapon.amountOfAmmo !== 0) {
            this.weapon.amountOfAmmo -= 1;
            console.log('Звуки смерти демонов');
        } else if (this.weapon.amountOfAmmo === 0) {
            console.log('Перезарядите оружие');
        }
    },
    meditation() {
        this.elixirs = 5;
        this.intoxication = 0;
    },
    hurt() {
        if (this.health === 0) {
            console.log('Ты умер!')
        } else if (this.health -= 25) {
            console.log('Ты ранен')
        }
    },
    drink() {
        if (this.health < 200 && this.intoxication < 100 ) {
            this.elixirs -= 1;
            this.intoxication += 25;
            this.health = 200;
        }
    }


}