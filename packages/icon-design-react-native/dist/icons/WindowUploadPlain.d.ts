import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowUploadPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowUploadPlain: ForwardRefExoticComponent<WindowUploadPlainProps & RefAttributes<Svg>>;

export default WindowUploadPlain;
export { WindowUploadPlain };
