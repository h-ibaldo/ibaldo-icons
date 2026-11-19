import { defineComponent, h } from 'vue';

const PointerCardStraight2 = defineComponent({
  name: 'PointerCardStraight2',
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
          h('path', {"d":"M2 6.547L2 20.738C2 21.609 3.031 22.063 3.672 21.48L7.5 18L12.707 18C13.578 18 14.035 16.957 13.438 16.32L3.73 5.867C3.113 5.199 2 5.637 2 6.547Z"}),
          h('path', {"d":"M21 11L13 11C12.445 11 12 10.555 12 10L12 3C12 2.445 12.445 2 13 2L21 2C21.555 2 22 2.445 22 3L22 10C22 10.555 21.555 11 21 11Z"}),
          h('path', {"d":"M15 5L19 5"}),
          h('path', {"d":"M15 8L19 8"})
        ]
      );
  }
});

export default PointerCardStraight2;
export { PointerCardStraight2 };
