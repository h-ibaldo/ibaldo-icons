import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveCheckCircle: ForwardRefExoticComponent<SaveCheckCircleProps & RefAttributes<Svg>>;

export default SaveCheckCircle;
export { SaveCheckCircle };
