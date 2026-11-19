import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderLabelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderLabel: ForwardRefExoticComponent<FolderLabelProps & RefAttributes<Svg>>;

export default FolderLabel;
export { FolderLabel };
