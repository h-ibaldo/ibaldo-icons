import { defineComponent, h } from 'vue';

const BluetoothRectangle = defineComponent({
  name: 'BluetoothRectangle',
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
          h('path', {"d":"M18 22L6 22C4.344 22 3 20.656 3 19L3 5C3 3.344 4.344 2 6 2L18 2C19.656 2 21 3.344 21 5L21 19C21 20.656 19.656 22 18 22Z"}),
          h('path', {"d":"M12 5L12 19"}),
          h('path', {"d":"M7 8.5L12 12L17 8.5L12 5"}),
          h('path', {"d":"M12 19L17 15.5L12 12L7 15.5"})
        ]
      );
  }
});

export default BluetoothRectangle;
export { BluetoothRectangle };
