import { defineComponent, h } from 'vue';

const PresentationBoard = defineComponent({
  name: 'PresentationBoard',
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
          h('path', {"d":"M20 17L4 17C2.895 17 2 16.105 2 15L2 6C2 4.895 2.895 4 4 4L20 4C21.105 4 22 4.895 22 6L22 15C22 16.105 21.105 17 20 17Z"}),
          h('path', {"d":"M12 4L12 2"}),
          h('path', {"d":"M12 22L12 17"}),
          h('path', {"d":"M17 22L7 22"}),
          h('path', {"d":"M7 13L7 11"}),
          h('path', {"d":"M12 13L12 8"}),
          h('path', {"d":"M17 13L17 9"})
        ]
      );
  }
});

export default PresentationBoard;
export { PresentationBoard };
