import { defineComponent, h } from 'vue';

const TextSearch = defineComponent({
  name: 'TextSearch',
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
          h('path', {"d":"M22.027 5L2 5"}),
          h('path', {"d":"M9 12L2 12"}),
          h('path', {"d":"M9 19L2 19"}),
          h('path', {"d":"M20 15.5C20 17.434 18.434 19 16.5 19C14.566 19 13 17.434 13 15.5C13 13.566 14.566 12 16.5 12C18.434 12 20 13.566 20 15.5Z"}),
          h('path', {"d":"M18.973 17.973L21 20"})
        ]
      );
  }
});

export default TextSearch;
export { TextSearch };
