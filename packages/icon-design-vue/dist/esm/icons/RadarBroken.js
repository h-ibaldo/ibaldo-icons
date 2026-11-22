import { defineComponent, h } from 'vue';

const RadarBroken = defineComponent({
  name: 'RadarBroken',
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
          h('path', {"d":"M10.586 10.586C11.367 9.805 12.633 9.805 13.414 10.586C14.195 11.367 14.195 12.633 13.414 13.414C12.633 14.195 11.367 14.195 10.586 13.414C9.805 12.633 9.805 11.367 10.586 10.586Z"}),
          h('path', {"d":"M13.414 10.586L19.07 4.93"}),
          h('path', {"d":"M17.93 11.07C17.977 11.375 18 11.684 18 12C18 15.246 15.422 17.891 12.203 17.996"}),
          h('path', {"d":"M6.895 15.152C6.328 14.234 6 13.156 6 12C6 8.688 8.688 6 12 6C13.656 6 15.156 6.672 16.242 7.758"}),
          h('path', {"d":"M21.117 7.883C21.684 9.141 22 10.531 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 11.195 2.094 10.41 2.277 9.66C2.305 9.535 2.336 9.414 2.371 9.293"}),
          h('path', {"d":"M6.219 3.84C6.344 3.75 6.477 3.66 6.609 3.578C8.164 2.578 10.016 2 12 2C14.762 2 17.262 3.121 19.07 4.93"})
        ]
      );
  }
});

export default RadarBroken;
export { RadarBroken };
