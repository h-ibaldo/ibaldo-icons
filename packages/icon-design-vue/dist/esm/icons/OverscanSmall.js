import { defineComponent, h } from 'vue';

const OverscanSmall = defineComponent({
  name: 'OverscanSmall',
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
          h('rect', {"x":"1.974731449505271","y":"3.000000000479304","width":"20","height":"18.000000000000909","rx":"3","ry":"3"}),
          h('polyline', {"points":"12.974731449505271 8.000000000480213 11.974731450083709 7.000000000298314 10.974731449505271 8.000000000480213"}),
          h('polyline', {"points":"12.974731449505271 16.000000000480213 11.974731450083709 17.000000000662112 10.974731449505271 16.000000000480213"}),
          h('polyline', {"points":"16.974731449323372 13.000000000480213 17.974731449505271 12.00000000106229 16.974731449323372 11.000000000480213"}),
          h('polyline', {"points":"6.974731449683532 13.000000000480213 5.974731449505271 12.00000000106229 6.974731449683532 11.000000000480213"})
        ]
      );
  }
});

export default OverscanSmall;
export { OverscanSmall };
