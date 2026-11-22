'use strict';

const { defineComponent, h } = require('vue');

const ListRefresh = defineComponent({
  name: 'ListRefresh',
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
          h('path', {"d":"M2 4L21 4"}),
          h('path', {"d":"M2 12L8 12"}),
          h('path', {"d":"M2 20L8 20"}),
          h('path', {"d":"M19 14L19 11L22 11"}),
          h('path', {"d":"M19 11.422C20.766 12.195 22 13.949 22 16C22 18.762 19.762 21 17 21C14.238 21 12 18.762 12 16C12 13.949 13.234 12.195 15 11.422"})
        ]
      );
  }
});

module.exports = ListRefresh;
module.exports.ListRefresh = ListRefresh;
module.exports.default = ListRefresh;
