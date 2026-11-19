import type { DefineComponent } from 'vue';

export interface TrashEmptyNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashEmptyNotch: DefineComponent<TrashEmptyNotchProps>;

export default TrashEmptyNotch;
export { TrashEmptyNotch };
