import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusCircleCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusCircleCompact: ForwardRefExoticComponent<MinusCircleCompactProps & RefAttributes<SVGSVGElement>>;

export default MinusCircleCompact;
export { MinusCircleCompact };
