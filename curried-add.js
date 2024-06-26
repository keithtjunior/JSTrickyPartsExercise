function curriedAdd(total=0) {
    const add = (num) => {
        if(num){
            total += num;
            return add;
        }
        return total;
    }
    return add;
}

module.exports = { curriedAdd };
