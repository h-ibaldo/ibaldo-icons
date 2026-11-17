import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserSearchPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserSearchPlain: ForwardRefExoticComponent<BrowserSearchPlainProps & RefAttributes<SVGSVGElement>>;

export default BrowserSearchPlain;
export { BrowserSearchPlain };
