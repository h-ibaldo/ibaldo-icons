import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayLinesTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayLinesTall: ForwardRefExoticComponent<TrayLinesTallProps & RefAttributes<Svg>>;

export default TrayLinesTall;
export { TrayLinesTall };
