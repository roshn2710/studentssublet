export function fillInputOnChange(form, name, event){
    const element = event.target
    form[name] = element.value
}
export function isLoggedIn(){
    const object = localStorage.getItem('user')
    if(object) return true
    else return false
}