'use strict';

const { defineComponent, h } = require('vue');

const NewspaperHeadline = defineComponent({
  name: 'NewspaperHeadline',
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
          h('path', {"d":"M17.999988017745636,17.936828613277612V1.936828613277612H1.999988017745636v17c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3V6.936828613277612"}),
          h('rect', {"x":"5.999988017745636","y":"5.936828613277612","width":"8","height":"4"}),
          h('line', {"x1":"5.999988017745636","y1":"13.936828613277612","x2":"13.999988017745636","y2":"13.936828613277612"}),
          h('line', {"x1":"5.999988017745636","y1":"17.936828613277612","x2":"13.999988017745636","y2":"17.936828613277612"})
        ]
      );
  }
});

module.exports = NewspaperHeadline;
module.exports.NewspaperHeadline = NewspaperHeadline;
module.exports.default = NewspaperHeadline;
