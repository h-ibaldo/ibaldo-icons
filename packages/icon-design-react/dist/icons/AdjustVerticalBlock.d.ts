import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustVerticalBlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdjustVerticalBlock: ForwardRefExoticComponent<AdjustVerticalBlockProps & RefAttributes<SVGSVGElement>>;

export default AdjustVerticalBlock;
export { AdjustVerticalBlock };
