'use strict';

const { defineComponent, h } = require('vue');

const TagStringRound = defineComponent({
  name: 'TagStringRound',
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
          h('path', {"d":"M6.02 8.02L6.02 14.191C6.02 14.719 6.23 15.23 6.605 15.605L12.434 21.434C13.211 22.211 14.48 22.211 15.262 21.434L21.434 15.262C22.211 14.48 22.211 13.211 21.434 12.434L15.605 6.605C15.23 6.23 14.719 6.02 14.191 6.02L8.02 6.02C6.914 6.02 6.02 6.914 6.02 8.02Z"}),
          h('path', {"d":"M9.688 10.188C9.414 10.188 9.188 9.965 9.188 9.688C9.188 9.414 9.414 9.188 9.688 9.188C9.965 9.188 10.188 9.414 10.188 9.688C10.188 9.965 9.965 10.188 9.688 10.188Z"}),
          h('path', {"d":"M10.391 6.02C10.23 5.469 9.949 4.949 9.516 4.52L8.016 3.02C6.637 1.637 4.398 1.637 3.016 3.02C1.637 4.398 1.637 6.637 3.016 8.02L4.516 9.52C5.898 10.898 8.137 10.898 9.516 9.52"})
        ]
      );
  }
});

module.exports = TagStringRound;
module.exports.TagStringRound = TagStringRound;
module.exports.default = TagStringRound;
