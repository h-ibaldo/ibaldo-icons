import { defineComponent, h } from 'vue';

const MenuNarrow = defineComponent({
  name: 'MenuNarrow',
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
          h('line', {"x1":"4","y1":"11.999999999998181","x2":"20","y2":"11.999999999998181"}),
          h('line', {"x1":"4","y1":"2.999999999998181","x2":"20","y2":"2.999999999998181"}),
          h('line', {"x1":"4","y1":"20.999999999998181","x2":"20","y2":"20.999999999998181"})
        ]
      );
  }
});

export default MenuNarrow;
export { MenuNarrow };
