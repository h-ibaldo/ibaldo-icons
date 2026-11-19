import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderOpenFrontProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderOpenFront: ForwardRefExoticComponent<FolderOpenFrontProps & RefAttributes<Svg>>;

export default FolderOpenFront;
export { FolderOpenFront };
