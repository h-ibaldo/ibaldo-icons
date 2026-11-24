import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsOperaProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsOpera: ForwardRefExoticComponent<BinocularsOperaProps & RefAttributes<Svg>>;

export default BinocularsOpera;
export { BinocularsOpera };
