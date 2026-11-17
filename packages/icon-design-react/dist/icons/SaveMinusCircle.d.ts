import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveMinusCircle: ForwardRefExoticComponent<SaveMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default SaveMinusCircle;
export { SaveMinusCircle };
