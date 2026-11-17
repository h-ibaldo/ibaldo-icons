import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsAngledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsAngled: ForwardRefExoticComponent<BinocularsAngledProps & RefAttributes<SVGSVGElement>>;

export default BinocularsAngled;
export { BinocularsAngled };
