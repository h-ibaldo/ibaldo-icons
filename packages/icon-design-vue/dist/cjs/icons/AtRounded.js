'use strict';

const { defineComponent, h } = require('vue');

const AtRounded = defineComponent({
  name: 'AtRounded',
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
          h('rect', {"x":"8.974727780090774","y":"8.000000000245365","width":"5.999999954607858","height":"8.000000000000625","rx":"2.999996968127034","ry":"2.999996968127034"}),
          h('line', {"x1":"16.974731450039144","y1":"21.000000000470209","x2":"11.974731450039144","y2":"21.000000000470209"}),
          h('path', {"d":"M19.974731450039144,13.000008000469279v-2.000016000000869c0-4.418273580366986-3.581718419630306-7.99999200000002-7.99999200000093-7.99999200000002h-.000015999997231c-4.418273580369714,0-7.999992000001839,3.581718419633035-7.999992000001839,7.99999200000002v2.000016000000869c0,4.418273580368805,3.581718419632125,7.99999200000093,7.999992000001839,7.99999200000093h.000015999997231"}),
          h('path', {"d":"M14.974731450039144,13.000000000470209v.500002499999937c0,1.380710493865081,1.119287006134982,2.499997500000063,2.499997500000063,2.499997500000063h.000004999999874c1.380710493865081,0,2.499997500000063-1.119287006134982,2.499997500000063-2.499997500000063v-.500002500001756"})
        ]
      );
  }
});

module.exports = AtRounded;
module.exports.AtRounded = AtRounded;
module.exports.default = AtRounded;
