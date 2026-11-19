import { defineComponent, h } from 'vue';

const FileArrowDownCornerPlain = defineComponent({
  name: 'FileArrowDownCornerPlain',
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
          h('path', {"d":"M16 19.034L19 22.034L22 19.034"}),
          h('path', {"d":"M19 16.034L19 22.034"}),
          h('path', {"d":"M19 12.034L19 4.034C19 2.929 18.105 2.034 17 2.034L5 2.034C3.895 2.034 3 2.929 3 4.034L3 20.034C3 21.138 3.895 22.034 5 22.034L13 22.034"})
        ]
      );
  }
});

export default FileArrowDownCornerPlain;
export { FileArrowDownCornerPlain };
