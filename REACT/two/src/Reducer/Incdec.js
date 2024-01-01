let initial = { count: 0 }

const IncDec = (state = initial, action) => {  
    switch (action.type) {
        case 'INC':
            return { count: state.count + 1 }   
            break    
        case 'DIC':   
            return { count: state.count - 1 }   
            break                             
        default:    
            return { count: state.count }           
            break
    }
}
export default IncDec;   