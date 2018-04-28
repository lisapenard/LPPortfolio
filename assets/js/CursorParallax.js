class CursorParallax {
    constructor() {
        this.setItems()
        this.setMouse()
        this.setRAF() //RAF = RequestAnimationFrame
    }

    setItems()
    {
        const $elements = document.querySelectorAll('.welcome, .tomy, .portfolio, .petale1, .petale, .frame, .frame1')

        this.items = []

        for (const $element of $elements) {
            const item = {}
            item.$element = $element
            item.offsetX = 0 //destination en X
            item.offsetY = 0 //destination en Y
            item.amplitude = parseFloat($element.dataset.amplitude)

            this.items.push(item)
        }

        console.log(this.items)
    }

    setMouse()
    {
        this.mouse = {}
        this.mouse.x = 0
        this.mouse.y = 0

        let windowWidth = window.innerWidth //déclaration pour optimiser  
        let windowHeight = window.innerHeight

        window.addEventListener('resize', (event) => {
            windowWidth = window.innerWidth
            windowHeight = window.innerHeight
        })

        window.addEventListener('mousemove', (event) => {
            this.mouse.x = event.clientX / windowWidth - 0.5
            this.mouse.y = event.clientY / windowHeight - 0.5
        })
    }

    // création d'un RAF pour ajouter un easing à chaque frame

    setRAF()
    {
        const loop = () => {
            window.requestAnimationFrame(loop)

            for(const item of this.items)
            {
                const offsetX = - this.mouse.x * 100 * item.amplitude
                const offsetY = - this.mouse.y * 100 * item.amplitude // calcul où ils doivent se placer 
                // const car ne change pas dans la boucle 

                item.offsetX += (offsetX - item.offsetX) * 0.1
                // mise à jour de la vraie valeur de offsetX

                //arrondir les valeurs = optimiser
                const roundedOffsetX = Math.round(item.offsetX * 100) / 100
                const roundedOffsetY = Math.round(item.offsetY * 100) / 100

                item.$element.style.transform = `
                translateX(${roundedOffsetX}px)
                translateY(${roundedOffsetY}px)
                `
            }
        }
        loop()
    }

}



// clientX = 
// window.innerWidth = largeur de la fenêtre de l'utilisateur 
// innerHeight = hauteur de la fenêtre de l'utilisateur 

// window innerWidth/Height = lourd => le déclarer avant 