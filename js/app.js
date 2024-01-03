const fruitStates={
    apple:10,
    orange:15,
}
const foodStates={
    sandwich:20
}
const fruitReducer=(state=fruitStates,action)=>{
    switch (action.type) {
        case "BUY_APPLE":            
            return{...state,apple:state.apple-1} 
        case "BUY_ORANGE":            
            return{...state,orange:state.orange-1}    
        default:
            return state;
    }
}
const foodReducer=(state=foodStates,action)=>{
    switch (action.type) {
        case "BUY_SANDWICH":            
            return{...state,sandwich:state.sandwich-1}    
        default:
            return state;
    }
}
const rootReducr=Redux.combineReducers({
    fruit:fruitReducer,
    food:foodReducer
})
const store=Redux.createStore(rootReducr);
const render=()=>{
    document.getElementById('apple_count').innerHTML="Apple :"+store.getState().fruit.apple
    document.getElementById('orange_count').innerHTML="Orange :"+store.getState().fruit.orange
    document.getElementById('sandwich_count').innerHTML="Sandwich :"+store.getState().food.sandwich}
store.subscribe(()=>{
    render()
})

document.getElementById('buy_apple').addEventListener('click',()=>{
    store.dispatch({type:"BUY_APPLE"}
)})
document.getElementById('buy_orange').addEventListener('click',()=>{
    store.dispatch({type:"BUY_ORANGE"}
)})
document.getElementById('buy_sandwich').addEventListener('click',()=>{
    store.dispatch({type:"BUY_SANDWICH"}
)})
render()