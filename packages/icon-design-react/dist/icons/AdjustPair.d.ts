import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustPairProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdjustPair: ForwardRefExoticComponent<AdjustPairProps & RefAttributes<SVGSVGElement>>;

export default AdjustPair;
export { AdjustPair };
