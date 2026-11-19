import { defineComponent, h } from 'vue';

const FileArticlePlain = defineComponent({
  name: 'FileArticlePlain',
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
          h('path', {"d":"M19 22.034L5 22.034C3.895 22.034 3 21.138 3 20.034L3 4.034C3 2.929 3.895 2.034 5 2.034L19 2.034C20.105 2.034 21 2.929 21 4.034L21 20.034C21 21.138 20.105 22.034 19 22.034Z"}),
          h('path', {"d":"M11 10.034L7 10.034L7 6.034L11 6.034L11 10.034Z"}),
          h('path', {"d":"M15 10.034L17 10.034"}),
          h('path', {"d":"M15 6.034L17 6.034"}),
          h('path', {"d":"M7 14.034L17 14.034"}),
          h('path', {"d":"M7 18.034L17 18.034"})
        ]
      );
  }
});

export default FileArticlePlain;
export { FileArticlePlain };
