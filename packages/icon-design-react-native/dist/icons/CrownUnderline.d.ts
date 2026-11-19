import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrownUnderlineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrownUnderline: ForwardRefExoticComponent<CrownUnderlineProps & RefAttributes<Svg>>;

export default CrownUnderline;
export { CrownUnderline };
