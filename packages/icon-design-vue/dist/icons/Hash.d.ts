import type { DefineComponent } from 'vue';

export interface HashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Hash: DefineComponent<HashProps>;

export default Hash;
export { Hash };
