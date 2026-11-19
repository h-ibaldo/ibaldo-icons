import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerFieldProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerField: ForwardRefExoticComponent<PointerFieldProps & RefAttributes<Svg>>;

export default PointerField;
export { PointerField };
