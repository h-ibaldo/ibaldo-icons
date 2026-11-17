import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowLightbulbBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowLightbulbBare: ForwardRefExoticComponent<WindowLightbulbBareProps & RefAttributes<SVGSVGElement>>;

export default WindowLightbulbBare;
export { WindowLightbulbBare };
