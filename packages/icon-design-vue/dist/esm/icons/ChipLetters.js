import { defineComponent, h } from 'vue';

const ChipLetters = defineComponent({
  name: 'ChipLetters',
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
          h('path', {"d":"M6 4L18 4C19.105 4 20 4.895 20 6L20 18C20 19.105 19.105 20 18 20L6 20C4.895 20 4 19.105 4 18L4 6C4 4.895 4.895 4 6 4Z"}),
          h('path', {"d":"M9 4L9 2"}),
          h('path', {"d":"M9 22L9 20"}),
          h('path', {"d":"M12 4L12 2"}),
          h('path', {"d":"M12 22L12 20"}),
          h('path', {"d":"M15 4L15 2"}),
          h('path', {"d":"M15 22L15 20"}),
          h('path', {"d":"M9 4L9 2"}),
          h('path', {"d":"M20 9L22 9"}),
          h('path', {"d":"M9 22L9 20"}),
          h('path', {"d":"M2 9L4 9"}),
          h('path', {"d":"M12 4L12 2"}),
          h('path', {"d":"M20 12L22 12"}),
          h('path', {"d":"M12 22L12 20"}),
          h('path', {"d":"M2 12L4 12"}),
          h('path', {"d":"M15 4L15 2"}),
          h('path', {"d":"M20 15L22 15"}),
          h('path', {"d":"M15 22L15 20"}),
          h('path', {"d":"M2 15L4 15"}),
          h('path', {"d":"M16 8L16 15"}),
          h('path', {"d":"M8 13L13 13"}),
          h('path', {"d":"M8 15L8 10.5C8 9.121 9.121 8 10.5 8C11.879 8 13 9.121 13 10.5L13 15"})
        ]
      );
  }
});

export default ChipLetters;
export { ChipLetters };
