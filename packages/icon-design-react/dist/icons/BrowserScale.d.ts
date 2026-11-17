import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserScaleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserScale: ForwardRefExoticComponent<BrowserScaleProps & RefAttributes<SVGSVGElement>>;

export default BrowserScale;
export { BrowserScale };
