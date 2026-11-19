import { defineComponent, h } from 'vue';

const HouseDoorGround = defineComponent({
  name: 'HouseDoorGround',
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
          h('polyline', {"points":"22.00000000018008 11.000000000842192 12.00000000018008 3.000000000842192 2.00000000018008 11.000000000842192"}),
          h('line', {"x1":"19.00000000018008","y1":"21.000000000842192","x2":"19.00000000018008","y2":"13.000000000842192"}),
          h('polyline', {"points":"3.00000000018008 21.000000000842192 10.00000000018008 21.000000000842192 10.00000000018008 15.000000000842192 14.00000000018008 15.000000000842192 14.00000000018008 21.000000000842192 21.00000000018008 21.000000000842192"}),
          h('line', {"x1":"5.00000000018008","y1":"13.000000000842192","x2":"5.00000000018008","y2":"21.000000000842192"})
        ]
      );
  }
});

export default HouseDoorGround;
export { HouseDoorGround };
