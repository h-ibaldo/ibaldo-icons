import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustPairVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdjustPairVertical: ForwardRefExoticComponent<AdjustPairVerticalProps & RefAttributes<SVGSVGElement>>;

export default AdjustPairVertical;
export { AdjustPairVertical };
