'use strict';

const { defineComponent, h } = require('vue');

const RocketUp = defineComponent({
  name: 'RocketUp',
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
          h('path', {"d":"M12 2L10.742 3.57C8.996 5.758 8.242 8.574 8.668 11.34L10 20L14 20L15.332 11.34C15.758 8.574 15.004 5.758 13.258 3.57Z"}),
          h('path', {"d":"M15.207 12.156L18.055 14.293C18.652 14.738 19 15.438 19 16.18L19 22L17 20L14 20"}),
          h('path', {"d":"M8.793 12.156L5.945 14.293C5.348 14.738 5 15.438 5 16.18L5 22L7 20L10 20"}),
          h('path', {"d":"M15.281 8L8.719 8"})
        ]
      );
  }
});

module.exports = RocketUp;
module.exports.RocketUp = RocketUp;
module.exports.default = RocketUp;
