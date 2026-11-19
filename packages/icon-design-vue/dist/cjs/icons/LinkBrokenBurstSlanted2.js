'use strict';

const { defineComponent, h } = require('vue');

const LinkBrokenBurstSlanted2 = defineComponent({
  name: 'LinkBrokenBurstSlanted2',
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
          h('path', {"d":"M8 11.773C6.914 11.766 5.828 12.172 5 13L3.242 14.758C1.586 16.414 1.586 19.098 3.242 20.754L3.246 20.758C4.902 22.414 7.586 22.414 9.242 20.758L11 19C11.828 18.172 12.234 17.086 12.227 16"}),
          h('path', {"d":"M16 12.227C17.086 12.234 18.172 11.828 19 11L20.758 9.242C22.414 7.586 22.414 4.902 20.758 3.246L20.754 3.242C19.098 1.586 16.414 1.586 14.758 3.242L13 5C12.172 5.828 11.766 6.914 11.773 8"}),
          h('path', {"d":"M4 9L2 9"}),
          h('path', {"d":"M5.465 5.465L4.051 4.051"}),
          h('path', {"d":"M9 4L9 2"}),
          h('path', {"d":"M20 15L22 15"}),
          h('path', {"d":"M18.535 18.535L19.949 19.949"}),
          h('path', {"d":"M15 20L15 22"})
        ]
      );
  }
});

module.exports = LinkBrokenBurstSlanted2;
module.exports.LinkBrokenBurstSlanted2 = LinkBrokenBurstSlanted2;
module.exports.default = LinkBrokenBurstSlanted2;
