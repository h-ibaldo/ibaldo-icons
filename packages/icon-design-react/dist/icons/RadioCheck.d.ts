import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RadioCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RadioCheck: ForwardRefExoticComponent<RadioCheckProps & RefAttributes<SVGSVGElement>>;

export default RadioCheck;
export { RadioCheck };
