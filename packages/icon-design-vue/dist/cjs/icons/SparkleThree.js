'use strict';

const { defineComponent, h } = require('vue');

const SparkleThree = defineComponent({
  name: 'SparkleThree',
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
          h('path', {"d":"M2 7C4.211 7 6 8.789 6 11"}),
          h('path', {"d":"M10 7C7.789 7 6 8.789 6 11"}),
          h('path', {"d":"M10 7C7.789 7 6 5.211 6 3"}),
          h('path', {"d":"M2 7C4.211 7 6 5.211 6 3"}),
          h('path', {"d":"M14 11C16.211 11 18 12.789 18 15"}),
          h('path', {"d":"M22 11C19.789 11 18 12.789 18 15"}),
          h('path', {"d":"M22 11C19.789 11 18 9.211 18 7"}),
          h('path', {"d":"M14 11C16.211 11 18 9.211 18 7"}),
          h('path', {"d":"M6 18C8.211 18 10 19.789 10 22"}),
          h('path', {"d":"M14 18C11.789 18 10 19.789 10 22"}),
          h('path', {"d":"M14 18C11.789 18 10 16.211 10 14"}),
          h('path', {"d":"M6 18C8.211 18 10 16.211 10 14"})
        ]
      );
  }
});

module.exports = SparkleThree;
module.exports.SparkleThree = SparkleThree;
module.exports.default = SparkleThree;
