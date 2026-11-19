import { defineComponent, h } from 'vue';

const TagPlusCircleRound = defineComponent({
  name: 'TagPlusCircleRound',
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
          h('path', {"d":"M6.5 8C6.223 8 6 7.777 6 7.5C6 7.223 6.223 7 6.5 7C6.777 7 7 7.223 7 7.5C7 7.777 6.777 8 6.5 8Z"}),
          h('path', {"d":"M15.313 7.313L11.586 3.586C11.211 3.211 10.703 3 10.172 3L4 3C2.895 3 2 3.895 2 5L2 11.172C2 11.703 2.211 12.211 2.586 12.586L10.586 20.586C11.367 21.367 12.633 21.367 13.414 20.586L17 17"}),
          h('path', {"d":"M22 12C22 14.762 19.762 17 17 17C14.238 17 12 14.762 12 12C12 9.238 14.238 7 17 7C19.762 7 22 9.238 22 12Z"}),
          h('path', {"d":"M17 10L17 14"}),
          h('path', {"d":"M19 12L15 12"})
        ]
      );
  }
});

export default TagPlusCircleRound;
export { TagPlusCircleRound };
