import { defineComponent, h } from 'vue';

const PaperclipPlus = defineComponent({
  name: 'PaperclipPlus',
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
          h('path', {"d":"M16 9L11 14C10.172 14.828 10.172 16.172 11 16.996L11.004 17C11.828 17.828 13.172 17.828 14 17L20.758 10.242C22.414 8.586 22.414 5.898 20.758 4.242C19.102 2.586 16.414 2.586 14.758 4.242L7.863 11.137C5.379 13.621 5.379 17.648 7.863 20.133L7.867 20.137C10.352 22.621 14.379 22.621 16.863 20.137L22 15"}),
          h('path', {"d":"M2 5L8 5"}),
          h('path', {"d":"M5 2L5 8"})
        ]
      );
  }
});

export default PaperclipPlus;
export { PaperclipPlus };
