import { defineComponent, h } from 'vue';

const CrownJewel = defineComponent({
  name: 'CrownJewel',
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
          h('path', {"d":"M4 17L3 6L6.07 10.297C6.945 11.523 8.813 11.379 9.484 10.027L12 5L14.516 10.027C15.188 11.379 17.055 11.523 17.93 10.297L21 6L20 17Z"}),
          h('path', {"d":"M4 21L20 21"}),
          h('path', {"d":"M4 6C4 6.551 3.555 7 3 7C2.445 7 2 6.551 2 6C2 5.449 2.445 5 3 5C3.555 5 4 5.449 4 6Z"}),
          h('path', {"d":"M22 6C22 6.551 21.555 7 21 7C20.445 7 20 6.551 20 6C20 5.449 20.445 5 21 5C21.555 5 22 5.449 22 6Z"}),
          h('path', {"d":"M13 4C13 4.551 12.555 5 12 5C11.445 5 11 4.551 11 4C11 3.449 11.445 3 12 3C12.555 3 13 3.449 13 4Z"})
        ]
      );
  }
});

export default CrownJewel;
export { CrownJewel };
