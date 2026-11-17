import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusSquare2: ForwardRefExoticComponent<MinusSquare2Props & RefAttributes<SVGSVGElement>>;

export default MinusSquare2;
export { MinusSquare2 };
