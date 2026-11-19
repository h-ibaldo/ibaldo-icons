'use strict';

const { defineComponent, h } = require('vue');

const ClockMail = defineComponent({
  name: 'ClockMail',
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
          h('polyline', {"points":"15 5.999999999887223 15 8.999999999887223 18 8.999999999887223"}),
          h('rect', {"x":"2","y":"12.999999999887223","width":"12","height":"8.698292868270073","rx":"1","ry":"1"}),
          h('path', {"d":"M2.325256347659888,13.271057128797111l4.983572877110419,4.766210860851061c.386606835400016.369744707919381.995734715059371.369744707919381,1.382341550470301,0l4.983572877099505-4.766210860851061"}),
          h('path', {"d":"M18,15.317382812387223c2.36279296875-1.124267578128638,4-3.526611328128638,4-6.3173828125,0-3.865966796878638-3.133972167970569-7-7-7-3.865966796869543,0-7,3.134033203121362-7,7"})
        ]
      );
  }
});

module.exports = ClockMail;
module.exports.ClockMail = ClockMail;
module.exports.default = ClockMail;
