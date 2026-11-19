import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderOpen2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderOpen2: ForwardRefExoticComponent<FolderOpen2Props & RefAttributes<Svg>>;

export default FolderOpen2;
export { FolderOpen2 };
