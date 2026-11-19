import { defineComponent, h } from 'vue';

const FileNetworkPlain = defineComponent({
  name: 'FileNetworkPlain',
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
          h('path', {"d":"M4 22.034L20 22.034"}),
          h('path', {"d":"M12 18.034L12 22.034"}),
          h('path', {"d":"M7 18.034L17 18.034C18.105 18.034 19 17.138 19 16.034L19 4.034C19 2.929 18.105 2.034 17 2.034L7 2.034C5.895 2.034 5 2.929 5 4.034L5 16.034C5 17.138 5.895 18.034 7 18.034Z"})
        ]
      );
  }
});

export default FileNetworkPlain;
export { FileNetworkPlain };
