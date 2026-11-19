import type { DefineComponent } from 'vue';

export interface TrashBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashBan: DefineComponent<TrashBanProps>;

export default TrashBan;
export { TrashBan };
