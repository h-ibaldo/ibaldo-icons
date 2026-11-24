import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusSquareCompactLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusSquareCompactLarge: ForwardRefExoticComponent<MinusSquareCompactLargeProps & RefAttributes<SVGSVGElement>>;

export default MinusSquareCompactLarge;
export { MinusSquareCompactLarge };
