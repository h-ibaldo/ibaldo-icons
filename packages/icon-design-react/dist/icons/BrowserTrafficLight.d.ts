import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserTrafficLightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserTrafficLight: ForwardRefExoticComponent<BrowserTrafficLightProps & RefAttributes<SVGSVGElement>>;

export default BrowserTrafficLight;
export { BrowserTrafficLight };
