import { defineComponent, h } from 'vue';

const FileUserPlain = defineComponent({
  name: 'FileUserPlain',
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
          h('path', {"d":"M4 9.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034L17 22.034"}),
          h('path', {"d":"M11 15.034C11 16.691 9.657 18.034 8 18.034C6.343 18.034 5 16.691 5 15.034C5 13.377 6.343 12.034 8 12.034C9.657 12.034 11 13.377 11 15.034Z"}),
          h('path', {"d":"M13 22.034L13 22.034C13 19.825 11.209 18.034 9 18.034L7 18.034C4.791 18.034 3 19.825 3 22.034L3 22.034"})
        ]
      );
  }
});

export default FileUserPlain;
export { FileUserPlain };
