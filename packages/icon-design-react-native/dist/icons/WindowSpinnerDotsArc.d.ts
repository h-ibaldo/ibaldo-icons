import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSpinnerDotsArcProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerDotsArc: ForwardRefExoticComponent<WindowSpinnerDotsArcProps & RefAttributes<Svg>>;

export default WindowSpinnerDotsArc;
export { WindowSpinnerDotsArc };
