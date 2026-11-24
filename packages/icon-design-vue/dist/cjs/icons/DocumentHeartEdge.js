'use strict';

const { defineComponent, h } = require('vue');

const DocumentHeartEdge = defineComponent({
  name: 'DocumentHeartEdge',
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
          h('path', {"d":"M17 7L7 7"}),
          h('path', {"d":"M10 12L7 12"}),
          h('path', {"d":"M9 17L7 17"}),
          h('path', {"d":"M12 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L19 2C20.105 2 21 2.895 21 4L21 10"}),
          h('path', {"d":"M17 14C15.895 12.895 14.105 12.895 13 14C11.895 15.105 11.895 16.895 13 18L15.586 20.586C16.367 21.367 17.633 21.367 18.414 20.586L21 18C22.105 16.895 22.105 15.105 21 14C19.895 12.895 18.105 12.895 17 14Z"})
        ]
      );
  }
});

module.exports = DocumentHeartEdge;
module.exports.DocumentHeartEdge = DocumentHeartEdge;
module.exports.default = DocumentHeartEdge;
