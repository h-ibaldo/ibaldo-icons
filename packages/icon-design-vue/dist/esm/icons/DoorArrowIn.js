import { defineComponent, h } from 'vue';

const DoorArrowIn = defineComponent({
  name: 'DoorArrowIn',
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
          h('line', {"x1":"15.974731450043691","y1":"10.000000000481123","x2":"15.974731450043691","y2":"14.000000000481123"}),
          h('polygon', {"points":"21.974731450043691 19.000000000481123 11.974731450043691 22.000000000481123 11.974731450043691 2.000000000481123 21.974731450043691 5.000000000481123 21.974731450043691 19.000000000481123"}),
          h('polyline', {"points":"4.974731450043691 7.000000000479304 4.974731450043691 4.000000000481123 8.974731450043691 4.000000000481123"}),
          h('polyline', {"points":"8.974731450043691 20.000000000481123 4.974731450043691 20.000000000481123 4.974731450043691 17.000000000479304"}),
          h('polyline', {"points":"6.974731450043691 10.000000000479304 8.974731450043691 12.000000000479304 6.974731450043691 14.000000000481123"}),
          h('line', {"x1":"1.974731450043691","y1":"12.000000000479304","x2":"8.974731450043691","y2":"12.000000000479304"})
        ]
      );
  }
});

export default DoorArrowIn;
export { DoorArrowIn };
