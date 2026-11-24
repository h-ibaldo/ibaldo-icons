'use strict';

const { defineComponent, h } = require('vue');

const GiftBow = defineComponent({
  name: 'GiftBow',
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
          h('path', {"d":"M19 22L5 22C4.445 22 4 21.551 4 21L4 13L20 13L20 21C20 21.551 19.555 22 19 22Z"}),
          h('path', {"d":"M2 13L22 13L22 8L2 8Z"}),
          h('path', {"d":"M12 8L7 8C5.344 8 4 6.656 4 5C4 3.344 5.344 2 7 2L7.145 2C8.281 2 9.32 2.641 9.828 3.656Z"}),
          h('path', {"d":"M12 8L17 8C18.656 8 20 6.656 20 5C20 3.344 18.656 2 17 2L16.855 2C15.719 2 14.68 2.641 14.172 3.656Z"}),
          h('path', {"d":"M12 8L12 22"})
        ]
      );
  }
});

module.exports = GiftBow;
module.exports.GiftBow = GiftBow;
module.exports.default = GiftBow;
