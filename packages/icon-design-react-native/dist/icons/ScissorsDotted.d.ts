import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScissorsDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScissorsDotted: ForwardRefExoticComponent<ScissorsDottedProps & RefAttributes<Svg>>;

export default ScissorsDotted;
export { ScissorsDotted };
