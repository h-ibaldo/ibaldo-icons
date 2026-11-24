import { defineComponent, h } from 'vue';

const Eye = defineComponent({
  name: 'Eye',
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
          h('circle', {"cx":"12.025268548975873","cy":"11.997565476121054","r":"4"}),
          h('path', {"d":"M12.025268548795793,18.997565476121054c4.00000000018008,0,8.00000000072032-3,10.00000000072032-6.999999999101419"}),
          h('path', {"d":"M12.025268549516113,4.997565476121054c3.99999999945976,0,8.000000000708496,3.000000000003638,10.000000000708496,6.999999999105057"}),
          h('path', {"d":"M12.025268551255067,18.997565475895499c-4.000000002279194,0-8.000000000849468-2.99999999963984-10.000000001030457-6.999999998653948"}),
          h('path', {"d":"M12.025268549916291,4.997565475895499c-4.000000000940418,0-8.000000000589353,3.000000000363798-10.000000000400178,6.999999999552529"})
        ]
      );
  }
});

export default Eye;
export { Eye };
