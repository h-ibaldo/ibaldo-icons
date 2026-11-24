import { defineComponent, h } from 'vue';

const FileStack = defineComponent({
  name: 'FileStack',
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
          h('path', {"d":"M3 7L3 20C3 21.105 3.895 22 5 22L16 22"}),
          h('path', {"d":"M21 16L21 7.828C21 7.298 20.789 6.789 20.414 6.414L16.586 2.586C16.211 2.211 15.702 2 15.172 2L9 2C7.895 2 7 2.895 7 4L7 16C7 17.105 7.895 18 9 18L19 18C20.105 18 21 17.105 21 16Z"}),
          h('path', {"d":"M15 2L15 7C15 7.552 15.448 8 16 8L21 8"})
        ]
      );
  }
});

export default FileStack;
export { FileStack };
