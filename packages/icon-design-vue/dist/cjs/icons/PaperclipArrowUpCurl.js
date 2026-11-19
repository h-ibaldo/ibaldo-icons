'use strict';

const { defineComponent, h } = require('vue');

const PaperclipArrowUpCurl = defineComponent({
  name: 'PaperclipArrowUpCurl',
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
          h('path', {"d":"M12.242 19.758L11.242 20.758C9.586 22.414 6.898 22.414 5.242 20.758C3.586 19.102 3.586 16.414 5.242 14.758L14.758 5.242C16.414 3.586 19.102 3.586 20.758 5.242C22.414 6.898 22.414 9.586 20.758 11.242L16.5 15.5C15.672 16.328 14.328 16.328 13.5 15.5C12.672 14.672 12.672 13.328 13.5 12.5L17 9"}),
          h('path', {"d":"M8 5L5 2L2 5"}),
          h('path', {"d":"M5 9L5 2"})
        ]
      );
  }
});

module.exports = PaperclipArrowUpCurl;
module.exports.PaperclipArrowUpCurl = PaperclipArrowUpCurl;
module.exports.default = PaperclipArrowUpCurl;
