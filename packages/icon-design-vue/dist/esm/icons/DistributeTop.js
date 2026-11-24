import { defineComponent, h } from 'vue';

const DistributeTop = defineComponent({
  name: 'DistributeTop',
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
          h('path', {"d":"M22 3L2 3"}),
          h('path', {"d":"M22 15L2 15"}),
          h('path', {"d":"M16 16L16 20C16 20.551 15.551 21 15 21L9 21C8.449 21 8 20.551 8 20L8 16C8 15.449 8.449 15 9 15L15 15C15.551 15 16 15.449 16 16Z"}),
          h('path', {"d":"M18 4L18 8C18 8.551 17.551 9 17 9L7 9C6.449 9 6 8.551 6 8L6 4C6 3.449 6.449 3 7 3L17 3C17.551 3 18 3.449 18 4Z"})
        ]
      );
  }
});

export default DistributeTop;
export { DistributeTop };
