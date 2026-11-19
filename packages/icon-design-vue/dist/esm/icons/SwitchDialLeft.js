import { defineComponent, h } from 'vue';

const SwitchDialLeft = defineComponent({
  name: 'SwitchDialLeft',
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
          h('circle', {"cx":"11.999999977274911","cy":"15.99999656343698","r":"5.999999999997044"}),
          h('line', {"x1":"13.999999977360858","y1":"17.99999656334694","x2":"9.999999977180778","y2":"13.999996563525201"}),
          h('circle', {"cx":"11.999999976737854","cy":"3.99999656343789","r":"2.000000000001364"}),
          h('circle', {"cx":"3.999999976737854","cy":"3.99999656379714","r":"2.000000000001819"}),
          h('circle', {"cx":"19.999999976737854","cy":"3.99999656307773","r":"2.000000000001364"}),
          h('line', {"x1":"3.999999976740582","y1":"3.999996563798049","x2":"3.999999976740582","y2":"3.999996563798049"})
        ]
      );
  }
});

export default SwitchDialLeft;
export { SwitchDialLeft };
