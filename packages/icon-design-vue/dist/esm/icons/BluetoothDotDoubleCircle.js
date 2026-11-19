import { defineComponent, h } from 'vue';

const BluetoothDotDoubleCircle = defineComponent({
  name: 'BluetoothDotDoubleCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M18 12L18 12"}),
          h('path', {"d":"M6 12L6 12"}),
          h('path', {"d":"M12 6L12 18"}),
          h('path', {"d":"M8 9L12 12L16 9L12 6"}),
          h('path', {"d":"M12 18L16 15L12 12L8 15"})
        ]
      );
  }
});

export default BluetoothDotDoubleCircle;
export { BluetoothDotDoubleCircle };
