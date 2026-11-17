import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveXCircle: ForwardRefExoticComponent<SaveXCircleProps & RefAttributes<SVGSVGElement>>;

export default SaveXCircle;
export { SaveXCircle };
