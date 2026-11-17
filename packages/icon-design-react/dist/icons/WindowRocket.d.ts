import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowRocketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowRocket: ForwardRefExoticComponent<WindowRocketProps & RefAttributes<SVGSVGElement>>;

export default WindowRocket;
export { WindowRocket };
