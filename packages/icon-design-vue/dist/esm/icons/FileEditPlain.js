import { defineComponent, h } from 'vue';

const FileEditPlain = defineComponent({
  name: 'FileEditPlain',
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
          h('path', {"d":"M21.707 8.912L20.121 7.327C19.728 6.933 19.089 6.937 18.7 7.334L11 15.034L11 18.034L14 18.034L21.715 10.319C22.098 9.927 22.095 9.3 21.707 8.912Z"}),
          h('path', {"d":"M18 4.034C18 2.929 17.105 2.034 16 2.034L4 2.034C2.895 2.034 2 2.929 2 4.034L2 20.034C2 21.138 2.895 22.034 4 22.034L16 22.034C17.105 22.034 18 21.138 18 20.034L18 19"})
        ]
      );
  }
});

export default FileEditPlain;
export { FileEditPlain };
