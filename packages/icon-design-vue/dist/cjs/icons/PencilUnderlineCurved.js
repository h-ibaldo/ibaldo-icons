'use strict';

const { defineComponent, h } = require('vue');

const PencilUnderlineCurved = defineComponent({
  name: 'PencilUnderlineCurved',
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
          h('path', {"d":"M19.242640687120002,2.757359328677921l2.171572875249694,2.171572875251513c.781048583499796.781048583499796.78104858351071,2.047378541239596,0,2.828427124748487l-12.414213562369696,12.414213562371515-7,2,2-7L16.414213562369696,2.757359328677921c.781048583499796-.781048583508891,2.047378541250509-.781048583508891,2.828427124750306,0Z"}),
          h('path', {"d":"M6.666748046869543,20.83832093791716l-.084640815209241-.338532268207928c-.358301090910572-1.433073165901078-1.477249844429934-2.552021919422259-2.910323010330103-2.910323010331922l-.338532268210656-.08464081521015"}),
          h('line', {"x1":"14","y1":"5.171572891049436","x2":"19","y2":"10.171572891049436"}),
          h('line', {"x1":"12","y1":"22.171572891049436","x2":"18","y2":"22.171572891049436"}),
          h('line', {"x1":"21.989999999999782","y1":"22.171572891049436","x2":"22","y2":"22.171572891049436"})
        ]
      );
  }
});

module.exports = PencilUnderlineCurved;
module.exports.PencilUnderlineCurved = PencilUnderlineCurved;
module.exports.default = PencilUnderlineCurved;
