import { defineComponent, h } from 'vue';

const PointerShineLarge = defineComponent({
  name: 'PointerShineLarge',
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
          h('path', {"d":"M9.23 8.051L21.363 12.094C22.117 12.348 22.23 13.367 21.547 13.777L16.691 16.691L13.777 21.547C13.367 22.23 12.344 22.117 12.094 21.363L8.051 9.23C7.805 8.5 8.5 7.809 9.23 8.051Z"}),
          h('path', {"d":"M9 2L9 3"}),
          h('path', {"d":"M2 9L3 9"}),
          h('path', {"d":"M4.051 4.051L4.758 4.758"}),
          h('path', {"d":"M4.051 13.949L4.758 13.242"}),
          h('path', {"d":"M13.242 4.758L13.949 4.051"})
        ]
      );
  }
});

export default PointerShineLarge;
export { PointerShineLarge };
