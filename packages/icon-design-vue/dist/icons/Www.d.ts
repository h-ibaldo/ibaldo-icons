import type { DefineComponent } from 'vue';

export interface WwwProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Www: DefineComponent<WwwProps>;

export default Www;
export { Www };
