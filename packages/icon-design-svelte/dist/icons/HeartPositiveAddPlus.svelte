<script>
  /** @type {string} */
  export let color = 'currentColor';
  /** @type {number|string} */
  export let size = 24;
  /** @type {number|string} */
  export let strokeWidth = 1.5;
  /** @type {string} */
  let className = '';
  export { className as class };
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon-design {className}"
  {...$$restProps}
>
  <line x1="15.974731449499814" y1="6.489038477862778" x2="15.974731449499814" y2="11.489038477862778" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="18.474731449499814" y1="8.989038477862778" x2="13.474731449499814" y2="8.989038477862778" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.671850343720507,5.254007134540188c-2.210321312780252-2.757404904444229-6.177117596280368-2.975537580190576-8.697118894220694-.70582559027207-2.520001297940325-2.269711989918505-6.486797581439532-2.051579314172159-8.697118894219784.70582559027207-1.936616121070074,2.415954078426694-1.564336691249991,5.958797007827343.625098325320323,8.148246805761119l7.364911400809433,7.364961122959357c.390524837780504.39052747430469,1.023693498400462.39052747430469,1.414218336180056,0l7.364911400810342-7.364961122959357c2.189435016570314-2.189449797933776,2.561714446389487-5.732292727334425.625098325320323-8.148246805761119Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
