import { defineComponent, h } from 'vue';

const ArrowShuffle = defineComponent({
  name: 'ArrowShuffle',
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
          h('path', {"d":"M19 3L22 6L19 9"}),
          h('path', {"d":"M19 15L22 18L19 21"}),
          h('path', {"d":"M2 18L5.395 18C6.398 18 7.336 17.5 7.891 16.664L14.109 7.336C14.664 6.5 15.602 6 16.605 6L22 6"}),
          h('path', {"d":"M2 6L5.395 6C6.398 6 7.336 6.5 7.891 7.336L8.832 8.75"}),
          h('path', {"d":"M11 12L14.109 16.664C14.664 17.5 15.602 18 16.605 18L22 18"})
        ]
      );
  }
});

export default ArrowShuffle;
export { ArrowShuffle };
