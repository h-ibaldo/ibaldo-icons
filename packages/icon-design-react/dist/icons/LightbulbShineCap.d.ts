import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbShineCapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbShineCap: ForwardRefExoticComponent<LightbulbShineCapProps & RefAttributes<SVGSVGElement>>;

export default LightbulbShineCap;
export { LightbulbShineCap };
