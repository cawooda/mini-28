const Component = require('./component')


class TaskList extends Component {
    constructor(children, priority) {
        super(children);
        this.priority = priority;
    }
    
    render() {
        return `<li class="tasks-item ${this.priority ? 'tasks-item-priority' : ''} >{INNER_HTML}</li>`
    }
}

module.exports = TaskList;