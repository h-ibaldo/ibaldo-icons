import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SavePlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SavePlusCircle: ForwardRefExoticComponent<SavePlusCircleProps & RefAttributes<Svg>>;

export default SavePlusCircle;
export { SavePlusCircle };
