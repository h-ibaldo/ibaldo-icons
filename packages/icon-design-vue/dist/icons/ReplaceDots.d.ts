import type { DefineComponent } from 'vue';

export interface ReplaceDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReplaceDots: DefineComponent<ReplaceDotsProps>;

export default ReplaceDots;
export { ReplaceDots };
