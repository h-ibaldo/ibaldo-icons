import { defineComponent, h } from 'vue';

const LinkArrowUpSlanted = defineComponent({
  name: 'LinkArrowUpSlanted',
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
          h('path', {"d":"M13 19.004L14.758 20.762C16.414 22.414 19.098 22.414 20.754 20.762L20.758 20.758C22.414 19.102 22.414 16.414 20.758 14.762L15.996 10C14.344 8.344 11.656 8.344 10.004 10L9.996 10.004"}),
          h('path', {"d":"M11 5.004L9.242 3.242C7.586 1.59 4.902 1.59 3.246 3.242L3.242 3.246C1.586 4.902 1.586 7.59 3.242 9.242L8.004 14.004C9.656 15.66 12.344 15.66 13.996 14.004L14.004 14"}),
          h('path', {"d":"M22.004 4L20.004 2L18.004 4"}),
          h('path', {"d":"M20.004 8L20.004 2"})
        ]
      );
  }
});

export default LinkArrowUpSlanted;
export { LinkArrowUpSlanted };
