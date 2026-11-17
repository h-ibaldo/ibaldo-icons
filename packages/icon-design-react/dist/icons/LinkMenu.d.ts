import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenu: ForwardRefExoticComponent<LinkMenuProps & RefAttributes<SVGSVGElement>>;

export default LinkMenu;
export { LinkMenu };
