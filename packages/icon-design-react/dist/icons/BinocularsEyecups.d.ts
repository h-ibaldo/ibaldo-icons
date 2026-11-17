import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsEyecupsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsEyecups: ForwardRefExoticComponent<BinocularsEyecupsProps & RefAttributes<SVGSVGElement>>;

export default BinocularsEyecups;
export { BinocularsEyecups };
