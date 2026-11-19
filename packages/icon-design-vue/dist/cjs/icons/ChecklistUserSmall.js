'use strict';

const { defineComponent, h } = require('vue');

const ChecklistUserSmall = defineComponent({
  name: 'ChecklistUserSmall',
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
          h('path', {"d":"M20 15C20 16.656 18.656 18 17 18C15.344 18 14 16.656 14 15C14 13.344 15.344 12 17 12C18.656 12 20 13.344 20 15Z"}),
          h('path', {"d":"M22 22L22 20C22 18.895 21.105 18 20 18L14 18C12.895 18 12 18.895 12 20L12 22"}),
          h('path', {"d":"M8 4L14 4"}),
          h('path', {"d":"M8 9L14 9"}),
          h('path', {"d":"M5 3L3 5L2 4"}),
          h('path', {"d":"M5 8L3 10L2 9"}),
          h('path', {"d":"M5 13L3 15L2 14"}),
          h('path', {"d":"M8 14L10 14"})
        ]
      );
  }
});

module.exports = ChecklistUserSmall;
module.exports.ChecklistUserSmall = ChecklistUserSmall;
module.exports.default = ChecklistUserSmall;
