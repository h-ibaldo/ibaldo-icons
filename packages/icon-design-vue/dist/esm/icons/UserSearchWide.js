import { defineComponent, h } from 'vue';

const UserSearchWide = defineComponent({
  name: 'UserSearchWide',
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
          h('path', {"d":"M6 7C6 4.238 8.238 2 11 2C13.762 2 16 4.238 16 7C16 9.762 13.762 12 11 12C8.238 12 6 9.762 6 7Z"}),
          h('path', {"d":"M2 22L2 21C2 16.031 6.031 12 11 12C12.195 12 13.336 12.234 14.379 12.656"}),
          h('path', {"d":"M16 17C16 18.656 17.344 20 19 20C20.656 20 22 18.656 22 17C22 15.344 20.656 14 19 14C17.344 14 16 15.344 16 17Z"}),
          h('path', {"d":"M16.879 19.121L14 22"})
        ]
      );
  }
});

export default UserSearchWide;
export { UserSearchWide };
