import { defineComponent, h } from 'vue';

const ScreenShareWindowsDots = defineComponent({
  name: 'ScreenShareWindowsDots',
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
          h('path', {"d":"M5.974731440099276,15.000000003885361h-3c-.552284749819592,0-1-.447715250167676-1-1V4.000000003885361c0-.552284749828686.447715250180408-1,1-1h14c.552284749830505,0,1,.447715250171314,1,1v5"}),
          h('rect', {"x":"5.974731440099276","y":"9.000000003885361","width":"16","height":"12","rx":"1","ry":"1"}),
          h('line', {"x1":"17.974731440099276","y1":"14.990000003885143","x2":"17.974731440099276","y2":"15.000000003885361"}),
          h('line', {"x1":"17.974731440099276","y1":"11.990000003885143","x2":"17.974731440099276","y2":"12.000000003885361"}),
          h('line', {"x1":"14.974731440099276","y1":"14.990000003885143","x2":"14.974731440099276","y2":"15.000000003885361"}),
          h('line', {"x1":"11.974731440099276","y1":"14.990000003885143","x2":"11.974731440099276","y2":"15.000000003885361"}),
          h('line', {"x1":"8.974731440099276","y1":"14.990000003885143","x2":"8.974731440099276","y2":"15.000000003885361"})
        ]
      );
  }
});

export default ScreenShareWindowsDots;
export { ScreenShareWindowsDots };
