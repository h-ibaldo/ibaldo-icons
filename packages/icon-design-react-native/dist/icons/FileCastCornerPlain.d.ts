import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCastCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCastCornerPlain: ForwardRefExoticComponent<FileCastCornerPlainProps & RefAttributes<Svg>>;

export default FileCastCornerPlain;
export { FileCastCornerPlain };
