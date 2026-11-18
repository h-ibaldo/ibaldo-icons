import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RecordOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RecordOff: ForwardRefExoticComponent<RecordOffProps & RefAttributes<SVGSVGElement>>;

export default RecordOff;
export { RecordOff };
