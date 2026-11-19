import { defineComponent, h } from 'vue';

const MedalCheckStrap = defineComponent({
  name: 'MedalCheckStrap',
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
          h('path', {"d":"M18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16C6 12.688 8.688 10 12 10C15.313 10 18 12.688 18 16Z"}),
          h('path', {"d":"M12 5.668L10 2L3 2L8.137 11.414"}),
          h('path', {"d":"M15.863 11.414L21 2L14 2L9.277 10.656"}),
          h('path', {"d":"M10 16L10.691 17.379C10.844 17.684 11.25 17.75 11.492 17.512L14 15"})
        ]
      );
  }
});

export default MedalCheckStrap;
export { MedalCheckStrap };
