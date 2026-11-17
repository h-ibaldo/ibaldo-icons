import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkMenuBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkMenuBar: ForwardRefExoticComponent<LinkMenuBarProps & RefAttributes<SVGSVGElement>>;

export default LinkMenuBar;
export { LinkMenuBar };
