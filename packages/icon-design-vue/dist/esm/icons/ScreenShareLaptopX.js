import { defineComponent, h } from 'vue';

const ScreenShareLaptopX = defineComponent({
  name: 'ScreenShareLaptopX',
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
          h('rect', {"x":"5.974731440099276","y":"7.000000003885361","width":"15","height":"11","rx":"1","ry":"1"}),
          h('path', {"d":"M2.974731440099276,15.000000003885361c-.552284749819592,0-1-.447715250167676-1-1V4.000000003885361c0-.552284749828686.447715250180408-1,1-1h13c.552284749830505,0,1,.447715250171314,1,1"}),
          h('line', {"x1":"4.974731440099276","y1":"21.000000003885361","x2":"21.974731440099276","y2":"21.000000003885361"}),
          h('line', {"x1":"11.974731440099276","y1":"14.000000003888999","x2":"14.974731440099276","y2":"11.000000003888999"}),
          h('line', {"x1":"14.974731440170217","y1":"14.000000003819878","x2":"11.974731440041069","y2":"11.000000003954483"})
        ]
      );
  }
});

export default ScreenShareLaptopX;
export { ScreenShareLaptopX };
