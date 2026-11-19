'use strict';

const { defineComponent, h } = require('vue');

const EjectDownCircle = defineComponent({
  name: 'EjectDownCircle',
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
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"}),
          h('path', {"d":"M15.066 11.5L8.934 11.5C8.535 11.5 8.297 11.945 8.52 12.277L11.586 16.875C11.781 17.172 12.219 17.172 12.418 16.875L15.48 12.277C15.703 11.945 15.465 11.5 15.066 11.5Z"}),
          h('path', {"d":"M8.5 8L15.5 8"})
        ]
      );
  }
});

module.exports = EjectDownCircle;
module.exports.EjectDownCircle = EjectDownCircle;
module.exports.default = EjectDownCircle;
