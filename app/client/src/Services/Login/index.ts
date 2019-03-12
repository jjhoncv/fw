let url = process.env.API_SESSION;

// console.log('url', url)
export function ServiceLogin(user: string, password: string) {
    return fetch(url, { method: "post" })
        .then(res => res.json())
}