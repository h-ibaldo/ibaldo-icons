import { SvelteComponent } from 'svelte';

export interface IInformation1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IInformation1 extends SvelteComponent<IInformation1Props> {}
