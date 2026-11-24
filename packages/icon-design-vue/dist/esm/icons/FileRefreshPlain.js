import { defineComponent, h } from 'vue';

const FileRefreshPlain = defineComponent({
  name: 'FileRefreshPlain',
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
          h('path', {"d":"M11 22.034L11 19.034L14 19.034"}),
          h('path', {"d":"M11.422 19.034C12.194 20.798 13.951 22.034 16 22.034C18.761 22.034 21 19.795 21 17.034C21 14.272 18.761 12.034 16 12.034C13.951 12.034 12.194 13.269 11.422 15.034"}),
          h('path', {"d":"M20 9.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L7 22.034"})
        ]
      );
  }
});

export default FileRefreshPlain;
export { FileRefreshPlain };
