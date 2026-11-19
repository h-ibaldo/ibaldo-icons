import { defineComponent, h } from 'vue';

const BluetoothSquare = defineComponent({
  name: 'BluetoothSquare',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M12 5L12 19"}),
          h('path', {"d":"M7 8.5L12 12L17 8.5L12 5"}),
          h('path', {"d":"M12 19L17 15.5L12 12L7 15.5"})
        ]
      );
  }
});

export default BluetoothSquare;
export { BluetoothSquare };
