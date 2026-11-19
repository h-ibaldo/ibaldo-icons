import { defineComponent, h } from 'vue';

const ArrowDownToDot = defineComponent({
  name: 'ArrowDownToDot',
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
          h('path', {"d":"M15 9L12 12L9 9"}),
          h('path', {"d":"M12 2L12 12"}),
          h('path', {"d":"M15 19C15 17.344 13.656 16 12 16C10.344 16 9 17.344 9 19C9 20.656 10.344 22 12 22C13.656 22 15 20.656 15 19Z"})
        ]
      );
  }
});

export default ArrowDownToDot;
export { ArrowDownToDot };
