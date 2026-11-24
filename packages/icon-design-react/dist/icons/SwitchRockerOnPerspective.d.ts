import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchRockerOnPerspectiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchRockerOnPerspective: ForwardRefExoticComponent<SwitchRockerOnPerspectiveProps & RefAttributes<SVGSVGElement>>;

export default SwitchRockerOnPerspective;
export { SwitchRockerOnPerspective };
