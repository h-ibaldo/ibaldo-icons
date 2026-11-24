import { defineComponent, h } from 'vue';

const RestoreCounterclockwise = defineComponent({
  name: 'RestoreCounterclockwise',
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
          h('polyline', {"points":"2.999999981189831 1.999996564258254 2.999999981318979 6.999996564258254 7.999999981189831 6.999996564123649"}),
          h('path', {"d":"M1.999999981189831,11.999996564258254c0,5.5228271484375,4.477172851560681,10,10,10,5.522827148430224,0,10-4.4771728515625,10-10,0-5.52288818359375-4.477172851569776-10-10-10-3.69921875,0-6.921447753909888,2.01385498046875-8.651245117189319,5"}),
          h('circle', {"cx":"11.999999981180736","cy":"11.999996564258254","r":"2"})
        ]
      );
  }
});

export default RestoreCounterclockwise;
export { RestoreCounterclockwise };
