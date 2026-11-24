import { defineComponent, h } from 'vue';

const ArrowDownFromPointCircle = defineComponent({
  name: 'ArrowDownFromPointCircle',
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
          h('path', {"d":"M15 19L12 22L9 19"}),
          h('path', {"d":"M12 13L12 22"}),
          h('path', {"d":"M12 9L12 9"}),
          h('path', {"d":"M19 19.117C20.848 17.305 22 14.793 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 14.793 3.152 17.305 5 19.117"})
        ]
      );
  }
});

export default ArrowDownFromPointCircle;
export { ArrowDownFromPointCircle };
