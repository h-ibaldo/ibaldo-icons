import { defineComponent, h } from 'vue';

const Logout = defineComponent({
  name: 'Logout',
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
          h('polyline', {"points":"18.974731450043691 9.000000000481123 21.974731450047329 12.000000000481123 18.974731450043691 15.000000000481123"}),
          h('line', {"x1":"8.974731450043691","y1":"12.000000000481123","x2":"21.974731450047329","y2":"12.000000000481123"}),
          h('path', {"d":"M14.974731450043691,17.000000000481123v4c0,.552284749828686-.447715250166766,1-1,1H2.974731450043691c-.552284749828686,0-1-.447715250171314-1-1V3.000000000481123c0-.552284749832324.447715250171314-1,1-1h11c.552284749833234,0,1,.447715250167676,1,1v4"})
        ]
      );
  }
});

export default Logout;
export { Logout };
