import { defineComponent, h } from 'vue';

const NavigationUpSquare = defineComponent({
  name: 'NavigationUpSquare',
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
          h('path', {"d":"M17.023 14.344L12.934 7.531C12.512 6.824 11.488 6.824 11.066 7.531L6.977 14.344C6.453 15.215 7.297 16.262 8.254 15.941L11.656 14.809C11.879 14.734 12.121 14.734 12.344 14.809L15.746 15.941C16.707 16.262 17.547 15.215 17.023 14.344Z"}),
          h('path', {"d":"M2 5L2 19C2 20.656 3.344 22 5 22L19 22C20.656 22 22 20.656 22 19L22 5C22 3.344 20.656 2 19 2L5 2C3.344 2 2 3.344 2 5Z"})
        ]
      );
  }
});

export default NavigationUpSquare;
export { NavigationUpSquare };
