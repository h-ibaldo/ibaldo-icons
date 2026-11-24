import { defineComponent, h } from 'vue';

const NavigationRightSquare = defineComponent({
  name: 'NavigationRightSquare',
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
          h('path', {"d":"M9.656 6.977L16.469 11.066C17.176 11.488 17.176 12.512 16.469 12.934L9.656 17.023C8.785 17.547 7.738 16.703 8.059 15.746L9.191 12.344C9.266 12.121 9.266 11.879 9.191 11.656L8.059 8.254C7.738 7.293 8.785 6.453 9.656 6.977Z"}),
          h('path', {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z"})
        ]
      );
  }
});

export default NavigationRightSquare;
export { NavigationRightSquare };
