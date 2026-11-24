import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CalculatorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Calculator: ForwardRefExoticComponent<CalculatorProps & RefAttributes<Svg>>;

export default Calculator;
export { Calculator };
