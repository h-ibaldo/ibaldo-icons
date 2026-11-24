import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusSquareCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusSquareCompact: ForwardRefExoticComponent<MinusSquareCompactProps & RefAttributes<SVGSVGElement>>;

export default MinusSquareCompact;
export { MinusSquareCompact };
