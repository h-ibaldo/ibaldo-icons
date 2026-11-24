import { defineComponent, h } from 'vue';

const TouchSwipeUpTwoFingersGap = defineComponent({
  name: 'TouchSwipeUpTwoFingersGap',
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
          h('polyline', {"points":"20.974731438316667 4.99877930375078 17.974731438316667 1.99877930375078 14.974731438316667 4.99877930375078"}),
          h('line', {"x1":"17.974731438316667","y1":"9.99877930375078","x2":"17.974731438316667","y2":"1.99877930375078"}),
          h('circle', {"cx":"17.974731438316667","cy":"17.99877930375078","r":"4"}),
          h('polyline', {"points":"8.974731438316667 4.998779303212359 5.974731438316667 1.998779303212359 2.974731438316667 4.998779303212359"}),
          h('line', {"x1":"5.974731438316667","y1":"9.998779303212359","x2":"5.974731438316667","y2":"1.998779303212359"}),
          h('circle', {"cx":"5.974731438316667","cy":"17.998779303212359","r":"4"})
        ]
      );
  }
});

export default TouchSwipeUpTwoFingersGap;
export { TouchSwipeUpTwoFingersGap };
