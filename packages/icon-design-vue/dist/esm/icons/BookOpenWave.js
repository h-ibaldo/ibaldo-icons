import { defineComponent, h } from 'vue';

const BookOpenWave = defineComponent({
  name: 'BookOpenWave',
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
          h('path', {"d":"M11.41 4.543C8.746 2.414 4.902 2.488 2.324 4.766C2.113 4.953 2 5.23 2 5.516L2 15.32C2 16.094 2.832 16.559 3.508 16.176C5.98 14.766 9.129 14.973 11.41 16.797C11.75 17.066 12.25 17.066 12.59 16.797C14.871 14.973 18.016 14.766 20.492 16.176C21.168 16.559 22 16.094 22 15.32L22 5.516C22 5.23 21.887 4.953 21.676 4.766C19.098 2.488 15.254 2.414 12.59 4.543C12.25 4.816 11.75 4.816 11.41 4.543Z"}),
          h('path', {"d":"M3.504 20.176C5.984 18.766 9.129 18.973 11.41 20.793C11.75 21.07 12.25 21.07 12.59 20.793C14.871 18.973 18.02 18.766 20.496 20.176"}),
          h('path', {"d":"M11.867 5.07L11.867 16.254"})
        ]
      );
  }
});

export default BookOpenWave;
export { BookOpenWave };
