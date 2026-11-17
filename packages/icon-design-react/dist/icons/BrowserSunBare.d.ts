import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserSunBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserSunBare: ForwardRefExoticComponent<BrowserSunBareProps & RefAttributes<SVGSVGElement>>;

export default BrowserSunBare;
export { BrowserSunBare };
