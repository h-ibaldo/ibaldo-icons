'use strict';

const { defineComponent, h } = require('vue');

const ListSearchXSDash = defineComponent({
  name: 'ListSearchXSDash',
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
          h('path', {"d":"M20.5 17C20.5 15.066 18.934 13.5 17 13.5C15.066 13.5 13.5 15.066 13.5 17C13.5 18.934 15.066 20.5 17 20.5C18.934 20.5 20.5 18.934 20.5 17Z"}),
          h('path', {"d":"M19.477 19.477L22 22"}),
          h('path', {"d":"M8 4L15.5 4"}),
          h('path', {"d":"M8 9L15.5 9"}),
          h('path', {"d":"M3 4L4 4"}),
          h('path', {"d":"M3 9L4 9"}),
          h('path', {"d":"M8 14L10 14"}),
          h('path', {"d":"M3 14L4 14"})
        ]
      );
  }
});

module.exports = ListSearchXSDash;
module.exports.ListSearchXSDash = ListSearchXSDash;
module.exports.default = ListSearchXSDash;
