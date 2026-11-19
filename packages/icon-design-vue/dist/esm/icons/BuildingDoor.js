import { defineComponent, h } from 'vue';

const BuildingDoor = defineComponent({
  name: 'BuildingDoor',
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
          h('path', {"d":"M20 3L15 3L15 2L9 2L9 3L4 3"}),
          h('path', {"d":"M5 3L5 22L19 22L19 3"}),
          h('path', {"d":"M10 8L9 8L9 7L10 7Z"}),
          h('path', {"d":"M15 8L14 8L14 7L15 7Z"}),
          h('path', {"d":"M10 13L9 13L9 12L10 12Z"}),
          h('path', {"d":"M15 13L14 13L14 12L15 12Z"}),
          h('path', {"d":"M10 18L9 18L9 17L10 17Z"}),
          h('path', {"d":"M14 22L14 17L15 17L15 22"})
        ]
      );
  }
});

export default BuildingDoor;
export { BuildingDoor };
