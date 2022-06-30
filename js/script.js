const button = document.getElementById(`button-play`)

button.addEventListener(`click`, function () {

    function createCell() {
        const cell = document.createElement(`div`)
        cell.className = `cell`

        return cell
    }

    const grid = document.getElementById(`grid`)

    const numberCell = 100

    for (let i = 1; i <= numberCell; i++) {
        const cell = createCell()

        cell.addEventListener(`click`, function () {
            cell.classList.toggle(`clicked`)
            console.log(i)
        })

        cell.innerText = [i]

        grid.appendChild(cell)
    }
})