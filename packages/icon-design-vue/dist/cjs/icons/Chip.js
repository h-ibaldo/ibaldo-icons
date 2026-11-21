'use strict';

const { defineComponent, h } = require('vue');

const Chip = defineComponent({
  name: 'Chip',
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
          h('path', {"d":"M7 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19L7 19C5.895 19 5 18.105 5 17L5 7C5 5.895 5.895 5 7 5Z"}),
          h('path', {"d":"M9 9L15 9L15 15L9 15Z"}),
          h('path', {"d":"M9 5L9 2"}),
          h('path', {"d":"M9 22L9 19"}),
          h('path', {"d":"M12 5L12 2"}),
          h('path', {"d":"M12 22L12 19"}),
          h('path', {"d":"M15 5L15 2"}),
          h('path', {"d":"M15 22L15 19"}),
          h('path', {"d":"M9 5L9 2"}),
          h('path', {"d":"M19 9L22 9"}),
          h('path', {"d":"M9 22L9 19"}),
          h('path', {"d":"M2 9L5 9"}),
          h('path', {"d":"M12 5L12 2"}),
          h('path', {"d":"M19 12L22 12"}),
          h('path', {"d":"M12 22L12 19"}),
          h('path', {"d":"M2 12L5 12"}),
          h('path', {"d":"M15 5L15 2"}),
          h('path', {"d":"M19 15L22 15"}),
          h('path', {"d":"M15 22L15 19"}),
          h('path', {"d":"M2 15L5 15"})
        ]
      );
  }
});

module.exports = Chip;
module.exports.Chip = Chip;
module.exports.default = Chip;
