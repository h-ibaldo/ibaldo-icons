import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveArrowRight: ForwardRefExoticComponent<SaveArrowRightProps & RefAttributes<Svg>>;

export default SaveArrowRight;
export { SaveArrowRight };
