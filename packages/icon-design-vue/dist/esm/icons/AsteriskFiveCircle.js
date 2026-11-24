import { defineComponent, h } from 'vue';

const AsteriskFiveCircle = defineComponent({
  name: 'AsteriskFiveCircle',
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
          h('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z"}),
          h('path', {"d":"M12 11.91L12 6.992"}),
          h('path', {"d":"M12 11.91L9.07 16.008"}),
          h('path', {"d":"M12 11.91L7.262 10.438"}),
          h('path', {"d":"M12 11.91L14.93 16.008"}),
          h('path', {"d":"M12 11.91L16.738 10.438"})
        ]
      );
  }
});

export default AsteriskFiveCircle;
export { AsteriskFiveCircle };
