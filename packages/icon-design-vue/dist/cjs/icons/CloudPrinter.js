'use strict';

const { defineComponent, h } = require('vue');

const CloudPrinter = defineComponent({
  name: 'CloudPrinter',
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
          h('rect', {"x":"8.999999999998181","y":"17.999999999718057","width":"6","height":"4"}),
          h('polyline', {"points":"8.999999999998181 13.999999999718057 8.999999999998181 10.999999999718057 14.999999999998181 10.999999999718057 14.999999999998181 13.999999999718057"}),
          h('path', {"d":"M8.999999999998181,19.999999999718057h-2c-.552284749832324,0-1-.447715250169495-1-1v-4c0-.5522847498396.447715250167676-1,1-1h10c.552284749831415,0,1,.4477152501604,1,1v4c0,.552284749830505-.447715250168585,1-1,1h-2"}),
          h('path', {"d":"M20.999999999998181,14.620483398157376c.6148681640625-.703308105479664,1-1.612915039057953,1-2.620483398439319,0-2.209167480479664-1.79083251953125-4-4-4h-.02520751953125c.014892578125-.164916992180224.02520751953125-.331176757810681.02520751953125-.5,0-3.037536621090112-2.46246337890625-5.5-5.5-5.5-2.13836669921875,0-3.98736572265625,1.222900390631366-4.89727783203125,3.005187988270336-.0345458984375-.000610351560681-.06805419921875-.005187988270336-.10272216796875-.005187988270336-3.03753662109375,0-5.5,2.462463378909888-5.5,5.5,0,1.175476074209655.371826171875,2.262329101569776,1,3.156188964849207"})
        ]
      );
  }
});

module.exports = CloudPrinter;
module.exports.CloudPrinter = CloudPrinter;
module.exports.default = CloudPrinter;
