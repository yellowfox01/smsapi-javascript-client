
var _              = require('underscore')._,
    ActionAbstract = require('./action-abstract.js');

/**
 * update group
 * @param {Object} options
 * @param {String} oldName
 */
function PhonebookGroupUpdate(options, oldName){
    ActionAbstract.call(this, options);
    this.oldName(oldName);
}

PhonebookGroupUpdate.prototype = Object.create(ActionAbstract.prototype);

/**
 * get/set oldName
 * @param  {String} [oldName]
 * @return {PhonebookGroupUpdate} or {String}
 */
PhonebookGroupUpdate.prototype.oldName = function(oldName){
    return this.param('edit_group', oldName);
};

/**
 * get/set name
 * @param  {String} [name]
 * @return {PhonebookGroupUpdate} or {String}
 */
PhonebookGroupUpdate.prototype.name = function(name){
    return this.param('name', name);
};

/**
 * get/set info
 * @param  {String} [info]
 * @return {PhonebookGroupUpdate} or {String}
 */
PhonebookGroupUpdate.prototype.info = function(info){
    return this.param('info', info);
};

/**
 * execute action
 * @return {Promise}
 */
PhonebookGroupUpdate.prototype.execute = function(){
    return this.request()
        .path('phonebook.do')
        .data(this.params())
        .json()
        .execute();
};

module.exports = PhonebookGroupUpdate;
