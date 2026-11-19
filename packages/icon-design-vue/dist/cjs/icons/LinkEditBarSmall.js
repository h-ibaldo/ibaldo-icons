'use strict';

const { defineComponent, h } = require('vue');

const LinkEditBarSmall = defineComponent({
  name: 'LinkEditBarSmall',
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
          h('path', {"d":"M21.414 21.242C22.195 20.461 22.195 19.195 21.414 18.414L16 13L13 13L13 16L18.414 21.414C19.195 22.195 20.461 22.195 21.242 21.414Z"}),
          h('path', {"d":"M17 20L20 17"}),
          h('path', {"d":"M13.828 8.172L15.172 6.828C16.277 5.723 16.277 3.934 15.172 2.828C14.066 1.723 12.277 1.723 11.172 2.828L9.828 4.172C8.723 5.277 8.723 7.066 9.828 8.172C10.934 9.277 12.723 9.277 13.828 8.172Z"}),
          h('path', {"d":"M6.828 15.172L8.172 13.828C9.277 12.723 9.277 10.934 8.172 9.828C7.066 8.723 5.277 8.723 4.172 9.828L2.828 11.172C1.723 12.277 1.723 14.066 2.828 15.172C3.934 16.277 5.723 16.277 6.828 15.172Z"}),
          h('path', {"d":"M6 12L12 6"})
        ]
      );
  }
});

module.exports = LinkEditBarSmall;
module.exports.LinkEditBarSmall = LinkEditBarSmall;
module.exports.default = LinkEditBarSmall;
