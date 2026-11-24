import { defineComponent, h } from 'vue';

const GripBarsHorizontal = defineComponent({
  name: 'GripBarsHorizontal',
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
          h('line', {"x1":"2.025268558149946","y1":"6.998782736171052","x2":"22.025268558149946","y2":"6.998782736171052"}),
          h('line', {"x1":"2.025268558149946","y1":"11.998782736171052","x2":"22.025268558149946","y2":"11.998782736171052"}),
          h('line', {"x1":"2.025268558149946","y1":"16.998782736171052","x2":"22.025268558149946","y2":"16.998782736171052"})
        ]
      );
  }
});

export default GripBarsHorizontal;
export { GripBarsHorizontal };
