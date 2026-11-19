import type { DefineComponent } from 'vue';

export interface CrownJewelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrownJewel: DefineComponent<CrownJewelProps>;

export default CrownJewel;
export { CrownJewel };
