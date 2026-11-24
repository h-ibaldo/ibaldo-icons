import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusCircleLarge: ForwardRefExoticComponent<MinusCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default MinusCircleLarge;
export { MinusCircleLarge };
