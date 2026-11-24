import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderClockCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderClockCorner: ForwardRefExoticComponent<FolderClockCornerProps & RefAttributes<Svg>>;

export default FolderClockCorner;
export { FolderClockCorner };
