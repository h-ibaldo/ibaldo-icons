'use strict';

const { defineComponent, h } = require('vue');

const LinkArrowUpInterlocked = defineComponent({
  name: 'LinkArrowUpInterlocked',
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
          h('path', {"d":"M13 12.898L13.414 13.313C14.977 14.875 14.977 17.41 13.414 18.969L13.07 19.313C11.508 20.875 8.977 20.875 7.414 19.313L3.07 14.969C1.508 13.41 1.508 10.875 3.07 9.313L3.414 8.969C4.781 7.605 6.891 7.434 8.441 8.457"}),
          h('path', {"d":"M11 16.898L10.586 16.484C9.023 14.922 9.023 12.391 10.586 10.828L10.93 10.484C12.492 8.922 15.023 8.922 16.586 10.484L20.93 14.828C22.492 16.391 22.492 18.922 20.93 20.484L20.586 20.828C19.219 22.195 17.109 22.367 15.559 21.34"}),
          h('path', {"d":"M22.004 4L20.004 2L18.004 4"}),
          h('path', {"d":"M20.004 8L20.004 2"})
        ]
      );
  }
});

module.exports = LinkArrowUpInterlocked;
module.exports.LinkArrowUpInterlocked = LinkArrowUpInterlocked;
module.exports.default = LinkArrowUpInterlocked;
