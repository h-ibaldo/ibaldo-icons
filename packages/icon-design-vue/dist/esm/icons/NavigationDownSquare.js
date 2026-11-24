import { defineComponent, h } from 'vue';

const NavigationDownSquare = defineComponent({
  name: 'NavigationDownSquare',
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
          h('path', {"d":"M6.977 9.656L11.066 16.469C11.488 17.176 12.512 17.176 12.934 16.469L17.023 9.656C17.547 8.785 16.703 7.738 15.746 8.059L12.344 9.191C12.121 9.266 11.879 9.266 11.656 9.191L8.254 8.059C7.293 7.738 6.453 8.785 6.977 9.656Z"}),
          h('path', {"d":"M22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19Z"})
        ]
      );
  }
});

export default NavigationDownSquare;
export { NavigationDownSquare };
