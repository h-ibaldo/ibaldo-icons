import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowTrafficLightPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowTrafficLightPlain: ForwardRefExoticComponent<WindowTrafficLightPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowTrafficLightPlain;
export { WindowTrafficLightPlain };
