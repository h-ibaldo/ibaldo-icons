import type { DefineComponent } from 'vue';

export interface TrashLidProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashLid: DefineComponent<TrashLidProps>;

export default TrashLid;
export { TrashLid };
