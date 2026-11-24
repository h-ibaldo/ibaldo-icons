import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WrenchDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WrenchDouble: ForwardRefExoticComponent<WrenchDoubleProps & RefAttributes<SVGSVGElement>>;

export default WrenchDouble;
export { WrenchDouble };
