import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlusPlain: ForwardRefExoticComponent<FilePlusPlainProps & RefAttributes<Svg>>;

export default FilePlusPlain;
export { FilePlusPlain };
