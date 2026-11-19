import { defineComponent, h } from 'vue';

const SliderPointer = defineComponent({
  name: 'SliderPointer',
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
          h('polygon', {"points":"11.999999977098923 15.999996563434252 8.999999977098923 18.999996563434252 5.999999977098923 15.999996563434252 5.999999977098923 5.999996563434252 11.999999977098923 5.999996563434252 11.999999977098923 15.999996563434252"}),
          h('line', {"x1":"21.999999977098923","y1":"11.999996563434252","x2":"11.999999977098923","y2":"11.999996563434252"}),
          h('line', {"x1":"5.999999977098923","y1":"11.999996563434252","x2":"1.999999977098923","y2":"11.999996563434252"})
        ]
      );
  }
});

export default SliderPointer;
export { SliderPointer };
