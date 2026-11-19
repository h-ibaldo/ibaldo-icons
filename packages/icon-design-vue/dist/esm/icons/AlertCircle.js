import { defineComponent, h } from 'vue';

const AlertCircle = defineComponent({
  name: 'AlertCircle',
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
          h('circle', {"cx":"11.974731450049148","cy":"12.000000000928594","r":"10"}),
          h('line', {"x1":"11.974731450040053","y1":"16.010000000480431","x2":"11.974731450040053","y2":"16.000000000479304"}),
          h('line', {"x1":"11.974731450040053","y1":"8.000000000479304","x2":"11.974731450040053","y2":"12.000000000479304"})
        ]
      );
  }
});

export default AlertCircle;
export { AlertCircle };
