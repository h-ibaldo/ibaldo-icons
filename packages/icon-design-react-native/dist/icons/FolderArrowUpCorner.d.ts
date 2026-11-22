import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderArrowUpCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderArrowUpCorner: ForwardRefExoticComponent<FolderArrowUpCornerProps & RefAttributes<Svg>>;

export default FolderArrowUpCorner;
export { FolderArrowUpCorner };
