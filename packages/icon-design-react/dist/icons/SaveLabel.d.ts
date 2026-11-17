import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveLabelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveLabel: ForwardRefExoticComponent<SaveLabelProps & RefAttributes<SVGSVGElement>>;

export default SaveLabel;
export { SaveLabel };
