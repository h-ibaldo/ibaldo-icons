import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdjustProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Adjust: ForwardRefExoticComponent<AdjustProps & RefAttributes<SVGSVGElement>>;

export default Adjust;
export { Adjust };
