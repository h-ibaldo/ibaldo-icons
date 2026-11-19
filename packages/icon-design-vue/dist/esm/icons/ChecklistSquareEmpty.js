import { defineComponent, h } from 'vue';

const ChecklistSquareEmpty = defineComponent({
  name: 'ChecklistSquareEmpty',
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
          h('line', {"x1":"11.000000000220098","y1":"4.032754075946286","x2":"22.000000000220098","y2":"4.032754075946286"}),
          h('line', {"x1":"11.000000000220098","y1":"12.032754075946286","x2":"22.000000000220098","y2":"12.032754075946286"}),
          h('line', {"x1":"11.000000000220098","y1":"20.032754075946286","x2":"22.000000000220098","y2":"20.032754075946286"}),
          h('rect', {"x":"2.000000000220098","y":"10.032754075946286","width":"4","height":"4"}),
          h('rect', {"x":"2.000000000220098","y":"2.032754075946286","width":"4","height":"4"}),
          h('rect', {"x":"2.000000000220098","y":"18.032754075946286","width":"4","height":"4"})
        ]
      );
  }
});

export default ChecklistSquareEmpty;
export { ChecklistSquareEmpty };
