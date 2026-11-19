'use strict';

const { defineComponent, h } = require('vue');

const TouchSwipeDownTwoFingers = defineComponent({
  name: 'TouchSwipeDownTwoFingers',
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
          h('polyline', {"points":"20.974731437505397 16.998779304023628 17.974731437225273 19.998779303754418 14.974731437505397 16.998779303485207"}),
          h('line', {"x1":"17.974731437956507","y1":"11.998779303754418","x2":"17.974731437225273","y2":"19.998779303754418"}),
          h('circle', {"cx":"17.974731438316212","cy":"7.998779303754418","r":"4.000000000000227"}),
          h('polyline', {"points":"8.974731437505397 16.998779304562049 5.974731437225273 19.998779304292839 2.974731437505397 16.998779304023628"}),
          h('line', {"x1":"5.974731437956507","y1":"11.998779304292839","x2":"5.974731437225273","y2":"19.998779304292839"}),
          h('circle', {"cx":"5.974731438316212","cy":"7.998779304292839","r":"4.000000000000227"})
        ]
      );
  }
});

module.exports = TouchSwipeDownTwoFingers;
module.exports.TouchSwipeDownTwoFingers = TouchSwipeDownTwoFingers;
module.exports.default = TouchSwipeDownTwoFingers;
