export function loadFormsData(dataFile) {
    
    dataFile = 'assets/data.json'

    return fetch(dataFile)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar JSON: ${response.statusText}`)
            }
            return response.json()
        })
        .then(data => data.forms || [])
        .catch(error => {
            console.error("Erro ao processar JSON:", error)
            return []
        });
}
