import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuPanelChevronLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuPanelChevronLeft: ForwardRefExoticComponent<MenuPanelChevronLeftProps & RefAttributes<SVGSVGElement>>;

export default MenuPanelChevronLeft;
export { MenuPanelChevronLeft };
