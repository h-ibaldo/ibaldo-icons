import { defineComponent, h } from 'vue';

const MenuCircle2 = defineComponent({
  name: 'MenuCircle2',
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
          h('circle', {"cx":"12.000000004889444","cy":"11.999999995256076","r":"10"}),
          h('line', {"x1":"8.000000004889444","y1":"7.999999995256076","x2":"16.000000004889444","y2":"7.999999995256076"}),
          h('line', {"x1":"8.000000004889444","y1":"11.999999995256076","x2":"16.000000004889444","y2":"11.999999995256076"}),
          h('line', {"x1":"8.000000004889444","y1":"15.999999995256076","x2":"16.000000004889444","y2":"15.999999995256076"})
        ]
      );
  }
});

export default MenuCircle2;
export { MenuCircle2 };
