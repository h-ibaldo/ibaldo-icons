import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DatabaseXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DatabaseX: ForwardRefExoticComponent<DatabaseXProps & RefAttributes<Svg>>;

export default DatabaseX;
export { DatabaseX };
