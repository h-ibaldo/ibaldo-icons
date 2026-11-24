import { defineComponent, h } from 'vue';

const LinkArrowUpNotched = defineComponent({
  name: 'LinkArrowUpNotched',
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
          h('path', {"d":"M8 8L16 16"}),
          h('path', {"d":"M13.004 13.004L13.004 13C14.66 11.344 17.344 11.344 19 13L20.758 14.758C22.414 16.414 22.414 19.098 20.758 20.754L20.754 20.758C19.098 22.414 16.414 22.414 14.758 20.758L13 19C12.113 18.113 11.719 16.938 11.777 15.777"}),
          h('path', {"d":"M8.219 12.219C7.063 12.281 5.883 11.883 5 11L3.242 9.242C1.586 7.586 1.586 4.902 3.242 3.246L3.246 3.242C4.902 1.586 7.586 1.586 9.242 3.242L11 5C12.656 6.656 12.656 9.34 11 10.996L10.996 10.996"}),
          h('path', {"d":"M22.004 4L20.004 2L18.004 4"}),
          h('path', {"d":"M20.004 8L20.004 2"})
        ]
      );
  }
});

export default LinkArrowUpNotched;
export { LinkArrowUpNotched };
