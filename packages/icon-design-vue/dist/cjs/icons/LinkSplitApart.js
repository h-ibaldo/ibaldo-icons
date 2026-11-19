'use strict';

const { defineComponent, h } = require('vue');

const LinkSplitApart = defineComponent({
  name: 'LinkSplitApart',
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
          h('path', {"d":"M12.281 4.543L17.594 3.121C19.461 2.621 21.379 3.727 21.879 5.594C22.379 7.461 21.273 9.383 19.406 9.883L14.094 11.305"}),
          h('path', {"d":"M11.305 14.094L9.883 19.406C9.383 21.273 7.461 22.379 5.594 21.879C3.727 21.379 2.621 19.461 3.121 17.594L4.543 12.281"}),
          h('path', {"d":"M4 4L8 8"})
        ]
      );
  }
});

module.exports = LinkSplitApart;
module.exports.LinkSplitApart = LinkSplitApart;
module.exports.default = LinkSplitApart;
