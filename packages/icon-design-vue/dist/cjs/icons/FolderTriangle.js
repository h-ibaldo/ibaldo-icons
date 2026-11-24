'use strict';

const { defineComponent, h } = require('vue');

const FolderTriangle = defineComponent({
  name: 'FolderTriangle',
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
          h('path', {"d":"M7.99999997868963,20.999999999998181H3.99999997868963c-1.104569499661011,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500338989-2,2-2h3.929630589661429c.66870593549902,0,1.293168239899387.334201833509724,1.6640998992807.890598573469106l.812536329358409,1.218802853061788c.370931659390408.556396739959382.995393963790775.890598573469106,1.664099899291614.890598573469106h7.929633174773699c1.104569483930391,0,1.999999977751941.895430475789908,2,1.999999959721208l.000000100706529,7.000000040278792"}),
          h('path', {"d":"M12.796254418519311,21.999999999998181h6.701428860285887c1.165941712928543,0,1.886111450889075-1.27195686199957,1.286239388768081-2.27174363280028l-3.35071442932167-5.584524052268534c-.58260509333013-.971008489450469-1.989873683562109-.971008489301312-2.572478777141441,0l-3.350714431160668,5.584524051928383c-.59987206247024.999786770791616.120297675450274,2.271743633140431,1.286239388569811,2.271743633140431Z"})
        ]
      );
  }
});

module.exports = FolderTriangle;
module.exports.FolderTriangle = FolderTriangle;
module.exports.default = FolderTriangle;
