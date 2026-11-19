import { defineComponent, h } from 'vue';

const DivideHollow = defineComponent({
  name: 'DivideHollow',
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
          h('path', {"d":"M14 5C14 6.105 13.105 7 12 7C10.895 7 10 6.105 10 5C10 3.895 10.895 3 12 3C13.105 3 14 3.895 14 5Z"}),
          h('path', {"d":"M14 19C14 20.105 13.105 21 12 21C10.895 21 10 20.105 10 19C10 17.895 10.895 17 12 17C13.105 17 14 17.895 14 19Z"}),
          h('path', {"d":"M3 12L21 12"})
        ]
      );
  }
});

export default DivideHollow;
export { DivideHollow };
