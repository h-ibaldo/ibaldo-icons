import { defineComponent, h } from 'vue';

const MailDot = defineComponent({
  name: 'MailDot',
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
          h('path', {"d":"M15 19L3 19C2.449 19 2 18.551 2 18L2 6C2 5.449 2.449 5 3 5L21 5C21.551 5 22 5.449 22 6L22 15"}),
          h('path', {"d":"M2.332 5.266L11.375 12.5C11.742 12.793 12.258 12.793 12.625 12.5L21.668 5.266"}),
          h('path', {"d":"M18 19C18 17.895 18.895 17 20 17C21.105 17 22 17.895 22 19C22 20.105 21.105 21 20 21C18.895 21 18 20.105 18 19Z"})
        ]
      );
  }
});

export default MailDot;
export { MailDot };
