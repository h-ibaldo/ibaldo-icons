import { defineComponent, h } from 'vue';

const WindowPlain = defineComponent({
  name: 'WindowPlain',
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
          h('rect', {"x":"2.00000000018008","y":"2.000000000448381","width":"20","height":"20","rx":"3","ry":"3"}),
          h('line', {"x1":"2.00000000018008","y1":"7.000000000448381","x2":"22.00000000018008","y2":"7.000000000448381"})
        ]
      );
  }
});

export default WindowPlain;
export { WindowPlain };
