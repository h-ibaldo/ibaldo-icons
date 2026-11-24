import { defineComponent, h } from 'vue';

const BluetoothDotsNarrow = defineComponent({
  name: 'BluetoothDotsNarrow',
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
          h('path', {"d":"M8 2L13 7L8 12L3 7"}),
          h('path', {"d":"M3 17L8 12L13 17L8 22"}),
          h('path', {"d":"M8 2L8 22"}),
          h('path', {"d":"M18 12L18 12"}),
          h('path', {"d":"M14 12L14 12"}),
          h('path', {"d":"M22 12L22 12"})
        ]
      );
  }
});

export default BluetoothDotsNarrow;
export { BluetoothDotsNarrow };
