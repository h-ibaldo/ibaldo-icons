import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseDenseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseDense: ForwardRefExoticComponent<DatabaseDenseProps & RefAttributes<Svg>>;

export default DatabaseDense;
export { DatabaseDense };
