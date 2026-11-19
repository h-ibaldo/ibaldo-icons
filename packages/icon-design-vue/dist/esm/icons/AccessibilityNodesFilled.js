import { defineComponent, h } from 'vue';

const AccessibilityNodesFilled = defineComponent({
  name: 'AccessibilityNodesFilled',
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
          h('circle', {"cx":"12.025268549329667","cy":"3.997565476096497","r":"2"}),
          h('line', {"x1":"9.025268549329667","y1":"13.997565476048294","x2":"15.025268548970416","y2":"13.997565476048294"}),
          h('line', {"x1":"15.025268548970416","y1":"8.997565476096497","x2":"9.025268549329667","y2":"8.997565476096497"}),
          h('circle', {"cx":"9.025268548970416","cy":"20.997565476096952","r":".9999999999784"}),
          h('circle', {"cx":"4.025268548947679","cy":"12.997565476096952","r":".999999999977035"}),
          h('polyline', {"points":"9.025268548970416 20.997565476121054 9.025268548970416 13.997565476096497 9.025268548970416 8.997565476096497 4.025268548970416 12.997565476121054"}),
          h('circle', {"cx":"15.025268548969962","cy":"20.997565476120144","r":"1.000000000000682"}),
          h('circle', {"cx":"20.025268548969962","cy":"12.997565476120144","r":"1.000000000000682"}),
          h('polyline', {"points":"15.025268548970416 20.997565476121054 15.025268549279645 13.997565476255659 15.025268549059547 8.997565476255659 20.025268548970416 12.997565476121054"})
        ]
      );
  }
});

export default AccessibilityNodesFilled;
export { AccessibilityNodesFilled };
