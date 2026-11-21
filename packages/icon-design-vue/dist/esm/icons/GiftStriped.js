import { defineComponent, h } from 'vue';

const GiftStriped = defineComponent({
  name: 'GiftStriped',
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
          h('path', {"d":"M3 13L21 13L21 21C21 21.551 20.551 22 20 22L4 22C3.449 22 3 21.551 3 21Z"}),
          h('path', {"d":"M3 13L21 13C21.551 13 22 12.551 22 12L22 9C22 8.449 21.551 8 21 8L3 8C2.449 8 2 8.449 2 9L2 12C2 12.551 2.449 13 3 13Z"}),
          h('path', {"d":"M12 22L21 13.898"}),
          h('path', {"d":"M16 13L6 22"}),
          h('path', {"d":"M10 13L3 19.301"}),
          h('path', {"d":"M11 8L5 5L9 2L12 8L17 2L20 5L14 8"})
        ]
      );
  }
});

export default GiftStriped;
export { GiftStriped };
