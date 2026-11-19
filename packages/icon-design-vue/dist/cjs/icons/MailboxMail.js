'use strict';

const { defineComponent, h } = require('vue');

const MailboxMail = defineComponent({
  name: 'MailboxMail',
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
          h('polyline', {"points":"17.945392090279711 9.999999999998181 17.945392090459791 3.999999999998181 19.945392090279711 4.000000000087311 19.945392090279711 4.999999999998181 17.945392090279711 4.999999999998181"}),
          h('line', {"x1":"8.945392090279711","y1":"4.999999999998181","x2":"14.945392090279711","y2":"4.999999999998181"}),
          h('polyline', {"points":"13.945392090279711 11.999999999998181 7.945392090279711 15.999999999998181 1.945392090279711 11.999999999998181"}),
          h('path', {"d":"M13.945392090279711,19.999999999998181H2.945392090279711c-.552284749829596,0-1-.447715250169495-1-1v-7c0-.552284749830505.447715250170404-1,1-1h11"}),
          h('path', {"d":"M13.945392090279711,19.999999999998181v-10.000004999999874c0-2.761420987730162-2.238574012269964-4.999995000000126-4.999995000000126-4.999995000000126h-.000009999999747c-2.761420987730162,0-4.999995000000126,2.238574012269964-4.999995000000126,4.999995000000126v1.000004999999874"}),
          h('path', {"d":"M13.945392090279711,19.999999999998181h8v-10c0-.712219238279431-.15380859375-1.386779785159888-.422119140629547-2"})
        ]
      );
  }
});

module.exports = MailboxMail;
module.exports.MailboxMail = MailboxMail;
module.exports.default = MailboxMail;
