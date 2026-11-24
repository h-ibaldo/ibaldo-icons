import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCastProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCast: ForwardRefExoticComponent<FileCastProps & RefAttributes<Svg>>;

export default FileCast;
export { FileCast };
