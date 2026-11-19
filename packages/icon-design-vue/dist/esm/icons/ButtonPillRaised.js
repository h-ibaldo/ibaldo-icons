import { defineComponent, h } from 'vue';

const ButtonPillRaised = defineComponent({
  name: 'ButtonPillRaised',
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
          h('rect', {"x":"1.999999995185789","y":"6.999999996999868","width":"20.000000000000057","height":"10.000000007293337","rx":"4.999995005743859","ry":"4.999995005743859"}),
          h('path', {"d":"M3.379455557203983,8.567504883259971c-.23431396484375.427429199219659-.37945556640625.910705566407159-.37945556640625,1.432495117188409,0,1.656860351561591,1.3431396484375,3,3,3h12c1.6568603515625,0,3-1.343139648438409,3-3,0-.52178955078125-.1451416015625-1.00506591796875-.37945556640625-1.432495117188409"})
        ]
      );
  }
});

export default ButtonPillRaised;
export { ButtonPillRaised };
