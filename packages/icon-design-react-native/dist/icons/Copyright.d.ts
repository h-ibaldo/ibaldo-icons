import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CopyrightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Copyright: ForwardRefExoticComponent<CopyrightProps & RefAttributes<Svg>>;

export default Copyright;
export { Copyright };
