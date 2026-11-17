import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowRestrictionsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowRestrictions: ForwardRefExoticComponent<BrowserWindowRestrictionsProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowRestrictions;
export { BrowserWindowRestrictions };
