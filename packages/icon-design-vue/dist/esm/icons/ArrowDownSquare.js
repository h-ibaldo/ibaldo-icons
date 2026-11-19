import { defineComponent, h } from 'vue';

const ArrowDownSquare = defineComponent({
  name: 'ArrowDownSquare',
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
          h('polyline', {"points":"15.025268534591305 12.999999999234205 12.025268534180213 15.99999999883039 9.025268534591305 12.999999998426574"}),
          h('line', {"x1":"12.025268535260693","y1":"7.99999999883039","x2":"12.025268534180213","y2":"15.999999998834028"}),
          h('rect', {"x":"2.025268534815041","y":"1.99999999883039","width":"20","height":"20","rx":"2","ry":"2"})
        ]
      );
  }
});

export default ArrowDownSquare;
export { ArrowDownSquare };
