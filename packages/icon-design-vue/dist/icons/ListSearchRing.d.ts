import type { DefineComponent } from 'vue';

export interface ListSearchRingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListSearchRing: DefineComponent<ListSearchRingProps>;

export default ListSearchRing;
export { ListSearchRing };
