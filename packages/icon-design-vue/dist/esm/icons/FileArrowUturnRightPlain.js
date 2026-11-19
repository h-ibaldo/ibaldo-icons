import { defineComponent, h } from 'vue';

const FileArrowUturnRightPlain = defineComponent({
  name: 'FileArrowUturnRightPlain',
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
          h('path', {"d":"M19 18.034L21 20.034L19 22.034"}),
          h('path', {"d":"M20 20.034L15 20.034C13.343 20.034 12 18.691 12 17.034L12 17.034C12 15.377 13.343 14.034 15 14.034L21 14.034"}),
          h('path', {"d":"M20 10.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L10 22.034"})
        ]
      );
  }
});

export default FileArrowUturnRightPlain;
export { FileArrowUturnRightPlain };
