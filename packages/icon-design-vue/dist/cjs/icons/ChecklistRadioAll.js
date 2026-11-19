'use strict';

const { defineComponent, h } = require('vue');

const ChecklistRadioAll = defineComponent({
  name: 'ChecklistRadioAll',
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
          h('line', {"x1":"10.000000000260115","y1":"4.032754075946286","x2":"22.000000000260115","y2":"4.032754075946286"}),
          h('line', {"x1":"10.000000000260115","y1":"12.032754075946286","x2":"22.000000000260115","y2":"12.032754075946286"}),
          h('line', {"x1":"10.000000000260115","y1":"20.032754075946286","x2":"22.000000000260115","y2":"20.032754075946286"}),
          h('rect', {"x":"2.000000005508198","y":"2.032754065191796","width":"3.999999989423571","height":"3.999999993205051","rx":"1.999997983881617","ry":"1.999997983881617"}),
          h('rect', {"x":"2.000000005508198","y":"10.032754060027656","width":"3.999999989423571","height":"4.000000003324601","rx":"1.999997985505761","ry":"1.999997985505761"}),
          h('rect', {"x":"2.000000005508198","y":"18.032754065149959","width":"3.999999989423571","height":"3.999999993079996","rx":"1.999997984108796","ry":"1.999997984108796"}),
          h('rect', {"x":"2.999999995862822","y":"3.032754077664691","width":"2.000000008714551","height":"1.99999999656319","rx":".999999018500243","ry":".999999018500243"}),
          h('rect', {"x":"2.999999995862822","y":"11.032754057641256","width":"2.000000008714551","height":"2.000000036610061","rx":".999999000137812","ry":".999999000137812"}),
          h('rect', {"x":"2.999999995862822","y":"19.032754067420143","width":"2.000000008714551","height":"2.000000017052287","rx":".999999015271767","ry":".999999015271767"})
        ]
      );
  }
});

module.exports = ChecklistRadioAll;
module.exports.ChecklistRadioAll = ChecklistRadioAll;
module.exports.default = ChecklistRadioAll;
