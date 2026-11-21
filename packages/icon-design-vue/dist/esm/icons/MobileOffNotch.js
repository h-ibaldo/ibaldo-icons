import { defineComponent, h } from 'vue';

const MobileOffNotch = defineComponent({
  name: 'MobileOffNotch',
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
          h('path', {"d":"M13 5L11 5"}),
          h('path', {"d":"M22 2L2 22"}),
          h('path', {"d":"M6 13L6 4C6 2.895 6.895 2 8 2L16 2C16.293 2 16.574 2.063 16.824 2.176"}),
          h('path', {"d":"M18 6L18 20C18 21.105 17.105 22 16 22L8 22C6.895 22 6 21.105 6 20L6 18"})
        ]
      );
  }
});

export default MobileOffNotch;
export { MobileOffNotch };
