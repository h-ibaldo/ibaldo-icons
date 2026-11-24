import type { DefineComponent } from 'vue';

export interface SidebarArrowLeftRowsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SidebarArrowLeftRows: DefineComponent<SidebarArrowLeftRowsProps>;

export default SidebarArrowLeftRows;
export { SidebarArrowLeftRows };
