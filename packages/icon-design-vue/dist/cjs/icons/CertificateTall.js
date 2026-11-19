'use strict';

const { defineComponent, h } = require('vue');

const CertificateTall = defineComponent({
  name: 'CertificateTall',
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
          h('path', {"d":"M14 14C14 15.656 12.656 17 11 17C9.344 17 8 15.656 8 14C8 12.344 9.344 11 11 11C12.656 11 14 12.344 14 14Z"}),
          h('path', {"d":"M6 20L5 20C4.449 20 4 19.551 4 19L4 3C4 2.449 4.449 2 5 2L19 2C19.551 2 20 2.449 20 3L20 19C20 19.551 19.551 20 19 20L16 20"}),
          h('path', {"d":"M8 6L16 6"}),
          h('path', {"d":"M9 16.223L9 22L11 21L13 22L13 16.223"})
        ]
      );
  }
});

module.exports = CertificateTall;
module.exports.CertificateTall = CertificateTall;
module.exports.default = CertificateTall;
