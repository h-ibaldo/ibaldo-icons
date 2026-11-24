'use strict';

const { defineComponent, h } = require('vue');

const Satellite = defineComponent({
  name: 'Satellite',
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
          h('path', {"d":"M18.219 13.563L21.398 16.742C21.789 17.133 21.789 17.766 21.398 18.156L19.277 20.277C18.887 20.668 18.254 20.668 17.863 20.277L14.684 17.098C13.707 16.121 13.707 14.535 14.684 13.563C15.656 12.586 17.242 12.586 18.219 13.563Z"}),
          h('path', {"d":"M6.902 9.316L3.723 6.137C3.332 5.746 3.332 5.113 3.723 4.723L5.844 2.602C6.234 2.211 6.867 2.211 7.258 2.602L10.441 5.781C11.414 6.758 11.414 8.34 10.441 9.316C9.465 10.293 7.879 10.293 6.902 9.316Z"}),
          h('path', {"d":"M15.035 7.551L16.449 8.965C16.84 9.355 16.84 9.988 16.449 10.379L11.5 15.328C11.109 15.719 10.477 15.719 10.086 15.328L8.672 13.914C8.281 13.523 8.281 12.891 8.672 12.5L13.621 7.551C14.012 7.16 14.645 7.16 15.035 7.551Z"}),
          h('path', {"d":"M2.309 16.035C3.871 14.473 6.402 14.473 7.965 16.035C9.527 17.598 9.527 20.129 7.965 21.691Z"}),
          h('path', {"d":"M5.137 18.863L3.723 20.277"}),
          h('path', {"d":"M17.156 6.844L15.742 8.258"})
        ]
      );
  }
});

module.exports = Satellite;
module.exports.Satellite = Satellite;
module.exports.default = Satellite;
