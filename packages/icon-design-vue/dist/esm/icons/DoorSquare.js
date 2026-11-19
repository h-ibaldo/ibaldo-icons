import { defineComponent, h } from 'vue';

const DoorSquare = defineComponent({
  name: 'DoorSquare',
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
          h('line', {"x1":"7.974731450043691","y1":"8.000000000481123","x2":"7.974731450043691","y2":"10.000000000481123"}),
          h('rect', {"x":"1.974731450043691","y":"2.000000000479304","width":"20","height":"20","rx":"3","ry":"3"}),
          h('polyline', {"points":"3.283752446137441 21.476379395012373 11.974731450043691 17.000000000481123 11.974731450043691 2.000000000481123"})
        ]
      );
  }
});

export default DoorSquare;
export { DoorSquare };
