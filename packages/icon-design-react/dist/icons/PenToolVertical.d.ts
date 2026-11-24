import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PenToolVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PenToolVertical: ForwardRefExoticComponent<PenToolVerticalProps & RefAttributes<SVGSVGElement>>;

export default PenToolVertical;
export { PenToolVertical };
