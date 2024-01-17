const button = document.querySelector(".button")
const container = document.querySelector(".container")
async function findIp(){

        const response = await fetch("https://api.ipify.org/?format=json")
        const data = await response.json()
        const ip = data.ip

        const response2 = await fetch(`https://ip-api.com/${ip}`)
        const data2 = await response2.json()

        const userInfo = `
            Континент: ${data2.continent}
            Країна: ${data2.country}
            Регіон: ${data2.region}
            Район: ${data2.regionName}
            Місто: ${data2.city}
        `
        container.innerHTML = userInfo

}
button.addEventListener("click", findIp)

