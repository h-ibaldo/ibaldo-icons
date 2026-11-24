import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderArrowLeft: ForwardRefExoticComponent<FolderArrowLeftProps & RefAttributes<Svg>>;

export default FolderArrowLeft;
export { FolderArrowLeft };
