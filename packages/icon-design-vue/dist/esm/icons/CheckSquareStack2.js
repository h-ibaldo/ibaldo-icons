import { defineComponent, h } from 'vue';

const CheckSquareStack2 = defineComponent({
  name: 'CheckSquareStack2',
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
          h('polyline', {"points":"5.974731440090181 9.000000003874447 7.974731440090181 11.000000003874447 11.974731440090181 7.000000003874447"}),
          h('rect', {"x":"1.974731440090181","y":"2.000000003874447","width":"14","height":"14","rx":"3","ry":"3"}),
          h('path', {"d":"M8.158447260399953,20.000000003874447c.413269042969659,1.162536621090112,1.511962890629547,2,2.816284179690228,2h8c1.656860351559772,0,3-1.3431396484375,3-3v-8c0-1.304321289058862-.837463378909888-2.40301513671875-2-2.8162841796875"})
        ]
      );
  }
});

export default CheckSquareStack2;
export { CheckSquareStack2 };
