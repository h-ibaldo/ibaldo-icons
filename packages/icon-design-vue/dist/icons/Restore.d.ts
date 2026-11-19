import type { DefineComponent } from 'vue';

export interface RestoreProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Restore: DefineComponent<RestoreProps>;

export default Restore;
export { Restore };
