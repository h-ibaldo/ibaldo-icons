import { defineComponent, h } from 'vue';

const LinkBurstVertical = defineComponent({
  name: 'LinkBurstVertical',
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
          h('path', {"d":"M12 14C10.344 14 9 12.656 9 11L9 6C9 4.344 10.344 3 12 3C13.656 3 15 4.344 15 6L15 8"}),
          h('path', {"d":"M12 10C13.656 10 15 12.344 15 14L15 18C15 19.656 13.656 21 12 21C10.344 21 9 19.656 9 18L9 16"}),
          h('path', {"d":"M4 12L2 12"}),
          h('path', {"d":"M5.172 8.414L3.758 7"}),
          h('path', {"d":"M3.758 17L5.172 15.586"}),
          h('path', {"d":"M20.172 12L22.172 12"}),
          h('path', {"d":"M19 8.414L20.414 7"}),
          h('path', {"d":"M20.414 17L19 15.586"})
        ]
      );
  }
});

export default LinkBurstVertical;
export { LinkBurstVertical };
