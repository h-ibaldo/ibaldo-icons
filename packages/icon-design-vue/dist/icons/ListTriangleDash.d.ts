import type { DefineComponent } from 'vue';

export interface ListTriangleDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ListTriangleDash: DefineComponent<ListTriangleDashProps>;

export default ListTriangleDash;
export { ListTriangleDash };
