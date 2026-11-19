import { defineComponent, h } from 'vue';

const ScreenShare = defineComponent({
  name: 'ScreenShare',
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
          h('path', {"d":"M17.974731440099276,11.000000003885361h3c.552284749830505,0,1,.447715250171314,1,1v6c0,.552284749832324-.447715250169495,1-1,1h-11c-.552284749819592,0-1-.447715250167676-1-1v-2"}),
          h('line', {"x1":"12.974731440099276","y1":"22.000000003885361","x2":"17.974731440099276","y2":"22.000000003885361"}),
          h('rect', {"x":"1.974731440099276","y":"2.000000003885361","width":"13","height":"8","rx":"1","ry":"1"}),
          h('line', {"x1":"5.974731440099276","y1":"13.000000003885361","x2":"10.974731440099276","y2":"13.000000003885361"})
        ]
      );
  }
});

export default ScreenShare;
export { ScreenShare };
