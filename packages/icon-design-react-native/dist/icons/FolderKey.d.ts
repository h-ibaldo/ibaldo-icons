import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderKeyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderKey: ForwardRefExoticComponent<FolderKeyProps & RefAttributes<Svg>>;

export default FolderKey;
export { FolderKey };
