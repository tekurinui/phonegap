var EmployeeView = function(employee){
    this.initialise = function(){
        this.el = $('<div/>');
    };
    
    this.render = function(){
        this.el.html(EmployeeView.template(employee));
        return this;
    }
    this.initialise();
};

EmployeeView.template = Handlebars.compile($('#employee-tpl').html());