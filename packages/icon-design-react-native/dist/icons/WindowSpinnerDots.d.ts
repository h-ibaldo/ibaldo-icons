import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSpinnerDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDots: ForwardRefExoticComponent<WindowSpinnerDotsProps & RefAttributes<Svg>>;

export default WindowSpinnerDots;
export { WindowSpinnerDots };
