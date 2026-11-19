import { defineComponent, h } from 'vue';

const AnchorCircleBarbed = defineComponent({
  name: 'AnchorCircleBarbed',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M16 13L18 12C18 15.313 15.313 18 12 18C8.688 18 6 15.313 6 12L8 13"}),
          h('path', {"d":"M13.5 7.5C13.5 8.328 12.828 9 12 9C11.172 9 10.5 8.328 10.5 7.5C10.5 6.672 11.172 6 12 6C12.828 6 13.5 6.672 13.5 7.5Z"}),
          h('path', {"d":"M12 9L12 18"})
        ]
      );
  }
});

export default AnchorCircleBarbed;
export { AnchorCircleBarbed };
