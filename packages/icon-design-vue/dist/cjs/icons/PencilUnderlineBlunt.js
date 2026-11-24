'use strict';

const { defineComponent, h } = require('vue');

const PencilUnderlineBlunt = defineComponent({
  name: 'PencilUnderlineBlunt',
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
          h('path', {"d":"M21.121320343560001,4.636038969289075l-1.757359312849985-1.757359312850895c-1.171572875259699-1.171572875248785-3.071067811870307-1.171572875248785-4.242640687120002,0L2,15.999999999998181l.00000000036016,5.99999999963984h5.99999999963984l13.121320343529987-13.121320343199841c1.171572875279708-1.171572875248785,1.171572875289712-3.071067811881221.000000000030013-4.242640687149105Z"}),
          h('line', {"x1":"13","y1":"4.999999999998181","x2":"19","y2":"10.999999999998181"}),
          h('line', {"x1":"13","y1":"21.999999999998181","x2":"22","y2":"21.999999999998181"})
        ]
      );
  }
});

module.exports = PencilUnderlineBlunt;
module.exports.PencilUnderlineBlunt = PencilUnderlineBlunt;
module.exports.default = PencilUnderlineBlunt;
