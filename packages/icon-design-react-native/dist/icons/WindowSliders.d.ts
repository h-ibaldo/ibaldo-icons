import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSlidersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSliders: ForwardRefExoticComponent<WindowSlidersProps & RefAttributes<Svg>>;

export default WindowSliders;
export { WindowSliders };
