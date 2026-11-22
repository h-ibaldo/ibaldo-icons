import { defineComponent, h } from 'vue';

const UserSquareWide = defineComponent({
  name: 'UserSquareWide',
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
          h('path', {"d":"M8.5 9.5C8.5 7.566 10.066 6 12 6C13.934 6 15.5 7.566 15.5 9.5C15.5 11.434 13.934 13 12 13C10.066 13 8.5 11.434 8.5 9.5Z"}),
          h('path', {"d":"M19 22L19 20C19 16.133 15.867 13 12 13C8.133 13 5 16.133 5 20L5 22"}),
          h('path', {"d":"M5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2Z"})
        ]
      );
  }
});

export default UserSquareWide;
export { UserSquareWide };
