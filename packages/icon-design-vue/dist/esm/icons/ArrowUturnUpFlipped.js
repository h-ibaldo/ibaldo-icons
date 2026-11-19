import { defineComponent, h } from 'vue';

const ArrowUturnUpFlipped = defineComponent({
  name: 'ArrowUturnUpFlipped',
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
          h('path', {"d":"M12 7L8 3L4 7"}),
          h('path', {"d":"M8 3L8 15C8 18.313 10.688 21 14 21C17.313 21 20 18.313 20 15L20 12"})
        ]
      );
  }
});

export default ArrowUturnUpFlipped;
export { ArrowUturnUpFlipped };
