import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSpinnerDotsPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDotsPlain: ForwardRefExoticComponent<WindowSpinnerDotsPlainProps & RefAttributes<Svg>>;

export default WindowSpinnerDotsPlain;
export { WindowSpinnerDotsPlain };
