import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WrenchWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WrenchWide: ForwardRefExoticComponent<WrenchWideProps & RefAttributes<SVGSVGElement>>;

export default WrenchWide;
export { WrenchWide };
