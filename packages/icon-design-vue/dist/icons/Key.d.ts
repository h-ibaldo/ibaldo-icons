import type { DefineComponent } from 'vue';

export interface KeyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Key: DefineComponent<KeyProps>;

export default Key;
export { Key };
