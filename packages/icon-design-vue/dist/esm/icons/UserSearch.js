import { defineComponent, h } from 'vue';

const UserSearch = defineComponent({
  name: 'UserSearch',
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
          h('path', {"d":"M2 22L2 19C2 15.688 4.688 13 8 13L12 13C12.648 13 13.277 13.102 13.863 13.293"}),
          h('path', {"d":"M16 17C16 18.656 17.344 20 19 20C20.656 20 22 18.656 22 17C22 15.344 20.656 14 19 14C17.344 14 16 15.344 16 17Z"}),
          h('path', {"d":"M16.879 19.121L14 22"})
        ]
      );
  }
});

export default UserSearch;
export { UserSearch };
