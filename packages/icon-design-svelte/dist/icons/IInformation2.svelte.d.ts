import { SvelteComponent } from 'svelte';

export interface IInformation2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IInformation2 extends SvelteComponent<IInformation2Props> {}
