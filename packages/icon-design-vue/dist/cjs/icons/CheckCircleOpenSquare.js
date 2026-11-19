'use strict';

const { defineComponent, h } = require('vue');

const CheckCircleOpenSquare = defineComponent({
  name: 'CheckCircleOpenSquare',
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
          h('rect', {"x":"1.974731457399685","y":"2.000000004136382","width":"20","height":"20","rx":"3","ry":"3"}),
          h('polyline', {"points":"9.974731457399685 11.000000004136382 11.974731457399685 13.000000004136382 15.974731457399685 8.000000004136382"}),
          h('path', {"d":"M13.261291515989797,6.141784672105132c-.414855957020336-.090759277340112-.844482421880457-.14178466796875-1.286560058590112-.14178466796875-3.313720703130457,0-6,2.686279296878638-6,6,0,3.313720703128638,2.686279296869543,6,6,6,3.313720703119543,0,6-2.686279296871362,6-6,0-.45196533203125-.054077148430224-.890563964840112-.148803710930224-1.31396484375"})
        ]
      );
  }
});

module.exports = CheckCircleOpenSquare;
module.exports.CheckCircleOpenSquare = CheckCircleOpenSquare;
module.exports.default = CheckCircleOpenSquare;
