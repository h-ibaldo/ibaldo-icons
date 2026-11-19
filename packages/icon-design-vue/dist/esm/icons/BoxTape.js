import { defineComponent, h } from 'vue';

const BoxTape = defineComponent({
  name: 'BoxTape',
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
          h('rect', {"x":"2","y":"1.999999999998181","width":"20","height":"20","rx":"1","ry":"1"}),
          h('polyline', {"points":"15 1.999999999998181 15 7.999999999998181 9 7.999999999998181 9 1.999999999998181"})
        ]
      );
  }
});

export default BoxTape;
export { BoxTape };
