import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VariableProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Variable: ForwardRefExoticComponent<VariableProps & RefAttributes<Svg>>;

export default Variable;
export { Variable };
