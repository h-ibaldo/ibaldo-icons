import { defineComponent, h } from 'vue';

const Brush = defineComponent({
  name: 'Brush',
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
          h('path', {"d":"M12 9L15 12"}),
          h('path', {"d":"M4 16C4 13.789 5.789 12 8 12C10.211 12 12 13.789 12 16C12 18.762 9.762 21 7 21L2 21C3.281 19.719 4 17.984 4 16.172Z"}),
          h('path', {"d":"M8.898 12.102L18 3C18.828 2.172 20.172 2.172 21 3C21.828 3.828 21.828 5.172 21 6L11.898 15.102"})
        ]
      );
  }
});

export default Brush;
export { Brush };
