import { defineComponent, h } from 'vue';

const ArrowCounterclockwise = defineComponent({
  name: 'ArrowCounterclockwise',
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
          h('polyline', {"points":"4 2 4.000000000130058 6.000000000320142 8.000000000440195 6.000000000178261"}),
          h('path', {"d":"M2.050476074219659,11.000000000320142c-.032653808600116.328979492180224-.050476074219659.662414550779431-.050476074219659,1,0,5.522827148430224,4.477172851559772,10,10,10,5.522827148430224,0,10-4.477172851569776,10-10,0-5.522827148441138-4.477172851569776-10-10-10-3.268432617190228,0-6.16162109375,1.5751953125-7.986389160159888,4"})
        ]
      );
  }
});

export default ArrowCounterclockwise;
export { ArrowCounterclockwise };
