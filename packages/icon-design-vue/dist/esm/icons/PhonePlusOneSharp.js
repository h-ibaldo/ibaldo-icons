import { defineComponent, h } from 'vue';

const PhonePlusOneSharp = defineComponent({
  name: 'PhonePlusOneSharp',
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
          h('path', {"d":"M6.188 10.883L6.223 10.98C7.332 14.152 9.84 16.637 13.023 17.715"}),
          h('path', {"d":"M13.102 15.152L14.73 14.301L19 16.863L18.375 19.988C18.23 20.711 17.762 21.324 17.102 21.652C16.672 21.871 16.18 21.949 15.699 21.879L14.305 21.684C11.789 21.32 9.41 20.293 7.426 18.703C6.602 18.047 5.859 17.301 5.199 16.48C3.609 14.492 2.582 12.117 2.223 9.598L2.023 8.203C1.957 7.723 2.035 7.234 2.25 6.801C2.582 6.145 3.195 5.676 3.914 5.531L7.043 4.906L9.605 9.176L8.832 10.027"}),
          h('path', {"d":"M20 4L22 2L22 11"}),
          h('path', {"d":"M15 4L15 9"}),
          h('path', {"d":"M17.5 6.5L12.5 6.5"})
        ]
      );
  }
});

export default PhonePlusOneSharp;
export { PhonePlusOneSharp };
