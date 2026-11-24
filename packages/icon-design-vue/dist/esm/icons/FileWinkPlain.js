import { defineComponent, h } from 'vue';

const FileWinkPlain = defineComponent({
  name: 'FileWinkPlain',
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
          h('path', {"d":"M9 15.034C9.776 15.648 10.827 16.034 12 16.034C13.173 16.034 14.224 15.648 15 15.034"}),
          h('path', {"d":"M15 11.034L15 11.034"}),
          h('path', {"d":"M10 11.034L8 11.034"}),
          h('path', {"d":"M18 22.034L6 22.034C4.895 22.034 4 21.138 4 20.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034Z"})
        ]
      );
  }
});

export default FileWinkPlain;
export { FileWinkPlain };
