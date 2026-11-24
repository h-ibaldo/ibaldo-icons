import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserFlowerPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserFlowerPointed: ForwardRefExoticComponent<BrowserFlowerPointedProps & RefAttributes<SVGSVGElement>>;

export default BrowserFlowerPointed;
export { BrowserFlowerPointed };
