import { defineComponent, h } from 'vue';

const XSquare = defineComponent({
  name: 'XSquare',
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
          h('line', {"x1":"8.999999990919605","y1":"15.000000000763976","x2":"14.999999990650394","y2":"9.000000001032276"}),
          h('line', {"x1":"14.999999990510332","y1":"15.000000000894943","x2":"8.999999991050572","y2":"9.000000000897671"}),
          h('rect', {"x":"1.999999990779543","y":"2.000000000897671","width":"20","height":"20","rx":"3","ry":"3"})
        ]
      );
  }
});

export default XSquare;
export { XSquare };
