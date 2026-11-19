import { defineComponent, h } from 'vue';

const ArrowClockwiseX = defineComponent({
  name: 'ArrowClockwiseX',
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
          h('polyline', {"points":"20.000000000029104 1.999999999979991 20.000000000029104 5.999999999979991 16.000000000029104 5.999999999979991"}),
          h('path', {"d":"M19.986389160188992,5.999999999979991c-1.82470703125-2.42486572265625-4.71795654296875-4-7.986389160159888-4C6.477172851589785,1.999999999979991,2.000000000029104,6.477111816386241,2.000000000029104,11.999999999979991c0,5.5228271484375,4.477172851560681,10,10,10,4.837829589840112,0,8.872497558590112-3.43560791015625,9.79913330078125-8"}),
          h('line', {"x1":"15.000000000029104","y1":"8.999999999979991","x2":"9.000000000029104","y2":"14.999999999979991"}),
          h('line', {"x1":"9.000000000029104","y1":"8.999999999979991","x2":"15.000000000029104","y2":"14.999999999979991"})
        ]
      );
  }
});

export default ArrowClockwiseX;
export { ArrowClockwiseX };
