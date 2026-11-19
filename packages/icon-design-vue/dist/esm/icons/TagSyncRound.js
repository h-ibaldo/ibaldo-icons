import { defineComponent, h } from 'vue';

const TagSyncRound = defineComponent({
  name: 'TagSyncRound',
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
          h('path', {"d":"M22 7L22 10L19 10"}),
          h('path', {"d":"M11 16L11 13L14 13"}),
          h('path', {"d":"M21.578 10C20.805 8.234 19.051 7 17 7C15.371 7 13.934 7.793 13.023 9"}),
          h('path', {"d":"M12.102 13C12.563 15.281 14.582 17 17 17C19.047 17 20.797 15.762 21.57 14"}),
          h('path', {"d":"M6.5 8C6.223 8 6 7.777 6 7.5C6 7.223 6.223 7 6.5 7C6.777 7 7 7.223 7 7.5C7 7.777 6.777 8 6.5 8Z"}),
          h('path', {"d":"M13 5L11.586 3.586C11.211 3.211 10.703 3 10.172 3L4 3C2.895 3 2 3.895 2 5L2 11.172C2 11.703 2.211 12.211 2.586 12.586L10.586 20.586C11.367 21.367 12.633 21.367 13.414 20.586L14.5 19.5"})
        ]
      );
  }
});

export default TagSyncRound;
export { TagSyncRound };
