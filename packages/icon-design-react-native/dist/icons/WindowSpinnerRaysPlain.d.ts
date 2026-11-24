import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSpinnerRaysPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerRaysPlain: ForwardRefExoticComponent<WindowSpinnerRaysPlainProps & RefAttributes<Svg>>;

export default WindowSpinnerRaysPlain;
export { WindowSpinnerRaysPlain };
