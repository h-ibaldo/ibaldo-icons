'use strict';

const { defineComponent, h } = require('vue');

const TagBarsStringRound = defineComponent({
  name: 'TagBarsStringRound',
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
          h('path', {"d":"M4 7L4 13.172C4 13.703 4.211 14.211 4.586 14.586L11.586 21.586C12.367 22.367 13.633 22.367 14.414 21.586L20.586 15.414C21.367 14.633 21.367 13.367 20.586 12.586L13.586 5.586C13.211 5.211 12.703 5 12.172 5L6 5C4.895 5 4 5.895 4 7Z"}),
          h('path', {"d":"M8.5 9.828C8.223 9.828 8 9.605 8 9.328C8 9.051 8.223 8.828 8.5 8.828C8.777 8.828 9 9.051 9 9.328C9 9.605 8.777 9.828 8.5 9.828Z"}),
          h('path', {"d":"M8 2L8 9"}),
          h('path', {"d":"M10 14L13 11"}),
          h('path', {"d":"M13 17L16 14"})
        ]
      );
  }
});

module.exports = TagBarsStringRound;
module.exports.TagBarsStringRound = TagBarsStringRound;
module.exports.default = TagBarsStringRound;
