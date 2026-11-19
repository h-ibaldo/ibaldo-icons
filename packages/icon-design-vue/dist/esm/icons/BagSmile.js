import { defineComponent, h } from 'vue';

const BagSmile = defineComponent({
  name: 'BagSmile',
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
          h('rect', {"x":"2.999999981009751","y":"2.953616571097882","width":"18","height":"18.000003999997716","rx":"1.315587028959271","ry":"1.315587028959271"}),
          h('path', {"d":"M15.999999981009751,6.953620571095598v1.000004000001354c0,2.209136790181219-1.790859209819246,3.999995999998646-3.999996000000465,3.999995999998646h-.00000799999907c-2.209136790190314,0-3.999996000000465-1.790859209817427-3.999996000000465-3.999995999998646v-1.000004000001354"})
        ]
      );
  }
});

export default BagSmile;
export { BagSmile };
