import { defineComponent, h } from 'vue';

const GaugeTeardropDotsSquare = defineComponent({
  name: 'GaugeTeardropDotsSquare',
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
          h('path', {"d":"M18 22L6 22C3.789 22 2 20.211 2 18L2 6C2 3.789 3.789 2 6 2L18 2C20.211 2 22 3.789 22 6L22 18C22 20.211 20.211 22 18 22Z"}),
          h('path', {"d":"M16.242 7.758L10.574 10.023C9.707 10.371 9.09 11.156 8.957 12.082C8.711 13.809 10.191 15.289 11.918 15.043C12.844 14.91 13.629 14.293 13.977 13.422Z"}),
          h('path', {"d":"M12 19L12 19"}),
          h('path', {"d":"M12 5L12 5"}),
          h('path', {"d":"M19 12L19 12"}),
          h('path', {"d":"M5 12L5 12"}),
          h('path', {"d":"M16.949 16.949L16.949 16.949"}),
          h('path', {"d":"M7.051 7.051L7.051 7.051"}),
          h('path', {"d":"M7.051 16.949L7.051 16.949"})
        ]
      );
  }
});

export default GaugeTeardropDotsSquare;
export { GaugeTeardropDotsSquare };
