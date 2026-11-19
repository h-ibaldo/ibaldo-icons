import { defineComponent, h } from 'vue';

const EjectCircle = defineComponent({
  name: 'EjectCircle',
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
          h('path', {"d":"M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"}),
          h('path', {"d":"M8.934 12.5L15.066 12.5C15.465 12.5 15.703 12.055 15.48 11.723L12.414 7.125C12.219 6.828 11.781 6.828 11.582 7.125L8.52 11.723C8.297 12.055 8.535 12.5 8.934 12.5Z"}),
          h('path', {"d":"M15.5 16L8.5 16"})
        ]
      );
  }
});

export default EjectCircle;
export { EjectCircle };
