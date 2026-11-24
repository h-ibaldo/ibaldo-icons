import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderPlus: ForwardRefExoticComponent<FolderPlusProps & RefAttributes<Svg>>;

export default FolderPlus;
export { FolderPlus };
