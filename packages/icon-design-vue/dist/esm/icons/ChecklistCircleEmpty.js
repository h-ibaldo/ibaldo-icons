import { defineComponent, h } from 'vue';

const ChecklistCircleEmpty = defineComponent({
  name: 'ChecklistCircleEmpty',
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
          h('line', {"x1":"9.974731440139294","y1":"4.000000003885361","x2":"21.974731440139294","y2":"4.000000003885361"}),
          h('line', {"x1":"9.974731440139294","y1":"12.000000003885361","x2":"21.974731440139294","y2":"12.000000003885361"}),
          h('line', {"x1":"9.974731440139294","y1":"20.000000003885361","x2":"21.974731440139294","y2":"20.000000003885361"}),
          h('rect', {"x":"1.974731463921216","y":"1.999999993864349","width":"3.999999952362487","height":"3.999999991711264","rx":"1.999997965745429","ry":"1.999997965745429"}),
          h('rect', {"x":"1.974731463920762","y":"9.999999982618931","width":"3.999999952362487","height":"4.000000013993374","rx":"1.99999798165154","ry":"1.99999798165154"}),
          h('rect', {"x":"1.974731463920762","y":"17.999999991233636","width":"3.999999952362487","height":"3.999999996763961","rx":"1.999997978159084","ry":"1.999997978159084"})
        ]
      );
  }
});

export default ChecklistCircleEmpty;
export { ChecklistCircleEmpty };
