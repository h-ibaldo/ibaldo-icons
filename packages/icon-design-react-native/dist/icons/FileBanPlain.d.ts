import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileBanPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileBanPlain: ForwardRefExoticComponent<FileBanPlainProps & RefAttributes<Svg>>;

export default FileBanPlain;
export { FileBanPlain };
