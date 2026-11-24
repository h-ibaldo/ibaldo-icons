'use strict';

const { defineComponent, h } = require('vue');

const SunCircleSplitSparse = defineComponent({
  name: 'SunCircleSplitSparse',
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
          h('path', {"d":"M19.133 5C17.316 3.152 14.793 2 12 2C9.203 2 6.676 3.152 4.863 5"}),
          h('path', {"d":"M2.367 9.332C1.676 11.832 1.945 14.59 3.344 17.012C4.746 19.43 7.004 21.043 9.512 21.688"}),
          h('path', {"d":"M21.633 9.332C22.324 11.832 22.055 14.59 20.656 17.012C19.254 19.43 16.996 21.043 14.488 21.688"}),
          h('path', {"d":"M14 12C14 10.895 13.105 10 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12Z"}),
          h('path', {"d":"M12 6L12 7"}),
          h('path', {"d":"M12 17L12 18"}),
          h('path', {"d":"M6.805 9L7.668 9.5"}),
          h('path', {"d":"M16.332 14.5L17.195 15"}),
          h('path', {"d":"M6.805 15L7.668 14.5"}),
          h('path', {"d":"M16.332 9.5L17.195 9"})
        ]
      );
  }
});

module.exports = SunCircleSplitSparse;
module.exports.SunCircleSplitSparse = SunCircleSplitSparse;
module.exports.default = SunCircleSplitSparse;
