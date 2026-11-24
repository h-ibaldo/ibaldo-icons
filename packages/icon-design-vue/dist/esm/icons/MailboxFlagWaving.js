import { defineComponent, h } from 'vue';

const MailboxFlagWaving = defineComponent({
  name: 'MailboxFlagWaving',
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
          h('polyline', {"points":"15.945392090279711 11.999999999998181 15.945392090459791 1.999999999998181 21.94539209011964 2.000000000087311 20.945392090279711 4.999999999998181 21.945392090079622 7.999999999998181 15.945392090409769 7.999999999909051"}),
          h('path', {"d":"M6.445387587018614,7.000000000100727h.000008995269688c2.483615139834249,0,4.499995523969013,2.016380384134765,4.499995523969013,4.499995523969012v10.500004475928442H1.945392094430588v-10.500004507309427c0-2.48361512251461,2.016380370073416-4.499995492588027,4.499995492588027-4.499995492588027Z"}),
          h('line', {"x1":"12.945392090279711","y1":"6.999999999998181","x2":"6.445392090279711","y2":"6.999999999998181"}),
          h('path', {"d":"M10.945392090279711,21.999999999998181h11v-10.5c0-.171264648439319-.03173828125-.333679199220569-.050415039059772-.5"})
        ]
      );
  }
});

export default MailboxFlagWaving;
export { MailboxFlagWaving };
