import { defineComponent, h } from 'vue';

const HourglassSyncRound = defineComponent({
  name: 'HourglassSyncRound',
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
          h('path', {"d":"M14.109 10.594L12 12L9.891 10.594C9.336 10.223 9 9.598 9 8.93L9 7L15 7L15 8.93C15 9.598 14.668 10.223 14.109 10.594Z"}),
          h('path', {"d":"M9.891 13.406L12 12L14.109 13.406C14.664 13.777 15 14.402 15 15.07L15 17L9 17L9 15.07C9 14.402 9.332 13.777 9.891 13.406Z"}),
          h('path', {"d":"M3 4L3 7L6 7"}),
          h('path', {"d":"M21.25 20L21.25 17L18.25 17"}),
          h('path', {"d":"M12 2C8.301 2 5.078 4.016 3.348 7"}),
          h('path', {"d":"M2.051 11C2.02 11.328 2 11.66 2 12C2 17.523 6.477 22 12 22"}),
          h('path', {"d":"M12 22C15.699 22 18.922 19.984 20.652 17"}),
          h('path', {"d":"M21.949 13C21.98 12.672 22 12.34 22 12C22 6.477 17.523 2 12 2"})
        ]
      );
  }
});

export default HourglassSyncRound;
export { HourglassSyncRound };
