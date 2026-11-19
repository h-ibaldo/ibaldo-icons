'use strict';

const { defineComponent, h } = require('vue');

const ListUserSmallDash = defineComponent({
  name: 'ListUserSmallDash',
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
          h('path', {"d":"M22 22C22 19.789 20.211 18 18 18L16 18C13.789 18 12 19.789 12 22"}),
          h('path', {"d":"M8 4L14 4"}),
          h('path', {"d":"M8 9L14 9"}),
          h('path', {"d":"M3 4L4 4"}),
          h('path', {"d":"M3 9L4 9"}),
          h('path', {"d":"M8 14L10 14"}),
          h('path', {"d":"M3 14L4 14"})
        ]
      );
  }
});

module.exports = ListUserSmallDash;
module.exports.ListUserSmallDash = ListUserSmallDash;
module.exports.default = ListUserSmallDash;
