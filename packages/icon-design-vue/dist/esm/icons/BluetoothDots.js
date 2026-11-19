import { defineComponent, h } from 'vue';

const BluetoothDots = defineComponent({
  name: 'BluetoothDots',
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
          h('path', {"d":"M8.5 2L8.5 22"}),
          h('path', {"d":"M2 18L15 6"}),
          h('path', {"d":"M2 6L15 18"}),
          h('path', {"d":"M8.5 2L15 6"}),
          h('path', {"d":"M15 18L8.5 22"}),
          h('path', {"d":"M18.5 12L18.5 12"}),
          h('path', {"d":"M15 12L15 12"}),
          h('path', {"d":"M22 12L22 12"})
        ]
      );
  }
});

export default BluetoothDots;
export { BluetoothDots };
