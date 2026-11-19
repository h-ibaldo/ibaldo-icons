import { defineComponent, h } from 'vue';

const ArrowUpLeftCircleSegmented = defineComponent({
  name: 'ArrowUpLeftCircleSegmented',
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
          h('path', {"d":"M9 14L9 9L14 9"}),
          h('path', {"d":"M15 15L9 9"}),
          h('path', {"d":"M21.996 12.094C21.996 12.063 22 12.031 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C12.031 22 12.063 21.996 12.098 21.996"}),
          h('path', {"d":"M15.648 21.305C18.234 20.289 20.289 18.234 21.305 15.648"})
        ]
      );
  }
});

export default ArrowUpLeftCircleSegmented;
export { ArrowUpLeftCircleSegmented };
