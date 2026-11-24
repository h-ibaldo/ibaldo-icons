import { defineComponent, h } from 'vue';

const MinusCircleCompact = defineComponent({
  name: 'MinusCircleCompact',
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
          h('circle', {"cx":"12.000000004469257","cy":"12.000000003886498","r":"8.000000000000114"}),
          h('line', {"x1":"15.000000004469257","y1":"12.000000003885361","x2":"9.000000004469257","y2":"12.000000003885361"})
        ]
      );
  }
});

export default MinusCircleCompact;
export { MinusCircleCompact };
