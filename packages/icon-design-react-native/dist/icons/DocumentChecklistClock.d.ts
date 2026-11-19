import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentChecklistClockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentChecklistClock: ForwardRefExoticComponent<DocumentChecklistClockProps & RefAttributes<Svg>>;

export default DocumentChecklistClock;
export { DocumentChecklistClock };
