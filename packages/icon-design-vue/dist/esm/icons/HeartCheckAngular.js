import { defineComponent, h } from 'vue';

const HeartCheckAngular = defineComponent({
  name: 'HeartCheckAngular',
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
          h('path', {"d":"M20.859 11.949C22.348 10.008 22.227 7.227 20.449 5.449C18.516 3.516 15.383 3.516 13.449 5.449L11.949 6.949L10.449 5.449C8.516 3.516 5.383 3.516 3.449 5.449C1.516 7.383 1.516 10.516 3.449 12.449L11.949 20.949"}),
          h('path', {"d":"M15 18L17 20L21 16"})
        ]
      );
  }
});

export default HeartCheckAngular;
export { HeartCheckAngular };
