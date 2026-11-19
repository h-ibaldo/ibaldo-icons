import { defineComponent, h } from 'vue';

const BluetoothOffNarrow = defineComponent({
  name: 'BluetoothOffNarrow',
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
          h('path', {"d":"M17 17L12 22"}),
          h('path', {"d":"M7 17L12 12"}),
          h('path', {"d":"M14.863 9.137L17 7L12 2L12 6.16"}),
          h('path', {"d":"M12 22L12 12"}),
          h('path', {"d":"M4 4L20 20"})
        ]
      );
  }
});

export default BluetoothOffNarrow;
export { BluetoothOffNarrow };
