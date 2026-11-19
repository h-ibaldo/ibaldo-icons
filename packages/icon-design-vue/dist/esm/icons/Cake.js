import { defineComponent, h } from 'vue';

const Cake = defineComponent({
  name: 'Cake',
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
          h('path', {"d":"M4 22L4 14.402C4 13.301 4.895 12.402 6 12.402L18 12.402C19.105 12.402 20 13.301 20 14.402L20 22"}),
          h('path', {"d":"M12 2L9.996 5.34C9.402 6.199 9.426 7.348 10.051 8.184C11.027 9.48 12.973 9.48 13.949 8.184C14.574 7.348 14.598 6.199 14.004 5.34Z"}),
          h('path', {"d":"M12 10L12 12.402"}),
          h('path', {"d":"M2 22L22 22"}),
          h('path', {"d":"M4 16.07L4.891 16.664C5.563 17.113 6.438 17.113 7.109 16.664L7.891 16.145C8.563 15.695 9.438 15.695 10.109 16.145L10.891 16.664C11.563 17.113 12.438 17.113 13.109 16.664L13.891 16.145C14.563 15.695 15.438 15.695 16.109 16.145L16.891 16.664C17.563 17.113 18.438 17.113 19.109 16.664L20 16.07"})
        ]
      );
  }
});

export default Cake;
export { Cake };
