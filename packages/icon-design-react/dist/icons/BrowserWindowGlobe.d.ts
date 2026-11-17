import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowGlobeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowGlobe: ForwardRefExoticComponent<BrowserWindowGlobeProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowGlobe;
export { BrowserWindowGlobe };
