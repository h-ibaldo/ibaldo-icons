import { defineComponent, h } from 'vue';

const ButtonCursor = defineComponent({
  name: 'ButtonCursor',
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
          h('path', {"d":"M17.256937576248674,14.882150614690545l-2.363074345048517.820498820657122,1.96463249945009,3.601826250481281-3.087266183862084,1.683963372312974-1.96463249945009-3.601826250479462-1.969217603440484,1.542569513911076c-.339967119809444.266310291882291-.837379453179892.024098569473608-.837379453099857-.407756515145593l.000000001560693-9.00261059114473c.000000000069122-.409976415863639.453701334070502-.657449870672281.798394881130662-.435488116799206l7.569073871960427,4.874024843654297c.363088351357874.233806893012115.297431657039851.7831471758509-.11053116920084.924798672552242Z"}),
          h('path', {"d":"M17.999999990797733,11.000000000448381h2c1.104569499661011,0,2-.89543050033717,2-2v-3c0-1.10456949966192-.895430500338989-2-2-2H3.999999990797733c-1.104569499661011,0-2,.89543050033808-2,2v3c0,1.10456949966283.895430500338989,2,2,2h2"})
        ]
      );
  }
});

export default ButtonCursor;
export { ButtonCursor };
