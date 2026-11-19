import { defineComponent, h } from 'vue';

const NavigationUpRound = defineComponent({
  name: 'NavigationUpRound',
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
          h('path', {"d":"M13.82 4.07L20.945 16.898C21.926 18.664 20.074 20.648 18.246 19.797L13.16 17.422C12.426 17.078 11.574 17.078 10.84 17.422L5.754 19.797C3.926 20.648 2.074 18.664 3.055 16.898L10.18 4.07C10.973 2.641 13.027 2.641 13.82 4.07Z"})
        ]
      );
  }
});

export default NavigationUpRound;
export { NavigationUpRound };
