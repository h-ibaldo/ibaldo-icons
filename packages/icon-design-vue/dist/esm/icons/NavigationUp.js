import { defineComponent, h } from 'vue';

const NavigationUp = defineComponent({
  name: 'NavigationUp',
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
          h('path', {"d":"M12.996 3.633L20.477 19.418C20.934 20.387 19.883 21.375 18.941 20.859L13.602 17.906C12.605 17.359 11.395 17.359 10.398 17.906L5.059 20.859C4.117 21.375 3.066 20.387 3.523 19.418L11.004 3.633C11.398 2.789 12.602 2.789 12.996 3.633Z"})
        ]
      );
  }
});

export default NavigationUp;
export { NavigationUp };
