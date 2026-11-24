import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderArrowRight: ForwardRefExoticComponent<FolderArrowRightProps & RefAttributes<Svg>>;

export default FolderArrowRight;
export { FolderArrowRight };
