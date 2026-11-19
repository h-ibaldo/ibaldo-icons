import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSlidersTwoPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSlidersTwoPlain: ForwardRefExoticComponent<WindowSlidersTwoPlainProps & RefAttributes<Svg>>;

export default WindowSlidersTwoPlain;
export { WindowSlidersTwoPlain };
