import { defineComponent, h } from 'vue';

const FileEditCornerPlain = defineComponent({
  name: 'FileEditCornerPlain',
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
          h('path', {"d":"M20.414 18.276C21.195 17.495 21.195 16.229 20.414 15.448L14 9.034L11 9.034L11 12.034L17.414 18.448C18.195 19.229 19.462 19.229 20.243 18.448L20.414 18.276Z"}),
          h('path', {"d":"M16 17.034L19 14.034"}),
          h('path', {"d":"M17 18.034"}),
          h('path', {"d":"M17 22.034L5 22.034C3.895 22.034 3 21.138 3 20.034L3 4.034C3 2.929 3.895 2.034 5 2.034L17 2.034C18.105 2.034 19 2.929 19 4.034L19 8.034"})
        ]
      );
  }
});

export default FileEditCornerPlain;
export { FileEditCornerPlain };
