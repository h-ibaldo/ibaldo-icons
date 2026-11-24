import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SubmitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Submit: ForwardRefExoticComponent<SubmitProps & RefAttributes<Svg>>;

export default Submit;
export { Submit };
