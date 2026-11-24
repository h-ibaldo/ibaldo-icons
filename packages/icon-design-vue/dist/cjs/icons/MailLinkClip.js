'use strict';

const { defineComponent, h } = require('vue');

const MailLinkClip = defineComponent({
  name: 'MailLinkClip',
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
          h('path', {"d":"M9 16L3 16C2.449 16 2 15.555 2 15L2 3C2 2.445 2.449 2 3 2L21 2C21.551 2 22 2.445 22 3L22 9"}),
          h('path', {"d":"M3.109 3L12 11L20.887 3"}),
          h('path', {"d":"M20 18L21.172 16.828C22.277 15.723 22.277 13.934 21.172 12.828C20.066 11.723 18.277 11.723 17.172 12.828L16 14"}),
          h('path', {"d":"M14 16L12.828 17.172C11.723 18.277 11.723 20.066 12.828 21.172C13.934 22.277 15.723 22.277 16.828 21.172L18 20"}),
          h('path', {"d":"M18 16L16 18"})
        ]
      );
  }
});

module.exports = MailLinkClip;
module.exports.MailLinkClip = MailLinkClip;
module.exports.default = MailLinkClip;
