import type { DefineComponent } from 'vue';

export interface TrashArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashArrowUp: DefineComponent<TrashArrowUpProps>;

export default TrashArrowUp;
export { TrashArrowUp };
