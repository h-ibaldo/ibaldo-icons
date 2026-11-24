import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustBlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdjustBlock: ForwardRefExoticComponent<AdjustBlockProps & RefAttributes<SVGSVGElement>>;

export default AdjustBlock;
export { AdjustBlock };
