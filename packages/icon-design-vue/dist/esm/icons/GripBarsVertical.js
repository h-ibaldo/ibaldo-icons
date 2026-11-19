import { defineComponent, h } from 'vue';

const GripBarsVertical = defineComponent({
  name: 'GripBarsVertical',
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
          h('line', {"x1":"17.025268558149946","y1":"1.998782736171052","x2":"17.025268558149946","y2":"21.998782736171052"}),
          h('line', {"x1":"12.025268558149946","y1":"1.998782736171052","x2":"12.025268558149946","y2":"21.998782736171052"}),
          h('line', {"x1":"7.025268558149946","y1":"1.998782736171052","x2":"7.025268558149946","y2":"21.998782736171052"})
        ]
      );
  }
});

export default GripBarsVertical;
export { GripBarsVertical };
