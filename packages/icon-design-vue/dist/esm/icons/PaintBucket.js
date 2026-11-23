import { defineComponent, h } from 'vue';

const PaintBucket = defineComponent({
  name: 'PaintBucket',
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
          h('path', {"d":"M9 2L18 11"}),
          h('path', {"d":"M4 12C8 8 11 13 16 9"}),
          h('path', {"d":"M19 14L16.668 16.914C15.719 18.102 15.813 19.813 16.891 20.891C18.055 22.055 19.945 22.055 21.109 20.891C22.188 19.813 22.281 18.102 21.332 16.914Z"}),
          h('path', {"d":"M17.5 10.5L11.414 16.586C10.633 17.367 9.367 17.367 8.586 16.586L3.414 11.414C2.633 10.633 2.633 9.367 3.414 8.586L9.5 2.5"}),
          h('path', {"d":"M9 7L3 3"})
        ]
      );
  }
});

export default PaintBucket;
export { PaintBucket };
