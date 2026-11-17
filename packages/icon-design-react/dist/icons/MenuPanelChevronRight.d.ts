import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuPanelChevronRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuPanelChevronRight: ForwardRefExoticComponent<MenuPanelChevronRightProps & RefAttributes<SVGSVGElement>>;

export default MenuPanelChevronRight;
export { MenuPanelChevronRight };
