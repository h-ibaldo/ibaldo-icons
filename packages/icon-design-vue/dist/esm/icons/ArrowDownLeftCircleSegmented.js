import { defineComponent, h } from 'vue';

const ArrowDownLeftCircleSegmented = defineComponent({
  name: 'ArrowDownLeftCircleSegmented',
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
          h('path', {"d":"M9 10L9 15L14 15"}),
          h('path', {"d":"M15 9L9 15"}),
          h('path', {"d":"M21.996 11.906C21.996 11.938 22 11.969 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C12.031 2 12.063 2.004 12.098 2.004"}),
          h('path', {"d":"M15.648 2.695C18.234 3.711 20.289 5.766 21.305 8.352"})
        ]
      );
  }
});

export default ArrowDownLeftCircleSegmented;
export { ArrowDownLeftCircleSegmented };
