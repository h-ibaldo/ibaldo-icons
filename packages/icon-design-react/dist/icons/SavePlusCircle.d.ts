import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SavePlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SavePlusCircle: ForwardRefExoticComponent<SavePlusCircleProps & RefAttributes<SVGSVGElement>>;

export default SavePlusCircle;
export { SavePlusCircle };
