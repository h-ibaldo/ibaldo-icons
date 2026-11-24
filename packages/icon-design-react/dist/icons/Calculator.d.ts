import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CalculatorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Calculator: ForwardRefExoticComponent<CalculatorProps & RefAttributes<SVGSVGElement>>;

export default Calculator;
export { Calculator };
