import { defineComponent, h } from 'vue';

const ListBulletsDotsRight = defineComponent({
  name: 'ListBulletsDotsRight',
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
          h('path', {"d":"M7 4L14 4"}),
          h('path', {"d":"M7 12L14 12"}),
          h('path', {"d":"M7 20L14 20"}),
          h('path', {"d":"M2 4L3 4"}),
          h('path', {"d":"M2 12L3 12"}),
          h('path', {"d":"M7 8L14 8"}),
          h('path', {"d":"M2 8L3 8"}),
          h('path', {"d":"M2 20L3 20"}),
          h('path', {"d":"M7 16L14 16"}),
          h('path', {"d":"M22 4L22 4"}),
          h('path', {"d":"M22 12L22 12"}),
          h('path', {"d":"M22 20L22 20"}),
          h('path', {"d":"M22 8L22 8"}),
          h('path', {"d":"M22 16L22 16"}),
          h('path', {"d":"M19 4L19 4"}),
          h('path', {"d":"M19 12L19 12"}),
          h('path', {"d":"M19 16L19 16"}),
          h('path', {"d":"M2 16L3 16"})
        ]
      );
  }
});

export default ListBulletsDotsRight;
export { ListBulletsDotsRight };
