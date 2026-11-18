import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsPlusMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsPlusMinus: ForwardRefExoticComponent<OptionsPlusMinusProps & RefAttributes<SVGSVGElement>>;

export default OptionsPlusMinus;
export { OptionsPlusMinus };
