import type { DefineComponent } from 'vue';

export interface ReplaceProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Replace: DefineComponent<ReplaceProps>;

export default Replace;
export { Replace };
