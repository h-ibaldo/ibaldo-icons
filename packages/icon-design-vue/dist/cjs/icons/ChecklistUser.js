'use strict';

const { defineComponent, h } = require('vue');

const ChecklistUser = defineComponent({
  name: 'ChecklistUser',
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
          h('path', {"d":"M20 14.965C20 16.625 18.656 17.965 17 17.965C15.344 17.965 14 16.625 14 14.965C14 13.309 15.344 11.965 17 11.965C18.656 11.965 20 13.309 20 14.965Z"}),
          h('path', {"d":"M22 21.965C22 19.758 20.211 17.965 18 17.965L16 17.965C13.789 17.965 12 19.758 12 21.965"}),
          h('path', {"d":"M8 3.965L14 3.965"}),
          h('path', {"d":"M8 8.965L14 8.965"}),
          h('path', {"d":"M8 13.965L10 13.965"}),
          h('path', {"d":"M5 2.965L3 4.965L2 3.965"}),
          h('path', {"d":"M5 7.965L3 9.965L2 8.965"}),
          h('path', {"d":"M5 12.965L3 14.965L2 13.965"})
        ]
      );
  }
});

module.exports = ChecklistUser;
module.exports.ChecklistUser = ChecklistUser;
module.exports.default = ChecklistUser;
