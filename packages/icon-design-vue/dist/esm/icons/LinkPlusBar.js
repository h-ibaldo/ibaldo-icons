import { defineComponent, h } from 'vue';

const LinkPlusBar = defineComponent({
  name: 'LinkPlusBar',
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
          h('path', {"d":"M20.758 3.246L20.754 3.242C19.098 1.586 16.414 1.586 14.758 3.242L13 5C11.344 6.656 11.344 9.34 13 10.996L13.004 11C14.66 12.656 17.344 12.656 19 11L20.758 9.242C22.414 7.586 22.414 4.902 20.758 3.246Z"}),
          h('path', {"d":"M11 13.004L10.996 13C9.34 11.344 6.656 11.344 5 13L3.242 14.758C1.586 16.414 1.586 19.098 3.242 20.754L3.246 20.758C4.902 22.414 7.586 22.414 9.242 20.758L11 19C12.656 17.344 12.656 14.66 11 13.004Z"}),
          h('path', {"d":"M16 8L8 16"}),
          h('path', {"d":"M19 16L19 22"}),
          h('path', {"d":"M22 19L16 19"})
        ]
      );
  }
});

export default LinkPlusBar;
export { LinkPlusBar };
