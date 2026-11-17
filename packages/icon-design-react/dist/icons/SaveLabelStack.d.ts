import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveLabelStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveLabelStack: ForwardRefExoticComponent<SaveLabelStackProps & RefAttributes<SVGSVGElement>>;

export default SaveLabelStack;
export { SaveLabelStack };
