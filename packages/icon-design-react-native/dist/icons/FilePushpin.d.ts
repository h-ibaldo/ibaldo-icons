import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePushpinProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePushpin: ForwardRefExoticComponent<FilePushpinProps & RefAttributes<Svg>>;

export default FilePushpin;
export { FilePushpin };
