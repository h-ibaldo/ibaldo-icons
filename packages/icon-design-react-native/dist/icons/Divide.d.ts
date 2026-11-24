import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DivideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Divide: ForwardRefExoticComponent<DivideProps & RefAttributes<Svg>>;

export default Divide;
export { Divide };
