'use strict';

const { defineComponent, h } = require('vue');

const SquareStack = defineComponent({
  name: 'SquareStack',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('path', {"d":"M22.000000000090949,11.000000000896762l-.000000000811269,9c-.000000000049113.552284749828686-.447715250260444.999999999959982-1.00000000008913.999999999909051l-11-.000000000985892"}),
          h('path', {"d":"M18.00000000044929,7.000000000536602l-.00000000080945,9c-.000000000049113.552284749832324-.447715250260444.999999999959982-1.00000000008913.999999999909051l-11-.000000000985892"}),
          h('rect', {"x":"2.00000000036016","y":"2.99999999963984","width":"12","height":"10","rx":".999999999999079","ry":".999999999999079","transform":"translate(16.000000000001439 15.999999999998559) rotate(-180)"})
        ]
      );
  }
});

module.exports = SquareStack;
module.exports.SquareStack = SquareStack;
module.exports.default = SquareStack;
