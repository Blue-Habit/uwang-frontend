export function useApi(){

    function get(url:string):Promise<any>{
        return fetch(url).then(res=>res.json())
    }
    return {get}
}