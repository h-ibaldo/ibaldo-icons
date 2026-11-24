import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLightbulbCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLightbulbCenter: ForwardRefExoticComponent<WindowLightbulbCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowLightbulbCenter;
export { WindowLightbulbCenter };
