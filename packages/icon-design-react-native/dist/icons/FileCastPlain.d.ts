import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCastPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCastPlain: ForwardRefExoticComponent<FileCastPlainProps & RefAttributes<Svg>>;

export default FileCastPlain;
export { FileCastPlain };
