import { defineComponent, h } from 'vue';

const UploadDotted = defineComponent({
  name: 'UploadDotted',
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
          h('polyline', {"points":"6.974731450254694 6.999999999336069 11.974731451375192 2.000000000462023 16.974731450254694 7.000000001585249"}),
          h('line', {"x1":"11.974731448995954","y1":"9.000000000462023","x2":"11.974731451375192","y2":"2.000000000462023"}),
          h('line', {"x1":"11.974731448635794","y1":"13.010000000462242","x2":"11.974731448635794","y2":"13.000000000462023"}),
          h('line', {"x1":"11.974731448275634","y1":"17.010000000462242","x2":"11.974731448275634","y2":"17.000000000462023"}),
          h('path', {"d":"M1.974731450032778,19.000000000462023v1.000000000000909c0,1.104569499659192.895430500331713,2,2,2h16c1.104569499661011,0,2-.895430500340808,2-2v-1.000000000000909"})
        ]
      );
  }
});

export default UploadDotted;
export { UploadDotted };
