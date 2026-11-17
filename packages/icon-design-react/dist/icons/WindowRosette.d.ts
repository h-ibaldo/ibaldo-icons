import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowRosetteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowRosette: ForwardRefExoticComponent<WindowRosetteProps & RefAttributes<SVGSVGElement>>;

export default WindowRosette;
export { WindowRosette };
