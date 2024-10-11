/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let n = rooms.length;
    if(n === 1) return true;
    let visited = new Set();
    let stack = [0];

    while(stack.length > 0){
        const node = stack.pop();

        if(!visited.has(node)){
            visited.add(node)
            for(const key of rooms[node]){
                if(!visited.has(key)){
                    stack.push(key)
                }
            }
        }

    }

    return visited.size === n; 
};