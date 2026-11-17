import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustPairVerticalBlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdjustPairVerticalBlock: ForwardRefExoticComponent<AdjustPairVerticalBlockProps & RefAttributes<SVGSVGElement>>;

export default AdjustPairVerticalBlock;
export { AdjustPairVerticalBlock };
