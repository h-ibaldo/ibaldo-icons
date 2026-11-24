'use strict';

const { defineComponent, h } = require('vue');

const TriangleSmall = defineComponent({
  name: 'TriangleSmall',
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
          h('path', {"d":"M5.373760370259333,20.000000000479304h13.20194215956144c1.524968575158709,0,2.488904761028607-1.638223486534116,1.748314552240117-2.971285862357036l-6.600971079771625-11.88174794360566c-.762010472330076-1.371618850189407-2.734618632168349-1.371618850189407-3.49662910448933,0l-6.60097107978072,11.88174794360566c-.740590208779395,1.333062375822919.223345977090503,2.971285862357036,1.748314552240117,2.971285862357036Z"})
        ]
      );
  }
});

module.exports = TriangleSmall;
module.exports.TriangleSmall = TriangleSmall;
module.exports.default = TriangleSmall;
