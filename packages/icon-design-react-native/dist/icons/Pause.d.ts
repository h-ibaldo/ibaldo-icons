import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PauseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Pause: ForwardRefExoticComponent<PauseProps & RefAttributes<Svg>>;

export default Pause;
export { Pause };
