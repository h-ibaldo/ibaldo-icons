'use strict';

const { defineComponent, h } = require('vue');

const BroomPlusThree = defineComponent({
  name: 'BroomPlusThree',
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
          h('path', {"d":"M9 22L2 15L7.977 11.266C9.16 10.523 10.699 10.699 11.688 11.688L12.313 12.313C13.301 13.301 13.477 14.84 12.734 16.023Z"}),
          h('path', {"d":"M11.93 17.313L6.688 12.07"}),
          h('path', {"d":"M12 12L22 2"}),
          h('path', {"d":"M5.5 3L5.5 8"}),
          h('path', {"d":"M8 5.5L3 5.5"}),
          h('path', {"d":"M20.5 13L20.5 16"}),
          h('path', {"d":"M22 14.5L19 14.5"}),
          h('path', {"d":"M16.5 19L16.5 22"}),
          h('path', {"d":"M18 20.5L15 20.5"})
        ]
      );
  }
});

module.exports = BroomPlusThree;
module.exports.BroomPlusThree = BroomPlusThree;
module.exports.default = BroomPlusThree;
