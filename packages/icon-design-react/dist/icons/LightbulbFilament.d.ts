import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LightbulbFilamentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LightbulbFilament: ForwardRefExoticComponent<LightbulbFilamentProps & RefAttributes<SVGSVGElement>>;

export default LightbulbFilament;
export { LightbulbFilament };
