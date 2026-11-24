import { defineComponent, h } from 'vue';

const Toolbox = defineComponent({
  name: 'Toolbox',
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
          h('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1"}),
          h('polyline', {"points":"8 6.999999999998181 8 2.999999999998181 16 2.999999999998181 16 6.999999999998181"}),
          h('line', {"x1":"2","y1":"11.999999999998181","x2":"22","y2":"11.999999999998181"}),
          h('polyline', {"points":"9 11.999999999998181 9 13.999999999998181 6 13.999999999998181 6 11.999999999998181"}),
          h('polyline', {"points":"18 11.999999999998181 18 13.999999999998181 15 13.999999999998181 15 11.999999999998181"})
        ]
      );
  }
});

export default Toolbox;
export { Toolbox };
