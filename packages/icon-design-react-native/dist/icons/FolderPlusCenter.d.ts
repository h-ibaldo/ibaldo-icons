import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderPlusCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderPlusCenter: ForwardRefExoticComponent<FolderPlusCenterProps & RefAttributes<Svg>>;

export default FolderPlusCenter;
export { FolderPlusCenter };
