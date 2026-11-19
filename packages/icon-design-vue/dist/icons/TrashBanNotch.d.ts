import type { DefineComponent } from 'vue';

export interface TrashBanNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashBanNotch: DefineComponent<TrashBanNotchProps>;

export default TrashBanNotch;
export { TrashBanNotch };
