import { defineComponent, h } from 'vue';

const SwitchDialUp = defineComponent({
  name: 'SwitchDialUp',
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
          h('circle', {"cx":"11.999999977100742","cy":"15.999996563436071","r":"6.000000000000909"}),
          h('line', {"x1":"11.999999977029802","y1":"18.828423688180919","x2":"11.999999977160769","y2":"13.171569438687584"}),
          h('circle', {"cx":"19.999999977100742","cy":"3.99999656343789","r":"2"}),
          h('circle', {"cx":"11.999999977100742","cy":"3.99999656343789","r":"2"}),
          h('circle', {"cx":"3.999999977100742","cy":"3.99999656343789","r":"2"}),
          h('line', {"x1":"11.999999977100742","y1":"3.99999656343789","x2":"11.999999977100742","y2":"3.99999656343789"})
        ]
      );
  }
});

export default SwitchDialUp;
export { SwitchDialUp };
