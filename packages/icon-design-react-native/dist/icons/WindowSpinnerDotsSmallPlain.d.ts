import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSpinnerDotsSmallPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDotsSmallPlain: ForwardRefExoticComponent<WindowSpinnerDotsSmallPlainProps & RefAttributes<Svg>>;

export default WindowSpinnerDotsSmallPlain;
export { WindowSpinnerDotsSmallPlain };
