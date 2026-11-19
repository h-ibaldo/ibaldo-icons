'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownToDotCircle = defineComponent({
  name: 'ArrowDownToDotCircle',
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
          h('path', {"d":"M15 11L12 14L9 11"}),
          h('path', {"d":"M12 7L12 14"}),
          h('path', {"d":"M14 20C14 18.895 13.105 18 12 18C10.895 18 10 18.895 10 20C10 21.105 10.895 22 12 22C13.105 22 14 21.105 14 20Z"}),
          h('path', {"d":"M18 19.984C20.426 18.16 22 15.27 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 15.27 3.574 18.16 6 19.984"})
        ]
      );
  }
});

module.exports = ArrowDownToDotCircle;
module.exports.ArrowDownToDotCircle = ArrowDownToDotCircle;
module.exports.default = ArrowDownToDotCircle;
