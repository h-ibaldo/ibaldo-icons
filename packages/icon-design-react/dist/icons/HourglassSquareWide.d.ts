import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSquareWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSquareWide: ForwardRefExoticComponent<HourglassSquareWideProps & RefAttributes<SVGSVGElement>>;

export default HourglassSquareWide;
export { HourglassSquareWide };
