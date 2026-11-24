import { defineComponent, h } from 'vue';

const MenuSquare = defineComponent({
  name: 'MenuSquare',
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
          h('line', {"x1":"7","y1":"12.000000078527592","x2":"17","y2":"12.000000078527592"}),
          h('line', {"x1":"7","y1":"7.000000078527592","x2":"17","y2":"7.000000078527592"}),
          h('line', {"x1":"7","y1":"17.000000078527592","x2":"17","y2":"17.000000078527592"}),
          h('rect', {"x":"2","y":"2.000000078527592","width":"20","height":"20","rx":"2","ry":"2"})
        ]
      );
  }
});

export default MenuSquare;
export { MenuSquare };
