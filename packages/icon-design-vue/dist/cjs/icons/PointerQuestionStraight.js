'use strict';

const { defineComponent, h } = require('vue');

const PointerQuestionStraight = defineComponent({
  name: 'PointerQuestionStraight',
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
          h('path', {"d":"M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.734 5.867C3.113 5.199 2 5.637 2 6.547Z"}),
          h('path', {"d":"M15 5C15 3.895 15.895 3 17 3C18.105 3 19 3.895 19 5C19 5.641 18.746 6.254 18.293 6.707L17 8"}),
          h('path', {"d":"M17 11L17 11"})
        ]
      );
  }
});

module.exports = PointerQuestionStraight;
module.exports.PointerQuestionStraight = PointerQuestionStraight;
module.exports.default = PointerQuestionStraight;
