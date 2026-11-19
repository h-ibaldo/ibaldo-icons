import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSpinnerDotsSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDotsSmall: ForwardRefExoticComponent<WindowSpinnerDotsSmallProps & RefAttributes<Svg>>;

export default WindowSpinnerDotsSmall;
export { WindowSpinnerDotsSmall };
