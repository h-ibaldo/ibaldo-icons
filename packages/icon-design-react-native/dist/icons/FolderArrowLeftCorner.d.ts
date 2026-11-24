import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderArrowLeftCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderArrowLeftCorner: ForwardRefExoticComponent<FolderArrowLeftCornerProps & RefAttributes<Svg>>;

export default FolderArrowLeftCorner;
export { FolderArrowLeftCorner };
