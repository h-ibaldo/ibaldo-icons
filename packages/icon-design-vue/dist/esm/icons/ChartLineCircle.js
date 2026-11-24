import { defineComponent, h } from 'vue';

const ChartLineCircle = defineComponent({
  name: 'ChartLineCircle',
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
          h('circle', {"cx":"11.974731440100186","cy":"12.000000003885361","r":"10"}),
          h('polyline', {"points":"6.974731440100186 15.000000003885361 9.974731440100186 11.000000003885361 13.974731440100186 14.000000003885361 16.974731440100186 10.000000003885361"})
        ]
      );
  }
});

export default ChartLineCircle;
export { ChartLineCircle };
