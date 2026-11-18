import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RecordRingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RecordRing: ForwardRefExoticComponent<RecordRingProps & RefAttributes<SVGSVGElement>>;

export default RecordRing;
export { RecordRing };
