const fibonacci = function(position) {
    let arr = [1, 1];
    if ( position == 0) {
        return 0
    } else if ( position < 0 ) {
        return 'OOPS'
    } else {
        for ( let i = 2; i <= position; i++ ) {
            arr[i] = arr[ i - 2 ] + arr [ i - 1 ];
    }
    return arr[position - 1 ];
        }
    }
    
// Do not edit below this line
module.exports = fibonacci;
