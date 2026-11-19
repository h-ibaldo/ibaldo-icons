import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PresentationProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Presentation: ForwardRefExoticComponent<PresentationProps & RefAttributes<Svg>>;

export default Presentation;
export { Presentation };
