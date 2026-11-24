'use strict';

const { defineComponent, h } = require('vue');

const ListCheckbox = defineComponent({
  name: 'ListCheckbox',
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
          h('line', {"x1":"9.974731449547107","y1":"4.000000000570253","x2":"21.974731449547107","y2":"4.000000000570253"}),
          h('line', {"x1":"9.974731449547107","y1":"12.000000000571163","x2":"21.974731449547107","y2":"12.000000000571163"}),
          h('line', {"x1":"9.974731449547107","y1":"20.000000000571163","x2":"21.974731449547107","y2":"20.000000000571163"}),
          h('rect', {"x":"1.974731449459796","y":"2.000000000661203","width":"4.000000000087311","height":"3.999999999909051"}),
          h('rect', {"x":"1.974731449459796","y":"10.000000000571163","width":"4.000000000087311","height":"3.999999999909051"}),
          h('rect', {"x":"1.974731449459796","y":"18.000000000571163","width":"4.000000000087311","height":"3.999999999909051"})
        ]
      );
  }
});

module.exports = ListCheckbox;
module.exports.ListCheckbox = ListCheckbox;
module.exports.default = ListCheckbox;
