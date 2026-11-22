import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxFrontXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxFrontX: ForwardRefExoticComponent<BoxFrontXProps & RefAttributes<Svg>>;

export default BoxFrontX;
export { BoxFrontX };
