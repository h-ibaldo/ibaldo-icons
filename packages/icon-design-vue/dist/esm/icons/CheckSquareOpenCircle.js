import { defineComponent, h } from 'vue';

const CheckSquareOpenCircle = defineComponent({
  name: 'CheckSquareOpenCircle',
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
          h('path', {"d":"M16.974731440100186,12.000000003885361v3c0,1.104569499661011-.895430500329894,2-2,2h-6c-1.104569499660101,0-2-.895430500338989-2-2v-6c0-1.104569499661011.895430500339899-2,2-2h3"}),
          h('polyline', {"points":"9.974731440100186 11.000000003885361 11.974731440100186 13.000000003885361 15.974731440100186 8.000000003885361"})
        ]
      );
  }
});

export default CheckSquareOpenCircle;
export { CheckSquareOpenCircle };
