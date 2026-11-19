import type { DefineComponent } from 'vue';

export interface ShelfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Shelf: DefineComponent<ShelfProps>;

export default Shelf;
export { Shelf };
