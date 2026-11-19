import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RecordOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RecordOff: ForwardRefExoticComponent<RecordOffProps & RefAttributes<Svg>>;

export default RecordOff;
export { RecordOff };
