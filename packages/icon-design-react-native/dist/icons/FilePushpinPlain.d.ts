import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePushpinPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePushpinPlain: ForwardRefExoticComponent<FilePushpinPlainProps & RefAttributes<Svg>>;

export default FilePushpinPlain;
export { FilePushpinPlain };
