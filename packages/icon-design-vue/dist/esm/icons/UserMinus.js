import { defineComponent, h } from 'vue';

const UserMinus = defineComponent({
  name: 'UserMinus',
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
          h('path', {"d":"M8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6C16 8.211 14.211 10 12 10C9.789 10 8 8.211 8 6Z"}),
          h('path', {"d":"M4 22L4 19C4 15.688 6.688 13 10 13L14 13C16.34 13 18.367 14.34 19.355 16.297"}),
          h('path', {"d":"M21 20L15 20"})
        ]
      );
  }
});

export default UserMinus;
export { UserMinus };
