import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AntennaBracedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AntennaBraced: ForwardRefExoticComponent<AntennaBracedProps & RefAttributes<Svg>>;

export default AntennaBraced;
export { AntennaBraced };
