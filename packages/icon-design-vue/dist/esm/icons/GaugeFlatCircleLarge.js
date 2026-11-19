import { defineComponent, h } from 'vue';

const GaugeFlatCircleLarge = defineComponent({
  name: 'GaugeFlatCircleLarge',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M13 12C13 11.445 12.551 11 12 11C11.449 11 11 11.445 11 12C11 12.555 11.449 13 12 13C12.551 13 13 12.555 13 12Z"}),
          h('path', {"d":"M16.5 7.5L12 12"}),
          h('path', {"d":"M13 5.078C12.672 5.031 12.34 5 12 5C8.133 5 5 8.133 5 12C5 13.961 5.809 15.73 7.105 17L16.895 17C18.191 15.73 19 13.961 19 12C19 11.66 18.969 11.328 18.922 11"})
        ]
      );
  }
});

export default GaugeFlatCircleLarge;
export { GaugeFlatCircleLarge };
