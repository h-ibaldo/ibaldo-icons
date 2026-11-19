import { defineComponent, h } from 'vue';

const LinkArrowUpClip2 = defineComponent({
  name: 'LinkArrowUpClip2',
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
          h('path', {"d":"M14 14L15.965 15.965C17.344 17.344 17.344 19.586 15.965 20.965C14.586 22.344 12.344 22.344 10.965 20.965L9 19"}),
          h('path', {"d":"M6 16L4.035 14.035C2.656 12.652 2.656 10.414 4.035 9.035C5.414 7.652 7.656 7.652 9.035 9.035L11 11"}),
          h('path', {"d":"M12 17L8 13"}),
          h('path', {"d":"M20 5L17 2L14 5"}),
          h('path', {"d":"M17 10L17 2"})
        ]
      );
  }
});

export default LinkArrowUpClip2;
export { LinkArrowUpClip2 };
