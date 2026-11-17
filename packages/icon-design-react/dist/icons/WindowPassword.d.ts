import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPasswordProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPassword: ForwardRefExoticComponent<WindowPasswordProps & RefAttributes<SVGSVGElement>>;

export default WindowPassword;
export { WindowPassword };
