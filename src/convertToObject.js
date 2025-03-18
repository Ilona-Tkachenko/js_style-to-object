'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 *
 */

const complexStylesString = `
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
      font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  white-space: nowrap;
  width: auto;
`;

function convertToObject(sourceString) {
  // write your code here

  const obj = {};

  const str = sourceString.split(';');

  for (let i = 0; i < str.length; i++) {
    const firstPart = str[i].split(':');

    if (firstPart.length === 2) {
      obj[firstPart[0].trim()] = firstPart[1].trim();
    }
  }

  return obj;
}
convertToObject(complexStylesString);
module.exports = convertToObject;
