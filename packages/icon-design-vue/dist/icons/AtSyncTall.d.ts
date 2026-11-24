import type { DefineComponent } from 'vue';

export interface AtSyncTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtSyncTall: DefineComponent<AtSyncTallProps>;

export default AtSyncTall;
export { AtSyncTall };
