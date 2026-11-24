'use strict';

const { defineComponent, h } = require('vue');

const ScissorsWideDotted = defineComponent({
  name: 'ScissorsWideDotted',
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
          h('path', {"d":"M7.598 16.551C6.77 15.129 4.938 14.645 3.5 15.465C2.066 16.281 1.574 18.098 2.402 19.516C3.23 20.938 5.066 21.422 6.5 20.602C7.938 19.785 8.426 17.969 7.598 16.551Z"}),
          h('path', {"d":"M7.598 7.453C6.77 8.871 4.938 9.359 3.5 8.539C2.066 7.719 1.574 5.902 2.402 4.484C3.23 3.066 5.066 2.578 6.5 3.398C7.938 4.219 8.426 6.031 7.598 7.453Z"}),
          h('path', {"d":"M3.703 8.645L22 16.852L18.719 17.777C16.406 18.43 13.914 17.852 12.129 16.238Z"}),
          h('path', {"d":"M8.676 10.875L12.113 7.773C13.91 6.156 16.422 5.574 18.754 6.234L22 7.152L11.188 12M8.676 13.129L3.703 15.355L7.426 12"}),
          h('path', {"d":"M16 12L16 12"}),
          h('path', {"d":"M19 12L19 12"}),
          h('path', {"d":"M22 12L22 12"})
        ]
      );
  }
});

module.exports = ScissorsWideDotted;
module.exports.ScissorsWideDotted = ScissorsWideDotted;
module.exports.default = ScissorsWideDotted;
