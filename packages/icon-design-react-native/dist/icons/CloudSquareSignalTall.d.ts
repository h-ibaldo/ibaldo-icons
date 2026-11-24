import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSquareSignalTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSquareSignalTall: ForwardRefExoticComponent<CloudSquareSignalTallProps & RefAttributes<Svg>>;

export default CloudSquareSignalTall;
export { CloudSquareSignalTall };
