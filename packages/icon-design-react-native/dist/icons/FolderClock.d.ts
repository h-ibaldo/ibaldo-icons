import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderClock: ForwardRefExoticComponent<FolderClockProps & RefAttributes<Svg>>;

export default FolderClock;
export { FolderClock };
