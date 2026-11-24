import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusCircle: ForwardRefExoticComponent<MinusCircleProps & RefAttributes<SVGSVGElement>>;

export default MinusCircle;
export { MinusCircle };
