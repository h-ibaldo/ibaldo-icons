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
  <path d="M5.067167566010539,22.056394884595647h-1c-.552284749830505,0-1-.447715250169495-1-1v-7c0-.552284749830505.447715250169495-1,1-1h14c.552284749829596,0,1,.447715250169495,1,1v7.000000002422894c0,.552284749830505-.447715250170404,1-1,1h-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.067167566010539,13.056394884595647v-6.000004999998055c0-2.761420987731981-2.238574012270874-4.999995000001945-4.999994999991031-4.999995000001945h-.000009999999747c-2.761420987739257,0-4.999995000009221,2.238574012269964-4.999995000009221,4.999995000001945v6.000004999998055" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="11.067167566010539" y1="19.06639488701876" x2="11.067167566010539" y2="19.056394887018541" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.067167566010539,16.056394887018541c-1.861755371090112,0-3.412475585940228,1.2777099609375-3.858581542970569,3,.446105957030341,1.72222900390625,1.996826171880457,3,3.858581542970569,3,1.861755371099207,0,3.412475585939319-1.27777099609375,3.858581542969659-3-.446105957030341-1.7222900390625-1.996826171870453-3-3.858581542969659-3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
