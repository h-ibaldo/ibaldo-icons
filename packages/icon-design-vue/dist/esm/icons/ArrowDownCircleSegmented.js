import { defineComponent, h } from 'vue';

const ArrowDownCircleSegmented = defineComponent({
  name: 'ArrowDownCircleSegmented',
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
          h('path', {"d":"M15 13L12 16L9 13"}),
          h('path', {"d":"M12 8L12 16"}),
          h('path', {"d":"M5 4.863C3.148 6.68 2 9.203 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 9.203 20.852 6.68 19 4.863"}),
          h('path', {"d":"M16 2.84C14.773 2.301 13.422 2 12 2C10.578 2 9.227 2.301 8 2.84"})
        ]
      );
  }
});

export default ArrowDownCircleSegmented;
export { ArrowDownCircleSegmented };
