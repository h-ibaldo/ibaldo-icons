import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusSmall: ForwardRefExoticComponent<MinusSmallProps & RefAttributes<SVGSVGElement>>;

export default MinusSmall;
export { MinusSmall };
