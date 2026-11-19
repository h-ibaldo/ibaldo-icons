import { defineComponent, h } from 'vue';

const TabArrowRightXSharp = defineComponent({
  name: 'TabArrowRightXSharp',
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
          h('polyline', {"points":"13.05053710449647 21.997565477288845 2.050537104505565 21.997565477288845 2.050537104505565 1.997565477288845 10.050537104505565 1.997565477288845 13.050537104505565 5.997565477288845 22.050537104505565 5.997565477288845 22.050537104505565 12.997565477288845"}),
          h('polyline', {"points":"15.050537104505565 1.997565477288845 22.050537104505565 1.997565477288845 22.050537104505565 5.997565477288845"}),
          h('line', {"x1":"17.050537104505565","y1":"16.997565477288845","x2":"22.050537104505565","y2":"21.997565477288845"}),
          h('line', {"x1":"22.050537104505565","y1":"16.997565477288845","x2":"17.050537104505565","y2":"21.997565477288845"}),
          h('line', {"x1":"7.050537104505565","y1":"12.997565477288845","x2":"14.050537104505565","y2":"12.997565477288845"}),
          h('polyline', {"points":"11.050537104505565 9.997565477288845 14.050537104505565 12.997565477288845 11.050537104505565 15.997565477288845"})
        ]
      );
  }
});

export default TabArrowRightXSharp;
export { TabArrowRightXSharp };
