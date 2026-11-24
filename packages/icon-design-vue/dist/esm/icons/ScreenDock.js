import { defineComponent, h } from 'vue';

const ScreenDock = defineComponent({
  name: 'ScreenDock',
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
          h('rect', {"x":"2.05053704756574","y":"3.99756205113863","width":"20","height":"16","rx":"1.99999999997484","ry":"1.99999999997484","transform":"translate(24.101074094525881 23.995124102885534) rotate(-180)"}),
          h('polyline', {"points":"6.050537043305667 19.997562035327974 6.050537043305667 14.997562035327974 18.050537043305667 14.997562035327974 18.050537043305667 19.997562035327974"}),
          h('line', {"x1":"10.050537043305667","y1":"14.997562035327974","x2":"10.050537043305667","y2":"19.997562035327974"}),
          h('line', {"x1":"14.050537043305667","y1":"14.997562035327974","x2":"14.050537043305667","y2":"19.997562035327974"})
        ]
      );
  }
});

export default ScreenDock;
export { ScreenDock };
