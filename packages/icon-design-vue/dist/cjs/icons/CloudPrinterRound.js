'use strict';

const { defineComponent, h } = require('vue');

const CloudPrinterRound = defineComponent({
  name: 'CloudPrinterRound',
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
          h('rect', {"x":"9","y":"17.999999973497324","width":"6","height":"4"}),
          h('polyline', {"points":"9 13.999999973497324 9 10.999999973497324 15 10.999999973497324 15 13.999999973497324"}),
          h('path', {"d":"M9,19.999999973497324h-2c-.552284749830505,0-1-.447715250169495-1-1v-4c0-.5522847498396.447715250169495-1,1-1h10c.552284749830505,0,1,.4477152501604,1,1v4c0,.552284749830505-.447715250169495,1-1,1h-2"}),
          h('path', {"d":"M21,14.972656223497324c.620178222659888-.832763671889552,1-1.8544921875,1-2.97265625,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386709655-2.882202148441138-2.919616699209655-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371090112,5.093139648441138-2.318725585939319.434509277340112-4.075744628909888,2.462036132808862-4.075744628909888,4.906860351558862,0,1.118103027340112.3798828125,2.139770507801586,1,2.972595214840112"})
        ]
      );
  }
});

module.exports = CloudPrinterRound;
module.exports.CloudPrinterRound = CloudPrinterRound;
module.exports.default = CloudPrinterRound;
