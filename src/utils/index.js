const _ = require('lodash');

const getInfo = ({fildes = [],object = {}}) => {
    return _.pick(object,fildes);
}

module.exports = getInfo;

