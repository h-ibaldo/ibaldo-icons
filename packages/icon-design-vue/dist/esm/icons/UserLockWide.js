import { defineComponent, h } from 'vue';

const UserLockWide = defineComponent({
  name: 'UserLockWide',
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
          h('path', {"d":"M22 16L14 16L14 22L22 22Z"}),
          h('path', {"d":"M18 11C16.344 11 15 12.344 15 14L15 16L21 16L21 14C21 12.344 19.656 11 18 11Z"}),
          h('path', {"d":"M4.5 6.5C4.5 4.016 6.516 2 9 2C11.484 2 13.5 4.016 13.5 6.5C13.5 8.984 11.484 11 9 11C6.516 11 4.5 8.984 4.5 6.5Z"}),
          h('path', {"d":"M2 22L2 18C2 14.133 5.133 11 9 11"}),
          h('path', {"d":"M12.438 11.902C11.422 11.328 10.25 11 9 11"})
        ]
      );
  }
});

export default UserLockWide;
export { UserLockWide };
