import type { DefineComponent } from 'vue';

export interface BellAlertFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellAlertFlat: DefineComponent<BellAlertFlatProps>;

export default BellAlertFlat;
export { BellAlertFlat };
