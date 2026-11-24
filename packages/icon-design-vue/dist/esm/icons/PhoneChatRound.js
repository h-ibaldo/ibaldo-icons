import { defineComponent, h } from 'vue';

const PhoneChatRound = defineComponent({
  name: 'PhoneChatRound',
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
          h('path', {"d":"M7.113 18.973L5.035 16.895C3.824 15.684 2.914 14.207 2.371 12.582C1.848 11.016 2.039 9.301 2.887 7.883L3.434 6.973C3.797 6.367 4.445 6 5.148 6L5.414 6C6.086 6 6.707 6.336 7.078 6.891L8.52 9.055C9.188 10.055 8.828 11.414 7.75 11.949L6.484 12.582L6.641 12.895C7.609 14.828 9.18 16.398 11.113 17.367L11.426 17.523L12.059 16.258C12.594 15.18 13.953 14.82 14.953 15.488L17.117 16.93C17.672 17.301 18.008 17.922 18.008 18.594L18.008 18.859C18.008 19.563 17.641 20.211 17.035 20.574L16.125 21.121C14.707 21.969 12.992 22.16 11.426 21.637C9.801 21.094 8.324 20.184 7.113 18.973Z"}),
          h('path', {"d":"M13 2L20 2C21.105 2 22 2.895 22 4L22 7C22 8.105 21.105 9 20 9L18 9L14 12L14 9L13 9C11.895 9 11 8.105 11 7L11 4C11 2.895 11.895 2 13 2Z"})
        ]
      );
  }
});

export default PhoneChatRound;
export { PhoneChatRound };
