import { defineComponent, h } from 'vue';

const PlusSquareDot = defineComponent({
  name: 'PlusSquareDot',
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
          h('path', {"d":"M12 9L12 15"}),
          h('path', {"d":"M15 12L9 12"}),
          h('path', {"d":"M20 11L20 18C20 19.656 18.656 21 17 21L7 21C5.344 21 4 19.656 4 18L4 6C4 4.344 5.344 3 7 3L12 3"}),
          h('path', {"d":"M21 4.5C21 3.117 19.883 2 18.5 2C17.117 2 16 3.117 16 4.5C16 5.883 17.117 7 18.5 7C19.883 7 21 5.883 21 4.5Z"})
        ]
      );
  }
});

export default PlusSquareDot;
export { PlusSquareDot };
