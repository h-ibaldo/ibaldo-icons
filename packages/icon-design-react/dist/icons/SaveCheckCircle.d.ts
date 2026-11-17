import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveCheckCircle: ForwardRefExoticComponent<SaveCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default SaveCheckCircle;
export { SaveCheckCircle };
