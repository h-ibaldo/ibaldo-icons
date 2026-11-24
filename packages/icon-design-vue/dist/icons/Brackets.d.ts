import type { DefineComponent } from 'vue';

export interface BracketsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Brackets: DefineComponent<BracketsProps>;

export default Brackets;
export { Brackets };
