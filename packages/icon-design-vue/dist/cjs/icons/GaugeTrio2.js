'use strict';

const { defineComponent, h } = require('vue');

const GaugeTrio2 = defineComponent({
  name: 'GaugeTrio2',
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
          h('path', {"d":"M21 11C21 6.027 16.973 2 12 2C7.027 2 3 6.027 3 11"}),
          h('path', {"d":"M21 11L19 11"}),
          h('path', {"d":"M5 11L3 11"}),
          h('path', {"d":"M7.051 6.051L5.637 4.637"}),
          h('path', {"d":"M12 5L12 3"}),
          h('path', {"d":"M6 20L6 22"}),
          h('path', {"d":"M16 7L12 11"}),
          h('path', {"d":"M11 11C11 10.445 11.445 10 12 10C12.555 10 13 10.445 13 11C13 11.555 12.555 12 12 12C11.445 12 11 11.555 11 11Z"}),
          h('path', {"d":"M9.426 22C9.777 21.41 10 20.738 10 20C10 17.789 8.207 16 6 16C3.789 16 2 17.789 2 20C2 20.738 2.223 21.41 2.574 22Z"}),
          h('path', {"d":"M18 20L18 22"}),
          h('path', {"d":"M21.426 22C21.777 21.41 22 20.738 22 20C22 17.789 20.207 16 18 16C15.789 16 14 17.789 14 20C14 20.738 14.223 21.41 14.574 22Z"})
        ]
      );
  }
});

module.exports = GaugeTrio2;
module.exports.GaugeTrio2 = GaugeTrio2;
module.exports.default = GaugeTrio2;
