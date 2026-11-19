'use strict';

const { defineComponent, h } = require('vue');

const LinkSplitSlanted = defineComponent({
  name: 'LinkSplitSlanted',
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
          h('path', {"d":"M12 5L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L19 12"}),
          h('path', {"d":"M12 19L10.5 20.5C8.566 22.434 5.434 22.434 3.5 20.5C1.566 18.566 1.566 15.434 3.5 13.5L5 12"}),
          h('path', {"d":"M5 5L9 9"}),
          h('path', {"d":"M15 15L19 19"})
        ]
      );
  }
});

module.exports = LinkSplitSlanted;
module.exports.LinkSplitSlanted = LinkSplitSlanted;
module.exports.default = LinkSplitSlanted;
