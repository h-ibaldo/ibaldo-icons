import { defineComponent, h } from 'vue';

const EarbudsBluetooth = defineComponent({
  name: 'EarbudsBluetooth',
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
          h('path', {"d":"M4.5 3C3.117 3 2 4.117 2 5.5L2 15C2 15.551 2.449 16 3 16L4 16C4.551 16 5 15.551 5 15L5 10C6.105 10 7 9.105 7 8L7 5.5C7 4.117 5.883 3 4.5 3Z"}),
          h('path', {"d":"M12.5 3C11.117 3 10 4.117 10 5.5L10 15C10 15.551 10.449 16 11 16L12 16C12.551 16 13 15.551 13 15L13 10C14.105 10 15 9.105 15 8L15 5.5C15 4.117 13.883 3 12.5 3Z"}),
          h('path', {"d":"M19 10L19 22"}),
          h('path', {"d":"M16 13L19 16L22 13L19 10"}),
          h('path', {"d":"M19 22L22 19L19 16L16 19"})
        ]
      );
  }
});

export default EarbudsBluetooth;
export { EarbudsBluetooth };
