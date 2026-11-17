import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveStack: ForwardRefExoticComponent<SaveStackProps & RefAttributes<SVGSVGElement>>;

export default SaveStack;
export { SaveStack };
