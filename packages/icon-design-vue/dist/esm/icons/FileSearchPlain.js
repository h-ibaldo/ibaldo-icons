import { defineComponent, h } from 'vue';

const FileSearchPlain = defineComponent({
  name: 'FileSearchPlain',
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
          h('path', {"d":"M17 18.034"}),
          h('path', {"d":"M10 22.034L5 22.034C3.895 22.034 3 21.138 3 20.034L3 4.034C3 2.929 3.895 2.034 5 2.034L17 2.034C18.105 2.034 19 2.929 19 4.034L19 9.034"}),
          h('path', {"d":"M18 21.034"}),
          h('path', {"d":"M19 16.034C19 18.243 17.209 20.034 15 20.034C12.791 20.034 11 18.243 11 16.034C11 13.825 12.791 12.034 15 12.034C17.209 12.034 19 13.825 19 16.034Z"}),
          h('path', {"d":"M18 19.034L21 22.034"})
        ]
      );
  }
});

export default FileSearchPlain;
export { FileSearchPlain };
