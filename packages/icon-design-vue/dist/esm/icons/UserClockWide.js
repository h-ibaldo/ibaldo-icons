import { defineComponent, h } from 'vue';

const UserClockWide = defineComponent({
  name: 'UserClockWide',
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
          h('path', {"d":"M6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6C14 8.211 12.211 10 10 10C7.789 10 6 8.211 6 6Z"}),
          h('path', {"d":"M21 17C21 19.762 18.762 22 16 22C13.238 22 11 19.762 11 17C11 14.238 13.238 12 16 12C18.762 12 21 14.238 21 17Z"}),
          h('path', {"d":"M16 15L16 17L18 17"}),
          h('path', {"d":"M3 22L3 17C3 13.133 6.133 10 10 10"})
        ]
      );
  }
});

export default UserClockWide;
export { UserClockWide };
