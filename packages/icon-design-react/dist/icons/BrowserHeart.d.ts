import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserHeart: ForwardRefExoticComponent<BrowserHeartProps & RefAttributes<SVGSVGElement>>;

export default BrowserHeart;
export { BrowserHeart };
