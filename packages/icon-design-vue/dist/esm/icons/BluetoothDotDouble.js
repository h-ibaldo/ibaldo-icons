import { defineComponent, h } from 'vue';

const BluetoothDotDouble = defineComponent({
  name: 'BluetoothDotDouble',
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
          h('path', {"d":"M12 2L12 22"}),
          h('path', {"d":"M5.5 18L18.5 6"}),
          h('path', {"d":"M5.5 6L18.5 18"}),
          h('path', {"d":"M12 2L18.5 6"}),
          h('path', {"d":"M18.5 18L12 22"}),
          h('path', {"d":"M19.5 11.293L18.793 12L19.5 12.707L20.207 12Z"}),
          h('path', {"d":"M4.5 11.293L3.793 12L4.5 12.707L5.207 12Z"})
        ]
      );
  }
});

export default BluetoothDotDouble;
export { BluetoothDotDouble };
