import { defineComponent, h } from 'vue';

const TagStackOffset = defineComponent({
  name: 'TagStackOffset',
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
          h('path', {"d":"M17 20L6.492 20C6.18 20 5.891 19.855 5.699 19.609L1.84 14.609C1.559 14.25 1.559 13.75 1.84 13.391L5.699 8.391C5.891 8.145 6.18 8 6.492 8L17 8C17.551 8 18 8.449 18 9L18 19C18 19.551 17.551 20 17 20Z"}),
          h('path', {"d":"M10 4L19 4C20.656 4 22 5.344 22 7L22 16"}),
          h('path', {"d":"M6 14L6 14"})
        ]
      );
  }
});

export default TagStackOffset;
export { TagStackOffset };
