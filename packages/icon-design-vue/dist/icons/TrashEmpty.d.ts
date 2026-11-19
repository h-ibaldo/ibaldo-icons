import type { DefineComponent } from 'vue';

export interface TrashEmptyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrashEmpty: DefineComponent<TrashEmptyProps>;

export default TrashEmpty;
export { TrashEmpty };
