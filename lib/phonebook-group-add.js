
var _              = require('underscore')._,
    ActionAbstract = require('./action-abstract.js');

/**
 * add group
 * @param {Object} options
 */
function PhonebookGroupAdd(options){
    ActionAbstract.call(this, options);
}

PhonebookGroupAdd.prototype = Object.create(ActionAbstract.prototype);

/**
 * get/set name of the group
 * @param  {String} [name]
 * @return {PhonebookGroupAdd} or {String}
 */
PhonebookGroupAdd.prototype.name = function(name){
    return this.param('add_group', name);
};

/**
 * get/set info
 * @param  {String} [name]
 * @return {PhonebookGroupAdd} or {String}
 */
PhonebookGroupAdd.prototype.info = function(info){
    return this.param('info', info);
};

/**
 * execute action
 * @return {Promise}
 */
PhonebookGroupAdd.prototype.execute = function(){
    return this.request()
        .path('phonebook.do')
        .data(this.params())
        .json()
        .execute();
};

module.exports = PhonebookGroupAdd;
