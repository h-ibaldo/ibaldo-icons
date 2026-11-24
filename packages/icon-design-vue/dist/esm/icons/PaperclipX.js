import { defineComponent, h } from 'vue';

const PaperclipX = defineComponent({
  name: 'PaperclipX',
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
          h('path', {"d":"M15 8L9 14C8.172 14.828 8.172 16.172 9 16.996L9.004 17C9.828 17.828 11.172 17.828 12 17L19.758 9.242C21.414 7.586 21.414 4.898 19.758 3.242C18.102 1.586 15.414 1.586 13.758 3.242L5.863 11.137C3.379 13.621 3.379 17.648 5.863 20.133L5.867 20.137C8.352 22.621 12.379 22.621 14.863 20.137L21 14"}),
          h('path', {"d":"M6 6L2 2"}),
          h('path', {"d":"M6 2L2 6"})
        ]
      );
  }
});

export default PaperclipX;
export { PaperclipX };
