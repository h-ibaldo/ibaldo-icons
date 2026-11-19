import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveDotsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveDotsCircle: ForwardRefExoticComponent<SaveDotsCircleProps & RefAttributes<Svg>>;

export default SaveDotsCircle;
export { SaveDotsCircle };
