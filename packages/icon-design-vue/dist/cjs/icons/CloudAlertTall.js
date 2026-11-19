'use strict';

const { defineComponent, h } = require('vue');

const CloudAlertTall = defineComponent({
  name: 'CloudAlertTall',
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
          h('path', {"d":"M18.986206054709328,11.137145996088293c.001586914060681-.046569824229664.013793945310681-.090148925790345.013793945310681-.137145996090112,0-2.209167480470569-1.790832519529431-4-4-4-.137084960939319,0-.266723632810681.02685546875-.400268554689319.040344238279431-.762390136720569-1.787048339839203-2.534118652340112-3.040344238279431-4.599731445310681-3.040344238279431-2.761413574220569,0-5,2.238586425779431-5,5,0,.137084960940228.029541015619543.265869140610448.040344238279431.400207519529431-1.787048339840112.762390136720569-3.040344238279431,2.5341796875-3.040344238279431,4.599792480470569,0,2.761413574209655,2.238586425779431,5,5,5h11c2.209167480470569,0,4-1.790832519540345,4-4,0-1.866821289059772-1.284423828130457-3.421691894540345-3.013793945310681-3.862854003909888Z"}),
          h('line', {"x1":"12.000000000020009","y1":"9.999999999998181","x2":"12.000000000020009","y2":"11.999999999998181"}),
          h('line', {"x1":"12.000000000020009","y1":"14.989999999997963","x2":"12.000000000020009","y2":"14.999999999998181"})
        ]
      );
  }
});

module.exports = CloudAlertTall;
module.exports.CloudAlertTall = CloudAlertTall;
module.exports.default = CloudAlertTall;
