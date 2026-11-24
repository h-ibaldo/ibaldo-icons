import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveXCircle: ForwardRefExoticComponent<SaveXCircleProps & RefAttributes<Svg>>;

export default SaveXCircle;
export { SaveXCircle };
