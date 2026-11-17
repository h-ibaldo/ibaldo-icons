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
  <rect x="2.025268549509747" y="8.998782739598028" width="20" height="11" rx="4" ry="4"/>
  <path d="M18.469848627640204,9.043582544285528c-1.335693359380457-2.01861572265625-3.4267578125-3.4412841796875-5.829833984380457-3.921875l-.61474609375-.1229248046875-.61474609375.1229248046875c-2.403076171869543.4805908203125-4.494140625,1.90325927734375-5.829833984369543,3.921875"/>
  <polyline points="13.025268549509747 5.218997583348028 13.025268549509747 3.998782739598028 11.025268549509747 3.998782739598028 11.025268549509747 5.218997583348028"/>
  <rect x="7.025268549509747" y="13.998782739598028" width="2" height="1"/>
  <rect x="15.025268549509747" y="13.998782739598028" width="2" height="1"/>
</svg>
