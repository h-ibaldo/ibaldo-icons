import { defineComponent, h } from 'vue';

const GaugeTrio = defineComponent({
  name: 'GaugeTrio',
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
          h('path', {"d":"M21 11C21 6.027 16.973 2 12 2C7.027 2 3 6.027 3 11"}),
          h('path', {"d":"M21 11L19 11"}),
          h('path', {"d":"M5 11L3 11"}),
          h('path', {"d":"M7.051 6.051L5.637 4.637"}),
          h('path', {"d":"M12 4L12 2"}),
          h('path', {"d":"M10 11C10 9.895 10.895 9 12 9C13.105 9 14 9.895 14 11C14 12.105 13.105 13 12 13C10.895 13 10 12.105 10 11Z"}),
          h('path', {"d":"M16.5 6.5L13.414 9.586"}),
          h('path', {"d":"M6 20L6 22"}),
          h('path', {"d":"M9.426 22C9.777 21.41 10 20.738 10 20C10 17.789 8.207 16 6 16C3.789 16 2 17.789 2 20C2 20.738 2.223 21.41 2.574 22Z"}),
          h('path', {"d":"M18 20L18 22"}),
          h('path', {"d":"M21.426 22C21.777 21.41 22 20.738 22 20C22 17.789 20.207 16 18 16C15.789 16 14 17.789 14 20C14 20.738 14.223 21.41 14.574 22Z"})
        ]
      );
  }
});

export default GaugeTrio;
export { GaugeTrio };
