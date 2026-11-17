import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLightbulbProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLightbulb: ForwardRefExoticComponent<WindowLightbulbProps & RefAttributes<SVGSVGElement>>;

export default WindowLightbulb;
export { WindowLightbulb };
