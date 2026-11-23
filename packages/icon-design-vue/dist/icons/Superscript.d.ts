import type { DefineComponent } from 'vue';

export interface SuperscriptProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Superscript: DefineComponent<SuperscriptProps>;

export default Superscript;
export { Superscript };
