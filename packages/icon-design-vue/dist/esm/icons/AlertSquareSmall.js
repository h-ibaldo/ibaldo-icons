import { defineComponent, h } from 'vue';

const AlertSquareSmall = defineComponent({
  name: 'AlertSquareSmall',
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
          h('rect', {"x":"3.974731450040053","y":"4.000000000479304","width":"16","height":"16","rx":"3","ry":"3"}),
          h('line', {"x1":"11.974731450040053","y1":"15.010000000480431","x2":"11.974731450040053","y2":"15.000000000479304"}),
          h('line', {"x1":"11.974731450040053","y1":"9.000000000479304","x2":"11.974731450040053","y2":"12.000000000479304"})
        ]
      );
  }
});

export default AlertSquareSmall;
export { AlertSquareSmall };
