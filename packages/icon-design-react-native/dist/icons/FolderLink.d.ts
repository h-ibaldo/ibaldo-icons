import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderLinkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderLink: ForwardRefExoticComponent<FolderLinkProps & RefAttributes<Svg>>;

export default FolderLink;
export { FolderLink };
