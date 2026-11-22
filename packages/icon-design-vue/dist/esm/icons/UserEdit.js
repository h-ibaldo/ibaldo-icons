import { defineComponent, h } from 'vue';

const UserEdit = defineComponent({
  name: 'UserEdit',
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
          h('path', {"d":"M21.379 11.621L21.375 11.621C20.547 10.793 19.207 10.793 18.379 11.621L11 19L11 22L14 22L21.379 14.621C22.207 13.793 22.207 12.449 21.379 11.621Z"}),
          h('path', {"d":"M16.879 13.121L19.879 16.121"}),
          h('path', {"d":"M6 6C6 3.789 7.789 2 10 2C12.211 2 14 3.789 14 6C14 8.211 12.211 10 10 10C7.789 10 6 8.211 6 6Z"}),
          h('path', {"d":"M2 22L2 19C2 15.688 4.688 13 8 13L12 13"})
        ]
      );
  }
});

export default UserEdit;
export { UserEdit };
