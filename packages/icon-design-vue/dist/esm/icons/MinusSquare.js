import { defineComponent, h } from 'vue';

const MinusSquare = defineComponent({
  name: 'MinusSquare',
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
          h('rect', {"x":"2.000000004469257","y":"2.000000003886271","width":"20","height":"19.999999999999091","rx":"3","ry":"3"}),
          h('line', {"x1":"16","y1":"12.000000003885361","x2":"8","y2":"12.000000003885361"})
        ]
      );
  }
});

export default MinusSquare;
export { MinusSquare };
