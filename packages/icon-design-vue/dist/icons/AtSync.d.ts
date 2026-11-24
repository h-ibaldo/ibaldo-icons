import type { DefineComponent } from 'vue';

export interface AtSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtSync: DefineComponent<AtSyncProps>;

export default AtSync;
export { AtSync };
