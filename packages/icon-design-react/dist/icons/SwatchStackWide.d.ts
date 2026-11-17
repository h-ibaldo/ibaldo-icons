import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwatchStackWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwatchStackWide: ForwardRefExoticComponent<SwatchStackWideProps & RefAttributes<SVGSVGElement>>;

export default SwatchStackWide;
export { SwatchStackWide };
