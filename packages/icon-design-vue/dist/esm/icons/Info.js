import { defineComponent, h } from 'vue';

const Info = defineComponent({
  name: 'Info',
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
          h('polyline', {"points":"8.025268553439673 10.99999656424734 12.025268553439673 10.99999656424734 12.025268553439673 20.999996564243702"}),
          h('line', {"x1":"8.025268553439673","y1":"20.999996564243702","x2":"16.025268553439673","y2":"20.999996564243702"}),
          h('circle', {"cx":"12.025268553439673","cy":"4.99999656424734","r":"2"})
        ]
      );
  }
});

export default Info;
export { Info };
