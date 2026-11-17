import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SidebarArrowLeftRowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SidebarArrowLeftRows: ForwardRefExoticComponent<SidebarArrowLeftRowsProps & RefAttributes<SVGSVGElement>>;

export default SidebarArrowLeftRows;
export { SidebarArrowLeftRows };
