import type { DefineComponent } from 'vue';

export interface TrashBanDetachedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashBanDetached: DefineComponent<TrashBanDetachedProps>;

export default TrashBanDetached;
export { TrashBanDetached };
