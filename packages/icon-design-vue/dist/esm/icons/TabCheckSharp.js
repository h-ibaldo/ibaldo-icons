import { defineComponent, h } from 'vue';

const TabCheckSharp = defineComponent({
  name: 'TabCheckSharp',
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
          h('polyline', {"points":"12.050537104500108 21.997565477288845 2.050537104500108 21.997565477288845 2.050537104500108 1.997565477288845 10.050537104500108 1.997565477288845 13.050537104500108 5.997565477288845 22.050537104500108 5.997565477288845 22.050537104500108 12.997565477288845"}),
          h('polyline', {"points":"15.050537104500108 1.997565477288845 22.050537104500108 1.997565477288845 22.050537104500108 5.997565477288845"}),
          h('polyline', {"points":"22.050537104500108 16.997565477285207 18.050537104500108 21.997565477285207 15.050537104500108 18.997565477285207"})
        ]
      );
  }
});

export default TabCheckSharp;
export { TabCheckSharp };
