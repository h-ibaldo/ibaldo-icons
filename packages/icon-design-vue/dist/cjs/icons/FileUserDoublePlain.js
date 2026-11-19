'use strict';

const { defineComponent, h } = require('vue');

const FileUserDoublePlain = defineComponent({
  name: 'FileUserDoublePlain',
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
          h('path', {"d":"M10 15.034C10 16.691 8.657 18.034 7 18.034C5.343 18.034 4 16.691 4 15.034C4 13.377 5.343 12.034 7 12.034C8.657 12.034 10 13.377 10 15.034Z"}),
          h('path', {"d":"M12 22.034L12 22.034C12 19.825 10.209 18.034 8 18.034L6 18.034C3.791 18.034 2 19.825 2 22.034L2 22.034"}),
          h('path', {"d":"M18 22.034C18 19.825 16.209 18.034 14 18.034"}),
          h('path', {"d":"M14 17.85C15.163 17.437 16 16.338 16 15.034C16 13.377 14.657 12.034 13 12.034"}),
          h('path', {"d":"M4 9.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 17.034"})
        ]
      );
  }
});

module.exports = FileUserDoublePlain;
module.exports.FileUserDoublePlain = FileUserDoublePlain;
module.exports.default = FileUserDoublePlain;
