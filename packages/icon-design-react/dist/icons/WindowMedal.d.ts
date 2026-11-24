import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMedalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMedal: ForwardRefExoticComponent<WindowMedalProps & RefAttributes<SVGSVGElement>>;

export default WindowMedal;
export { WindowMedal };
