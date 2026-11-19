import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileBanCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileBanCut: ForwardRefExoticComponent<FileBanCutProps & RefAttributes<Svg>>;

export default FileBanCut;
export { FileBanCut };
