import { defineComponent, h } from 'vue';

const SearchBracketsC = defineComponent({
  name: 'SearchBracketsC',
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
          h('path', {"d":"M12 8L14 10L12 12"}),
          h('path', {"d":"M8 8L6 10L8 12"}),
          h('path', {"d":"M18 10C18 14.418 14.418 18 10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10Z"}),
          h('path', {"d":"M15.656 15.656L22 22"})
        ]
      );
  }
});

export default SearchBracketsC;
export { SearchBracketsC };
