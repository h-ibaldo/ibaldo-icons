'use strict';

const { defineComponent, h } = require('vue');

const LinkMinusSlim = defineComponent({
  name: 'LinkMinusSlim',
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
          h('path', {"d":"M11.027 8.977L10.027 9.977C8.66 11.344 8.66 13.559 10.027 14.926L10.074 14.977C11.441 16.344 13.66 16.344 15.027 14.977L21 9C22.367 7.633 22.367 5.418 21 4.051L20.949 4C19.762 2.812 17.938 2.66 16.586 3.535"}),
          h('path', {"d":"M13 12.004L14 11.004C15.367 9.637 15.367 7.418 14 6.051L13.949 6.004C12.582 4.637 10.367 4.637 9 6.004L3.023 11.977C1.656 13.344 1.656 15.559 3.023 16.926L3.074 16.977C4.262 18.164 6.086 18.316 7.441 17.441"}),
          h('path', {"d":"M22 20L16 20"})
        ]
      );
  }
});

module.exports = LinkMinusSlim;
module.exports.LinkMinusSlim = LinkMinusSlim;
module.exports.default = LinkMinusSlim;
