import './jsdom';

import $ from 'teaspoon';
import chai from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

function renderStateless(Component, props) {
  const wrapper = TestUtils.renderIntoDocument(<div><Component { ...props } /></div>);

  return findDOMNode(wrapper).children[0];
}

global.$ = $;
global.React = React;
global.expect = chai.expect;
global.should = require('chai').should();
global.TestUtils = TestUtils;
global.renderStateless = renderStateless;
