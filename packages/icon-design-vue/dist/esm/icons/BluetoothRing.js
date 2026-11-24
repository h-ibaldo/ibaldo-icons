import { defineComponent, h } from 'vue';

const BluetoothRing = defineComponent({
  name: 'BluetoothRing',
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
          h('path', {"d":"M17.219 14.316C17.711 13.492 18 12.531 18 11.5C18 10.734 17.844 10.004 17.559 9.34"}),
          h('path', {"d":"M20.094 17.191C21.285 15.605 22 13.641 22 11.5C22 9.617 21.445 7.871 20.504 6.395"})
        ]
      );
  }
});

export default BluetoothRing;
export { BluetoothRing };
