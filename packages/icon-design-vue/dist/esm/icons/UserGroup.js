import { defineComponent, h } from 'vue';

const UserGroup = defineComponent({
  name: 'UserGroup',
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
          h('path', {"d":"M9 6C9 4.344 10.344 3 12 3C13.656 3 15 4.344 15 6C15 7.656 13.656 9 12 9C10.344 9 9 7.656 9 6Z"}),
          h('path', {"d":"M8 21L8 16C8 13.789 9.789 12 12 12C14.211 12 16 13.789 16 16L16 21"}),
          h('path', {"d":"M18 13C20.211 13 22 14.789 22 17L22 20"}),
          h('path', {"d":"M6 13C3.789 13 2 14.789 2 17L2 20"}),
          h('path', {"d":"M17.664 4.02C17.773 4.008 17.887 4 18 4C19.656 4 21 5.344 21 7C21 8.656 19.656 10 18 10C17.539 10 17.105 9.895 16.715 9.711"}),
          h('path', {"d":"M6.336 4.02C6.227 4.008 6.113 4 6 4C4.344 4 3 5.344 3 7C3 8.656 4.344 10 6 10C6.461 10 6.895 9.895 7.285 9.711"})
        ]
      );
  }
});

export default UserGroup;
export { UserGroup };
