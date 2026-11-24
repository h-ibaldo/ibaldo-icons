'use strict';

const { defineComponent, h } = require('vue');

const Joystick = defineComponent({
  name: 'Joystick',
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
          h('path', {"d":"M9 5C9 3.344 10.344 2 12 2C13.656 2 15 3.344 15 5C15 6.656 13.656 8 12 8C10.344 8 9 6.656 9 5Z"}),
          h('path', {"d":"M12 8L12 14"}),
          h('path', {"d":"M15.555 11.777L20 14L12 19L4 14L8.445 11.777"}),
          h('path', {"d":"M20 14L20 17L12 22L4 17L4 14"})
        ]
      );
  }
});

module.exports = Joystick;
module.exports.Joystick = Joystick;
module.exports.default = Joystick;
