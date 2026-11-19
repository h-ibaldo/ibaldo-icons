import { defineComponent, h } from 'vue';

const ListSearchSmallDash = defineComponent({
  name: 'ListSearchSmallDash',
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
          h('path', {"d":"M14 16.922C14 14.715 15.789 12.922 18 12.922C20.211 12.922 22 14.715 22 16.922C22 19.133 20.211 20.922 18 20.922C15.789 20.922 14 19.133 14 16.922Z"}),
          h('path', {"d":"M13 22L15.215 19.785"}),
          h('path', {"d":"M8 4L14.5 4"}),
          h('path', {"d":"M8 9L14.5 9"}),
          h('path', {"d":"M3 4L4 4"}),
          h('path', {"d":"M3 9L4 9"}),
          h('path', {"d":"M8 14L10 14"}),
          h('path', {"d":"M3 14L4 14"})
        ]
      );
  }
});

export default ListSearchSmallDash;
export { ListSearchSmallDash };
