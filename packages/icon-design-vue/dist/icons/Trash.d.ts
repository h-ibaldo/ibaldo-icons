import type { DefineComponent } from 'vue';

export interface TrashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Trash: DefineComponent<TrashProps>;

export default Trash;
export { Trash };
