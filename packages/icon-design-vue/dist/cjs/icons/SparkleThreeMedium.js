'use strict';

const { defineComponent, h } = require('vue');

const SparkleThreeMedium = defineComponent({
  name: 'SparkleThreeMedium',
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
          h('path', {"d":"M2 7C4.762 7 7 9.238 7 12"}),
          h('path', {"d":"M12 7C9.238 7 7 9.238 7 12"}),
          h('path', {"d":"M12 7C9.238 7 7 4.762 7 2"}),
          h('path', {"d":"M2 7C4.762 7 7 4.762 7 2"}),
          h('path', {"d":"M15 10.5C16.934 10.5 18.5 12.066 18.5 14"}),
          h('path', {"d":"M22 10.5C20.066 10.5 18.5 12.066 18.5 14"}),
          h('path', {"d":"M22 10.5C20.066 10.5 18.5 8.934 18.5 7"}),
          h('path', {"d":"M15 10.5C16.934 10.5 18.5 8.934 18.5 7"}),
          h('path', {"d":"M6 18C8.211 18 10 19.789 10 22"}),
          h('path', {"d":"M14 18C11.789 18 10 19.789 10 22"}),
          h('path', {"d":"M14 18C11.789 18 10 16.211 10 14"}),
          h('path', {"d":"M6 18C8.211 18 10 16.211 10 14"})
        ]
      );
  }
});

module.exports = SparkleThreeMedium;
module.exports.SparkleThreeMedium = SparkleThreeMedium;
module.exports.default = SparkleThreeMedium;
