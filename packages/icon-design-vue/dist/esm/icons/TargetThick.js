import { defineComponent, h } from 'vue';

const TargetThick = defineComponent({
  name: 'TargetThick',
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
          h('path', {"d":"M6 12C6 8.688 8.688 6 12 6C15.313 6 18 8.688 18 12C18 15.313 15.313 18 12 18C8.688 18 6 15.313 6 12Z"}),
          h('path', {"d":"M5 12C5 8.133 8.133 5 12 5C15.867 5 19 8.133 19 12C19 15.867 15.867 19 12 19C8.133 19 5 15.867 5 12Z"}),
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12Z"})
        ]
      );
  }
});

export default TargetThick;
export { TargetThick };
