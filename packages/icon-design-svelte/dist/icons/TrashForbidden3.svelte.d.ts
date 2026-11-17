import { SvelteComponent } from 'svelte';

export interface TrashForbidden3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashForbidden3 extends SvelteComponent<TrashForbidden3Props> {}
