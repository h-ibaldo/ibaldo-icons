import { defineComponent, h } from 'vue';

const LockEyeRound = defineComponent({
  name: 'LockEyeRound',
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
          h('path', {"d":"M6.999999990599463,10v-3c0-2.761420987731981,2.238574012270874-5,4.999995000000126-5l.000010000000657.000004999998055c2.761420987729252,0,4.999994999999217,2.238574012269964,4.999994999999217,4.999995000001945v3"}),
          h('circle', {"cx":"11.999999990599463","cy":"15","r":"7.000000000000001"}),
          h('circle', {"cx":"11.999999990599463","cy":"14.999999999999091","r":"2.999999999999545"}),
          h('polyline', {"points":"12.999999990599463 12.1837158203125 12.999999990599463 14 14.816284170299696 14"})
        ]
      );
  }
});

export default LockEyeRound;
export { LockEyeRound };
