import { defineComponent, h } from 'vue';

const ShareSquare = defineComponent({
  name: 'ShareSquare',
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
          h('path', {"d":"M12,1.999999999998181h-7c-1.656854249489697,0-3,1.343145750511212-3,3v14c0,1.656854249489697,1.343145750510303,3,3,3h14c1.656854249489697,0,3-1.343145750510303,3-3v-6"}),
          h('polyline', {"points":"18 1.999999999998181 22 5.999999999998181 18 9.999999999998181"}),
          h('path', {"d":"M7,16.999999999998181v-2c0-4.970562748480006,4.029437251519994-9,9-9h6"})
        ]
      );
  }
});

export default ShareSquare;
export { ShareSquare };
