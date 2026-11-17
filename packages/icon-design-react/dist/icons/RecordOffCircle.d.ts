import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RecordOffCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RecordOffCircle: ForwardRefExoticComponent<RecordOffCircleProps & RefAttributes<SVGSVGElement>>;

export default RecordOffCircle;
export { RecordOffCircle };
