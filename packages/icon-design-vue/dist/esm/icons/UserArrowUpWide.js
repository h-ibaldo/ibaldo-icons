import { defineComponent, h } from 'vue';

const UserArrowUpWide = defineComponent({
  name: 'UserArrowUpWide',
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
          h('path', {"d":"M12 22L12 16"}),
          h('path', {"d":"M15 19L12 16L9 19"}),
          h('path', {"d":"M7 7C7 4.238 9.238 2 12 2C14.762 2 17 4.238 17 7C17 9.762 14.762 12 12 12C9.238 12 7 9.762 7 7Z"}),
          h('path', {"d":"M3 22L3 21C3 16.031 7.031 12 12 12C16.969 12 21 16.031 21 21L21 22"})
        ]
      );
  }
});

export default UserArrowUpWide;
export { UserArrowUpWide };
