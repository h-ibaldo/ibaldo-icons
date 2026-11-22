import { defineComponent, h } from 'vue';

const DistributeBottom = defineComponent({
  name: 'DistributeBottom',
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
          h('path', {"d":"M2 21L22 21"}),
          h('path', {"d":"M2 9L22 9"}),
          h('path', {"d":"M8 8L8 4C8 3.449 8.449 3 9 3L15 3C15.551 3 16 3.449 16 4L16 8C16 8.551 15.551 9 15 9L9 9C8.449 9 8 8.551 8 8Z"}),
          h('path', {"d":"M6 20L6 16C6 15.449 6.449 15 7 15L17 15C17.551 15 18 15.449 18 16L18 20C18 20.551 17.551 21 17 21L7 21C6.449 21 6 20.551 6 20Z"})
        ]
      );
  }
});

export default DistributeBottom;
export { DistributeBottom };
