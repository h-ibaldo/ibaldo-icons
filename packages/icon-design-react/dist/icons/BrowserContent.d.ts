import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserContentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserContent: ForwardRefExoticComponent<BrowserContentProps & RefAttributes<SVGSVGElement>>;

export default BrowserContent;
export { BrowserContent };
