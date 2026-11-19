import { defineComponent, h } from 'vue';

const RadioCheck = defineComponent({
  name: 'RadioCheck',
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
          h('circle', {"cx":"11.974731440099276","cy":"12.000000003885361","r":"10"}),
          h('circle', {"cx":"11.974731440099276","cy":"12.000000003885361","r":"6"}),
          h('polyline', {"points":"9.974731440099276 12.000000003885361 11.308064773440492 13.333333337217482 13.974731440099276 10.666666670556879"})
        ]
      );
  }
});

export default RadioCheck;
export { RadioCheck };
