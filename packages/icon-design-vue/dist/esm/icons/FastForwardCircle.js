import { defineComponent, h } from 'vue';

const FastForwardCircle = defineComponent({
  name: 'FastForwardCircle',
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
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"}),
          h('path', {"d":"M12.547 8.961L12.547 15.039C12.547 15.434 12.988 15.672 13.32 15.453L17.879 12.414C18.172 12.215 18.172 11.785 17.879 11.586L13.32 8.547C12.988 8.328 12.547 8.566 12.547 8.961Z"}),
          h('path', {"d":"M7 8.961L7 15.039C7 15.434 7.441 15.672 7.77 15.453L12.328 12.414C12.621 12.215 12.621 11.785 12.328 11.586L7.77 8.547C7.441 8.328 7 8.566 7 8.961Z"})
        ]
      );
  }
});

export default FastForwardCircle;
export { FastForwardCircle };
