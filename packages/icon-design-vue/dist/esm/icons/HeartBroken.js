import { defineComponent, h } from 'vue';

const HeartBroken = defineComponent({
  name: 'HeartBroken',
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
          h('path', {"d":"M20.727 5.848C18.723 3.508 15.152 3.371 12.977 5.547L12.012 6.512L12.012 6.539L11.988 6.512L11.023 5.547C8.848 3.371 5.277 3.508 3.273 5.848C1.887 7.461 1.605 9.75 2.559 11.652C4.512 15.414 11.988 20.512 11.988 20.512L12.012 20.473L12.012 20.512C12.012 20.512 19.488 15.414 21.441 11.652C22.395 9.75 22.113 7.461 20.727 5.848Z"}),
          h('path', {"d":"M12.012 6.539L10 10L15 11L12 15"})
        ]
      );
  }
});

export default HeartBroken;
export { HeartBroken };
