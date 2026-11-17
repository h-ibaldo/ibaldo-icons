import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserMegaphoneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserMegaphone: ForwardRefExoticComponent<BrowserMegaphoneProps & RefAttributes<SVGSVGElement>>;

export default BrowserMegaphone;
export { BrowserMegaphone };
