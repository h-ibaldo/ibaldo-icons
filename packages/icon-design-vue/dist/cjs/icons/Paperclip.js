'use strict';

const { defineComponent, h } = require('vue');

const Paperclip = defineComponent({
  name: 'Paperclip',
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
          h('path', {"d":"M14 8L8 14C7.172 14.828 7.172 16.172 8 16.996L8.004 17C8.828 17.828 10.172 17.828 11 17L18.758 9.242C20.414 7.586 20.414 4.898 18.758 3.242C17.102 1.586 14.414 1.586 12.758 3.242L4.863 11.137C2.379 13.621 2.379 17.648 4.863 20.133L4.867 20.137C7.352 22.621 11.379 22.621 13.863 20.137L20 14"})
        ]
      );
  }
});

module.exports = Paperclip;
module.exports.Paperclip = Paperclip;
module.exports.default = Paperclip;
