import { defineComponent, h } from 'vue';

const CrownDots = defineComponent({
  name: 'CrownDots',
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
          h('path', {"d":"M4 18L3 10L6.297 12.637C7.215 13.371 8.559 13.16 9.211 12.184L12 8L14.789 12.184C15.441 13.16 16.785 13.371 17.703 12.637L21 10L20 18Z"}),
          h('path', {"d":"M4 22L20 22"}),
          h('path', {"d":"M4 5C4 5.551 3.555 6 3 6C2.445 6 2 5.551 2 5C2 4.449 2.445 4 3 4C3.555 4 4 4.449 4 5Z"}),
          h('path', {"d":"M22 5C22 5.551 21.555 6 21 6C20.445 6 20 5.551 20 5C20 4.449 20.445 4 21 4C21.555 4 22 4.449 22 5Z"}),
          h('path', {"d":"M13 3C13 3.551 12.555 4 12 4C11.445 4 11 3.551 11 3C11 2.449 11.445 2 12 2C12.555 2 13 2.449 13 3Z"})
        ]
      );
  }
});

export default CrownDots;
export { CrownDots };
