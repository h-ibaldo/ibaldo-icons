import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserSlidersTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserSlidersTwo: ForwardRefExoticComponent<BrowserSlidersTwoProps & RefAttributes<SVGSVGElement>>;

export default BrowserSlidersTwo;
export { BrowserSlidersTwo };
