import { defineComponent, h } from 'vue';

const RecordRing = defineComponent({
  name: 'RecordRing',
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
          h('path', {"d":"M16 12C16 8.133 12.867 5 9 5C5.133 5 2 8.133 2 12C2 15.867 5.133 19 9 19C12.867 19 16 15.867 16 12Z"}),
          h('path', {"d":"M19.941 19C21.238 16.98 22 14.578 22 12C22 9.422 21.238 7.023 19.941 5"})
        ]
      );
  }
});

export default RecordRing;
export { RecordRing };
