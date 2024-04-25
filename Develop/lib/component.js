class Component {
    constructor(children = []) {
        if (!children) return [];
        this.children = children;
    }

    render(){
        throw new Error("Child class must implement render() method");
    }

    renderInnerHTML() {
        const childrenAsString = this.children.map((child) => {
            if (typeof(child)=== 'object') {
                return child.render();
            }
            return child;
        })
        return childrenAsString.join("");
    }
    
}





module.exports = Component;