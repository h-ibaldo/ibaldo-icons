import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuPanelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuPanel: ForwardRefExoticComponent<MenuPanelProps & RefAttributes<SVGSVGElement>>;

export default MenuPanel;
export { MenuPanel };
