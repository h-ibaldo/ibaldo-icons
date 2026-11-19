'use strict';

const { defineComponent, h } = require('vue');

const ChatSettingsSharp = defineComponent({
  name: 'ChatSettingsSharp',
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
          h('path', {"d":"M18.52 2L13.324 2L10.727 6.5L13.324 11L18.52 11L21.121 6.5Z"}),
          h('path', {"d":"M16.922 6.5C16.922 5.949 16.477 5.5 15.922 5.5C15.371 5.5 14.922 5.949 14.922 6.5C14.922 7.051 15.371 7.5 15.922 7.5C16.477 7.5 16.922 7.051 16.922 6.5Z"}),
          h('path', {"d":"M8 2.84C4.469 4.383 2 7.898 2 12C2 13.895 2.535 15.656 3.449 17.168L2 22L6.832 20.551C8.344 21.465 10.105 22 12 22C17.188 22 21.445 18.055 21.949 13"})
        ]
      );
  }
});

module.exports = ChatSettingsSharp;
module.exports.ChatSettingsSharp = ChatSettingsSharp;
module.exports.default = ChatSettingsSharp;
