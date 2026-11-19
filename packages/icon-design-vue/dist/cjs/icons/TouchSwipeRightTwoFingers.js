'use strict';

const { defineComponent, h } = require('vue');

const TouchSwipeRightTwoFingers = defineComponent({
  name: 'TouchSwipeRightTwoFingers',
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
          h('polyline', {"points":"17.025268544746723 2.998779304674827 20.025268544335631 5.998779305078642 17.025268543935454 8.998779304674827"}),
          h('line', {"x1":"12.025268544335631","y1":"5.9987793040018","x2":"20.025268544335631","y2":"5.998779305078642"}),
          h('circle', {"cx":"8.025268544333358","cy":"5.99877930346338","r":"4.000000000001137"}),
          h('polyline', {"points":"17.025268544746723 14.998779304674827 20.025268544335631 17.998779305078642 17.025268543935454 20.998779304674827"}),
          h('line', {"x1":"12.025268544335631","y1":"17.9987793040018","x2":"20.025268544335631","y2":"17.998779305078642"}),
          h('circle', {"cx":"8.025268544333358","cy":"17.99877930346338","r":"4.000000000001137"})
        ]
      );
  }
});

module.exports = TouchSwipeRightTwoFingers;
module.exports.TouchSwipeRightTwoFingers = TouchSwipeRightTwoFingers;
module.exports.default = TouchSwipeRightTwoFingers;
