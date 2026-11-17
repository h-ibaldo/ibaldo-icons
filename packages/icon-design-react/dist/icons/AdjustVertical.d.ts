import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdjustVertical: ForwardRefExoticComponent<AdjustVerticalProps & RefAttributes<SVGSVGElement>>;

export default AdjustVertical;
export { AdjustVertical };
