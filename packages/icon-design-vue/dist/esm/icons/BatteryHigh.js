import { defineComponent, h } from 'vue';

const BatteryHigh = defineComponent({
  name: 'BatteryHigh',
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
          h('path', {"d":"M17 18L4 18C2.895 18 2 17.105 2 16L2 8C2 6.895 2.895 6 4 6L17 6C18.105 6 19 6.895 19 8L19 16C19 17.105 18.105 18 17 18Z"}),
          h('path', {"d":"M19 15L21.316 14.227C21.727 14.094 22 13.711 22 13.277L22 10.723C22 10.289 21.727 9.906 21.316 9.773L19 9"}),
          h('path', {"d":"M6 10L6 14"}),
          h('path', {"d":"M9 10L9 14"}),
          h('path', {"d":"M12 10L12 14"})
        ]
      );
  }
});

export default BatteryHigh;
export { BatteryHigh };
