import { defineComponent, h } from 'vue';

const NodesForkLarge = defineComponent({
  name: 'NodesForkLarge',
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
          h('circle', {"cx":"5","cy":"11.999999999998181","r":"3"}),
          h('line', {"x1":"8","y1":"11.999999999998181","x2":"13","y2":"11.999999999998181"}),
          h('circle', {"cx":"19","cy":"4.999999999998181","r":"3"}),
          h('circle', {"cx":"19","cy":"18.999999999998181","r":"3"}),
          h('polyline', {"points":"17.05615234375 7.267822265617724 13 11.999999999998181 17.05615234375 16.732177734367724"})
        ]
      );
  }
});

export default NodesForkLarge;
export { NodesForkLarge };
