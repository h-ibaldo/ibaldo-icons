'use strict';

const { defineComponent, h } = require('vue');

const MailLinkSlanted = defineComponent({
  name: 'MailLinkSlanted',
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
          h('path', {"d":"M21.172 16.172C22.277 15.066 22.277 13.277 21.172 12.172C20.066 11.066 18.277 11.066 17.172 12.172L15.5 13.844C14.395 14.945 14.395 16.738 15.5 17.844"}),
          h('path', {"d":"M12.172 17.172C11.066 18.277 11.066 20.066 12.172 21.172C13.277 22.277 15.066 22.277 16.172 21.172L17.844 19.5C18.949 18.395 18.949 16.605 17.844 15.5"}),
          h('path', {"d":"M8 16L3 16C2.449 16 2 15.555 2 15L2 3C2 2.445 2.449 2 3 2L21 2C21.551 2 22 2.445 22 3L22 8"}),
          h('path', {"d":"M3.109 3L10.664 9.797C11.422 10.48 12.578 10.48 13.34 9.797L20.887 3"})
        ]
      );
  }
});

module.exports = MailLinkSlanted;
module.exports.MailLinkSlanted = MailLinkSlanted;
module.exports.default = MailLinkSlanted;
