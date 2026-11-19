'use strict';

const { defineComponent, h } = require('vue');

const NavigationUpCircleDashedQuarter = defineComponent({
  name: 'NavigationUpCircleDashedQuarter',
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
          h('path', {"d":"M4.191 5.563C4.559 5.125 4.965 4.719 5.402 4.352"}),
          h('path', {"d":"M8.434 2.605C8.965 2.414 9.52 2.262 10.086 2.164"}),
          h('path', {"d":"M2 10.25C2.102 9.68 2.25 9.129 2.445 8.598"}),
          h('path', {"d":"M13.586 2.164C18.273 2.992 21.836 7.074 21.84 12C21.84 17.523 17.359 22 11.84 22C6.914 22 2.828 18.438 2 13.75"}),
          h('path', {"d":"M7.391 13.68L11.145 7.43C11.531 6.781 12.469 6.781 12.859 7.43L16.609 13.68C17.086 14.48 16.316 15.438 15.438 15.145L12.316 14.105C12.113 14.035 11.887 14.035 11.684 14.105L8.566 15.145C7.684 15.438 6.914 14.48 7.391 13.68Z"})
        ]
      );
  }
});

module.exports = NavigationUpCircleDashedQuarter;
module.exports.NavigationUpCircleDashedQuarter = NavigationUpCircleDashedQuarter;
module.exports.default = NavigationUpCircleDashedQuarter;
