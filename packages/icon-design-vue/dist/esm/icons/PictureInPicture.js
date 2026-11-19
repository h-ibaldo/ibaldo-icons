import { defineComponent, h } from 'vue';

const PictureInPicture = defineComponent({
  name: 'PictureInPicture',
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
          h('rect', {"x":"1.999999993601705","y":"2.998779299956368","width":"20","height":"18","rx":".999999999993015","ry":".999999999993015","transform":"translate(23.99999998666507 23.997558600451129) rotate(-180)"}),
          h('rect', {"x":"9.999999994692189","y":"10.998779300069145","width":"7.999999998810381","height":"5.999999998679414","transform":"translate(27.999999987672759 27.997558599339754) rotate(-180)"})
        ]
      );
  }
});

export default PictureInPicture;
export { PictureInPicture };
