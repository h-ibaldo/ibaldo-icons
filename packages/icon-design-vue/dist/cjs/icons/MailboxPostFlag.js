'use strict';

const { defineComponent, h } = require('vue');

const MailboxPostFlag = defineComponent({
  name: 'MailboxPostFlag',
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
          h('path', {"d":"M5.945388077469942,3.99999999633178h.00000800776406c2.207657892616373,0,3.99999600416816,1.792338111551788,3.99999600416816,3.99999600416816v10.00000399949824H1.945392104280359V7.999995969521364c0-2.20765787551883,1.792338097670753-3.999995973189583,3.999995973189583-3.999995973189583Z"}),
          h('line', {"x1":"4.945392090279711","y1":"8.999999999998181","x2":"6.945392090279711","y2":"8.999999999998181"}),
          h('polyline', {"points":"14.945392090189671 7.999999999998181 14.945392090369751 1.999999999998181 17.945392090279711 2.000000000087311 17.945392090229689 3.000000000087311 14.945392090319729 2.999999999998181"}),
          h('line', {"x1":"10.945392090279711","y1":"3.999999999998181","x2":"5.945392090279711","y2":"3.999999999998181"}),
          h('path', {"d":"M9.945392090279711,17.999999999998181h12V7.999999999998181c0-1.205078125-.544311523439319-2.270141601560681-1.3896484375-3"}),
          h('line', {"x1":"9.945392090279711","y1":"21.999999999998181","x2":"9.945392090279711","y2":"17.999999999998181"}),
          h('line', {"x1":"13.945392090279711","y1":"21.999999999998181","x2":"13.945392090279711","y2":"17.999999999998181"})
        ]
      );
  }
});

module.exports = MailboxPostFlag;
module.exports.MailboxPostFlag = MailboxPostFlag;
module.exports.default = MailboxPostFlag;
