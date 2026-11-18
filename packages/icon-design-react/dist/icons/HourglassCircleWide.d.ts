import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassCircleWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassCircleWide: ForwardRefExoticComponent<HourglassCircleWideProps & RefAttributes<SVGSVGElement>>;

export default HourglassCircleWide;
export { HourglassCircleWide };
