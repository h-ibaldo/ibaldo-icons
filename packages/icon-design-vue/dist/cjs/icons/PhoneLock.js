'use strict';

const { defineComponent, h } = require('vue');

const PhoneLock = defineComponent({
  name: 'PhoneLock',
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
          h('path', {"d":"M7.09 18.973L5.012 16.891C3.801 15.684 2.891 14.207 2.348 12.582C1.824 11.016 2.016 9.301 2.863 7.883L3.41 6.973C3.773 6.367 4.422 6 5.125 6L5.391 6C6.059 6 6.684 6.336 7.055 6.891L8.496 9.051C9.164 10.055 8.805 11.414 7.727 11.949L6.461 12.582L6.617 12.895C7.586 14.828 9.152 16.398 11.09 17.367L11.398 17.52L12.031 16.254C12.57 15.18 13.93 14.82 14.93 15.484L17.094 16.926C17.648 17.297 17.984 17.922 17.984 18.59L17.984 18.855C17.984 19.559 17.613 20.211 17.012 20.57L16.098 21.121C14.684 21.969 12.965 22.156 11.398 21.637C9.777 21.094 8.301 20.184 7.09 18.973Z"}),
          h('path', {"d":"M13 6L20 6L20 11L13 11Z"}),
          h('path', {"d":"M19 6L19 4C19 2.895 18.105 2 17 2L16 2C14.895 2 14 2.895 14 4L14 6"})
        ]
      );
  }
});

module.exports = PhoneLock;
module.exports.PhoneLock = PhoneLock;
module.exports.default = PhoneLock;
