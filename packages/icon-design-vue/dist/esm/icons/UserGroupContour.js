import { defineComponent, h } from 'vue';

const UserGroupContour = defineComponent({
  name: 'UserGroupContour',
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
          h('path', {"d":"M17 21L17 18C17 16.621 16.066 15.457 14.797 15.109C14.34 14.98 14 14.605 14 14.129L14 13.871C14 13.59 14.102 13.309 14.313 13.121C15.215 12.324 15.707 11.078 15.418 9.73C15.141 8.441 14.105 7.387 12.824 7.094C10.531 6.57 8.5 8.301 8.5 10.5C8.5 11.539 8.957 12.473 9.676 13.109C9.895 13.305 10 13.602 10 13.895L10 14.129C10 14.605 9.66 14.98 9.203 15.109C7.934 15.457 7 16.621 7 18L7 21"}),
          h('path', {"d":"M10.371 7.41C10.512 6.891 10.543 6.32 10.418 5.73C10.141 4.441 9.105 3.387 7.824 3.094C5.531 2.57 3.5 4.301 3.5 6.5C3.5 7.539 3.953 8.469 4.676 9.109C4.895 9.305 5 9.598 5 9.895L5 10.129C5 10.605 4.66 10.98 4.203 11.109C2.934 11.457 2 12.621 2 14L2 17"}),
          h('path', {"d":"M22 17L22 14C22 12.621 21.066 11.457 19.797 11.109C19.34 10.98 19 10.605 19 10.129L19 9.871C19 9.59 19.102 9.309 19.313 9.121C20.215 8.324 20.707 7.078 20.418 5.73C20.141 4.441 19.105 3.387 17.824 3.094C15.531 2.57 13.5 4.301 13.5 6.5C13.5 6.813 13.555 7.113 13.633 7.402"})
        ]
      );
  }
});

export default UserGroupContour;
export { UserGroupContour };
