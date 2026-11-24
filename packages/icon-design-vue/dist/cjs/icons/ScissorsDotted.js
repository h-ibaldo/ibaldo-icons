'use strict';

const { defineComponent, h } = require('vue');

const ScissorsDotted = defineComponent({
  name: 'ScissorsDotted',
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
          h('path', {"d":"M7.598 7.602C6.77 9.07 4.934 9.574 3.5 8.727C2.066 7.879 1.574 6.004 2.402 4.535C3.23 3.066 5.066 2.563 6.5 3.41C7.934 4.258 8.426 6.137 7.598 7.602Z"}),
          h('path', {"d":"M7.598 16.398C6.77 14.93 4.934 14.426 3.5 15.273C2.066 16.121 1.574 17.996 2.402 19.465C3.23 20.934 5.066 21.438 6.5 20.59C7.934 19.742 8.426 17.863 7.598 16.398Z"}),
          h('path', {"d":"M3.5 15.273L19.09 6.07"}),
          h('path', {"d":"M19.09 17.93L12.027 13.762"}),
          h('path', {"d":"M9.043 12L3.5 8.727"}),
          h('path', {"d":"M16 12L16 12"}),
          h('path', {"d":"M19 12L19 12"}),
          h('path', {"d":"M22 12L22 12"})
        ]
      );
  }
});

module.exports = ScissorsDotted;
module.exports.ScissorsDotted = ScissorsDotted;
module.exports.default = ScissorsDotted;
