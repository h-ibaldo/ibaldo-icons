import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserFlowerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserFlower: ForwardRefExoticComponent<BrowserFlowerProps & RefAttributes<SVGSVGElement>>;

export default BrowserFlower;
export { BrowserFlower };
