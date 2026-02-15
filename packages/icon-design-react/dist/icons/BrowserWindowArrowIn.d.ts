import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowArrowIn: ForwardRefExoticComponent<BrowserWindowArrowInProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowArrowIn;
export { BrowserWindowArrowIn };
