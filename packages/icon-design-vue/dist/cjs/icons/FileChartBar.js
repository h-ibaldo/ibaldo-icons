'use strict';

const { defineComponent, h } = require('vue');

const FileChartBar = defineComponent({
  name: 'FileChartBar',
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
          h('path', {"d":"M8 18L8 11"}),
          h('path', {"d":"M12 18L12 14"}),
          h('path', {"d":"M16 18L16 16"}),
          h('path', {"d":"M18 22L6 22C4.895 22 4 21.105 4 20L4 4C4 2.895 4.895 2 6 2L14.016 2C14.646 2 15.25 2.25 15.696 2.696L19.304 6.304C19.75 6.75 20 7.354 20 7.984L20 20C20 21.105 19.105 22 18 22Z"}),
          h('path', {"d":"M14 2L14 7C14 7.552 14.448 8 15 8L20 8"})
        ]
      );
  }
});

module.exports = FileChartBar;
module.exports.FileChartBar = FileChartBar;
module.exports.default = FileChartBar;
