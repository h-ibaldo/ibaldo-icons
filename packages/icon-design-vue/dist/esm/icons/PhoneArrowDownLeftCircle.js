import { defineComponent, h } from 'vue';

const PhoneArrowDownLeftCircle = defineComponent({
  name: 'PhoneArrowDownLeftCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M8.477 16.961L7.039 15.523C6.203 14.688 5.574 13.668 5.199 12.547C4.84 11.465 4.969 10.277 5.559 9.301L5.898 8.73C6.172 8.277 6.66 8 7.191 8C7.723 8 8.219 8.266 8.516 8.711L9.059 9.523C9.727 10.527 9.367 11.887 8.289 12.422L8.043 12.547C8.781 14.023 9.977 15.219 11.453 15.957L11.578 15.711C12.113 14.633 13.473 14.273 14.477 14.941L15.289 15.484C15.734 15.781 16 16.277 16 16.809C16 17.34 15.723 17.828 15.27 18.102L14.699 18.441C13.723 19.031 12.535 19.16 11.453 18.801C10.332 18.426 9.313 17.797 8.477 16.961Z"}),
          h('path', {"d":"M17 7L13 11"}),
          h('path', {"d":"M13 7L13 11L17.184 11"})
        ]
      );
  }
});

export default PhoneArrowDownLeftCircle;
export { PhoneArrowDownLeftCircle };
