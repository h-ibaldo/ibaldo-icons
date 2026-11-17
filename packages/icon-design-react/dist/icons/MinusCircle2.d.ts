import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusCircle2: ForwardRefExoticComponent<MinusCircle2Props & RefAttributes<SVGSVGElement>>;

export default MinusCircle2;
export { MinusCircle2 };
