import React, { Component } from 'react';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_Component) {
  _inherits(Demo, _Component);

  function Demo(props) {
    _classCallCheck(this, Demo);

    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    _this.handleAdd = function () {
      _this.setState({ count: ++_this.state.count });
    };

    _this.handleSub = function () {
      _this.setState({ count: --_this.state.count });
    };

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Demo, [{
    key: 'render',
    value: function render() {
      var count = this.state.count;

      return React.createElement(
        'div',
        { className: 'lcgc__demo' },
        React.createElement(
          'p',
          { style: styles.uCenter },
          count
        ),
        React.createElement(
          'button',
          { style: styles.uCenter, onClick: this.handleAdd },
          '+'
        ),
        React.createElement(
          'button',
          { style: styles.uCenter, onClick: this.handleSub },
          '-'
        )
      );
    }
  }]);

  return Demo;
}(Component);

var styles = {
  uCenter: {
    width: '100%',
    display: 'block',
    textAlign: 'center'
  }
};

export default Demo;
