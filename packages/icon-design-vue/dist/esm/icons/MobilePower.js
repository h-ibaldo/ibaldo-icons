import { defineComponent, h } from 'vue';

const MobilePower = defineComponent({
  name: 'MobilePower',
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
          h('path', {"d":"M17 22L7 22C5.895 22 5 21.105 5 20L5 4C5 2.895 5.895 2 7 2L17 2C18.105 2 19 2.895 19 4L19 20C19 21.105 18.105 22 17 22Z"}),
          h('path', {"d":"M5 18L19 18"}),
          h('path', {"d":"M12 6L12 10"}),
          h('path', {"d":"M15 7.355C15.621 8.059 16 8.984 16 10C16 12.211 14.211 14 12 14C9.789 14 8 12.211 8 10C8 8.984 8.379 8.059 9 7.355"})
        ]
      );
  }
});

export default MobilePower;
export { MobilePower };
