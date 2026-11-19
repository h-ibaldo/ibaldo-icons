import { defineComponent, h } from 'vue';

const LinkRaysBoxy = defineComponent({
  name: 'LinkRaysBoxy',
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
          h('path', {"d":"M12.5 14L11 14C9.344 14 8 12.656 8 11L8 6C8 4.344 9.344 3 11 3L13 3C14.656 3 16 4.344 16 6L16 7"}),
          h('path', {"d":"M11.5 10L13 10C14.656 10 16 11.344 16 13L16 18C16 19.656 14.656 21 13 21L11 21C9.344 21 8 19.656 8 18L8 17"}),
          h('path', {"d":"M4 10L2 9"}),
          h('path', {"d":"M4 14L2 15"}),
          h('path', {"d":"M20 10L22 9"}),
          h('path', {"d":"M20 14L22 15"})
        ]
      );
  }
});

export default LinkRaysBoxy;
export { LinkRaysBoxy };
