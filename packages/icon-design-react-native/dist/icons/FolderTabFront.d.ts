import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderTabFrontProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderTabFront: ForwardRefExoticComponent<FolderTabFrontProps & RefAttributes<Svg>>;

export default FolderTabFront;
export { FolderTabFront };
