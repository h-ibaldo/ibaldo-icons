import { defineComponent, h } from 'vue';

const CheckUnderlineCircle = defineComponent({
  name: 'CheckUnderlineCircle',
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
          h('circle', {"cx":"12.000000004471076","cy":"12.000000003885361","r":"10"}),
          h('line', {"x1":"8.000000004471076","y1":"16.000000003885361","x2":"16.000000004471076","y2":"16.000000003885361"}),
          h('polyline', {"points":"8.000000004471076 10.500000003885361 10.500000004471076 13.000000003885361 16.000000004471076 8.000000003885361"})
        ]
      );
  }
});

export default CheckUnderlineCircle;
export { CheckUnderlineCircle };
