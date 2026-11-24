import { defineComponent, h } from 'vue';

const SunCircleSplitTilted = defineComponent({
  name: 'SunCircleSplitTilted',
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
          h('path', {"d":"M12.094 2.008C9.504 1.98 6.902 2.953 4.93 4.93C2.949 6.906 1.98 9.508 2.004 12.098"}),
          h('path', {"d":"M3.305 16.926C4.578 19.18 6.723 20.941 9.422 21.664C12.125 22.383 14.859 21.926 17.09 20.605"}),
          h('path', {"d":"M16.926 3.305C19.18 4.578 20.941 6.723 21.664 9.422C22.383 12.125 21.926 14.859 20.605 17.09"}),
          h('path', {"d":"M14 12C14 10.895 13.105 10 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12Z"}),
          h('path', {"d":"M12 6L12 7"}),
          h('path', {"d":"M12 17L12 18"}),
          h('path', {"d":"M6 12L7 12"}),
          h('path', {"d":"M17 12L18 12"}),
          h('path', {"d":"M7.758 7.758L8.465 8.465"}),
          h('path', {"d":"M15.535 15.535L16.242 16.242"}),
          h('path', {"d":"M7.758 16.242L8.465 15.535"}),
          h('path', {"d":"M15.535 8.465L16.242 7.758"})
        ]
      );
  }
});

export default SunCircleSplitTilted;
export { SunCircleSplitTilted };
