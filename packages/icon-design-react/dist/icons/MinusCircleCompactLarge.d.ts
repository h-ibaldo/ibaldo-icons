import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusCircleCompactLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusCircleCompactLarge: ForwardRefExoticComponent<MinusCircleCompactLargeProps & RefAttributes<SVGSVGElement>>;

export default MinusCircleCompactLarge;
export { MinusCircleCompactLarge };
