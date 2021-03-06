/**
 * RETSr.io rets.js RETS Client
 * @module RETS
 * @license MIT
 *
 * @see {@link http://retsr.io/rets.js}
 */

'use strict';

module.exports = Session;

/**
 * @constructor
 * @class
 * @public
 * @requires
 * @param
 * @returns
 * @throws
 */
function Session() {

    if (!(this instanceof Session)) {
        return new Session();
    }

    this.id = '';
    this.settings = {};

}
