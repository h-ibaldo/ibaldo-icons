'use strict';

const { defineComponent, h } = require('vue');

const WindowOverlapRightList = defineComponent({
  name: 'WindowOverlapRightList',
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
          h('rect', {"x":"6.9999999935917","y":"1.998779299956368","width":"15","height":"15","rx":"2","ry":"2"}),
          h('path', {"d":"M6.999999993611709,6.998779299956368h-3.000000000020009c-1.104569499659192,0-2,.895430500338989-2,2v11c0,1.104569499661011.895430500340808,2,2,2h11.000000000020009c1.104569499661011,0,2-.895430500338989,2-2v-3"}),
          h('line', {"x1":"6.9999999935917","y1":"5.998779299956368","x2":"21.9999999935917","y2":"5.998779299956368"}),
          h('line', {"x1":"10.999999993611709","y1":"9.998779299956368","x2":"11.999999993611709","y2":"9.998779299956368"}),
          h('line', {"x1":"14.999999993611709","y1":"9.998779299956368","x2":"17.999999993611709","y2":"9.998779299956368"}),
          h('line', {"x1":"10.999999993611709","y1":"12.998779299956368","x2":"11.999999993611709","y2":"12.998779299956368"}),
          h('line', {"x1":"14.999999993611709","y1":"12.998779299956368","x2":"17.999999993611709","y2":"12.998779299956368"}),
          h('line', {"x1":"1.999999993611709","y1":"10.998779299956368","x2":"6.999999993611709","y2":"10.998779299956368"})
        ]
      );
  }
});

module.exports = WindowOverlapRightList;
module.exports.WindowOverlapRightList = WindowOverlapRightList;
module.exports.default = WindowOverlapRightList;
