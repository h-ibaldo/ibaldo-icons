import type { DefineComponent } from 'vue';

export interface HierarchyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Hierarchy: DefineComponent<HierarchyProps>;

export default Hierarchy;
export { Hierarchy };
