'use strict';

const { defineComponent, h } = require('vue');

const FileStar = defineComponent({
  name: 'FileStar',
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
          h('path', {"d":"M16.193 12.264L17.552 15.02L20.593 15.462C20.982 15.518 21.138 15.996 20.856 16.271L18.656 18.416L19.175 21.444C19.242 21.832 18.835 22.127 18.487 21.944L15.767 20.515L13.047 21.944C12.699 22.127 12.293 21.832 12.359 21.444L12.878 18.416L10.678 16.271C10.397 15.996 10.552 15.518 10.941 15.462L13.982 15.02L15.342 12.264C15.516 11.912 16.019 11.912 16.193 12.264Z"}),
          h('path', {"d":"M19 9L19 4C19 2.895 18.105 2 17 2L8.984 2C8.354 2 7.75 2.25 7.304 2.696L3.696 6.304C3.25 6.75 3 7.354 3 7.984L3 20C3 21.105 3.895 22 5 22L8 22"}),
          h('path', {"d":"M9 2L9 7C9 7.552 8.552 8 8 8L3 8"})
        ]
      );
  }
});

module.exports = FileStar;
module.exports.FileStar = FileStar;
module.exports.default = FileStar;
