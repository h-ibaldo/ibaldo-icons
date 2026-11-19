'use strict';

const { defineComponent, h } = require('vue');

const LinkPlusCircleClip = defineComponent({
  name: 'LinkPlusCircleClip',
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
          h('path', {"d":"M13 10L14.965 8.035C16.344 6.656 16.344 4.414 14.965 3.035C13.586 1.656 11.344 1.656 9.965 3.035L8 5"}),
          h('path', {"d":"M5 8L3.035 9.965C1.656 11.348 1.656 13.586 3.035 14.965C4.414 16.348 6.656 16.348 8.035 14.965L10 13"}),
          h('path', {"d":"M11 7L7 11"}),
          h('path', {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z"}),
          h('path', {"d":"M17 15L17 19"}),
          h('path', {"d":"M19 17L15 17"})
        ]
      );
  }
});

module.exports = LinkPlusCircleClip;
module.exports.LinkPlusCircleClip = LinkPlusCircleClip;
module.exports.default = LinkPlusCircleClip;
