import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsCircle: ForwardRefExoticComponent<BinocularsCircleProps & RefAttributes<SVGSVGElement>>;

export default BinocularsCircle;
export { BinocularsCircle };
