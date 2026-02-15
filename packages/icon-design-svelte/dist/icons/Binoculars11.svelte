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
  <circle cx="17.999988017749274" cy="15.936828613188482" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="5.999988017749274" cy="15.936828613188482" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.999988017749274,8.936828613188482v-1.751708984369543c0-1.794006347659888-1.454345703128638-3.248291015630457-3.248291015628638-3.248291015630457-1.587890625,0-2.943115234371362,1.148010253909888-3.2041015625,2.714294433599207l-1.351684570319776,8.110107421871362" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.804065166190412,14.761230468659051l-1.351684570319776-8.110107421871362c-.260986328121362-1.566284179689319-1.6162109375-2.714294433599207-3.2041015625-2.714294433599207-1.7939453125,0-3.248291015621362,1.454284667970569-3.248291015621362,3.248291015630457v1.751708984369543" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.999988017749274" y1="15.936828613008402" x2="13.999988017749274" y2="15.936828613008402" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="9.999988017749274" y1="8.936828613008402" x2="13.999988017749274" y2="8.936828613008402" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
