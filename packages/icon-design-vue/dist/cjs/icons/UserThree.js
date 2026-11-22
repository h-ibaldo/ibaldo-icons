'use strict';

const { defineComponent, h } = require('vue');

const UserThree = defineComponent({
  name: 'UserThree',
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
          h('path', {"d":"M7 22C7 19.238 9.238 17 12 17C14.762 17 17 19.238 17 22"}),
          h('path', {"d":"M10 5C10 6.656 8.656 8 7 8C5.344 8 4 6.656 4 5C4 3.344 5.344 2 7 2C8.656 2 10 3.344 10 5Z"}),
          h('path', {"d":"M20 5C20 6.656 18.656 8 17 8C15.344 8 14 6.656 14 5C14 3.344 15.344 2 17 2C18.656 2 20 3.344 20 5Z"}),
          h('path', {"d":"M15 14C15 15.656 13.656 17 12 17C10.344 17 9 15.656 9 14C9 12.344 10.344 11 12 11C13.656 11 15 12.344 15 14Z"}),
          h('path', {"d":"M11.602 11.039C10.84 9.254 9.066 8 7 8C4.238 8 2 10.238 2 13"}),
          h('path', {"d":"M22 13C22 10.238 19.762 8 17 8C14.934 8 13.164 9.254 12.402 11.039"})
        ]
      );
  }
});

module.exports = UserThree;
module.exports.UserThree = UserThree;
module.exports.default = UserThree;
