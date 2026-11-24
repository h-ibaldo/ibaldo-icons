import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsCircle: ForwardRefExoticComponent<BinocularsCircleProps & RefAttributes<Svg>>;

export default BinocularsCircle;
export { BinocularsCircle };
