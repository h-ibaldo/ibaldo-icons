'use strict';

const { defineComponent, h } = require('vue');

const SelfieSquare = defineComponent({
  name: 'SelfieSquare',
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
          h('rect', {"x":"1.999999981180736","y":"1.999996564258254","width":"20","height":"20"}),
          h('circle', {"cx":"11.999999981189831","cy":"10.499996564258254","r":"3.5"}),
          h('path', {"d":"M18.111111092299325,21.999996564258254v-1.888895000000048c0-3.375070096113632-2.736034903889959-6.111104999999952-6.111104999999952-6.111104999999952h-.000012222229998c-3.375070096109994,0-6.111104999989038,2.736034903886321-6.111104999989038,6.111104999999952v1.888895000000048"})
        ]
      );
  }
});

module.exports = SelfieSquare;
module.exports.SelfieSquare = SelfieSquare;
module.exports.default = SelfieSquare;
