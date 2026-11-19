'use strict';

const { defineComponent, h } = require('vue');

const LinkCircleArrowRightWide = defineComponent({
  name: 'LinkCircleArrowRightWide',
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
          h('path', {"d":"M6 18L8 20L6 22"}),
          h('path', {"d":"M2 20L8 20"}),
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.047 2.16 14.055 2.461 15"}),
          h('path', {"d":"M7.5 11.5L6.914 10.914C6.133 10.133 6.133 8.867 6.914 8.086L8.086 6.914C8.867 6.133 10.133 6.133 10.914 6.914L13.172 9.172C14.277 10.277 14.277 12.066 13.172 13.172"}),
          h('path', {"d":"M16.5 12.5L17.086 13.086C17.867 13.867 17.867 15.133 17.086 15.914L15.914 17.086C15.133 17.867 13.867 17.867 13.086 17.086L10.828 14.828C9.723 13.723 9.723 11.934 10.828 10.828"})
        ]
      );
  }
});

module.exports = LinkCircleArrowRightWide;
module.exports.LinkCircleArrowRightWide = LinkCircleArrowRightWide;
module.exports.default = LinkCircleArrowRightWide;
