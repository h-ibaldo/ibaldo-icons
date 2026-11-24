'use strict';

const { defineComponent, h } = require('vue');

const CircleMotion = defineComponent({
  name: 'CircleMotion',
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
          h('circle', {"cx":"16.999999980989742","cy":"11.997562035418014","r":"5"}),
          h('path', {"d":"M9.999999980989742,7.428226097918014c-1.762451171869543.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828130457,3.79644775390625,3,4.5693359375"}),
          h('path', {"d":"M4.999999980989742,7.428226097918014c-1.762451171869543.77288818359375-3,2.52154541015625-3,4.5693359375s1.237548828130457,3.79644775390625,3,4.5693359375"})
        ]
      );
  }
});

module.exports = CircleMotion;
module.exports.CircleMotion = CircleMotion;
module.exports.default = CircleMotion;
