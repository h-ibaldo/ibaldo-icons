import type { DefineComponent } from 'vue';

export interface MobileBagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileBag: DefineComponent<MobileBagProps>;

export default MobileBag;
export { MobileBag };
