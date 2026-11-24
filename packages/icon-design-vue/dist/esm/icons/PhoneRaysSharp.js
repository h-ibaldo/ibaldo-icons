import { defineComponent, h } from 'vue';

const PhoneRaysSharp = defineComponent({
  name: 'PhoneRaysSharp',
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
          h('path', {"d":"M6.418 10.297L6.457 10.398C7.621 13.742 10.266 16.359 13.617 17.492"}),
          h('path', {"d":"M13.703 14.793L15.414 13.895L19.914 16.594L19.254 19.887C19.102 20.648 18.609 21.293 17.914 21.641C17.457 21.867 16.941 21.953 16.438 21.879L14.969 21.668C12.316 21.289 9.813 20.207 7.723 18.535C6.855 17.844 6.07 17.055 5.379 16.191C3.703 14.098 2.621 11.598 2.242 8.941L2.031 7.477C1.961 6.969 2.043 6.453 2.273 5.996C2.617 5.305 3.266 4.813 4.023 4.66L7.32 4L10.02 8.496L9.203 9.398"}),
          h('path', {"d":"M17 7L20 4"}),
          h('path', {"d":"M13 6L13 2"}),
          h('path', {"d":"M22 11L18 11"})
        ]
      );
  }
});

export default PhoneRaysSharp;
export { PhoneRaysSharp };
