import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderMinusCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderMinusCenter: ForwardRefExoticComponent<FolderMinusCenterProps & RefAttributes<Svg>>;

export default FolderMinusCenter;
export { FolderMinusCenter };
