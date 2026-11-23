import { defineComponent, h } from 'vue';

const BanknoteArrowRight = defineComponent({
  name: 'BanknoteArrowRight',
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
          h('path', {"d":"M12 17L2 17L2 5L22 5L22 12"}),
          h('path', {"d":"M2 13L3 13C4.656 13 6 14.344 6 16L6 17"}),
          h('path', {"d":"M6 5L6 6C6 7.656 4.656 9 3 9L2 9"}),
          h('path', {"d":"M18 5L18 6C18 7.656 19.344 9 21 9L22 9"}),
          h('path', {"d":"M10 11C10 9.344 10.895 8 12 8C13.105 8 14 9.344 14 11C14 12.656 13.105 14 12 14C10.895 14 10 12.656 10 11Z"}),
          h('path', {"d":"M15 17L22 17"}),
          h('path', {"d":"M19 14L22 17L19 20"})
        ]
      );
  }
});

export default BanknoteArrowRight;
export { BanknoteArrowRight };
