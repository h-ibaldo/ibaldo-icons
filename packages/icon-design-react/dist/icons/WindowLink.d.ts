import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLinkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLink: ForwardRefExoticComponent<WindowLinkProps & RefAttributes<SVGSVGElement>>;

export default WindowLink;
export { WindowLink };
