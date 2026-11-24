import { defineComponent, h } from 'vue';

const LogoutSquare = defineComponent({
  name: 'LogoutSquare',
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
          h('polyline', {"points":"4.974731450043691 15.000000000481123 1.974731450043691 12.000000000481123 4.974731450043691 9.000000000481123"}),
          h('line', {"x1":"12.974731450043691","y1":"12.000000000481123","x2":"1.974731450043691","y2":"12.000000000481123"}),
          h('path', {"d":"M1.974731450043691,6.056394887018541v-3.056394886537419c0-.552284749832324.447715250171314-1,1-1h18c.552284749832324,0,1,.447715250167676,1,1v18c0,.552284749828686-.447715250167676,1-1,1H2.974731450043691c-.552284749828686,0-1-.447715250171314-1-1v-2.943605113462581"})
        ]
      );
  }
});

export default LogoutSquare;
export { LogoutSquare };
