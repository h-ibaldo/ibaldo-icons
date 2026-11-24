import { defineComponent, h } from 'vue';

const MenuCircle = defineComponent({
  name: 'MenuCircle',
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
          h('line', {"x1":"8","y1":"12.000000078527592","x2":"16","y2":"12.000000078527592"}),
          h('line', {"x1":"8","y1":"8.000000078527592","x2":"16","y2":"8.000000078527592"}),
          h('line', {"x1":"8","y1":"16.000000078527592","x2":"16","y2":"16.000000078527592"}),
          h('circle', {"cx":"11.999999999989996","cy":"12.000000078527592","r":"10"})
        ]
      );
  }
});

export default MenuCircle;
export { MenuCircle };
