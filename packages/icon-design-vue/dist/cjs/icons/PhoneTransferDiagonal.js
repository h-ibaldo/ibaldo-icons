'use strict';

const { defineComponent, h } = require('vue');

const PhoneTransferDiagonal = defineComponent({
  name: 'PhoneTransferDiagonal',
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
          h('path', {"d":"M15.988 2L10.988 7"}),
          h('path', {"d":"M16.887 13L21.887 8"}),
          h('path', {"d":"M10.988 3L10.988 7L14.988 7"}),
          h('path', {"d":"M21.887 11.895L21.887 8L17.988 8"}),
          h('path', {"d":"M5.695 12.273L5.727 12.359C6.703 15.16 8.918 17.352 11.727 18.305"}),
          h('path', {"d":"M11.797 16.043L13.23 15.289L17 17.551L16.449 20.309C16.32 20.945 15.906 21.488 15.328 21.777C14.945 21.969 14.512 22.039 14.09 21.98L12.859 21.805C10.637 21.484 8.539 20.578 6.785 19.176C6.063 18.598 5.402 17.938 4.824 17.215C3.422 15.461 2.516 13.363 2.195 11.141L2.02 9.91C1.961 9.488 2.031 9.055 2.223 8.672C2.512 8.094 3.055 7.68 3.691 7.551L6.449 7L8.711 10.77L8.027 11.523"})
        ]
      );
  }
});

module.exports = PhoneTransferDiagonal;
module.exports.PhoneTransferDiagonal = PhoneTransferDiagonal;
module.exports.default = PhoneTransferDiagonal;
