'use strict';

const { defineComponent, h } = require('vue');

const WebhookOff = defineComponent({
  name: 'WebhookOff',
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
          h('path', {"d":"M11.984 6.922L12.527 7.863"}),
          h('path', {"d":"M13.883 10.207L16.445 14.648"}),
          h('path', {"d":"M16.445 14.648C16.898 14.375 17.43 14.219 18 14.219C19.656 14.219 21 15.559 21 17.219C21 18.875 19.656 20.219 18 20.219C17.449 20.219 16.93 20.066 16.488 19.809C16.246 19.668 16.027 19.492 15.832 19.293"}),
          h('path', {"d":"M9.445 11.52L10.66 9.414"}),
          h('path', {"d":"M10.66 9.414C10.195 9.156 9.793 8.777 9.508 8.285C8.68 6.848 9.172 5.016 10.605 4.184C12.039 3.355 13.875 3.848 14.703 5.285"}),
          h('path', {"d":"M17.926 17.035L9 17.035"}),
          h('path', {"d":"M9 17.035C9.012 17.566 8.883 18.105 8.598 18.598C7.77 20.031 5.934 20.523 4.5 19.695"}),
          h('path', {"d":"M3.008 16.906C3.035 16.457 3.164 16.012 3.402 15.598C3.68 15.121 4.066 14.746 4.512 14.492C4.758 14.352 5.016 14.25 5.285 14.184"}),
          h('path', {"d":"M20.094 3.953L2.879 21.168"})
        ]
      );
  }
});

module.exports = WebhookOff;
module.exports.WebhookOff = WebhookOff;
module.exports.default = WebhookOff;
