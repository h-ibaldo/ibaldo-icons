'use strict';

const { defineComponent, h } = require('vue');

const CursorUpShine = defineComponent({
  name: 'CursorUpShine',
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
          h('path', {"d":"M17.445 17.07L12.43 8.715C12.234 8.391 11.766 8.391 11.57 8.715L6.555 17.07C6.34 17.438 6.648 17.891 7.07 17.824L10 17.332L10 22L14 22L14 17.332L16.93 17.824C17.352 17.891 17.664 17.438 17.445 17.07Z"}),
          h('path', {"d":"M12 2L12 4"}),
          h('path', {"d":"M4 10L6 10"}),
          h('path', {"d":"M18 10L20 10"}),
          h('path', {"d":"M6.344 4.344L7.758 5.758"}),
          h('path', {"d":"M16.242 5.758L17.656 4.344"})
        ]
      );
  }
});

module.exports = CursorUpShine;
module.exports.CursorUpShine = CursorUpShine;
module.exports.default = CursorUpShine;
