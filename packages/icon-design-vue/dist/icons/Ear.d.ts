import type { DefineComponent } from 'vue';

export interface EarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Ear: DefineComponent<EarProps>;

export default Ear;
export { Ear };
