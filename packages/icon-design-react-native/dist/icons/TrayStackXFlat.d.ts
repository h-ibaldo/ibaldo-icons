import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayStackXFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayStackXFlat: ForwardRefExoticComponent<TrayStackXFlatProps & RefAttributes<Svg>>;

export default TrayStackXFlat;
export { TrayStackXFlat };
