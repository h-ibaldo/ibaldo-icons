'use strict';

const { defineComponent, h } = require('vue');

const CloudXCornerRound = defineComponent({
  name: 'CloudXCornerRound',
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
          h('path', {"d":"M16.977172851560681,13.048095676607772c-.230346679691138-2.82556152341931-2.592224121090112-5.048095703110448-5.477172851560681-5.048095703110448s-5.246826171880457,2.222534179691138-5.477172851560681,5.048095703110448c-2.257751464849207.24133300783069-4.022827148439319,2.130065917979664-4.022827148439319,4.451904296889552,0,2.485290527340112,2.014709472650793,4.5,4.5,4.5h10c2.485290527340112,0,4.5-2.014709472659888,4.5-4.5,0-2.321838378909888-1.765075683599207-4.210571289058862-4.022827148439319-4.451904296889552Z"}),
          h('line', {"x1":"22","y1":"1.999999973497324","x2":"18","y2":"5.999999973497324"}),
          h('line', {"x1":"18","y1":"1.999999973497324","x2":"22.000000000090949","y2":"5.999999973497324"})
        ]
      );
  }
});

module.exports = CloudXCornerRound;
module.exports.CloudXCornerRound = CloudXCornerRound;
module.exports.default = CloudXCornerRound;
