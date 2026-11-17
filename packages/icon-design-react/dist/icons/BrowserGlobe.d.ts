import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserGlobeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserGlobe: ForwardRefExoticComponent<BrowserGlobeProps & RefAttributes<SVGSVGElement>>;

export default BrowserGlobe;
export { BrowserGlobe };
