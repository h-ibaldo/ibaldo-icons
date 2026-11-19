import { defineComponent, h } from 'vue';

const LinkBrokenDoubleSlanted = defineComponent({
  name: 'LinkBrokenDoubleSlanted',
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
          h('path', {"d":"M12 6L14.762 3.242C16.414 1.59 19.102 1.59 20.758 3.242L20.762 3.246C22.414 4.902 22.414 7.59 20.762 9.242L18 12"}),
          h('path', {"d":"M12 18L9.242 20.762C7.59 22.414 4.902 22.414 3.246 20.762L3.242 20.758C1.59 19.102 1.59 16.414 3.242 14.762L6 12"}),
          h('path', {"d":"M5 8L2 7"}),
          h('path', {"d":"M8 5L7 2"}),
          h('path', {"d":"M19 16L22 17"}),
          h('path', {"d":"M16 19L17 22"})
        ]
      );
  }
});

export default LinkBrokenDoubleSlanted;
export { LinkBrokenDoubleSlanted };
