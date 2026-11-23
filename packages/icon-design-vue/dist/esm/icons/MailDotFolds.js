import { defineComponent, h } from 'vue';

const MailDotFolds = defineComponent({
  name: 'MailDotFolds',
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
          h('path', {"d":"M15 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5L21 5C21.551 5 22 5.449 22 6L22 13"}),
          h('path', {"d":"M2.367 5.242L12 14L21.633 5.242"}),
          h('path', {"d":"M9.801 12L2.367 18.758"}),
          h('path', {"d":"M14.199 12L16.73 14.301"}),
          h('path', {"d":"M18 18C18 16.895 18.895 16 20 16C21.105 16 22 16.895 22 18C22 19.105 21.105 20 20 20C18.895 20 18 19.105 18 18Z"})
        ]
      );
  }
});

export default MailDotFolds;
export { MailDotFolds };
