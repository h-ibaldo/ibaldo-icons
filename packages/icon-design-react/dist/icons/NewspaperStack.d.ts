import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperStack: ForwardRefExoticComponent<NewspaperStackProps & RefAttributes<SVGSVGElement>>;

export default NewspaperStack;
export { NewspaperStack };
